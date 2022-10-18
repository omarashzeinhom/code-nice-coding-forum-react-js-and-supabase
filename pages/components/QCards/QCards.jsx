import React, { useEffect, useState } from "react";
import Image from "next/image";
import { supabase } from "../../../utils/supabaseClient";
//MUI
import { styled } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  Typography,
  Grid,
  Divider,
  Button,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Item = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function QCards() {
  //GUI
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  //LOGIC
  const [questions, setQuestions] = React.useState([
    {
      id: 0,
      title: " ",
      created_at: new Date(),
      question_tags: "",
    },
  ]);


 const getQuestions = async function () {


try {
      const {data, error} = []
      const query = await supabase
        .from('Questions');

       const props = query.select('id, title, created_at, question_tags');


      //.from("Questions").select(`title,body,description,thumbnail,created_at,question_tags,user_email_profile_questions`).eq("id", 5)

      //DEBUG GETS EMPTY ARRAY
      console.log(props);
  setQuestions(props);
    } catch (error) {
      console.log("Error has been found " + error);
    }
    return true;
  };


  /*>>>>>>>>>---GET QUESTIONS START----<<<<<<<<*/
  /*function getQuestions() {
    const queryObj = supabase.from("Questions");
    const result = queryObj.select(`id, 
    created_at, 
    title, 
    body,
    description,
    thumbnail,
    tags,  question_tags`);
    try {
 

      console.log(result);

      setQuestions(result);
    } catch (error) {
      console.warn("Error has been found" + error);
    }
  }
*/
  /*>>>>>>>>>---GET QUESTIONS END----<<<<<<<< */

  //console.log(questions);

  //DEBUG GETS EMPTY ARRAY
  // console.log(questions);

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <Grid container spacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {[questions]?.map((question, index) => {
        console.log(question?.created_at);
        console.log(question?.title);
        return <React.Fragment key={question + index}></React.Fragment>;
      })}

      {qcardsContent.map((qcard, index) => (
        <React.Fragment key={qcard + index}>
          {/* NOTICE THAT Grid container & Grid item are not the same thing were mapping over the item */}
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
            <Item sx={{ maxWidth: 345 }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    {/*ONLY THE INITAL LETTER */}
                    <Image
                      src={qcard?.userAvatarLink}
                      alt={qcard?.userName[0]}
                      width={"75px"}
                      height={"75px"}
                      loading="lazy"
                    />
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={qcard?.postName}
                subheader={qcard?.postDate}
              />
              <CardMedia
                component="img"
                height="194"
                image={qcard?.postImage}
                alt={qcard.postName}
                loading="lazy"
              />

              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {qcard?.postDescription}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>

                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>

                <Button color="primary" size="small" variant="outlined">
                  {qcard?.postCategory}
                </Button>

                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>{qcard?.postBody}</Typography>
                </CardContent>
              </Collapse>
            </Item>
          </Grid>

          <Divider />
        </React.Fragment>
      ))}
    </Grid>
  );
}

const qcardsContent = [
  //OBJECT1
  {
    userName: "John Doe",
    userAvatarLink:
      "https://images.pexels.com/photos/10495160/pexels-photo-10495160.jpeg?auto=compress&cs=tinysrgb&w=75&h=75&dpr=1",
    // YOU CAN ASSING ANOTHER OBJECT FOR USER
    postImage:
      "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=500&h=195&dpr=1",
    postName: "What are React Fragments?",
    postDate: "10/13/2022",
    postBody:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde inventore exercitationem fugit, veritatis reprehenderit est, ex doloribus quibusdam debitis nihil iusto. Doloremque assumenda incidunt quasi illum at optio, reprehenderit maxime",
    postDescription:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    postCategory: "react",
  },
  //OBJECT1
  {
    userName: "Paula Marlow",
    userAvatarLink:
      "https://images.pexels.com/photos/13937077/pexels-photo-13937077.jpeg?auto=compress&cs=tinysrgb&w=75&h=75&dpr=1",
    // YOU CAN ASSING ANOTHER OBJECT FOR USER
    postImage:
      "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=500&h=195&dpr=1",
    postName: "Cannot Pass PHP Associvative Array? to Stripe Payment",
    postDate: "10/11/2022",
    postBody:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde inventore exercitationem fugit, veritatis reprehenderit est, ex doloribus quibusdam debitis nihil iusto. Doloremque assumenda incidunt quasi illum at optio, reprehenderit maxime",
    postDescription:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    postCategory: "php",
  },
  //OBJECT1
  {
    userName: "Jane Doe",
    userAvatarLink:
      "https://images.pexels.com/photos/9389205/pexels-photo-9389205.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
    // YOU CAN ASSING ANOTHER OBJECT FOR USER
    postImage:
      "https://images.pexels.com/photos/11035476/pexels-photo-11035476.jpeg?auto=compress&cs=tinysrgb&w=500&h=195&dpr=1",
    postName: "Why is wine x64 not working on Kali?",
    postDate: "10/13/2022",
    postBody:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde inventore exercitationem fugit, veritatis reprehenderit est, ex doloribus quibusdam debitis nihil iusto. Doloremque assumenda incidunt quasi illum at optio, reprehenderit maxime",
    postDescription:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    postCategory: "linux",
  },

  //OBJECT1
  {
    userName: "Kareem Doe",
    userAvatarLink:
      "https://images.pexels.com/photos/12098216/pexels-photo-12098216.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
    // YOU CAN ASSING ANOTHER OBJECT FOR USER
    postImage:
      "https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=500&h=195&dpr=1",
    postName: "Passing Neo4j Cypher Queries as GraphQL in go lang?",
    postDate: "10/10/2022",
    postBody:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde inventore exercitationem fugit, veritatis reprehenderit est, ex doloribus quibusdam debitis nihil iusto. Doloremque assumenda incidunt quasi illum at optio, reprehenderit maxime",
    postDescription:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    postCategory: "neo4j",
    postCategoryLink: "",
  },
];
