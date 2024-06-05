import React, { useContext } from 'react'
import DataContext from './context/Datacontext'

export const Newpost = () => {
   
  const {handleSumbit,postTitle,setPostTitle,postBody,setPostBody}=useContext(DataContext);
  
  return (
    <main className='newpost'>
    <h1>Newpost</h1>
    <form className='newpostform ' onSubmit={handleSumbit}>
      <label htmlFor='postTitle'>Title:</label>
      <input 
      id="postTitle"
      type='text'
      required
      value={postTitle}
      onChange={(e)=>setPostTitle(e.target.value)}
      />
         <label htmlFor='postBody'>Post:</label>
         <input
         id='postBody'
         required
         type='text'
         value={postBody}
         onChange={(e)=>setPostBody(e.target.value)}/>
         <button type='submit'>Submit</button>
    </form>
    </main>
)
  
}
