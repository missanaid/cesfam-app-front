import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseURL = 'https://96a887d61989.ngrok.io/api';

const cesfamApi = axios.create({baseURL});

cesfamApi.interceptors.request.use(async config => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    config.headers['x-token'] = token;
  }
  return config;
});

export default cesfamApi;
