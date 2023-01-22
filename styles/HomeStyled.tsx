import styled from "styled-components";

import { Slot } from '@radix-ui/react-slot';

export const HomeContainer = styled.section`
    min-height: 100vh;
    width: 100%;
    padding-top: 10vh;
    display: flex;
    align-items: center;
    flex-direction: column;

    @media (max-width: 500px) {
        padding-top: 132px;
    }
`;

export const WrapperFilters = styled.div`
    width: 100%;
    padding: 20px 20px 10px 20px;
    height: auto;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const WrapperCards = styled.div`
    width: 100%;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 20px;

    @media (max-width: 1050px) {
        grid-template-columns: 1fr;
    }
`;

export const ContainerExpand = styled.div`
    flex: 1;
    padding: 20px 0;
`;

export const ContainerSingle = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    position: relative;
    
    @media (max-width: 880px) {
        a {
            width: 88%;
        }
    }

    @media (max-width: 600px) {
        a {
            margin-top: 60px;
        }
    }
`;

export const CloseButton = styled(Slot)`
    position: absolute;
    right: 20px;
    top: 20px;
    width: 30px;
    height: 30px;
    color: ${props => props.theme.colors.secondary};

    @media (max-width: 600px) {
        left: 50%;
        transform: translate(-50%, 0);
    }
`;