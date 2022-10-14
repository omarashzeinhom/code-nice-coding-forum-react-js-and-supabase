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
  const [newQuestion, setNewQuestion] = useState([
    {
      title: " ",
      description: " ",
      body: "",
      thumbnail: " ",
      created_at: new Date(),
      tags: [""],
      question_tags: [""],
      //TODO MATCH USER WITH USER ID OR USERNAME
      user_email_profile_questions: ["Test"],
      //TODO INSERT IMAGE HERE
    },
  ]);

  //DEBUG AND HANDLE PROPS PASSED ✔️
  console.log(
    "Title is >>>" + newQuestion.title,
    "Body is >>>>" + newQuestion?.body,
    "Description is >>>" + newQuestion?.description,
    "thumbnail is >>>" + newQuestion?.thumbnail,
    "created_at is >>>" +
      newQuestion?.created_at +
      "tags are >>> =" +
      newQuestion?.tags +
      "question_tags are >>>> = " +
      newQuestion?.question_tags,
    "user_email_profile_questions >>>> = " +
      newQuestion?.user_email_profile_questions
  );

  //TODO FIX 200 CODE ERROR
  const createQuestions = async () => {
    try {
      const { data, error } = await supabase.from("Questions").insert([
        {
          title: newQuestion?.title,
          description: newQuestion?.description,
          body: newQuestion?.body,
          thumbnail: JSON.stringify(newQuestion?.thumbnail),
          created_at: new Date(),
          tags: newQuestion?.tags,
          question_tags: newQuestion?.tags,
          user_email_profile_questions:
            newQuestion?.user_email_profile_questions,
        },
      ]);

      alert(data + "Has Been added Sucessfully");
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChanges = (event) => {
    //HANDLE INPUTS WITH EVENT name HTML5 property✔️
    setNewQuestion((previous) => ({
      ...previous,
      [event.target.name]: event.target.value,
    }));
    //PASS THIS ARROW FUNCTION To onChange={handleInputChanges} on each Input✔️
  };

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
              name="title"
              type="text"
              color="primary"
              required
              onChange={handleInputChanges}
            />
          </FormControl>
          <Divider color={"primary"} />

          <FormControl>
            <label>Description</label>
            <Input
              type="text"
              name="description"
              placeholder="Description"
            />{" "}
            <br />
          </FormControl>

          <Divider color={"primary"} />
          <FormControl>
            <label>Body</label>
            <TextareaAutosize
              name="body"
              style={{ resize: "none", paddingBottom: "7rem" }}
              defaultValue={"Enter Question Body..."}
              onChange={handleInputChanges}
            ></TextareaAutosize>
          </FormControl>
          <Divider color={"primary"} />

          <FormControl>
            <label>Tags</label>
            <Input
              name="tags"
              value={newQuestion?.tags}
              type="search"
              placeholder="Search for tags Here"
              onChange={handleInputChanges}
            />{" "}
            <br />
          </FormControl>
          <FormControl>
            <label>Image</label>
            <Input
              type="file"
              name="thumbnail"
              placeholder="Upload Question Image"
            />{" "}
            <br />
          </FormControl>

          <Divider color={"primary"} />

          <Button color="primary" type="submit" variant="outlined">
            <Fingerprint />
            <Typography>Add Question</Typography>
          </Button>
        </FormGroup>
        <Button onClick={createQuestions}>createQuestions</Button>
      </Container>
    </>
  );
}
