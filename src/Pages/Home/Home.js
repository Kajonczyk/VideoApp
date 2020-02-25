import React from "react";
import { Header } from "../../Shared/Header/Header";
import { Input } from "../../Components/Home/Input/Input";
import { MovieFrames } from "../../Components/Home/MovieFrames/MovieFrames";
import { Navbar } from "../../Components/Navigation/Navbar";
export const Home = () => {
  return (
    <div>
      <Navbar />
      <Header text="YouVid" />
      <Input />
      <MovieFrames />
    </div>
  );
};
