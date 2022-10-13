import React, {useState} from "react";
import { Nav, Header } from "./components/index";

import {
  FormControl,
  Input,
  Button,
  Divider,
  FormGroup,
  Container,
  Typography,
  IconButton,
  TextareaAutosize,
} from "@mui/material";

import Fingerprint from "@mui/icons-material/Fingerprint";

export default function AddQuestion() {
    const [question, setQuestion]= useState();
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
              onChange={(event) => setQuestion(event.target.value)}
            />
          </FormControl>

          <Divider color={"primary"} />
          <FormControl>
            <label>Body</label>
            <TextareaAutosize style={{ resize: "none", paddingBottom: "7rem" }} defaultValue={"Enter Question Body..."}>
            </TextareaAutosize>

          </FormControl>
          <FormControl>
          <label>Tags</label>

            <Input type="search" placeholder="Search for tags Here" value={"Search for Tags...js,php,go,c++&etc"} /> <br />
       
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
              <Typography>
              Add Question

              </Typography>
            </Button>
        </FormGroup>
      </Container>
    
   
    </>
  );
}
