import * as api from '../Api/api';
//actions creators
//describe what you will do

// action({type:"liked",data})
export const getPost = ()=> async (dispatch)=>{
    //object
    try{  
const { data } = await api.fetchPost();
console.log(data)
dispatch({ type:"FETCH_ALL",
 payload:data});
    }catch(err){
console.log(err);
    }
}

  

export const createPost = (post) => async (dispatch) => {
    try {
      const { data } = await api.createPost(post);
      console.log(data); 
      dispatch({ type: "CREATE", payload:data});
    } catch (error) {
      console.log(error.message);
    }
  };