import React from 'react'
import Post from './Post'
import {useSelector,useDispatch} from 'react-redux'
import {deletepost} from '../Actions'



const Posts = () => {
  const allposts = useSelector(state => state.posts);
  const dispatch = useDispatch();
  
  const delpost=(id) =>{
    dispatch(deletepost(id))
  }
    
  return (
    <div className="container">
      {
        allposts.map((singlepost, index) => {return (<Post post={singlepost} index={index} onDelete={delpost}/>)})
      }
    </div>
  );

}

export default Posts
