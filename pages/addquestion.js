import React from "react";
import { Nav, Header } from "./components/index";

export default function AddQuestion() {
  return (
    <>
      <Header />
      <Nav />
      <br />
      <br />
      <br />
      <br />
      {/**TEMP SOLUTION TEST SUBMIT QUESTION TO FIRE BASE 1ST TODO  */}
      <form encType="multi-part/form-data" action="">
        <label>Question</label>
        <br />

        <input type="text" placeholder="Question Title..." />
        <br />
        <textarea style={{ resize: "none" }}></textarea>
        <br />

        <input type="search" placeholder="Add Tag"/>
        <br />

        <button>Submit</button>
      </form>
    </>
  );
}
