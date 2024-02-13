import { useState } from "react";
import searchIcon from "../../assets/icons/search.svg";
const Search = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
      <div className="grid grid-flow-col items-center">
        {isOpen && (
          <input
            type="text"
            placeholder="Search here..."
            className="border-2 border-[#00d99164] rounded-full focus:outline-[#00D991] caret-[#00D991]  py-1 px-3 w-full"
          />
        )}
        <button className="-ml-7" onClick={() => setIsOpen(!isOpen)}>
          <img src={searchIcon} alt="Search Icon" />
        </button>
      </div>
    </div>
  );
};

export default Search;
