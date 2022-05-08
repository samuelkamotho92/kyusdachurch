import React from "react";
import {Container , AppBar , Grid , Grow ,Typography , IconButton } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import Posts from "../Posts/posts";
import Form from "../Postform/form";
import useStyles from "./Post/style";
import Authnavbar from "../authNav";
const Comments = () => {
    const classes = useStyles();

    return ( 
    <div className="lessondisc">
            <Authnavbar />
            <Typography variant="h1" align="left"
 className={classes.heading}>
    LESSON DISCUSSION
</Typography>  
<Grid container justify="space-between" alignItems="stretch" spacing={3}>
<Grid item  xs={12} sm={7}>
<Posts />
</Grid>
<Grid item xs={12} sm={5}>
<Form />
</Grid>
</Grid>                 
    </div>
                 
     ); 
} 
export default Comments;