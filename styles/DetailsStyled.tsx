import { motion } from "framer-motion";
import styled from "styled-components";

import { Slot } from '@radix-ui/react-slot';

export const DetailsContainer = styled.div`
    min-height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const TitleContainer = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    img {
        height: 200px;
        width: 200px;
    }

    h1 {
        background: linear-gradient(to right, ${props => props.theme.colors.secondary}, ${props => props.theme.colors.main});
        -webkit-background-clip: text;
        color: transparent;
        font-size: 36px;
    }

    @media (max-width: 460px) {
        flex-direction: column;

        h1 {
            margin: 5px 0;
        }
    }
`;

export const DataContainer = styled(motion.div)`
    width: 100%;
    border-radius: 60px 60px 0 0;
    background-color: ${props => props.theme.colors.lightDark};
    min-height: 55vh;
    border: 2px solid ${props => props.theme.colors.secondary};
    border-bottom: 0px;
    padding: 20px 30px;
    display: flex;
    align-items: center;

    @media (max-width: 800px) {
        flex-direction: column;
    }
`;

export const Wrapper = styled.div`
    flex: 1;
    text-align: center;
    color: ${props => props.theme.colors.dark.textColor};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
        margin-bottom: 15px;
    }

    @media (max-width: 800px) {
        margin: 10px 0;
    }
`;

export const AbilityWrapper = styled.div`
`;

export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    min-width: 120px;
    gap: 6px;
    margin: 10px 0;
    font-size: 22px;
    color: ${props => props.theme.colors.dark.textColor};
`;

export const IconDetails = styled(Slot)`
    height: 32px;
    width: 32px;
    color: ${props => props.theme.colors.main};
`;