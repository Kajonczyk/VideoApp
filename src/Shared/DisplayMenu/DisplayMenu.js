import React from "react";
import { MenuWrapper, TileIcon, ListIcon } from "./DisplayMenuStyles";

export const DisplayMenu = ({ toggleDisplay, margin }) => {
  return (
    <MenuWrapper margin>
      <TileIcon onClick={() => toggleDisplay("tile")} />
      <ListIcon onClick={() => toggleDisplay("list")} />
    </MenuWrapper>
  );
};
