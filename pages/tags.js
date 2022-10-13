import React from "react";
import styles from "../styles/Home.module.css";
import { Header,  Nav, Footer } from "./components";

import {
Button,
} from "@mui/material";
export default function Tags() {
  return (
    <>
      <Header />
      <Nav />
      <h1>Tags</h1>

<Button color={"success"} variant="outlined">
PHP
</Button>

<Button color={"success"} variant="outlined">
javascript
</Button>


<Button color={"success"} variant="outlined">
Typescript
</Button>



<Button color={"success"} variant="outlined">
NEO4j
</Button>


      <Footer />
    </>
  );
}
