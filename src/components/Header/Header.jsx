import Categories from "./Categories";
import DarkLightToggler from "./DarkLightToggler";
import CurrentDate from "./CurrentDate";
import Logo from "./Logo";
import Search from "./Search";

const Header = () => { 
  return (
    <header className="border-b border-gray-400 dark:border-gray-800 pt-6 md:pt-8">
      <div className="container mx-auto grid grid-cols-3 items-center gap-6">
        <CurrentDate />
        <Logo />
        <div className="flex justify-end gap-3">
        <Search />
        <DarkLightToggler/>
        </div>
      </div>
      <Categories />
    </header>
  );
};

export default Header;
