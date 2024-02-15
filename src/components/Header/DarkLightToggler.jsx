import { useContext } from "react";
import sunIcon from "../../assets/icons/sun.svg";
import moonIcon from "../../assets/icons/moon.svg";
import { ThemeContext } from "../../contexts";
const DarkLightToggler = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);
  return (
    <button onClick={() => setIsDark(!isDark)}>
      <img src={isDark ? sunIcon : moonIcon} alt="Dark Light Toggler Icon" />
    </button>
  );
};

export default DarkLightToggler;
