import axios from "axios";
import useAuth from "./useAuth";
import { useEffect } from "react";

const axiosSecure = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
});
const useAxiosSecure = () => {
  const { logOutUser } = useAuth();
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        console.log(error.response);
        logOutUser()
          .then((res) => {
            console.log(res);
          })
          .catch((err) => console.log(err));
      }
    );
  }, []);

  return axiosSecure;
};

export default useAxiosSecure;
