import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import Grid from "@mui/material/Grid";
import { red } from "@mui/material/colors";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";

const useStyles = makeStyles((theme) => ({
  devotion: {
    marginTop: "50px",
    marginBottom: "30px",
  },
  item: {
    borderBottom: "1px solid #fafafa",
    boxShadow: "12px 10px rgba(0,0,0,0.1)",
    transition: "ease-in-out 1s",
    transitionDelay: "0.5s",
    backgroundColor: "white",
    marginTop: "15px",
    marginBottom: "15px",
    cursor: "pointer",
    "& :hover ": {
      backgroundColor: "wheat",
    },
  },
  headerTitle:{
      textAlign:"center",
      padding:"10px",   
      marginBottom:"20px",
  },
  actionbutton:{
    display:"flex",
    justifyContent:"space-between"
  }
}));
const Dailydevotion = () => {
  const classes = useStyles();
  return (
    <>
      <>
        <div className={classes.headerTitle}> 
          <Typography variant="subtitle2" color="text.primary">
            Daily Devotions
          </Typography>
          <Typography variant="h5" color="text.secondary">
            Strengthen yourself by Prayers And God's word each Morning
          </Typography>
        </div>
      </>
      <Grid container className={classes.devotion} spacing={2}>
        <Grid item md={4} xs={12} className={classes.item}>
          <Card>
            <CardHeader
              avatar={<Avatar sx={{ bgcolor: red[500] }}>DEV</Avatar>}
              action={
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              }
              title="Sons and Daughters Dailydevotion"
              subheader="September 15, 2022"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Experience God's Wisdom each day as you are lead by the Holy
                Spirit. Walk effortlessly into success and happiness and
                understand the Father's love for you.
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="trash"
                style={{ backgroundColor: "red" }}
              >
                <DeleteIcon />
              </IconButton>
            </CardActions>
           
          </Card>
        </Grid>
        <Grid item md={4} xs={12} className={classes.item}>
          <Card>
            <CardHeader
              avatar={<Avatar sx={{ bgcolor: red[500] }}>DEV</Avatar>}
              action={
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              }
              title="Sons and Daughters Dailydevotion"
              subheader="September 15, 2022"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Experience God's Wisdom each day as you are lead by the Holy
                Spirit. Walk effortlessly into success and happiness and
                understand the Father's love for you.
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="trash"
                style={{ backgroundColor: "red" }}
              >
                <DeleteIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={4} xs={12} className={classes.item}>
          <Card>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="Author">
                  DEV
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Sons and Daughters Dailydevotion"
              subheader="September 15, 2022"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Experience God's Wisdom each day as you are lead by the Holy
                Spirit. Walk effortlessly into success and happiness and
                understand the Father's love for you.
              </Typography>
            </CardContent>
            <CardActions className="actionbutton">
              <IconButton
                aria-label="add to favorites"
                style={{ backgroundColor: "carousel" }}
              >
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="trash"
                style={{ backgroundColor: "red" }}
              >
                <DeleteIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Dailydevotion;
