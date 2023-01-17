import { useEffect } from 'react';

import Api from '../utils/Api';
import Login from '../components/Login';
import HeadComponent from '../components/HeadCoponent';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/Theme';

export default function Home() {

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
      <Login />
    </ThemeProvider>
  )
}
