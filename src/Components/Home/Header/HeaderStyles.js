import styled from "styled-components";

export const StyledHeading = styled.h1`
  font-family: ${({ theme }) => theme.font.family.Indie};
  font-size: ${({ theme }) => theme.font.size.xl};
  color: ${({ theme }) => theme.colorSecondary};
  text-align: center;
  font-weight: normal;
`;
