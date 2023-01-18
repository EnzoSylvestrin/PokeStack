import { useEffect } from 'react';

import Api from '../utils/Api';
import LoginComponent from '../components/LoginComponent';
import HeadComponent from '../components/HeadCoponent';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/Theme';

export default function Login() {

  useEffect(() => {
    Api.get('/Connection').then((response: any) => {
      console.log(response);
    }).catch((Error: any) => {
      console.log(Error);
    })
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <HeadComponent />
      <LoginComponent />
    </ThemeProvider>
  )
}
