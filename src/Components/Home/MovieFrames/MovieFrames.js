import React, { useState } from "react";
import { SingleFrame } from "./SingleFrame";
import { MovieContext } from "../../../moviesContext";
import styled from "styled-components";

export const MovieFrames = ({ displayStyle }) => {
  const [areTilesActive, toggleTiles] = useState(true);
  return (
    <MovieContext.Consumer>
      {context => (
        <div>
          <FrameColumn active={displayStyle === "tile" ? true : false}>
            {context.state.movieList.map(item => (
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
        </div>
      )}
    </MovieContext.Consumer>
  );
};

const FrameColumn = styled.div`
  ${({ theme }) => theme.mq.tablet} {
    ${({ active }) =>
      active &&
      `
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    `}
  }
`;
