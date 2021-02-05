import React from 'react'
import Comment from './Comment'
import {FaComment} from 'react-icons/fa';
import {FaThumbsUp} from 'react-icons/fa';
import {FaRegUser} from 'react-icons/fa';
import {useDispatch,useSelector} from 'react-redux'
import {show} from '../Actions'
import AddComment from './AddComment'
import {useState} from 'react'


const Post = ({post, index}) => {

 // const showcb =  useSelector(state => state.showComment)
  //const dispatch = useDispatch();
  const[showcb,set] = useState(false)

  const change=()=>{
    console.log(index);
    set(false)
  }
  return (
      <div className="flex-column-1">
          <div className="flex-column-2">
            
            <FaRegUser size={40}/>
            <h6 className="texts">{post.User} {post.text}</h6>
          </div>
         
        {

             post.comments.map((cmnt,idx) =>(cmnt !== undefined) ?<div className="flex-column-3"><Comment singleComment={cmnt} indx={idx}/></div>:console.log("Not possible") ) 
            
        }

<div>
            <div className="flex-container-2">
               <div className="p-2"><h6 className="texts">Comments:{post.comments.length}Likes:{post.likes}</h6></div>
            </div>
            <div className="flex-container-1">
              <div className="flex-container-1"><FaThumbsUp size={40}/> <h6 className="texts">Like</h6></div>
              <div className="flex-container-1" >
              < FaComment size={40} onClick={() =>set(true)}  /><h6 className="texts">Comment</h6></div></div>
          </div>
              {
                showcb && <div className='flex-row'><AddComment onChange={change} index={index}/></div>
              }
            
       
        
      </div>
  )
}

export default Post

