import axios from "axios";

export const API_KEY = '?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US'
export const IMAGE = 'https://image.tmdb.org/t/p/original'

export const BASE_URL = 'https://api.themoviedb.org/3'


const instance = axios.create({
  baseURL: BASE_URL
});

instance.interceptors.response.use(
  (response) => {
    const data = response.data;
    return data; // Return the extracted data directly
  },
  (error) => Promise.reject(error)
);

export default instance;