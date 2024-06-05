import {useState,useEffect } from "react";
import useWindowSize from '../hooks/useWindowSize';
import Useaxiosfetch from '../hooks/Useaxiosfetch';
import api from '../Api/posts';
import { format} from "date-fns";
import { useNavigate } from "react-router-dom";
import { createContext } from "react";

const DataContext= createContext({}) //->empty object set

//yentha components ku data anupanum nu decide panum  
//yentha data anupanum nu solanum value={{}} kupdanum
export const DataProvider=({children})=>{

    const[posts,setPosts]=useState([]);
    const[search,setSearch]=useState('');
    const[searchresult,setSearchResult]=useState([])//type pandrarthu match ana atha inga katanum
    const[postTitle,setPostTitle,]=useState('');
    const[postBody,setPostBody ]=useState('');
    //handlesumbit,postTitle,setPostTitle,postBody,setPostBody 
    const[editTitle,setEditTitle]=useState('');
  const[editBody,setEditBody]=useState('');
  const navi=useNavigate();
  const{width}=useWindowSize();
  const{data,fetchError,isLoading}=Useaxiosfetch("http://localhost:3500/posts");
  
  useEffect(()=>{
     setPosts(data);//oru vati run aga use pandrom
  },[data])
  
  
    useEffect(()=>{
    const filtersearchs=posts.filter((post)=>(
      ((post.body).toLowerCase()).includes(search.toLowerCase())
      ||((post.title).toLowerCase()).includes(search.toLowerCase())
     
    ));
    setSearchResult(filtersearchs)
    },[posts,search])
  
  const handleSumbit=async (e)=>{
  e.preventDefault();
  const id=posts.length ? posts[posts.length-1].id+1: 1;
  
  // const id=items.length ? items[items.length-1 ].id +1 : 1;
  console.log()
  const date=new Date();
  const datetime=format(date,'yyyy/MM/dd HH:mm:ss'); //package install npm i date-fns -s
  
  const newPost={id, title: postTitle,datetime, body:postBody
  };
  try{
  const response=await api.post('/posts',newPost)
  const allposts=[...posts, response.data];
  setPosts(allposts); //ithula store haidum
  setPostTitle('');//ithum kilaiyum empty haidum
  setPostBody('');
  navi('/')
  }
  catch(err){
    if(err.response){
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);
    }else{
      console.log(`Error:${err.message}`);
    }
  }
  }
   
  const handleDelete =async (id)=>{
    try{
    await api.delete(`/posts/${id}`)
       const postlist=posts.filter(post=>post.id !== id);//atha item thavara
      
       setPosts(postlist);
       navi('/');
      } 
      catch(err){
        console.log(`Error:${err.message}`)
      }
  }
  const handleEdit=async(id)=>{
  
      const date=new Date();
  const datetime=format(date,'yyyy/MM/dd HH:mm:ss'); //package install npm i date-fns -s
  
  const updatPost={id, title:editTitle, datetime, body:editBody
  };
  try{
    const response=await api.put(`/posts/${id}`,updatPost)
    setPosts(posts.map(post =>post.id===id ?{...response.data}:post));
    setEditTitle('');
    setEditBody('');
    navi('/')
    }
    catch(err){
      console.log(`Error:${err.message}`)
    }
  }
 
  
    return (
        <DataContext.Provider  value={{
        width,search,setSearch,
        searchresult,fetchError,isLoading,
        handleSumbit,postTitle,setPostTitle,postBody,setPostBody,
        posts,handleEdit,editBody,setEditBody,editTitle,setEditTitle,handleDelete
        }}>
        {children}
        </DataContext.Provider>
    )
}
export default DataContext;