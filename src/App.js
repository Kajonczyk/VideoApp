import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./Utils/theme";
import { GlobalStyle } from "./Utils/GlobalStyle";
import { Home } from "./Pages/Home/Home";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Home />
      </>
    </ThemeProvider>
  );
}

export default App;
