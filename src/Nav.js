import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import DataContext from './context/Datacontext'

export const Nav = () => {

  const{search,setSearch}=useContext(DataContext);
  return (
    <nav className='nav'>
    <form className='searchform' onSubmit={(e)=>e.preventDefault()}>
       <label htmlFor='search'>Search :</label>
       <input 
       id="search"
       type='text'
       placeholder='search post'
       value={search}
       onChange={(e)=>setSearch(e.target.value)}
/>
    </form>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="post">Post</Link></li>
      <li><Link to="about">About</Link></li>
    </ul>
        
    </nav>
  )
}
