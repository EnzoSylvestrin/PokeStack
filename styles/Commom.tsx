import styled from 'styled-components';

export const LinkStyled = styled.p`
    text-decoration: underline;
    transition: all 0.3s ease;

    :hover {
        color: ${props => props.theme.colors.main};
    }
`;

export const AccountContainer = styled.div`
    border-radius: 4px;
    font-size: 19px;
    color: ${props => props.theme.colors.dark.textColor};
    background-color: #262626;
    border: 1.5px solid ${props => props.theme.colors.main};
    padding: 8px;
    margin-right: 20px;
`;
