import axios from 'axios';
// config
import { API_GENERAL, HOST_API_KEY } from '../config-global';

// ----------------------------------------------------------------------

const axiosInstance = axios.create({ baseURL: HOST_API_KEY });

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export const axiosGeneral = axios.create({ baseURL: API_GENERAL });

axiosGeneral.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;
