import React from "react";
import { StyledHeading } from "./HeaderStyles";

export const Header = ({ text }) => {
  return (
    <div>
      <StyledHeading>{text}</StyledHeading>
    </div>
  );
};
