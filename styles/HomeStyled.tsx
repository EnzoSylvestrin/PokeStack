import styled from "styled-components";
import { motion } from 'framer-motion';

export const HomeContainer = styled.section`
    width: 100%;
    padding-top: 10vh;
    display: flex;
    align-items: center;
    flex-direction: column;
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
    }

    .title {
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: row;
        margin-bottom: 15px;

        p {
            margin-top: 10px;
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
`;