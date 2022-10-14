import React, { useState } from "react";
import { Nav, Header } from "./components/index";
import { supabase } from "../utils/supabaseClient";

import {
  FormControl,
  Input,
  Button,
  Divider,
  FormGroup,
  Container,
  Typography,
  TextareaAutosize,
} from "@mui/material";

import Fingerprint from "@mui/icons-material/Fingerprint";

export default function AddQuestion() {
  const [newQuestion, setNewQuestion] = useState({
    userprofile_questions_added: String, //
    title: String,
    body: String,
    created_at: new Date(),
    tags: [""],
    question_tags: [""],
  });

  //TODO HANDLE PROPS PASSED
  //console.log(newQuestion.title)

  async function createQuestions() {
    const { data, error } = await supabase.from("Questions").insert({
      userprofile_questions_added: newQuestion?.userprofile_questions_added, //
      title: newQuestion?.title,
      body: newQuestion?.body,
      created_at: new Date(),
      tags: newQuestion?.tags,
      question_tags: newQuestion?.question_tags,
    });
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  function handleInputChanges() {}

  return (
    <>
      <Header />
      <Nav />
      <Container fixed maxWidth="md">
        <FormGroup>
          <h1>Add Question</h1>

          <FormControl>
            <label>Question Title</label>
            <Input
              name="cx_email"
              type="text"
              color={"primary"}
              required
              onChange={(event) => setNewQuestion(event.target.value)}
            />
          </FormControl>

          <Divider color={"primary"} />
          <FormControl>
            <label>Body</label>
            <TextareaAutosize
              style={{ resize: "none", paddingBottom: "7rem" }}
              defaultValue={"Enter Question Body..."}
              onChange={(event) => setNewQuestion(event.target.value)}
            ></TextareaAutosize>
          </FormControl>
          <FormControl>
            <label>Tags</label>
            <Input
              type="search"
              placeholder="Search for tags Here"
              value={"Search for Tags...js,php,go,c++&etc"}
              onChange={(event) => setNewQuestion(event.target.value)}
            />{" "}
            <br />
          </FormControl>
          <FormControl>
            <label>Image</label>
            <Input type="file" placeholder="Upload Question Image" /> <br />
          </FormControl>

          <Button
            aria-label="fingerprint"
            color="primary"
            type="submit"
            variant="outlined"
          >
            <Fingerprint />
            <Typography>Add Question</Typography>
          </Button>
        </FormGroup>
        <Button onClick={createQuestions}>createQuestions</Button>
      </Container>
    </>
  );
}
