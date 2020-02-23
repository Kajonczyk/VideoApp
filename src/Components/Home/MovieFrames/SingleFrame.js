import React from "react";
import { StyledFrame, ThumbnailImg, MovieText } from "./SingleFrameStyles";
export const SingleFrame = ({ id, thumbnail, title, views, likes }) => {
  const trimTitle = title => {
    return title.substr(0, 23) + "..";
  };
  const trimmedTitle = trimTitle(title);
  return (
    <div>
      <StyledFrame>
        <div>
          <ThumbnailImg src={thumbnail} alt="asd" />
        </div>
        <MovieText>{trimmedTitle}</MovieText>
        <MovieText small>{views} Views</MovieText>
        <MovieText small>{likes} Likes</MovieText>
      </StyledFrame>
    </div>
  );
};
