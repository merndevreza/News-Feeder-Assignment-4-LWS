import {useState } from "react";
import { NewsContext} from "../contexts";
import { useNewsData } from "../hooks";

const NewsDataProvider = ({ children }) => {
  const [fetchData, setFetchData] = useState({
    type:"categoryFilter",
    keyword:"general"
  });
  const { newsData, loading, error } = useNewsData(fetchData);

  return (
    <NewsContext.Provider
      value={{ newsData, loading, error,fetchData,setFetchData }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export default NewsDataProvider;
