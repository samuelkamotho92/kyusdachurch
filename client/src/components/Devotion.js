import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import FavoriteIcon from "@mui/icons-material/Favorite";
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
              avatar={<Avatar sx={{ bgcolor: red[500] }}>A</Avatar>}
              action={
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              }
              title="Sons and Daughters Dailydevotion"
              subheader="September 15, 2022"
            />
            {/* <CardMedia
        component="img"
        height="100px"
        image=""
        alt="prayers"
      /> */}
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
              <Link to={"./dailydevotion"}>LEARN MORE</Link>
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={4} xs={12} className={classes.item}>
          <Card>
            <CardHeader
              avatar={<Avatar sx={{ bgcolor: red[500] }}>A</Avatar>}
              action={
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              }
              title="Sons and Daughters Dailydevotion"
              subheader="September 15, 2022"
            />
            {/* <CardMedia
        component="img"
        height="100px"
        image="https://www.google.com/search?q=church+pic&sxsrf=APq-WBsoIniwquP7029WglE7E0_mICecuw:1648982855019&tbm=isch&source=iu&ictx=1&vet=1&fir=RFO90aGsUdEI_M%252CNIKD6y-L2uJDAM%252C_%253B9vrdnMo3m5p7yM%252CvHy6M-H7pdpDbM%252C_%253BK54yv5Cq3clVQM%252CvHy6M-H7pdpDbM%252C_%253B-g4H97J0e6s1JM%252CA1C9Y9bP11G-rM%252C_%253BDWzot7eqpPj3iM%252CH9l2sXSyNLIoaM%252C_%253BVjPTW74Uee5DkM%252CzyD7mBEZu4CfIM%252C_%253B231o20be_usKkM%252CvHy6M-H7pdpDbM%252C_%253BYivsK6Flc0VdIM%252CA1C9Y9bP11G-rM%252C_%253BupoZyXEjhARXdM%252CAgJrkxCN8hqKBM%252C_%253BURCSNGK2Vlf2xM%252CNIKD6y-L2uJDAM%252C_%253BhTgW16iVUpFo6M%252CNIKD6y-L2uJDAM%252C_%253BZRaDRr4mbvA3hM%252CsZZBImGlupIqgM%252C_%253BxIdWC0m9tZtvqM%252CvHy6M-H7pdpDbM%252C_&usg=AI4_-kQsyqxTGbXOPApIDHsTET4Cep8fIA&sa=X&ved=2ahUKEwj3ocHq2_f2AhVIhv0HHa2LDugQ9QF6BAgjEAE#imgrc=9vrdnMo3m5p7yM"
        alt="prayers"
      /> */}
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
              <Link to={"./dailydevotion"}>LEARN MORE</Link>
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={4} xs={12} className={classes.item}>
          <Card>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="Author">
                  A
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

            {/* <CardMedia
        component="img"
        height="100px"
        image="/client/src/assets/image5.jpg"
        alt="prayers"
      /> */}
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Experience God's Wisdom each day as you are lead by the Holy
                Spirit. Walk effortlessly into success and happiness and
                understand the Father's love for you.
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton
                aria-label="add to favorites"
                style={{ backgroundColor: "carousel" }}
              >
                <FavoriteIcon />
              </IconButton>
              <Link to={"./dailydevotion"}>LEARN MORE</Link>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Dailydevotion;
