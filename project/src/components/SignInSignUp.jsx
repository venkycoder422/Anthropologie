import React from 'react';
import { useDispatch } from 'react-redux';
import "../style/SignInSignUp.css";
// import MobileSign from './MobileSign';
import { v4 as uuid } from 'uuid';
import { Link, Navigate } from 'react-router-dom';
import { useState } from 'react';


export default function SignInSignUp() {
    const [mail, setmail] = React.useState("");
    const [sign, setSign] = useState(false)
const dispatch = useDispatch();


    const login = ()=>{
        dispatch({
            type:"LOGIN",
            payload:{
                id:uuid(),
                mail

            }
        })
        setSign(true)
    }

    const handleSignUp = ()=>{
        <Navigate to= {`/signup`}></Navigate>

    }

    

    return (

        <div className='signInMain'>
            <h2>Sign In</h2>
            <hr className='signInhr'></hr>
            <p className='signInPara'>*Sign in so you can save items to your wishlists, track your orders, and check out faster!*</p>


            <form className='SIgnInForm'>

                <label>Email*</label><br />
                <input type="email" value={mail}  onChange = {(e)=>setmail(e.target.value)}/>
                <input type="button" className='signInButton' value="Login" onClick={login}/>

            </form>


            <Link to = "/mobile"><button className='signInMobile'>USE MOBILE NUMBER INSTEAD</button></Link>
            <hr className='signInhr' style={{ marginTop: "30px" }}></hr>



            <h2>Sign Up</h2>
            <p className='signInPara' style={{ marginTop: "-7px" }}>*Welcome! It's quick and easy to set up an account*</p>
           <Link to="/signup"><button className='createAnAccount'>CREATE AN ACCOUNT</button></Link> 


        </div>

    )
}
