const editPostReducer =(state =[],action) =>{
    switch(action.type){
      case 'EDITPOST' : 
        state = action.up
        state[action.indx].text = action.nt
        return state;
      
      
      default : return state;
    }
}


export default editPostReducer
