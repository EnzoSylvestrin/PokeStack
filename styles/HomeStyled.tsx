import styled from "styled-components";
import { motion } from 'framer-motion';

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
    color: ${props => props.theme.colors.dark.textColor};

    @media (max-width: 600px) {
        left: 50%;
        transform: translate(-50%, 0);
    }
`;

export const Card = styled(motion.div)` 
    display: flex;
    flex-direction: row-reverse;
    width: 100%;
    height: auto;
    padding: 20px 10px;
    border-radius: 10px;
    background-color: #262626;
    border: 1px solid ${props => props.theme.colors.secondary};
    text-align: center;

    img {
        border-radius: 50%;
        width: 180px;
        height: 180px;
        margin-left: -60px;
        filter: grayscale(0.5);
        transition: all 0.3s ease;
    }

    :hover img {
        filter: grayscale(0);
    }

    .title {
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: row;
        margin-bottom: 15px;

        p {
            width: 40px;
            color: ${props => props.theme.colors.main};
        }

        h2 {
            flex: 1;
            padding-right: 30px;
        }
        
        span {
            background: linear-gradient(to right, ${props => props.theme.colors.secondary}, ${props => props.theme.colors.main});
            -webkit-background-clip: text;
            color: transparent;
        }
    }

    .infos {
        width: 100%;
        padding: 15px 10px;
        display: flex;
        flex-wrap: wrap;

        .icon {
            margin-bottom: 10px;
            width: 50%;
            display: flex;
            align-items: center;
            gap: 5px;
        }
    }

    @media (max-width: 600px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .title {
            flex-direction: column-reverse;

            p {
                width: auto;
            }

            h2  {
                padding: 0;
            }
        }

        img {
            margin: 0;
        }

        .infos {
            flex-direction: row;
            align-items: center;
            justify-content: center;
            text-align: center;

            p {
                flex: 1;
            }
        }
    }

    @media (max-width: 410px) {
        .infos {
            flex-direction: column;

            .icon {
                min-width: 200px;
                width: auto;
            }

            & > :nth-child(2) {
                margin-top: 10px;
            }
        }
    }
`;
