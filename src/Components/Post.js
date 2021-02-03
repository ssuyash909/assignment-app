import React from 'react'
import Comment from './Comment'
import {FaComment} from 'react-icons/fa';
import {FaThumbsUp} from 'react-icons/fa';


const Post = ({post, index}) => {
 
    return (
        
          <div className="d-row">
            <div>
            <h6 className="texts"> Post :{index+1} </h6>
            <h6 className="texts">User :{post.User} {post.text}</h6></div>
            <div>
            <div className="flex-container-2">
          <div className="p-2"><h6 className="texts">Comments:{post.comments.length}Likes:{post.likes}</h6></div>
           </div>
          <div className="flex-container-1">
            <div className="flex-container-1"><FaComment/> <h6 className="texts">Like</h6></div>
            <div className="flex-container-1" ><FaThumbsUp/><h6 className="texts">Comment</h6></div>
           </div>
           
    
        </div>
          {
               post.comments.map((cmnt,idx) => <div className="d-row"><Comment singleComment={cmnt} indx={idx}/></div> ) 
              
          }
         
          
        </div>
    )
}

export default Post
