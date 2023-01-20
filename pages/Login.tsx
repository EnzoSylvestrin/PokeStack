import LoginComponent from '../components/LoginComponent';
import HeadComponent from '../components/HeadCoponent';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/Theme';

export default function Login() {
  return (
    <ThemeProvider theme={theme}>
      <HeadComponent />
      <LoginComponent />
    </ThemeProvider>
  )
}
