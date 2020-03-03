import styled from "styled-components";

export const MenuWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translate(-50%, -100%);
  height: 29px;
  width: 100%;
  background: ${({ theme }) => theme.colorPrimary};
  display: flex;
  justify-content: space-around;
`;
export const StyledText = styled.p`
  display: inline;
  line-height: 28px;
  font-size: ${({ theme }) => theme.font.size.xs};
  cursor: pointer;
`;
