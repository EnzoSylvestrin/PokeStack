import '../styles/globals.css';

import { ThemeProvider } from "styled-components";
import { theme } from "../styles/Theme"; 

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const themeDecorator = storyFn => <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
export const decorators = [themeDecorator];