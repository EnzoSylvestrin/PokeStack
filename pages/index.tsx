import { ThemeProvider } from "styled-components";
import HeadComponent from "../components/HeadCoponent";
import Header from "../components/Header/Header";
import { theme } from "../styles/Theme";

function Home() {
    return (
        <ThemeProvider theme={theme}>
            <HeadComponent />
            <Header />
        </ThemeProvider>
    );
}

export default Home;