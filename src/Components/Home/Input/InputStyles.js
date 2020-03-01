import styled from "styled-components";

export const StyledInput = styled.input`
  border-radius: 25px;
  width: 80%;
  background: none;
  display: flex;
  margin: 20px auto;
  border: 2px solid ${({ theme }) => theme.colorSecondary};
  padding: 10px;
  font-family: ${({ theme }) => theme.font.family.Didact};
  color: ${({ theme }) => theme.colorSecondary};
  font-size: ${({ theme }) => theme.font.size.xs};
  &::placeholder {
    color: inherit;
  }
  ${({ theme }) => theme.mq.tablet} {
    width: 50%;
  }
`;
export const StyledWrapper = styled.div`
  text-align: center;
  margin: 20px 0px;
`;
export const StyledButton = styled.button`
  background: none;
  border: 2px solid ${({ theme }) => theme.colorSecondary};
  padding: 7px 18px;
  border-radius: 25px;
  color: ${({ theme }) => theme.colorSecondary};
  font-family: ${({ theme }) => theme.font.family.Didact};
  font-size: ${({ theme }) => theme.font.size.xs};
  margin-bottom: 20px;
`;
