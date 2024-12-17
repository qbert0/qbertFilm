import axios from "axios";

export const API_KEY = '?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US'
export const IMAGE = 'https://image.tmdb.org/t/p/original'


export const WATCHLIST = "/account/21674007/watchlist/movies?language=en-US&page=1&sort_by=created_at.asc"
export const FAVORITE = "/account/21674007/favorite/movies?language=en-US&page=1&sort_by=created_at.asc"
export const BASE_URL = 'https://api.themoviedb.org/3'
export const TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZjAxNDBiMjZhYzk2OTU0OTI2NDU0MzFkMWYzYzc2OSIsIm5iZiI6MTczMzUxOTkyNS4xMDIwMDAyLCJzdWIiOiI2NzUzNmEzNWIxZWFhNWM4OTFkYjBjNjciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.MHVYNEqt4yaBke4yaoP26g6EI0XBxcigep4W2wHHb1g'

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