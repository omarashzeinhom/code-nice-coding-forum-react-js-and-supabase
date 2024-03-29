import React from "react";
import styles from "../styles/Home.module.css";
import { Header, Nav, Footer } from "./components";

import { Button } from "@mui/material";
export default function Tags() {
  return (
    <>
      <Header />
      <Nav url={undefined} size={undefined} session={undefined} />
      <h1>Tags</h1>

      <Button color={"secondary"} variant="outlined">
        PHP
      </Button>

      <Button color={"primary"} variant="outlined">
        javascript
      </Button>

      <Button color={"secondary"} variant="outlined">
        Typescript
      </Button>

      <Button color={"success"} variant="outlined">
        NEO4j
      </Button>

      <Footer />
    </>
  );
}
