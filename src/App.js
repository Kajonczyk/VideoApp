import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./Utils/theme";
import { GlobalStyle } from "./Utils/GlobalStyle";
import { Home } from "./Pages/Home/Home";
import { Favourites } from "./Pages/Favourites/Favourites";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Home />
        {/* <Favourites /> */}
      </>
    </ThemeProvider>
  );
}

export default App;
