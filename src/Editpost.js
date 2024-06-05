import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DataContext from './context/Datacontext';


const Editpost = () => {

  const{posts,handleEdit,editBody,setEditBody,editTitle,setEditTitle}=useContext(DataContext)
  const {id}=useParams();
  const post=posts.find(post =>(post.id).toString()===id)
 useEffect(()=>{
  if(post){
    setEditTitle(post.title);
    setEditBody(post.body);
  }
  },[post,setEditBody,setEditTitle])
  
  return ( 
    <main className='newpost'>
    {editTitle &&
    <>
    <h2>Edit post</h2>
    <form className='newpostform ' onSubmit={(e)=>e.preventDefault()}>
      <label htmlFor='postTitle'>Title:</label>
      <input 
      id="postTitle"
      type='text'
      required
      value={editTitle}
      onChange={(e)=>setEditTitle(e.target.value)}
      />
         <label htmlFor='postBody'>Post:</label>
         <input
         id='postBody'
         required
         type='text'
         value={editBody}
         onChange={(e)=>setEditBody(e.target.value)}/>
         <button type='submit' onClick={()=>handleEdit(post.id)}>Submited</button>
    </form>
    </>
}
{!editTitle &&
     <>
     <h2>page not display</h2></>
     }
    
    </main>

   )
}
export default Editpost;
