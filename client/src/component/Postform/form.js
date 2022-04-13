import React from 'react';
import useStyles from "./style";
const Formpost = ()=>{
    const classes = useStyles();
    return(
<form>
<h2>Add your comment</h2>
    <input type="text" placeholder="Title"/>
    <label for=""></label>
</form>
    )
};
export default Formpost;