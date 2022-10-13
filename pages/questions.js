import React from 'react'
import { Header, Nav, NeoDriver, QCards } from './components'
import styles from "../styles/Home.module.css";

const Questions = () => {
  return (
    <div className={styles.container}>
        <Header/>
        <Nav/>
        <NeoDriver/>
      <h1>Questions</h1>
      <br/>
      <hr/>
      <QCards/>
    </div>
  )
}

export default Questions
