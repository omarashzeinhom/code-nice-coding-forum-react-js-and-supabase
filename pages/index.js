import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Header,NeoDriver, Nav } from './components'
const { auth } = require('express-openid-connect');


export default function Home() {

  app.use(
    auth({
      issuerBaseURL: 'https://YOUR_DOMAIN',
      baseURL: 'https://YOUR_APPLICATION_ROOT_URL',
      clientID: 'YOUR_CLIENT_ID',
      secret: 'LONG_RANDOM_STRING',
      idpLogout: true,
    })
  );





  return (
    <div className={styles.container}>
     <Header/>
    <NeoDriver/>
    <Nav/>
    </div>
  )
}
