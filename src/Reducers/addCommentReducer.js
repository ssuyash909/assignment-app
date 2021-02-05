const addCommentReducer =(state =[],action) =>{
    switch(action.type){
      case 'ADDCOMMENT' : 
        state = action.up
        state[action.indx].comments.push(action.newc)
        return state;
      
      
      default : return state;
    }
}

export default addCommentReducer;