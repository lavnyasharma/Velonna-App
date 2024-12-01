import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import debounce from 'lodash.debounce';

let shouldRefreshToken = false;  // Set to false to disable token refreshing

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: "https://api.velonna.co/",
  timeout: 10000,  // Adjust timeout as needed
});

// Function to get JWT access token from AsyncStorage
const getAccessToken = async () => {
  try {
    const token = await AsyncStorage.getItem('access_token');
    return token ? token : null;
  } catch (error) {
    console.error('Error fetching access token from AsyncStorage', error);
    return null;
  }
};

// Function to refresh the access token using refresh token
const refreshAccessToken = async () => {
  try {
    const refreshToken = await AsyncStorage.getItem('refreshToken');
    if (!refreshToken) {
      throw new Error('No refresh token found');
    }

    const response = await axios.post(REFRESH_TOKEN_API, { refresh_token: refreshToken });

    if (response && response.data && response.data.access_token) {
      const newAccessToken = response.data.access_token;
      await AsyncStorage.setItem('accessToken', newAccessToken);
      return newAccessToken;
    } else {
      await AsyncStorage.removeItem("accessToken")
      await AsyncStorage.removeItem("refreshToken")
      throw new Error('Failed to refresh access token');
    }
  } catch (error) {
    console.error('Error refreshing access token', error);
    throw error;
  }
};

// Axios Request Interceptor
axiosInstance.interceptors.request.use(
  async (config) => {
    const accessToken = await getAccessToken();

    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Axios Response Interceptor to handle 401 errors and token refresh
axiosInstance.interceptors.response.use(
  response => response,  // Successful responses (status 2xx) will pass through
  async (error) => {
    const { config, response } = error;

    if (response && response.status === 401 && shouldRefreshToken) {
      // Token refresh logic on 401 Unauthorized error
      try {
        // Prevent multiple requests to refresh the token
        shouldRefreshToken = false;

        const newAccessToken = await refreshAccessToken();

        // Update the original request with the new access token
        config.headers['Authorization'] = `Bearer ${newAccessToken}`;

        // Retry the original request with the new token
        return axiosInstance(config);
      } catch (refreshError) {
        // Handle error if token refresh fails
        console.error('Token refresh failed', refreshError);
        return Promise.reject(refreshError);
      } finally {
        shouldRefreshToken = true;  // Reset the flag
      }
    }

    return Promise.reject(error);  // Pass other errors as is
  }
);

// Function to toggle the token refresh behavior on/off
const toggleTokenRefresh = (status) => {
  shouldRefreshToken = status;
};

// Function to store tokens in AsyncStorage
const storeTokens = async (accessToken, refreshToken) => {
  try {
    await AsyncStorage.setItem('accessToken', accessToken);
    await AsyncStorage.setItem('refreshToken', refreshToken);
  } catch (error) {
    console.error('Error storing tokens:', error);
  }
};

// Function to get user information
const getUserInfo = async (username) => {
  try {
    const accessToken = await AsyncStorage.getItem('accessToken');

    const response = await axiosInstance.get(`/user/${username}/`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'X-CSRFToken': 'e05pwgcOgk1SAFpt9KY794DSigMrfVK19O4zIHezlvULyIy4ia9W8nIcSSG7wZdO'
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching user info:', error);
    throw error; // Optionally re-throw the error for further handling
  }
};

const fetchProductList = async (page = 1, limit = 10) => {
  try {
    const accessToken = await AsyncStorage.getItem('accessToken');
    const response = await axiosInstance.get(`/product-lists/`, {
      params: { page, limit },
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'X-CSRFToken': 't59kNMaGLn9lff4ZFakCmGxCTnTcEUX20iEyNzv3iCkDaDwpWAtlHhaXEQY9f1gs',
        'accept': 'application/json'
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching product list:', error);
    throw error;
  }
};

// Function to add product to the cart
const addToCart = async (productId, quantity) => {
  try {
    const accessToken = await AsyncStorage.getItem('accessToken');
    const data = {
      product: productId,
      quantity: quantity.toString(),  // Ensure quantity is a string
    };

    const response = await axiosInstance.post('/cart/', data, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'X-CSRFToken': 't59kNMaGLn9lff4ZFakCmGxCTnTcEUX20iEyNzv3iCkDaDwpWAtlHhaXEQY9f1gs',
      
      },
    });

    return response.data;  // Return the response from the API
  } catch (error) {
    console.error('Error adding product to cart:', error);
    throw error;  // Optionally, re-throw the error to be handled by the caller
  }
};

// Export the instance and the functions
export { axiosInstance, storeTokens, getUserInfo, fetchProductList, addToCart };
