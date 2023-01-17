import styled, { css } from 'styled-components';

import { Slot, SlotProps } from '@radix-ui/react-slot';
import { TextProps } from './Text';

export const TextStyled = styled(({ ...rest }: SlotProps) => <Slot {...rest} />) <TextProps>`
    color: ${props => props.theme.dark.textColor};
    ${props => {
        switch (props.size) {
            case "sm":
                return css`
                    font-size: 14px;
                `
            case "md":
                return css`
                    font-size: 16px;
                `
            case "lg":
                return css`
                    font-size: 18px;
                `
            default:
                break;
        }
    }}
`;

export const CustomText = styled.span`   
    color: ${props => props.theme.dark.red};
`
