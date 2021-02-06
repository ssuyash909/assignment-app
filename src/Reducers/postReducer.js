let initialposts =[
     
    {
        "id":1,
      "self" : true,
      "User":"User 1",
      "text": "Hey Everyone",
      "day":"5th Feb,2020",
      "likes":5,
      "comments":[
          {
          "cuser":"User2",
          "comment":" Hey!!!!"},
          {"cuser":"User2",
          "comment":"How are You"} ]
      },
      {
        "id":2,
          "self" : false,
          "User":"User 2",
          "text": "Hey Let's Plan for Goa trip",
          "day":"6th Feb,2020",
          "likes":1,
          "comments":[
              {
              "cuser":"User4",
              "comment":"Yeah.Sure"},
              {"cuser":"User3",
              "comment":"when you are willing to go? "} ]
      },
      {
        "id":3,
          "self" : false,
          "User":"User 1",
          "text": "Guyss,How's your internship going?",
          "day":"7th Feb,2020",
          "likes":2,
          "comments":[
              {
              "cuser":"User4",
              "comment":"Great"},
              {"cuser":"User3",
              "comment":"Perfect"},
              {"cuser":"User5",
              "comment":"Not too good"} ]
      }
      ];

const postReducer =(state =initialposts,action) =>{
        switch(action.type){
          case 'ADDPOST' : 
              state = [...state,action.newp]
              return state;
        case 'DELETEPOST' : 
              let newState = state.filter((st) => {return action.indx !== st.id})
              return newState;
        case 'ADDLIKE' : 
             state[action.indx].likes  = state[action.indx].likes +1;
              return state;
        case 'EDITPOST' : 
              state[action.indx].text = action.nt
              return state;   
        case 'ADDCOMMENT' : 
              state[action.indx].comments.push(action.newc)
              return state;                  
           
          default : return state;
        }
    }


export default postReducer;
    

    