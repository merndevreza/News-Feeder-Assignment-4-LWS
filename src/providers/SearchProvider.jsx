import { SearchContext } from "../contexts";

const SearchProvider = ({children}) => {
   
   return (
      <SearchContext.Provider value="">
         {children}
      </SearchContext.Provider>
   );
};

export default SearchProvider;