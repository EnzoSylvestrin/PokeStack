import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Slot } from '@radix-ui/react-slot';

export const LinkStyled = styled(motion.p)`
    text-decoration: underline;
    transition: all 0.3s ease;

    :hover {
        color: ${props => props.theme.colors.main};
    }
`;

export const DivBack = styled.div`
    width: 100%;
    padding: 10px 20px 0 20px;
    display: flex;
    align-items: center;
    justify-content: start;
`;

export const BackButton = styled(Slot)`
    cursor: pointer;
    width: 36px;
    height: 36px;
    color: ${props => props.theme.colors.secondary};
`;