import { useEffect } from 'react';

import Api from '../utils/Api';
import Login from '../components/Login';
import HeadComponent from '../components/HeadCoponent';

export default function Home() {

  useEffect(() => {
    Api.get('/Connection').then((response: any) => {
      console.log(response);
    }).catch((Error: any) => {
      console.log(Error);
    })
  }, []);

  return (
    <>
      <HeadComponent />
      <Login />
    </>
  )
}
