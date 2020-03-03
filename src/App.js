import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./Utils/theme";
import { GlobalStyle } from "./Utils/GlobalStyle";
import { Home } from "./Pages/Home/Home";
import Favourites from "./Pages/Favourites/Favourites";
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from "./moviesContext";
import history from "./Utils/history";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Provider>
          <Router history={history}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/favourites" exact component={Favourites} />
            </Switch>
          </Router>
        </Provider>
      </>
    </ThemeProvider>
  );
}

export default App;
