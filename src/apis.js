import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import debounce from 'lodash.debounce';

// Configurations
const BASE_URL = "https://api.velonna.co/";
const TIMEOUT = 90000;
let shouldRefreshToken = false; // Flag to enable/disable token refreshing

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
});

// Helper function to get token from AsyncStorage
const getAccessToken = async () => {
  try {
    const token = await AsyncStorage.getItem('accessToken');
    return token || null;
  } catch (error) {
    console.error('Error fetching access token:', error);
    return null;
  }
};

// Helper function to store tokens in AsyncStorage
const storeTokens = async (accessToken, refreshToken) => {
  try {
    if (accessToken) await AsyncStorage.setItem('accessToken', accessToken);
    if (refreshToken) await AsyncStorage.setItem('refreshToken', refreshToken);
  } catch (error) {
    console.error('Error storing tokens:', error);
  }
};

// Function to refresh the access token
const refreshAccessToken = async () => {
  try {
    const refreshToken = await AsyncStorage.getItem('refreshToken');
    if (!refreshToken) throw new Error('No refresh token available');

    const response = await axios.post(`${BASE_URL}/refresh-token/`, { refresh_token: refreshToken });
    const { access_token: newAccessToken } = response.data || {};

    if (newAccessToken) {
      await storeTokens(newAccessToken, refreshToken);
      return newAccessToken;
    } else {
      throw new Error('Failed to refresh access token');
    }
  } catch (error) {
    console.error('Error refreshing token:', error);
    await AsyncStorage.multiRemove(['accessToken', 'refreshToken']);
    throw error;
  }
};

// Axios request interceptor for adding Authorization and Content-Type headers
axiosInstance.interceptors.request.use(
  async (config) => {
    const accessToken = await getAccessToken();
    if (accessToken) config.headers['Authorization'] = `Bearer ${accessToken}`;
    config.headers['Content-Type'] = 'application/json'; // Ensure Content-Type is application/json
    return config;
  },
  (error) => Promise.reject(error)
);

// Axios response interceptor to handle 401 errors and token refresh
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { config, response } = error;

    if (response?.status === 401 && shouldRefreshToken) {
      shouldRefreshToken = false;
      try {
        const newAccessToken = await refreshAccessToken();
        config.headers['Authorization'] = `Bearer ${newAccessToken}`;
        return axiosInstance(config);
      } catch (refreshError) {
        console.error('Token refresh failed:', refreshError);
        throw refreshError;
      } finally {
        shouldRefreshToken = true;
      }
    }

    return Promise.reject(error);
  }
);

// API Functions
export const getUserInfo = async (username) => {
  try {
    const response = await axiosInstance.get(`/user/${username}/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user info:', error);
    throw error;
  }
};

export const fetchProductList = async (page = 1, limit = 21) => {
  try {
    const response = await axiosInstance.get(`/ecom/product/list/`, {
      params: { page, limit },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching product list:', error);
    throw error;
  }
};

export const getCollection = async () => {
  try {
    const response = await axiosInstance.get('/live-collections/');
    return response;
  } catch (error) {
    console.error('Error fetching cart:', error);
    throw error;
  }
};
export const addToCart = async (productId, quantity) => {
  try {
    const data = { product: productId, quantity: String(quantity) };
    const response = await axiosInstance.post('/cart/', data);
    return response.data;
  } catch (error) {
    console.error('Error adding product to cart:', error);
    throw error;
  }
};
export const getDetailsByHSn = async (hsn) => {
  
  try {
    const response = await axiosInstance.get(`/product/${hsn}/details`); 
    return response.data;
  } catch (error) {
    console.error('Error fetching details by HSN:', error);
    throw error;
  }
};



export const getCart = async () => {
  try {
    const response = await axiosInstance.get('/cart/details/');
    return response.data;
  } catch (error) {
    console.error('Error fetching cart:', error);
    throw error;
  }
};
export const deleteFromCart = async (cartItemId) => {
  try {
    const response = await axiosInstance.delete(`cart-item/${cartItemId}/`);
    console.log(response)
    console.log(response.status)
    if (!response || response.status === 204) {
       console.log(response)
       console.log(response.status)
      console.log('Item successfully deleted');
      return {}; // Return an empty object or handle it in the caller
    }
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('Server responded with error:', error.response.data);
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Error setting up request:', error.message);
    }
    throw error;
  }
};



// Utility function to toggle token refresh behavior
export const toggleTokenRefresh = (status) => {
  shouldRefreshToken = status;
};

export { axiosInstance, storeTokens };
