
// import { Link, Route, Routes } from 'react-router-dom';
import { About } from './About';
import './App.css';
import { Footer } from './Footer';
import Header  from './Header';
import { Home } from './Home';
import  Missing  from './Missing';
import { Nav } from './Nav';
import { Newpost } from './Newpost';
import Postpage  from './Postpage';
// import { Post } from './Post';
// import { Postlayout } from './Postlayout';
import { Route, Routes} from 'react-router-dom';
import Editpost from './Editpost';
import { DataProvider } from './context/Datacontext';

function App() {
return (
    <div className="App">
     <DataProvider>
      <Header title="Sample websites" />
      <Nav />     
<Routes>
    <Route path='/' element={<Home/>}/>
  <Route path='post'> 
  <Route index element={<Newpost/>}/>
 <Route path=':id' element={<Postpage/>}/>
</Route>
<Route path='/edit/:id' element={<Editpost/>}></Route>
     <Route path='about' element={<About/>}/>
      <Route path='*' element={<Missing/>}/>
      </Routes>
      <Footer/>
      </DataProvider> 
    </div>
  );
}

export default App;