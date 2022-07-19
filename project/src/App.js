
import './App.css';
import LandingPage from './Components/LandingPage';
import {Routes, Route} from "react-router-dom"
import { Navbar } from './Components/Navbar';
import {Footer} from "./Components/footer";
import  {Cloths} from "./Components/Cloths"
import { NewDresses } from './Components/NewDresses';
import {CartPage} from "./Components/CartPage"
import {SignInSignUp} from "./Components/SignInSignUp";
import Signup from './Components/Signup';
import './App.css';
import { useSelector } from 'react-redux';
import MobileSign from './Components/MobileSign';
import MobileOtp from './Components/MobileOtp';

import PaymentPage from './Components/PaymentPage';
import OrderConfirm from './Components/OrderConfirm';

import { SecondPageClothing } from './Components/SecondPageClothing';
import {ShowDataCart} from "./Components/CheckOut"
import {searchCloths} from "./Components/SearchPage";


function App() {
  const signup = useSelector(state =>state.users);
  console.log(signup)
  return (
    <>
    <Navbar />
    <Routes>
     <Route path="/" element={ <LandingPage />}></Route> 
     <Route path="/Cloths" element={ <Cloths />}></Route>
     <Route path="/NewDresses" element={ < NewDresses/>}></Route> 
     <Route path="/SignInSignUp" element={ <SignInSignUp />}></Route> 
     
     <Route path = "/signup" element = {<Signup />}></Route>
        <Route path = "/mobile" element = {<MobileSign/>} ></Route>
        <Route path='/mobileotp' element = {<MobileOtp />}></Route>
        
        <Route path='/PaymentPage' element = {<PaymentPage />}></Route>
        <Route path = "/orderconfirm" element = {<OrderConfirm />}></Route>
      
        <Route path = "/CheckOut" element = {<ShowDataCart />}></Route>
        {/* <Route path = "/SearchPage" element = {<searchCloths />}></Route> */}
        <Route path="/new_clothing/:id"  element={<SecondPageClothing/>}> </Route>
     {/* <Route path="/A" element={ <NewShop />}></Route> 
     <Route path="/B" element={ <NewShop />}></Route> 
     <Route path="/C" element={ <NewShop />}></Route> 
     <Route path="/D" element={ <NewShop />}></Route> 
     <Route path="/E" element={ <NewShop />}></Route> 
     <Route path="/F" element={ <NewShop />}></Route> 
     <Route path="/G" element={ <NewShop />}></Route> 
     <Route path="/G" element={ <NewShop />}></Route>  */}



     
      
    </Routes>
    <Footer />
    </>
  );
}

export default App;
