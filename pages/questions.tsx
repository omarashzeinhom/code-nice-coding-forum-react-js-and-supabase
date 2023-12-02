import React from "react";
import { Header, Nav, QCards, Footer } from "./components";
import styles from "../styles/Home.module.css";

const Questions = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Nav url={undefined} size={undefined} session={undefined} />
      <h1>Questions</h1>
      <br />
      <hr />
      <QCards />
      <Footer />
    </div>
  );
};

export default Questions;
