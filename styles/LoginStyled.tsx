import styled from 'styled-components';
import { motion } from 'framer-motion';

export const LoginContainer = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    height: 100%;
    width: 100%;
`;

export const LoginWrapper = styled(motion.form)`
    height: auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 8px;
    color: white;
`;

export const LinkStyled = styled.a`
    text-decoration: underline;
    transition: all 0.3s ease;

    :hover {
        color: var(--red);
    }
`;