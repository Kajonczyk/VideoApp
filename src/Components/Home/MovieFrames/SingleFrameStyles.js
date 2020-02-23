import styled from "styled-components";

export const StyledFrame = styled.div`
  border: 2px solid ${({ theme }) => theme.colorSecondary};
  width: 80%;
  margin: 20px auto;
  color: ${({ theme }) => theme.colorSecondary};
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
  display: inline-flex;
  width:50%;
  justify-content:center;
  margin: 5px 0px;
  `}
`;
