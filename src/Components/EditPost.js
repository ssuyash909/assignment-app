import React from 'react'
import {useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {editpost} from '../Actions'
const EditPost = ({onChange,index}) => {

    const dispatch = useDispatch();
    const currentpost = useSelector(state => state.posts[index].text);
    const[currentpText,setpost]=useState(currentpost)
    
    const handleSubmit =  (e) => {
        e.preventDefault();
        dispatch(editpost(index,currentpText))
        onChange();
    }

    return (
        <div className='container-6'>    
            <form className='add-form' onSubmit={handleSubmit}> 
                <div className='form-control texts'>
                    <label className='texts'>Edit</label>
                    <input type='text' value={currentpText} onChange={(e)=>setpost(e.target.value)} className='texts' />   
                </div>
                <input type ='submit' value='Save' className='btn btn-block texts' />
            </form>
        </div>
    )
}



export default EditPost
