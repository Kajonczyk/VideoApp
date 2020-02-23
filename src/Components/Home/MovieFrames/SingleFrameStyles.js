import styled from "styled-components";

export const StyledFrame = styled.div`
  border: 2px solid ${({ theme }) => theme.colorSecondary};
  width: 80%;
  height: 150px;
  margin: 20px auto;
`;
