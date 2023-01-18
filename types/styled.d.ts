import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
        dark: {
            bgColor: string;
            textColor: string;
        }
        light: {
            bgColor: string;
            textColor: string;
        }
        main: string;
        secondary: string;
        lightDark: string;
        headerColor: string;
    };
  }
}