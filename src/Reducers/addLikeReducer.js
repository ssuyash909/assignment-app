
    export const addLikeReducer =(state =[],action) =>{
        switch(action.type){
          case 'ADDLIKE' : 
                state = action.up
                state[action.indx].likes  = state[action.indx].likes +1;
                return state;
        default : return state;
        }
    }
    
    export default addLikeReducer;