import React from 'react'
import Comment from './Comment'
import {FaComment} from 'react-icons/fa';
import {FaThumbsUp,FaEdit,FaRegWindowClose} from 'react-icons/fa';
import {FaRegUser} from 'react-icons/fa';
import {useDispatch,useSelector} from 'react-redux'
import AddComment from './AddComment'
import {useState} from 'react'
import {addlike} from '../Actions'
import EditPost from './EditPost'


const Post = ({post, index,onDelete}) => {

  const allposts = useSelector(state => state.postadd);
  const tlikes = useSelector(state => state.postadd[index].likes);
  const dispatch = useDispatch();
  const[showcb,set] = useState(false)
  const[show,setep] = useState(false)

  const change=()=>{
    set(false)
  }
  const changep=()=>{
    setep(false)
  }
  
  return (
    <div className="container flex-column-1">
        <div className="container-1">
          <div className="container-2">
            <FaRegUser size={40}/>
            <h6 className="texts">{post.User}</h6>
          </div>
          <div className="container-3">  
            <FaRegWindowClose size={40} onClick={() => {onDelete(post.id)}}/>
            <FaEdit size={40} onClick={() => setep(true)}/>
          </div>
          </div>
          {
            show && <div className='container-6'><EditPost onChange={changep} index={index}/></div>
          }
        
          
        <div className="container-4">
          <h6>{post.text}</h6>
          </div>  
        
        {
         post.comments.map((cmnt,idx) =>(cmnt !== undefined) ?<div className="flex-container-3"><Comment singleComment={cmnt} indx={idx}/></div>:console.log("Not possible") ) 
        }
        <div>
          <div className="flex-container-2">
              <div className="p-2">
                <h6 className="texts">Comments:{post.comments.length}Likes: {tlikes}</h6>
              </div>
          </div>
          <div className="flex-container-1">
            <div className="flex-container-1">
              <FaThumbsUp size={40} onClick= {() => dispatch(addlike(index,allposts))}/> 
              <h6 className="texts">Like</h6>
            </div>
            <div className="flex-container-1" >
              < FaComment size={40} onClick={() =>set(true)}  />
              <h6 className="texts">Comment</h6>
            </div>
          </div>
        </div>
        {
         showcb && <div className='container-6'><AddComment onChange={change} index={index}/></div>
        }
            
    </div>
  )
}

export default Post

