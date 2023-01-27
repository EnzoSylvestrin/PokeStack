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
    text-align: center;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    position: relative;
    transition: 0.5s ease-in-out all;

    &:hover {
        transform: scale(0.98);
    }

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
            color: ${props => props.theme.colors.dark.textColor};
        }
    }

    &.Normal {
        border: 1px solid #6d6d4e;
        &:hover {
            background-color: #a8a878;
        }
    }
    &.Fire {
        border: 1px solid #9c531f;
        &:hover {
        background-color: #f08030;
        }
    }
    &.Water {
        border: 1px solid #445e9c;
        &:hover {
        background-color: #6890f0;
        }
    }
    &.Electric {
        border: 1px solid #a1871f;
        &:hover {
        background-color: #f8d030;
        }
    }
    &.Grass {
        border: 1px solid #4e8234;
        &:hover {
        background-color: #78c850;
        }
    }
    &.Ice {
        border: 1px solid #638d8d;
        &:hover {
        background-color: #98d8d8;
        }
    }
    &.Ground {
        border: 1px solid #927d44;
        &:hover {
        background-color: #e0c068;
        }
    }
    &.Flying {
        border: 1px solid #6d5e9c;
        &:hover {
        background-color: #a890f0;
        }
    }
    &.Ghost {
        border: 1px solid #493963;
        &:hover {
        background-color: #705898;
        }
    }
    &.Rock {
        border: 1px solid #786824;
        &:hover {
        background-color: #b8a038;
        }
    }
    &.Fighting {
        border: 1px solid #7d1f1a;
        &:hover {
        background-color: #c03028;
        }
    }
    &.Poison {
        border: 1px solid #682a68;
        &:hover {
        background-color: #a040a0;
        }
    }
    &.Psychic {
        border: 1px solid #a13959;
        &:hover {
        background-color: #f85888;
        }
    }
    &.Bug {
        border: 1px solid #6d7815;
        &:hover {
        background-color: #a8b820;
        }
    }
    &.Dark {
        border: 1px solid #49392f;
        &:hover {
        background-color: #705848;
        }
    }
    &.Steel {
        border: 1px solid #787887;
        &:hover {
        background-color: #b8b8d0;
        }
    }
    &.Dragon {
        border: 1px solid #4924a1;
        &:hover {
        background-color: #7038f8;
        }
    }
    &.Fairy {
        border: 1px solid #fa58f4;
        &:hover {
        background-color: #f781d8;
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
