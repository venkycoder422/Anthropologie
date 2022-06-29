import React from 'react';
import { useDispatch } from 'react-redux';
import "../style/SignInSignUp.css";
import { v4 as uuid } from 'uuid';
import { Link, Navigate, unstable_HistoryRouter } from 'react-router-dom';
import { useState } from 'react';


export default function SignInSignUp() {
    const [mail, setmail] = useState("");
    const [data1,setdata] = useState([]);
    const dispatch = useDispatch();


    React.useEffect(()=>{
        fetch(`http://localhost:3001/signUpDetails`)
        .then((res)=>res.json())
        .then((res)=>setdata(res))
        .catch((err)=>console.log(err));
        
  

    },[mail]);
    


   

    const login =  () => {
        dispatch({
            type: "LOGIN",
            payload: {
                id: uuid(),
                mail

            }
        })

        
    }
    




    return (


        <div className='signInMain'>
            <Link to="homepage"><img className="closeMark" src='https://icon-library.com/images/close-x-icon/close-x-icon-19.jpg' /></Link>
            <h2>Sign In</h2>
            <hr className='signInhr'></hr>
            <p className='signInPara'>*Sign in so you can save items to your wishlists, track your orders, and check out faster!*</p>


            <form className='SIgnInForm'>

                <label>Email*</label><br />
                <input type="email" value={mail} onChange={(e) => setmail(e.target.value)} />
                <input type="button" className='signInButton' value="NEXT" onClick={login} />

            </form>


            <Link to="/mobile"><button className='signInMobile'>USE MOBILE NUMBER INSTEAD</button></Link>
            <hr className='signInhr' style={{ marginTop: "30px" }}></hr>



            <h2>Sign Up</h2>
            <p className='signInPara' style={{ marginTop: "-7px" }}>*Welcome! It's quick and easy to set up an account*</p>
            <Link to="/signup"><button className='createAnAccount'>CREATE AN ACCOUNT</button></Link>
        </div>

    )
}
