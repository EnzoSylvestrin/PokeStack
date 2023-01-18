import { motion } from 'framer-motion';
import styled from 'styled-components';

export const HeaderContainer = styled.nav`
    width: 100%;
    height: 10vh;
    min-height: 65px;
    background-color: ${props => props.theme.colors.headerColor};
    border-bottom: 1.5px solid #bebebe;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Ul = styled(motion.ul)`
    list-style: none;
    display: flex;
    align-items: center;
    margin-right: 50px;
`;

export const ButtonNotFilled = styled.a`
    padding: 8px 10px;
    border: 1.5px solid #fff;
    color: ${props => props.theme.colors.dark.textColor};
    font-size: 18px;
    border-radius: 4px;

    :hover {
        
    }
`;
