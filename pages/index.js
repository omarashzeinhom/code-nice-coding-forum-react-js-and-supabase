import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Header, NeoDriver, Nav, QCards } from "./components";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Nav />
      <NeoDriver />
      <br/>
      <hr/>
<QCards/>
    </div>
  );
}
