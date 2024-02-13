import { useEffect, useState } from "react";

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
      
      //shortByDate(latest first)
      let sortByDate = [...data.articles];
      sortByDate.sort(
        (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
      ); 
      setNewsData([...sortByDate]);
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
    fetchNewsData("general");
  }, []);
  return {
    newsData,
    loading,
    error,
  };
};
export default useNewsData;
