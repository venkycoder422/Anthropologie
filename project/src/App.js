
import './App.css';
import LandingPage from './Components/LandingPage';
import {Routes, Route} from "react-router-dom"
import  {Cloths} from "./Components/Cloths"
import { NewDresses } from './Components/NewDresses';

function App() {
  return (
    <>
    <Routes>
     <Route path="/" element={ <LandingPage />}></Route> 
     <Route path="/Cloths" element={ <Cloths />}></Route>
     <Route path="/NewDresses" element={ < NewDresses/>}></Route> 
 
     
     {/* <Route path="/A" element={ <NewShop />}></Route> 
     <Route path="/B" element={ <NewShop />}></Route> 
     <Route path="/C" element={ <NewShop />}></Route> 
     <Route path="/D" element={ <NewShop />}></Route> 
     <Route path="/E" element={ <NewShop />}></Route> 
     <Route path="/F" element={ <NewShop />}></Route> 
     <Route path="/G" element={ <NewShop />}></Route> 
     <Route path="/G" element={ <NewShop />}></Route>  */}



     
      
    </Routes>
    </>
  );
}

export default App;
