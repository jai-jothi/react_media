import React, { useContext } from 'react'
import { Feed } from './Feed'
import DataContext from './context/Datacontext'

export const Home = () => {
  const{searchresult,fetchError,isLoading}=useContext(DataContext)
  return (
    <main className='Home'>
      {isLoading && <p>loading....</p>}
      {!isLoading && fetchError && <p style={{color:"red"}}>{fetchError}</p>}
       {!isLoading && !fetchError && (searchresult.length ? <Feed post={searchresult}/>
        :
        <p>no post to display</p>)}
        </main>
  )
}
