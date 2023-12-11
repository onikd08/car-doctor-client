import { useEffect, useState } from "react";

const useGetData = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
    };
    loadData();
  }, [url]);
  return data;
};

export default useGetData;
