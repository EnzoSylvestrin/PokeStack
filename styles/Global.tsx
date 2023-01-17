import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html,
    body {
        max-width: 100vw;
        overflow-x: hidden;
        background-color: ${props => props.theme.colors.dark.bgColor};
    }
`;