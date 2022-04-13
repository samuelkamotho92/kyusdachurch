import React from "react";
import {Container , AppBar , Grid , Grow ,Typography , IconButton } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import Posts from "../Posts/posts";
import Form from "../Postform/form";
import useStyles from "./Post/style";
const Comments = () => {
    const classes = useStyles();
    return ( 
        <Container maxWidth="lg">
    <AppBar position="static" color="inherit" 
    className={classes.appbar}>  <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={{ mr: 2 }}            
                >
<MenuIcon />
                </IconButton>
<Typography variant="h1" align="left"
 className={classes.heading}>
    LESSON DISCUSSION
</Typography>
<img src="dfdsfsd" alt="lesson" height=""
 className={classes.image}/>
            </AppBar>
            <Grow in>
                <Container>
<Grid container justify="space-between" alignItems="stretch" spacing={3}>
<Grid item  xs={12} sm={7}>
<Posts />
</Grid>
<Grid item xs={12} sm={5}>
<Form />
</Grid>
</Grid>                 
                    </Container>
                </Grow>
           

        </Container>
     ); 
} 
export default Comments;