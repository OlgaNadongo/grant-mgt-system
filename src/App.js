import {Routes,Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar';
import Login from './Pages/Login';
// import Home from './Pages/Home';
import About from './Pages/About';
import Partner from './Pages/Partner';
import Partnerform from './components/Dashboard/Partnerform';


const App=()=>{
  return(
    <div className='main'>
      
        <Navbar/>
         <Routes>
            <Route path='/partnerform' element={<Partnerform/>}/>
            {/* <Route path='/' element={<Home/>}/>  */}
            <Route path='/' element={<About/>}/>
            <Route path='/login' element={<Login/>}/> 
            <Route path='/partner' element={<Partner/>}/>
         </Routes>
         {/* <Partner/> */}
        
             
    </div>
  );
}
export default App;