import { ThemeProvider } from "styled-components";
import { theme } from "../styles/Theme";

import HeadComponent from "../components/HeadCoponent";
import Header from "../components/Header/Header";

function Favorites() {
    return (
        <ThemeProvider theme={theme}>
            <HeadComponent />
            <Header />
        </ThemeProvider>
    );
}

export default Favorites;