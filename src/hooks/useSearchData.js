import { useContext, useState } from "react";
import getFilteredData from "../utils/getFilteredData"; 
import { NewsContext } from "../contexts";

const useSearchData = () => { 
  const{setNewsData}=useContext(NewsContext)
  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });
  const [error, setError] = useState(null); 
  const fetchSearchedData = async (searchTerm) => {
    try {
      setLoading({ ...loading, state: true, message: "Fetching..." });
      const response = await fetch(
        `http://localhost:8000/v2/search?q=${searchTerm}`
      );
      if (!response.ok) {
        throw new Error(`Searching Data Failed:${response.status}`);
      }
      const data = await response.json();
      // console.log("Use search Data", data);
      console.log(setNewsData);
      setNewsData([...getFilteredData(data.result)]);

    } catch (error) {
      setError(error.message);
    } finally {
      setLoading({ ...loading, state: false, message: "" });
    }
  };
  
  return { 
    loading,
    error,
    fetchSearchedData
  };
};
export default useSearchData;
