import SignInSignUp from './components/SignInSignUp';
import Signup from './components/Signup';
import './App.css';
import { useSelector } from 'react-redux';
import {Routes,Route} from "react-router-dom";
import MobileSign from './components/MobileSign';
import MobileOtp from './components/MobileOtp';

function App() {

  const signup = useSelector(state =>state.users);
  console.log(signup)
  
  // console.log(login);
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element = {<SignInSignUp />}></Route>
        <Route path = "/signup" element = {<Signup />}></Route>
        <Route path = "/mobile" element = {<MobileSign/>} ></Route>
        <Route path='/mobileotp' element = {<MobileOtp />}></Route>
        


      </Routes>
    </div>
  );
}

export default App;
