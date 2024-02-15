import { useContext, useEffect, useState } from "react";
import getFilteredData from "../utils/getFilteredData";
import { SearchContext } from "../contexts";

const useNewsData = (category) => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });
  const [error, setError] = useState(null);

  const fetchNewsData = async (category) => {
    try {
      setLoading({
        ...loading,
        state: true,
        message: "Calling Fetch API...",
      });
      const response = await fetch(
        `http://localhost:8000/v2/top-headlines?category=${category}`
      );
      if (!response.ok) {
        const errorMessage = `Failed to Fetch Data: ${response.status}`;
        throw new Error(errorMessage);
      }
      const data = await response.json();
      setNewsData(getFilteredData(data.articles));
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading({
        ...loading,
        state: false,
        message: "",
      });
    }
  };

  useEffect(() => {
    setLoading({
      state: true,
      message: "Fetching data...",
    });
    fetchNewsData(category);
  }, [category]);
  //Set searched Data in the newsData
  const { searchedData } = useContext(SearchContext); 
  return {
    newsData,
    setNewsData,
    loading,
    error,
  };
};
export default useNewsData;
