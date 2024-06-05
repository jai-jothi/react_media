import { useEffect, useState } from "react"


const useWindowSize = () => {
const [windowSize,setWindowSize]=useState({
    width:undefined,
    height:undefined
});
useEffect(()=>{
    const handleRezise =()=>{
        setWindowSize({
            width:window.innerWidth,
            height:window.innerHeight
        })
    }
    handleRezise();
    window.addEventListener("resize",handleRezise); //oru event nadakuthu, resize listen pandrom ila nadakum pothu handleResiza ah call pamdrom
    return () =>window.removeEventListener("resize",handleRezise) //cleanup mathiri use agum
},[])
  return windowSize;
}
export default useWindowSize