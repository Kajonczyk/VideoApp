import React from "react";
import { MenuWrapper, TileIcon, ListIcon } from "./DisplayMenuStyles";

export const DisplayMenu = ({ toggleDisplay }) => {
  return (
    <MenuWrapper>
      <TileIcon onClick={() => toggleDisplay("tile")} />
      <ListIcon onClick={() => toggleDisplay("list")} />
    </MenuWrapper>
  );
};
