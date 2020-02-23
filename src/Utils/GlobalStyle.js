import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
    margin: 0px;
    font-size: 10px;
    background-color: ${({ theme }) => theme.colorPrimary};

}
*, *::before, *::after{
    box-sizing:border-box;
}
p{
    margin: 0px;
}
`;
