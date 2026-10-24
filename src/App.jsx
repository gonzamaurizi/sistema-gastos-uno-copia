
import {MyRoutes} from "./index";
import React, {createContext, useState} from "react";
import {Light, Dark, AuthContextProvider} from "./index";
import {ThemeProvider} from "styled-components";
export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light" ? Light : Dark;

  return (
    <>
    <ThemeContext.Provider value={{setTheme, theme}}>
      <ThemeProvider theme={themeStyle}>
        <AuthContextProvider>
          <MyRoutes/>
        {/* <ReactQueryDevtools initialIsOpen={true} /> */}
        </AuthContextProvider>

      </ThemeProvider>
    </ThemeContext.Provider>
    </>
  );
}

export default App
