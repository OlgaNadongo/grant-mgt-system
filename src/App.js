import {Routes,Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar';
import Login from './components/Login';
import Home from './components/Home';
import About from './components/About';
import Partner from './components/Dashboard/Partner';
import Partnerform from './components/Dashboard/Partnerform';


const App=()=>{
  return(
    <div className='main'>
      
        <Navbar/>
         <Routes>
            <Route path='/partnerform' element={<Partnerform/>}/>
            <Route path='/' element={<Home/>}/> 
            <Route path='/about' element={<About/>}/>
            <Route path='/login' element={<Login/>}/> 
         </Routes>
         <Partner/>
        
             
    </div>
  );
}
export default App;