import React from "react";
import { Header } from "../../Components/Home/Header/Header";
import { Input } from "../../Components/Home/Input/Input";
import { MovieFrames } from "../../Components/Home/MovieFrames/MovieFrames";
import { Provider } from "../../moviesContext";
export const Home = () => {
  return (
    <div>
      <Header />
      <Provider>
        <Input />
      </Provider>

      <MovieFrames />
    </div>
  );
};
