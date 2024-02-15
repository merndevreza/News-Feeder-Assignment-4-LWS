import { useState } from "react";
import { ThemeContext } from "../contexts";

const ThemeProvider = ({children}) => {
   const[isDark,setIsDark]=useState(true);
   return (
      <ThemeContext.Provider value={{isDark,setIsDark}}>
         {children}
      </ThemeContext.Provider>
   );
};

export default ThemeProvider;