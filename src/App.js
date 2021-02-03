import AddPost from './Components/AddPost'
import Post from './Components/Post'
import {useState} from 'react'
function App() {
  const dummyposts =  [
     
    {
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
      ]
      const [posts,setPosts] =  useState(dummyposts)


//Add Task
const addPost = (text) =>{
  const User ="User 1";
  const d = new Date();
  const day = d.toDateString();
  const self =true;
  const comments =[];
  const likes =0;
  const newPost ={self,User,text,day,likes,comments};
  console.log(newPost);
  let newPosts = [...posts,newPost] 
  console.log(newPosts);
  setPosts(newPosts)
}
  return (
    <div className="container">
     
    <AddPost onAdd={addPost}/>
     {posts.map((singlepost, index) => (
                        <Post
                        post={singlepost}
                        index={index}
                        />
                    ))}
    </div>
  );
}

export default App;
