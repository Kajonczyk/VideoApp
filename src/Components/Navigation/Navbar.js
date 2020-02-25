import React, { useState } from "react";
import {
  StyledWrapper,
  HamburgerWrapper,
  StyledSpan,
  MenuWrapper,
  MenuLink
} from "./NavbarStyles";
import history from "../../Utils/history";
export const Navbar = () => {
  const [isMenuActive, toggleMenu] = useState(false);
  const changeRoute = url => history.push(url);

  return (
    <>
      <MenuWrapper active={isMenuActive}>
        <MenuLink onClick={() => changeRoute("/")}>Home</MenuLink>
        <MenuLink onClick={() => changeRoute("/favourites")}>
          Favourites
        </MenuLink>
      </MenuWrapper>
      <StyledWrapper>
        <HamburgerWrapper onClick={() => toggleMenu(!isMenuActive)}>
          <StyledSpan active={isMenuActive} />
          <StyledSpan active={isMenuActive} />
          <StyledSpan active={isMenuActive} />
        </HamburgerWrapper>
      </StyledWrapper>
    </>
  );
};
