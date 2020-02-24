import styled from "styled-components";

export const StyledFrame = styled.div`
  border: 2px solid ${({ theme }) => theme.colorSecondary};
  width: 260px;
  margin: 20px auto;
  color: ${({ theme }) => theme.colorSecondary};
  position: relative;
`;

export const ThumbnailImg = styled.img`
  height: 150px;
  width: 100%;
`;
export const MovieText = styled.p`
  font-size: ${({ theme }) => theme.font.size.s};
  word-break: break-all;
  text-align: center;
  ${({ small, theme }) =>
    small &&
    `
  font-size: ${theme.font.size.xs};
  display: inline;

  margin: 5px 0px;
  `}
`;
export const MenuButton = styled.button`
  width: 6px;
  height: 10px;
  background: none;
  border: none;
  transform: rotate(90deg) translateX(4px);
  font-weight: bold;
  color: inherit;
  position: relative;
  z-index: 9999;
  font-size: calc(${({ theme }) => theme.font.size.xs} * 1.1);
  outline: none;
`;
export const StatisticsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;
