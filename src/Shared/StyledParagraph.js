import styled from "styled-components";

export const StyledParagraph = styled.p`
  color: inherit;
  text-align: center;
  font-size: ${({ theme }) => theme.font.size.m};
  font-family: ${({ theme }) => theme.font.family.Indie};
  color: ${({ theme }) => theme.colorSecondary};
  margin-top: 100px;
`;
