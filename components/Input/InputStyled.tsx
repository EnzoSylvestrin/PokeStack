import styled from 'styled-components';
import { Slot } from '@radix-ui/react-slot';

export const ContainerInput = styled.div`
    max-width: 100%;
    height: 3rem;
    padding: 0 12px;
    gap: 8px;
    display: flex;
    align-items: center;
    background-color: #222121;
    color: ${props => props.theme.colors.dark.textColor};
    border: 2px solid transparent;
    border-radius: 4px;

    ::placeholder {
        color: #5c5b5c;
    }

    :focus-within {
        border: 2px solid ${props => props.theme.colors.main};
    }
`

export const InputComponent = styled.input`
    background-color: #222121;
    outline: none;
    border: none;
    flex: 1 1 0%;
    color: ${props => props.theme.colors.dark.textColor};
    font-size: 14px;
    caret-color: ${props => props.theme.colors.main};

    ::placeholder {
        color: #7a797a;
    }
`;

export const IconSlot = styled(Slot)`
    width: 24px;
    height: 24px;
    color: ${props => props.theme.colors.main};
`