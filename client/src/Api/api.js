/* eslint-disable no-unused-vars */
import axios from 'axios';
const url = "http://localhost:5000/posts";

//fetch to the posts
export const fetchPost = ()=>axios.get(url);
export const createPost = (newpost)=>axios.post(url,newpost);
