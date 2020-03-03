import styled from "styled-components";
import { ViewTile } from "styled-icons/zondicons/ViewTile";
import { AlignJustified } from "styled-icons/zondicons/AlignJustified";
export const MenuWrapper = styled.div`
  display: none;
  ${({ theme }) => theme.mq.tablet} {
    display: flex;
    margin: 0px auto;
    justify-content: center;
    ${({ margin }) =>
      margin &&
      `
    margin-top:50px;

   `}
  }
`;
export const TileIcon = styled(ViewTile)`
  color: ${({ theme }) => theme.colorSecondary};
  width: 25px;
  margin: 5px;
  padding: 0.5px;
  cursor: pointer;
`;
export const ListIcon = styled(AlignJustified)`
  color: ${({ theme }) => theme.colorSecondary};
  width: 25px;
  margin: 5px;
  cursor: pointer;
`;
