import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import { red } from "@material-ui/core/colors";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import { CardActions } from "@mui/material";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Collapse from '@mui/material/Collapse';
import {useState} from "react";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core";
import image1 from "../assets/missionvision.jpg";
const useStyles = makeStyles((theme)=>({
    item: {
        maxWidth: "200px",
      },
      mediapic: {
        height: "50px",
      },
}))
const Leader = () => {
    const classes = useStyles();
    const [expanded,setExpanded] = useState(false);
    const handleExpandClick1 = () => {
        setExpanded(!expanded);
      };
      const handleExpandClick2 = () => {
        setExpanded(!expanded);
      };
      const handleExpandClick3 = () => {
        setExpanded(!expanded);
      };
    return ( 
        <Grid container spacing={2}>
            {/* <img src={image1} alt="trial" /> */}
        <Grid item md={4} xs={12} className={classes.item}>
          <Card >
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="Elder">
                  E
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="First elder Ezra"
              subheader="ElDER EZRA AYUKA"
            style={{height:"50px"}}/>
    <CardMedia  style={{height:"100px"}}
    image={image1}
    />
    {/* <img src={image1} alt="elder"/><CardMedia/> */}
               <CardActions disableSpacing>
    <ExpandMore
      expand={expanded}
      onClick={handleExpandClick1}
      aria-expanded={expanded}
      aria-label="show more"
    >
      <ExpandMoreIcon />
    </ExpandMore>
  </CardActions>
  <Collapse in={expanded} timeout="auto" unmountOnExit>
    <CardContent>
      <Typography paragraph>Depertments He Leads</Typography>
      <Typography paragraph>
        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
        aside for 10 minutes.
      </Typography>
      <Typography paragraph>
        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
        medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
        occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
        large plate and set aside, leaving chicken and chorizo in the pan. Add
        pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
        stirring often until thickened and fragrant, about 10 minutes. Add
        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
      </Typography>
      <Typography paragraph>
        Add rice and stir very gently to distribute. Top with artichokes and
        peppers, and cook without stirring, until most of the liquid is absorbed,
        15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
        mussels, tucking them down into the rice, and cook again without
        stirring, until mussels have opened and rice is just tender, 5 to 7
        minutes more. (Discard any mussels that don’t open.)
      </Typography>
      <Typography>
        Set aside off of the heat to let rest for 10 minutes, and then serve.
      </Typography>
    </CardContent>
  </Collapse>
          </Card>
        </Grid>
            {/* <img src={image1} alt="trial" /> */}
            <Grid item md={4} xs={12} className={classes.item}>
          <Card >
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="Elder">
                  E
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="First elder Ezra"
              subheader="ElDER EZRA AYUKA"
            style={{height:"50px"}}/>
    <CardMedia  style={{height:"100px"}}
    image={image1}
    />
    {/* <img src={image1} alt="elder"/><CardMedia/> */}
               <CardActions disableSpacing>
    <ExpandMore
      expand={expanded}
      onClick={handleExpandClick2}
      aria-expanded={expanded}
      aria-label="show more"
    >
      <ExpandMoreIcon />
    </ExpandMore>
  </CardActions>
  <Collapse in={expanded} timeout="auto" unmountOnExit>
    <CardContent>
      <Typography paragraph>Depertments He Leads</Typography>
      <Typography paragraph>
        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
        aside for 10 minutes.
      </Typography>
      <Typography paragraph>
        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
        medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
        occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
        large plate and set aside, leaving chicken and chorizo in the pan. Add
        pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
        stirring often until thickened and fragrant, about 10 minutes. Add
        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
      </Typography>
      <Typography paragraph>
        Add rice and stir very gently to distribute. Top with artichokes and
        peppers, and cook without stirring, until most of the liquid is absorbed,
        15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
        mussels, tucking them down into the rice, and cook again without
        stirring, until mussels have opened and rice is just tender, 5 to 7
        minutes more. (Discard any mussels that don’t open.)
      </Typography>
      <Typography>
        Set aside off of the heat to let rest for 10 minutes, and then serve.
      </Typography>
    </CardContent>
  </Collapse>
          </Card>
        </Grid>
            {/* <img src={image1} alt="trial" /> */}
            <Grid item md={4} xs={12} className={classes.item}>
          <Card >
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="Elder">
                  E
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="First elder Ezra"
              subheader="ElDER EZRA AYUKA"
            style={{height:"50px"}}/>
    <CardMedia  style={{height:"100px"}}
    image={image1}
    />
    {/* <img src={image1} alt="elder"/><CardMedia/> */}
               <CardActions disableSpacing>
    <ExpandMore
      expand={expanded}
      onClick={handleExpandClick3}
      aria-expanded={expanded}
      aria-label="show more"
    >
      <ExpandMoreIcon />
    </ExpandMore>
  </CardActions>
  <Collapse in={expanded} timeout="auto" unmountOnExit>
    <CardContent>
      <Typography paragraph>Depertments He Leads</Typography>
      <Typography paragraph>
        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
        aside for 10 minutes.
      </Typography>
      <Typography paragraph>
        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
        medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
        occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
        large plate and set aside, leaving chicken and chorizo in the pan. Add
        pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
        stirring often until thickened and fragrant, about 10 minutes. Add
        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
      </Typography>
      <Typography paragraph>
        Add rice and stir very gently to distribute. Top with artichokes and
        peppers, and cook without stirring, until most of the liquid is absorbed,
        15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
        mussels, tucking them down into the rice, and cook again without
        stirring, until mussels have opened and rice is just tender, 5 to 7
        minutes more. (Discard any mussels that don’t open.)
      </Typography>
      <Typography>
        Set aside off of the heat to let rest for 10 minutes, and then serve.
      </Typography>
    </CardContent>
  </Collapse>
          </Card>
        </Grid>
      </Grid>
     );
}
 
export default Leader;