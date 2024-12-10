import axios from "axios";

export const COMMENT_SERVICE = "http://localhost:8001"


export const CREATE = "/comment_service/createcomment"
export const GET = "/comment_service/getcommentbymovieid"

const instanceComment = axios.create({
    baseURL: COMMENT_SERVICE
});

instanceComment.interceptors.response.use(
  (response) => {
    const data = response.data;
    return data; // Return the extracted data directly
  },
  (error) => Promise.reject(error)
);
export default instanceComment