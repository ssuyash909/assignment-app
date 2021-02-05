import React from 'react'
import Post from './Post'
import {useSelector} from 'react-redux'


const Posts = () => {
    const allposts = useSelector(state => state.postadd);
    
  return (

    <div className="container">
    {
        allposts.map((singlepost, index) => {return (<Post post={singlepost} index={index}/>)})
    }
    </div>
  );

}

export default Posts
