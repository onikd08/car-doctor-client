import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useGetData = (url) => {
  const [data, setData] = useState([]);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get(url).then((res) => setData(res.data));
  }, [url, axiosSecure]);
  return [data, setData];
};

export default useGetData;
