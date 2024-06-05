
import axios from 'axios';
import { useEffect, useState } from 'react';

 const Useaxiosfetch = (dataUrl) => {
 const[data,setData]=useState([]); //contoll the data //dataurl =yrl venum
 const[fetchError,setFetchError]=useState(null); //error ku
 const[isLoading,setIsLoading]=useState(false); //loading pandrathuku 
//seira velaiya useeffect la poduvom,oru vati data load aga 
 useEffect(()=>{
    let isMounted=true;//component load acha ilaiya ,,,dom create aguthu,, component lifecyle=>component initilized,mount,update,unmount ,veliya varum
   const source=axios.CancelToken.source();//dom ready ah ilana request cancel pannidum
   const fetchData=async (urls)=>{
    setIsLoading(true);//loading mudichina true kudu
    try{
    const response=await axios.get(urls,{
        Cancel:source.token
    });
    if(isMounted){
        setData(response.data);
        setFetchError(null);
    }
   }
   catch(err){

    if(isMounted){
        setFetchError(err.message)
        setData([])
    }
     
   }
   finally{
    isMounted&& setTimeout(() =>setIsLoading(false),2000)
   }
}
fetchData(dataUrl);
const cleanup=()=>{
    isMounted=false;
    source.cancel();
}
return cleanup
},[dataUrl]) //dataurl nadakum intha url vantha

  return {data,fetchError,isLoading}
}
export default Useaxiosfetch;
