import React, { useState } from "react";
import { SingleFrame } from "./SingleFrame";
import { MovieContext } from "../../../moviesContext";
import styled from "styled-components";
import { StyledParagraph } from "../../../Shared/StyledParagraph";
import { FrameColumn } from "../../../Shared/FrameColumn";
import withContext from "../../../Helpers/withContext";

const MovieFrames = ({
  displayStyle,
  context: {
    state: { movieList }
  }
}) => {
  return (
    <>
      <FrameColumn active={displayStyle === "tile"}>
        {movieList.map(item => (
          <SingleFrame
            key={item.id}
            id={item.id}
            thumbnail={item.snippet.thumbnails.medium.url}
            title={item.snippet.title}
            views={item.statistics.viewCount}
            likes={item.statistics.likeCount}
            url={item.url}
          />
        ))}
      </FrameColumn>
      {!movieList.length && (
        <StyledParagraph>You have no videos </StyledParagraph>
      )}
    </>
  );
};

export default withContext(MovieFrames);
