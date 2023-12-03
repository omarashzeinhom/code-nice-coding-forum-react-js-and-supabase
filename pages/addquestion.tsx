import React, { useState, ChangeEvent } from "react";
import { Nav, Header } from "./components/index";
import { supabase } from "../lib/supabaseClient";
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

interface addQuestionProps {
  title: string;
  description: string;
  body: string;
  thumbnail: string;
  created_at: Date;
  tags: [string];
  question_tags: [string];
}

export default function AddQuestion() {
  const [newQuestion, setNewQuestion] = useState<addQuestionProps>({
    title: "",
    description: "",
    body: "",
    thumbnail: "",
    created_at: new Date(),
    tags: [""],
    question_tags: [""],
  });

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
      newQuestion?.question_tags
  );

  //TODO FIX 200 CODE ERROR
  const createQuestions = async () => {
    try {
      const { data, error } = await supabase.from("questions").insert({
        title: newQuestion?.title,
        description: newQuestion?.description,
        body: newQuestion?.body,
        thumbnail: JSON.stringify(newQuestion?.thumbnail),
        created_at: new Date(),
        tags: newQuestion?.tags,
        question_tags: newQuestion?.tags,
      });

      alert(data + "Has Been added Sucessfully");
    } catch (error) {
      console.log(error);
    }
  };

 

  const handleInputChanges = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewQuestion((previous) => ({
      ...previous,
      [event.target.name]: event.target.value,
    }));
  };

  const handleTagsChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewQuestion((previous) => ({
      ...previous,
      tags: [event.target.value],
    }));
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setNewQuestion((previous) => ({
          ...previous,
          thumbnail: e.target?.result as string,
        }));
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };
  return (
    <>
      <Header />
      <Nav url={undefined} size={undefined} session={undefined} />
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
          value={newQuestion.tags[0]}
          type="search"
          placeholder="Search for tags Here"
          onChange={handleTagsChange}
        />{" "}
        <br />
      </FormControl>
      <FormControl>
        <label>Image</label>
        <Input type="file" name="thumbnail" onChange={handleFileChange} /> <br />
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
