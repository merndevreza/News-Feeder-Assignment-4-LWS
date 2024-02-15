import { useCallback, useEffect, useState } from "react";
import getFilteredData from "../utils/getFilteredData";

const useNewsData = (request) => { 
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });
  const [error, setError] = useState(null);

  const fetchNewsData = useCallback(async (type,keyword) => {
    try {
      setLoading((prevLoading) => ({
        ...prevLoading,
        state: true,
        message: "Calling Fetch API...",
      }));
      if (type==="categoryFilter") {
        
      const response = await fetch(
        `http://localhost:8000/v2/top-headlines?category=${keyword}`
      );
      if (!response.ok) {
        const errorMessage = `Failed to Fetch Data: ${response.status}`;
        throw new Error(errorMessage);
      }
      const data = await response.json();
      setNewsData([...getFilteredData(data.articles)]);
      } else if(type==="search"){
        const response = await fetch(
          `http://localhost:8000/v2/search?q=${keyword}`
        );
        if (!response.ok) {
          throw new Error(`Searching Data Failed:${response.status}`);
        }
        const data = await response.json(); 
        setNewsData([...getFilteredData(data.result)]);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading((prevLoading) => ({
        ...prevLoading,
        state: false,
        message: "",
      }));
    }
  },[]);

  useEffect(() => {
    setLoading({
      state: true,
      message: "Fetching data...",
    }); 
    fetchNewsData(request.type,request.keyword)
  }, [request.type,request.keyword,fetchNewsData]); 

  
  return {
    newsData,
    loading,
    error,
  };
};
export default useNewsData;
