import React from 'react'
import {useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {addcomment} from '../Actions'

const AddComment = ({onChange,index}) => {
    const[comment,setComment] = useState('');
    const dispatch = useDispatch();
    const allposts = useSelector(state => state.postadd);
    
    const handleSubmit =  (e) => {
        e.preventDefault();

        if(!comment){
            alert('Please add some text to comment');
            return
        }

        const cuser ="User1";
        dispatch(addcomment(index,{cuser,comment},allposts))
        setComment('');
        onChange();
    }

    return (
        <div className='container-6'>
            <form className='add-form' onSubmit={handleSubmit}> 
                <div className='form-control texts'>
                    <label>Comment</label>
                    <input type='text' placeholder='Enter Comment' value={comment} onChange={(e)=>setComment(e.target.value)}/>   
                </div>
                <input type ='submit' value='Comment' className='btn btn-block texts' />
            </form>
        </div>
    )
}

export default AddComment
