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

    h1 {
        text-align: center;
        font-size: 32px;
        padding: 4px;
    }

    label {
        font-size: 18px;
        margin: 8px 0;
    }

    input {
        padding: 4px;
        font-size: 18px;
        outline: 0;
        margin-bottom: 10px;
        border-radius: 4px;
        border: 0px;
    }

    button {
        align-self: center;
        font-size: 19px;
        border-radius: 12px;
        width: 80px;
        padding: 7px;
        background-color: #00ffff;
        transition: all 0.3s ease;
        border: 0px;
        margin-top: 20px;

        :hover {
            background-color: #0ce0bd;
            transform: scale(1.02);
        }
    }
`