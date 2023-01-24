import Router from "next/router";

import { ArrowArcLeft } from "phosphor-react";

import { BackButton, DivBack } from "../styles/Commom";

function BackComponent() {

    const handleBack = () => {
        Router.back();
    }

    return (
        <DivBack>
            <BackButton onClick={handleBack}>
                <ArrowArcLeft />
            </BackButton>
        </DivBack>
    );
}

export default BackComponent;