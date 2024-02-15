import { useState } from "react";
import { NewsContext } from "../contexts";
import { useNewsData } from "../hooks";

const NewsDataProvider = ({ children }) => {
  const [category, setCategory] = useState("general"); 
  const { newsData,setNewsData, loading, error } = useNewsData(category);
  return (
    <NewsContext.Provider
      value={{ newsData,setNewsData, loading, error, category, setCategory }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export default NewsDataProvider;
