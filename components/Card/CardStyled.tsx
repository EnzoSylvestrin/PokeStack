import styled from "styled-components";
import { motion } from 'framer-motion';

import { Slot } from '@radix-ui/react-slot';

export const ContainerHeart = styled(Slot)`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
    color: ${props => props.theme.colors.secondary};
    transition: all 0.3s ease;
    z-index: 998;

    :hover {
        transform: scale(1.01);
    }

    :focus {
        transform: scale(0.98);
        fill: blue;
    }
`;

export const CardStyled = styled(motion.div)` 
    display: flex;
    flex-direction: row-reverse;
    width: 100%;
    height: auto;
    padding: 20px 10px;
    border-radius: 10px;
    background-color: #262626;
    border: 1px solid ${props => props.theme.colors.secondary};
    text-align: center;
    position: relative;

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
