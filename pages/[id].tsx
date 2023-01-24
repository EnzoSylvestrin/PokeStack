import { ThemeProvider } from "styled-components";

import BackComponent from "../components/BackComponent";
import HeadComponent from "../components/HeadCoponent";

import { theme } from "../styles/Theme";
import { DetailsContainer } from "../styles/DetailsStyled";
import { useRouter } from "next/router";

function Details() {

    const { id } = useRouter().query;

    console.log(id);

    return (
        <ThemeProvider theme={theme}>
            <HeadComponent />
            <DetailsContainer>
                <BackComponent />
            </DetailsContainer>
        </ThemeProvider>
    );
}

export default Details;