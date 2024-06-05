import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import DataContext from './context/Datacontext';


const Postpage = () => {


  const{posts,handleDelete}=useContext(DataContext);
  const {id}=useParams();


  const post=posts.find(post =>(post.id).toString()===id) // id ah string ah change haidum===id la url path id /1 
 
  return (
    <main>
    
    <article>
      {post &&
      <>
      <h1>{post.title}</h1>
      <p>{post.datetime}</p>
      <p>{post.body}</p>
      <Link to={`/edit/${post.id}`}>
      <button className='editbutton'>Edit</button></Link>
      <button onClick={()=>handleDelete(post.id)}>Delete post</button>
      </>
      }
      {!post && 
      <>
         <h2>page not found</h2>
         <p>Weell, that's disappointing</p>
         <p>
          <Link to='/'>Visit our Homepage</Link>
         </p>
      </>
      }
    </article>
   
    </main>

  )
}
export default Postpage
