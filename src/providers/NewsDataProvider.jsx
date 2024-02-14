import { useState } from "react";
import { NewsContext } from "../contexts";
import useNewsData from "../hooks/useNewsData";

const NewsDataProvider = ({ children }) => {
  const [category, setCategory] = useState("general"); 
  const { newsData, loading, error } = useNewsData(category);
  return (
    <NewsContext.Provider
      value={{ newsData, loading, error, category, setCategory }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export default NewsDataProvider;
