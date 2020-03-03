import styled from "styled-components";

export const FrameColumn = styled.div`
  ${({ theme }) => theme.mq.tablet} {
    ${({ active }) =>
      active &&
      `
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  `}
  }
`;
