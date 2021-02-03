import {useState} from 'react'

const AddTask = ({ onAdd }) => {
    const[text,setText] = useState('');
    const handleSubmit =  (e) => {
      
        e.preventDefault();

        if(!text){
            alert('Please add some text to post');
            return
        }
        onAdd(text);
        setText('');
   }

    return (
        <form className='add-form' 
        onSubmit={handleSubmit}> 
        <div className='form-control'>
        <label>Post</label>
        <input type='text' 
        placeholder='Write something here.....' 
        value={text}
        onChange={(e)=>setText(e.target.value)}
        />   
        </div>
        <input type ='submit' value='Post' className='btn btn-block' />
        </form>
    )
}

export default AddTask
