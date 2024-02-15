import {useState } from "react";
import { NewsContext} from "../contexts";
import { useNewsQuery } from "../hooks";

const NewsDataProvider = ({ children }) => {
  const [fetchData, setFetchData] = useState({
    type:"categoryFilter",
    keyword:""
  });
  const { newsData, loading, error } = useNewsQuery(fetchData);

  return (
    <NewsContext.Provider
      value={{ newsData, loading, error,fetchData,setFetchData }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export default NewsDataProvider;
