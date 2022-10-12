import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Header, NeoDriver, Nav } from "./components";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Nav />
      <NeoDriver />

    </div>
  );
}
