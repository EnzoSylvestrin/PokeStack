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
    color: var(--textColor);
    border: 2px solid transparent;
    border-radius: 4px;

    ::placeholder {
        color: #5c5b5c;
    }

    :focus-within {
        border: 2px solid #5a05bb;
    }
`

export const InputComponent = styled.input`
    background-color: #222121;
    outline: none;
    border: none;
    flex: 1 1 0%;
    color: #e8e8e8;
    font-size: 14px;

    ::placeholder {
        color: #7a797a;
    }
`;

export const IconSlot = styled(Slot)`
    width: 24px;
    height: 24px;
    color: #5a05bb;
`