import { useContext } from "react";
import logo from "../../assets/logo.png";
import logoLight from "../../assets/logo_light.png";
import { ThemeContext } from "../../contexts";
const Logo = () => {
  const {isDark}=useContext(ThemeContext)
  return (
    <div>
      <a className="cursor-pointer">
        <img
          className="max-w-[100px] mx-auto md:max-w-[165px]"
          src={isDark?logoLight:logo}
          alt="Lws"
        />
      </a>
    </div>
  );
};

export default Logo;
