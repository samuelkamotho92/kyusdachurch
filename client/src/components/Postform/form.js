import React from 'react';
import {useState} from 'react';
import { makeStyles } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import {useDispatch} from 'react-redux';
import {createPost} from '../../actions/post'

const useStyles = makeStyles((theme)=>({
    btn:{
        backgroundColor:"violet",
        '&:hover':{
             backgroundColor:'pink'
        },
        fontSize:'large',
        padding:'5px',
        margin:'5px'
   },
   inputForm:{
       backgroundColor:"crimson",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        padding:"5px"
   },
   inputField:{
       padding:"5px",
       margin:"10px auto"
   },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}))


const Formpost = ()=>{
    const [postData, setPostData] = 
    useState({ 
     title: '',
    comment: '', 
      tags: '', 
      selectedFile: '' });

    const classes = useStyles();
  const dispatch = useDispatch();
    const handleSubmit = (e)=>{
e.preventDefault();
  dispatch(createPost(postData));
e.preventDefault();
    }
    const clear = (e)=>{
e.preventDefault();

    }
    return(
<Paper className={classes.paper}>
<form onSubmit={handleSubmit} 
className={classes.inputForm}>
<h2>Add your comment</h2>
<TextField  variant="outlined" label="Title" 
fullWidth value={postData.title} 
onChange={(e) => setPostData({ ...postData, title: e.target.value })}/>
       
<TextField name="message" variant="outlined"
        label="Message"  multiline rows={4} 
        value={postData.comment} onChange={(e) => 
            setPostData({ ...postData, comment: e.target.value })}/>
    
       <TextField type="text"  variant="outlined" label="tags"
     id='tags' 
     value={postData.tags}
     className={classes.inputField}

    onChange={(e)=>
    { setPostData({ ...postData, tags: e.target.value.split(',') })}}
    />

    <div className={classes.fileInput}>
<FileBase
type="file"
multiple={false}
onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} 
 
>
</FileBase>
    </div>
       {/* <input type="text" placeholder="Comment"
     id='comment' 
     value={selectedFile}
     className={classes.inputField}
    onChange={(e)=>{setselectedFile(e.target.value)}}
    /> */}
<button type="submit" className={classes.btn}>SUBMIT</button>
<button className={classes.btn}  onClick={clear}>CLEAR</button>
</form>
        </Paper>
    )
};
export default Formpost;