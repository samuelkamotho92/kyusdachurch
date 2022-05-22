/* eslint-disable import/no-anonymous-default-export */
//reducers accept actions and state from the actions file
//checks which action was done and updates it,how tha actions will transform the state
const post = (posts = [],action)=>{
switch (action.type) {
    case 'FETCH_ALL':  
    //return data
    return  action.payload;
    case 'CREATE':
    //current post and the data from payload
    return [...posts,action.payload]
   default:
        return posts;
}
}
export default post