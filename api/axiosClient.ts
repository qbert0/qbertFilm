// import axios from "axios";
import instance from "./axios";
import { COMMENT_SERVICE, GET } from "./service/Comment";

// const instanceNew = axios.create({
//   baseURL: ""
// });

// instanceNew.interceptors.response.use(
//   (response) => {
//     const data = response.data;
//     return data; // Return the extracted data directly
//   },
//   (error) => Promise.reject(error)
// );

export const testAPiWeb = async (path : string) => {
  try {
    const comment = await instance.get(`${COMMENT_SERVICE}${GET}/${path}`)
        return comment
  } catch {
    return "null"
  }
}

// export default instanceNew;