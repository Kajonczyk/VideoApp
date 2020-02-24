import React from "react";
import { Header } from "../../Shared/Header/Header";
import { Input } from "../../Components/Home/Input/Input";
import { MovieFrames } from "../../Components/Home/MovieFrames/MovieFrames";
import { Provider } from "../../moviesContext";
export const Home = () => {
  return (
    <div>
      <Header text="YouVid" />
      <Provider>
        <>
          <Input />
          <MovieFrames />
        </>
      </Provider>
    </div>
  );
};
