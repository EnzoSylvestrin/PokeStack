import styled from 'styled-components';

export const LinkStyled = styled.a`
    text-decoration: underline;
    transition: all 0.3s ease;

    :hover {
        color: ${props => props.theme.colors.secondary};
    }
`;