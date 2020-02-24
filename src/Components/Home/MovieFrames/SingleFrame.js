import React, { useState } from "react";
import {
  StyledFrame,
  ThumbnailImg,
  MovieText,
  MenuButton,
  StatisticsWrapper
} from "./SingleFrameStyles";
import { FrameMenu } from "./FrameMenu";
export const SingleFrame = ({ id, thumbnail, title, views, likes }) => {
  const [isMenuActive, toggleMenu] = useState(false);

  const trimTitle = title => title.substr(0, 23) + "..";

  const trimStatistics = s => {
    let result;
    if (s.length < 4) return s;
    if (s.length < 7 && s.length > 3) {
      result = s.substr(0, s.length - 3) + "," + s[s.length - 2] + "K";
    } else if (s.length >= 7 && s.length < 10) {
      result = s.substr(0, s.length - 6) + "," + s[s.length - 4] + "M";
    } else {
      result = s.substr(0, s.length - 9) + "," + s[s.length - 6] + "B";
    }
    return result;
  };

  const trimmedTitle = trimTitle(title);
  const trimmedViews = trimStatistics(views);
  const trimmedLikes = trimStatistics(likes);
  return (
    <div>
      <StyledFrame>
        <div>
          <ThumbnailImg src={thumbnail} alt="asd" />
        </div>
        <MovieText>{trimmedTitle}</MovieText>
        <StatisticsWrapper>
          <MovieText small>{trimmedViews} Views</MovieText>
          <MovieText small>{trimmedLikes} Likes</MovieText>
          <MenuButton onClick={() => toggleMenu(!isMenuActive)}>...</MenuButton>
        </StatisticsWrapper>
        {isMenuActive && <FrameMenu id={id} />}
      </StyledFrame>
    </div>
  );
};
