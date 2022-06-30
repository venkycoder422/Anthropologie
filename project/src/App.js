import SignInSignUp from './components/SignInSignUp';
import Signup from './components/Signup';
import './App.css';
import { useSelector } from 'react-redux';
import {Routes,Route} from "react-router-dom";
import MobileSign from './components/MobileSign';
import MobileOtp from './components/MobileOtp';
import Home from './components/Home';
import PaymentPage from './components/PaymentPage';
import OrderConfirm from './components/OrderConfirm';

function App() {

  const signup = useSelector(state =>state.users);
  console.log(signup)
  
  
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element = {<PaymentPage />}></Route>
        <Route path = "/signup" element = {<Signup />}></Route>
        <Route path = "/mobile" element = {<MobileSign/>} ></Route>
        <Route path='/mobileotp' element = {<MobileOtp />}></Route>
        <Route path = "/homepage" element = {<Home/>} ></Route>
        <Route path='/payment' element = {<PaymentPage />}></Route>
        <Route path = "/orderconfirm" element = {<OrderConfirm />}></Route>
      </Routes>
    </div>
  );
}

export default App;
