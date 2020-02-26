import React from "react";
import {
  StyledWrapper,
  StyledSpan,
  CloseWrapper,
  FrameWrapper,
  StyledFrame
} from "./ModalStyles";
export const Modal = ({ closeModal, url }) => {
  return (
    <StyledWrapper onClick={closeModal}>
      <CloseWrapper onClick={closeModal}>
        <StyledSpan />
        <StyledSpan />
      </CloseWrapper>
      <FrameWrapper>
        <StyledFrame
          src={`https://www.youtube.com/embed/${url}`}
          frameBorder="0"
        ></StyledFrame>
      </FrameWrapper>
    </StyledWrapper>
  );
};
