import styled from "styled-components";
export const StyledWrapper = styled.div`
  height: 100vh;
  width: 100%;
  z-index: 8888;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const CloseWrapper = styled.button`
  position: absolute;
  right: 0;
  margin: 20px;
  border: none;
  background: none;
  cursor: pointer;
`;
export const StyledSpan = styled.span`
  height: 3px;
  width: 20px;
  margin: 2px 0px;
  transition: transform 0.2s;
  border-radius: 5px;
  z-index: 9999;
  position: absolute;
  right: 0;
  background-color: ${({ theme }) => theme.colorSecondary};
  &:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }
  &:nth-child(2) {
    transform: rotate(-45deg) translate(-5px, 5px);
  }
`;
export const FrameWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const StyledFrame = styled.iframe`
  width: 100%;
  height: 70vw;
  min-height: 200px;
  max-height: 600px;
  max-width: 900px;
`;
