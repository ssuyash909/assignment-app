import React from 'react'
import Post from './Post'
import {useSelector,useDispatch} from 'react-redux'
import {deletepost} from '../Actions'



const Posts = () => {
  const allposts = useSelector(state => state.postadd);
  const dispatch = useDispatch();
  
  const delpost=(id) =>{
    console.log(id+"");
    dispatch(deletepost(id,allposts))
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
