import React from 'react';
import axios from axios;
const url = "http://localhost:5000/posts";

//fetch to the posts
export const fecthPost = ()=>{
    axios.get(url)
}