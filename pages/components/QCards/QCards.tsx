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
  const [questions, setQuestions] = useState<any[]>([]);

async function fetchQuestions(){
  const {data, error}= await supabase.from('questions').select('*');
  if(error){
    console.error('Error fetchign questions', error);
  }else{
    setQuestions(data);
  }
}


  //console.log(questions);

  //DEBUG GETS EMPTY ARRAY

  useEffect(() => {
    fetchQuestions();
    
  }, []);

  return (
    <Grid container spacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      
   
    
       {questions?.map((question, index) => {
   
        return(
          <React.Fragment key={index}>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
            <Item sx={{ maxWidth: 345 }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    {/*
                    <Image
                      src={question?.userAvatarLink }
                      alt={question?.userName }
                      width={"75px"}
                      height={"75px"}
                      loading="lazy"
                    />
                    
                    */}
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={question?.title}
                subheader={question?.created_at}
              />
              <CardMedia
                component="img"
                height="194"
                image={question?.thumbnail}
                alt={question.title}
                loading="lazy"
              />

              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {question?.description}
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
                  {question?.question_tags}
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
                  <Typography paragraph>{question?.body}</Typography>
                </CardContent>
              </Collapse>
            </Item>
          </Grid>

          <Divider />
        </React.Fragment>
        );
      })}
  








    </Grid>
  );
}

/*
 const getQuestions = async function () {


try {
      

        let id = await supabase.from('questions').select(`id`);
        const createdAt = await supabase.from('questions').select(`created_at`);
        const questionTags = await supabase.from('questions').select(`question_tags`);
        const description = await supabase.from('questions').select(`description`);
        const thumbnail = await supabase.from('questions').select(`thumbnail`);
        const tags = await supabase.from('questions').select(`tags`);
        const title = await supabase.from('questions').select(`title`);
        const  body = await supabase.from('questions').select(`body`);
        console.log(id,
          createdAt,
          questionTags,
          description,
          thumbnail,tags,
          title,body);
      //MAKE SURE TO END THE STATEMENT WITHOUT A , or it will cause an error

      //.from("Questions").select(`title,body,description,thumbnail,created_at,question_tags,user_email_profile_questions`).eq("id", 5)

      //DEBUG GETS EMPTY ARRAY
//TODO setQuestions(data)
      
console.log([title].map((singletitle,index)=>{
  return (
    {singletitle}
  )
}))


    } catch (error) {
      console.log("Error has been found " + error);
    }
    return true;
  };



  /*>>>>>>>>>---GET QUESTIONS START----<<<<<<<<*/
/*

function getQuestions() {
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


