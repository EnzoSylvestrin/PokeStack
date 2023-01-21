import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html,
    body {
        min-height: 100vh;
        max-width: 100vw;
        overflow-x: hidden;
        background-color: ${props => props.theme.colors.dark.bgColor};
    }
`;