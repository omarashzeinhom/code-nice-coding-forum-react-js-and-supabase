import React, { useEffect, useState } from "react";
//import Image from "next/image";
import { supabase } from "../../../lib/supabaseClient";
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
  const [expandedIndex, setExpandedIndex] = useState(-1); // Initialize with -1 for no expanded item

  const handleExpandClick = (index) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };

  //LOGIC
  const [questions, setQuestions] = useState<any[]>([]);

  async function fetchQuestions() {
    const { data, error } = await supabase.from("questions").select("*");
    if (error) {
      console.error("Error fetchign questions", error);
    } else {
      setQuestions(data);
    }
  }

  useEffect(() => {
    fetchQuestions();
    // DEBUG
    //console.log(questions);
  }, []);

  return (
    <Grid container spacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {questions?.map((question, index) => {
                const isExpanded = index === expandedIndex;

        return (
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
                    expand={isExpanded}
                    onClick={() => handleExpandClick(index)}
                    aria-expanded={isExpanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
                <Collapse in={isExpanded} timeout="auto" unmountOnExit>
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
