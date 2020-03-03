import React, { useState } from "react";
import { Header } from "../../Shared/Header/Header";
import { SingleFrame } from "../../Components/Home/MovieFrames/SingleFrame";
import { StyledParagraph } from "../../Shared/StyledParagraph";
import { FrameColumn } from "../../Shared/FrameColumn";
import { ContentWrapper } from "../../Shared/ContentWrapper";
import { Navbar } from "../../Components/Navigation/Navbar";
import withContext from "../../Helpers/withContext";
import { DisplayMenu } from "../../Shared/DisplayMenu/DisplayMenu";

const Favourites = props => {
  const {
    context: {
      state: { movieList }
    }
  } = props;
  const [displayStyle, toggleDisplay] = useState();
  return (
    <>
      <Navbar />
      <ContentWrapper>
        <Header text="Favourites">Favourites</Header>
        <DisplayMenu toggleDisplay={toggleDisplay} margin />
        <FrameColumn active={displayStyle === "tile"}>
          {movieList
            .filter(item => item.favourite === true)
            .map(item => (
              <SingleFrame
                key={item.id}
                id={item.id}
                thumbnail={item.snippet.thumbnails.medium.url}
                title={item.snippet.title}
                views={item.statistics.viewCount}
                likes={item.statistics.likeCount}
              />
            ))}
        </FrameColumn>
      </ContentWrapper>
      {!movieList.length && (
        <StyledParagraph>You have no favourite videos</StyledParagraph>
      )}
    </>
  );
};
export default withContext(Favourites);
