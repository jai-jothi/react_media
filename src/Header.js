import { useContext } from "react"
import { FaLaptop, FaMobileAlt, FaTabletAlt } from "react-icons/fa"
import DataContext from "./context/Datacontext"


const Header=({title})=>{
  //
  const {width}=useContext(DataContext);
  return(
    <header>
      <h1>{title}</h1>
      {width < 786 ? <FaMobileAlt/>
      :width  < 932 ? <FaTabletAlt/>
    :<FaLaptop/>}
    </header>
  )
}
export default Header