const posts =[
     
    {
      "self" : true,
      "User":"User 1",
      "text": "Hey Everone",
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

export const addPostReducer =(state =posts,action) =>{
        switch(action.type){
          case 'ADDPOST' : 
              state = [...state,action.newp]
              return state;
          
          
          default : return state;
        }
    }

    export const addCommentReducer =(state =[],action) =>{
        switch(action.type){
          case 'ADDCOMMENT' : 
                state = action.up
                console.log(state)
              state[action.indx].comments.push(action.newc)
              return state;
          
          
          default : return state;
        }
    }
    
    

    