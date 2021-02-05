import {useState} from 'react'
import {useDispatch} from 'react-redux'
import React from 'react'
import {addpost} from '../Actions'
const AddPost = () => {
    const dispatch = useDispatch();
    const[text,setText] = useState('');
    const handleSubmit =  (e) => {
      
        e.preventDefault();

        if(!text){
            alert('Please add some text to post');
            return
        }
        const User ="User 1";
        const d = new Date();
        const day = d.toDateString();
        const self =true;
        const comments =[];
        const likes =0;
        const np ={self,User,text,day,likes,comments};
        dispatch(addpost(np));
        setText('');
   }

    return (
        <form className='add-form' 
        onSubmit={handleSubmit}> 
        <div className='form-control texts'>
        <label>Post</label>
        <input type='text' 
        placeholder='Write something here.....' 
        value={text}

        onChange={(e)=>setText(e.target.value)}
        />   
        </div>
        <input type ='submit' value='Post' className='btn btn-block texts' />
        </form>
    )
}

export default AddPost
