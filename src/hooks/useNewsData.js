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
      //News that have content and a image will be at first
      let newsAtFirst=sortByDate.filter((item)=>item.content && item.urlToImage)
      //News that don't have content or a image will be at last
      let newsAtLast=sortByDate.filter((item)=>!(item.content || item.urlToImage))
      setNewsData([...newsAtFirst,...newsAtLast]);
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
  return {
    newsData,
    loading,
    error,
  };
};
export default useNewsData;
