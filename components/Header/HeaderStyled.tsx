import styled from 'styled-components';

export const Ul = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    gap: 20px;
    margin-right: 50px;
`;

export const Logo = styled.a`
    transition: all .3s ease;
    margin-left: 30px;

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

export const HeaderContainer = styled.div`
    width: 100%;
    height: 10vh;
    min-height: 65px;
    background-color: ${props => props.theme.colors.headerColor};
    border-bottom: 1.5px solid ${props => props.theme.colors.main};
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    z-index: 999;

    @media (max-width: 500px) {
        height: auto;
        flex-direction: column;
        justify-content: center;

        ${Ul} {
            margin: 20px 0;
        }

        ${Logo} {
            margin: 0;
            margin-top: 10px;
        }

        ${AccountContainer} {
            margin: 20px;
        }
    }
`;

export const LoginStyled = styled.p`
    color: ${props => props.theme.colors.dark.textColor};
    transition: all .3s ease;
    font-size: 18px;

    :hover {
        color: ${props => props.theme.colors.main}
    }
`;

