import React, { useState } from "react";
import { Header } from "../../Shared/Header/Header";
import { ContentWrapper } from "../../Shared/ContentWrapper";
import { DisplayMenu } from "../../Shared/DisplayMenu/DisplayMenu";
import { Input } from "../../Components/Home/Input/Input";
import { MovieFrames } from "../../Components/Home/MovieFrames/MovieFrames";
import { Navbar } from "../../Components/Navigation/Navbar";
export const Home = () => {
  const [displayStyle, toggleDisplay] = useState();
  return (
    <>
      <Navbar />
      <ContentWrapper>
        <Header text="YouVid" />
        <Input />
        <DisplayMenu toggleDisplay={toggleDisplay} />
        <MovieFrames displayStyle={displayStyle} />
      </ContentWrapper>
    </>
  );
};
