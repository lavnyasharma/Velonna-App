import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const axiosInstance = axios.create({
  baseURL: 'https://api.velonna.co', // Replace with your base API URL
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

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


// Export the instance and the functions
export { axiosInstance, storeTokens, getUserInfo };
