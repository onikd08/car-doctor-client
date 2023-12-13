import { useEffect, useState } from "react";

const useGetData = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      const response = await fetch(url, { credentials: "include" });
      const result = await response.json();
      setData(result);
    };
    loadData();
  }, [url]);
  return [data, setData];
};

export default useGetData;
