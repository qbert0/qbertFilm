import axios from "axios";

const instanceNew = axios.create({
  baseURL: "https://66bc-14-232-232-166.ngrok-free.app/api/v1"
});

instanceNew.interceptors.response.use(
  (response) => {
    const data = response.data;
    return data; // Return the extracted data directly
  },
  (error) => Promise.reject(error)
);

export default instanceNew;