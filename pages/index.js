import { Header,  Nav, QCards, Footer } from "./components";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Nav />
      <h1>Welcome to Code Nice!</h1>
      <QCards />
      <Footer />
    </div>
  );
}
