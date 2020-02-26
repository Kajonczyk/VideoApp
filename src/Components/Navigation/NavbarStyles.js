import styled from "styled-components";

export const StyledWrapper = styled.div`
  height: 30px;
  background-color: ${({ theme }) => theme.colorPrimary};
  z-index: 7777;
`;
export const HamburgerWrapper = styled.div`
  margin: 10px 20px 0px auto;
  height: 30px;
  width: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 9x;
`;
export const StyledSpan = styled.span`
  height: 3px;
  width: 20px;
  margin: 2px 0px;
  transition: transform 0.2s;
  border-radius: 5px;
  z-index: 7777;
  background-color: ${({ theme }) => theme.colorSecondary};
  ${({ active, theme }) =>
    active &&
    `
    
    &:nth-child(1),&:nth-child(2),&:nth-child(3){
      background-color: ${theme.colorPrimary};
    }
  &:nth-child(1){
    transform: rotate(45deg) translate(5px, 5px);
  }
  &:nth-child(2){
    transform: rotateY(90deg);
  }
  &:nth-child(3){
    transform: rotate(-45deg) translate(5px, -5px);
  }
  `}
`;
export const MenuWrapper = styled.div`
  height: 100vh;
  width: 150px;
  background-color: ${({ theme }) => theme.colorSecondary};
  width: 0px;
  position: absolute;
  right: 0;
  top: 0;
  transition: width 0.3s, padding 0.3s;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  padding-top: 100px;
  z-index: 7777;

  ${({ active }) =>
    active &&
    `
    width:150px;
    padding-right: 10px;
  `}
`;

export const MenuLink = styled.p`
  color: ${({ theme }) => theme.colorPrimary};
  padding: 5px 0px;
  text-decoration: underline;
  font-size: ${({ theme }) => theme.font.size.s};
  font-family: ${({ theme }) => theme.font.family.Didact};
  display: none;
  ${({ active }) =>
    active &&
    `
    display:block;
  `}
`;
