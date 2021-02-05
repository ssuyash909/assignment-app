const showCommentReducer=(state = false,action) =>{
    switch(action.type){
        case 'SHOWCOMMENT' : 
            state = !state;
            return state;
        
        
        default : return state;
      }

};

export default showCommentReducer;