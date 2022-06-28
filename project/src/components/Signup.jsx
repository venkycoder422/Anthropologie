import React from 'react';
import "../style/SignInSignUp.css";
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';



export default function () {

    const [mail, setmail] = React.useState("");
    const [number,setnumber] = React.useState("");

 

    const dispatch = useDispatch();


    const register = ()=>{
        dispatch({
            type:"SIGNUP",
            payload:{
                id:uuid(),
                mail,
                number

            }
        })
        
    }

    return (
        <div className='signInMain'>

            <h2>Create An Account</h2>
            <hr></hr>
            <p>Welcome to Anthropologie! It's quick and easy to set up an account.</p>

            <form className='SIgnInForm'>
                <label>Email*</label><br />
                <input type="email" value={mail} onChange={(e) => setmail(e.target.value)} />
                
                <div style={{ display: "flex" }}>
                    <div>

                        <label>Mobile Number*</label><br />
                        <select className='selectNumber'>
                            <option>+91</option>
                            <option>+44</option>
                            <option>+59</option>
                        </select>
                    </div>
                    <div>

                        <input type="text" value={number} onChange={(e)=>setnumber(e.target.value)}/>
                    </div>



                </div>
                <p>Enter your mobile number to receive a verification code. Note: This action does not enroll you in SMS marketing messages.</p>
                <input type="button" className='signInButton' value="Register" onClick={register} />

            </form>

            <div style={{display:"flex",width:"80%",margin:"auto",marginTop:"-3px",justifyContent:"-moz-initial"}}>
                <div>
                <input type="checkbox"/>
                </div>

                <div>
                    <p style={{marginTop:"-2px",}}>Sign me up to receive Anthropologie offers, promotions and other commercial messages. By creating an account, I agree to Anthropologie's Terms of Service and Privacy Policy. I may unsubscribe at any time. Creating an account will not enroll you in SMS marketing.</p>
                </div>
              
            </div>
            <p style={{width:"80%",margin:"auto",justifyContent:"flex-start"}}> By creating an account, you agree to Anthropologie's terms of use and privacy policy. Landlines, VoIP, and prepaid phones are not supported. Standard message & data rates may apply. Message frequency may vary. Reply HELP for help, and STOP to cancel. Contact us for more information.</p>
            <hr className='SignInhr'></hr>
            <h2>Already Have an Account?SIGN IN</h2>
            <Link to="/"><button>SIGN IN</button></Link>
        </div>
    )
}
