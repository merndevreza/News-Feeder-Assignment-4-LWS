import { useContext } from "react";
import { NewsContext } from "../../contexts";

const Categories = () => {
  const { setCategory } = useContext(NewsContext);
  const handleCategory = (category) => {
    setCategory(category);
  };
  return (
    <nav className=" mt-6 bg-slate-100">
      <ul className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold lg:text-base py-3 ">
        <li>
          <a onClick={() => handleCategory("general")} href="#">
            General
          </a>
        </li>
        <li>
          <a onClick={() => handleCategory("business")} href="#">
            Business
          </a>
        </li>
        <li>
          <a onClick={() => handleCategory("entertainment")} href="#">
            Entertainment
          </a>
        </li>
        <li>
          <a onClick={() => handleCategory("health")} href="#">
            Health
          </a>
        </li>
        <li>
          <a onClick={() => handleCategory("science")} href="#">
            Science
          </a>
        </li>
        <li>
          <a onClick={() => handleCategory("sports")} href="#">
            Sports
          </a>
        </li>
        <li>
          <a onClick={() => handleCategory("technology")} href="#">
            Technology
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Categories;
