import { useContext, useState } from "react";
import searchIcon from "../../assets/icons/search.svg";
import crossIcon from "../../assets/icons/x.svg";
import { useDebounce } from "../../hooks";
import { SearchContext } from "../../contexts";
const Search = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { fetchSearchedData } = useContext(SearchContext);

  const doSearch = useDebounce((value) => {
    fetchSearchedData(value);
  }, 500);

  const handleSearch = (e) => {
    const value = e.target.value;
    doSearch(value);
  };
  return (
    <div className="">
      <div className="grid grid-flow-col items-center">
        {isOpen && (
          <input
            type="text"
            placeholder="Search here..."
            className="border-2 border-[#00d99164] rounded-full focus:outline-[#00D991] caret-[#00D991]  py-1 px-3 w-full"
            onChange={(e) => handleSearch(e)}
          />
        )}
        <button className="-ml-7" onClick={() => setIsOpen(!isOpen)}>
          <img src={isOpen ? crossIcon : searchIcon} alt="Search Icon" />
        </button>
      </div>
    </div>
  );
};

export default Search;
