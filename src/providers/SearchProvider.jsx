import { useContext } from "react";
import { NewsContext, SearchContext } from "../contexts"; 
import { useSearchData } from "../hooks";

const SearchProvider = ({ children }) => {
  const {setNewsData}=useContext(NewsContext)
  const { fetchSearchedData, loading, error } = useSearchData(setNewsData)

  return (
    <SearchContext.Provider value={{ fetchSearchedData, loading, error }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
