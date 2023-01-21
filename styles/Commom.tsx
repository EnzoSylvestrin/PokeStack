import styled from 'styled-components';

import { motion } from 'framer-motion';

export const LinkStyled = styled(motion.p)`
    text-decoration: underline;
    transition: all 0.3s ease;

    :hover {
        color: ${props => props.theme.colors.main};
    }
`;
