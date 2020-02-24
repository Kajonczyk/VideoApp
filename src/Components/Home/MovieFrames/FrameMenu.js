import React from "react";

import { MenuWrapper, StyledText } from "./FrameMenuStyles";
import { MovieContext } from "../../../moviesContext";
export const FrameMenu = ({ id }) => {
  return (
    <MenuWrapper>
      <MovieContext.Consumer>
        {context => (
          <>
            <StyledText onClick={() => context.setFavourite(id)}>
              Add To Favourites
            </StyledText>
            <StyledText onClick={() => context.deleteItem(id)}>
              Delete
            </StyledText>
          </>
        )}
      </MovieContext.Consumer>

      <StyledText />
    </MenuWrapper>
  );
};
