import React from 'react';
import { useDispatch } from 'react-redux';
import "./styles/SignInSignUp.css";
import { v4 as uuid } from 'uuid';
import { Link, unstable_HistoryRouter} from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function SignInSignUp() {
    const [mail, setmail] = useState("");
    const [data1,setdata] = useState([]);
 
    const dispatch = useDispatch();
    const  Navigate=useNavigate()

    React.useEffect(()=>{
        fetch(`https://anthropologie.herokuapp.com/signUpDetails`)
        .then((res)=>res.json())
        .then((res)=>setdata(res))
        .catch((err)=>console.log(err));
        
  

    },[mail]);

    // console.log(data1)

    


   

    const login =  () => {
        
        dispatch({
            type: "LOGIN",
            payload: {
                id: uuid(),
                mail

            }
        })

        // data1.map((d)=>{
        //     // console.log(d.mail)
        //     if(d.mail === mail){
        //         alert("successful");
        //         return;
        //     }else{
        //         alert("failed");
        //         return;
        //     }
    
        // })
// console.log(data1.length)
        for(var i=0;i<data1.length;i++){
            if(data1[i].mail===mail){
                alert("Sucessfully!");
                Navigate("/")
                return
            }
        }
        alert("user not exist!")    
    }
    




    return (


        <div className='signInMain'>
            <Link to="/"><img className="closeMark" src='https://icon-library.com/images/close-x-icon/close-x-icon-19.jpg' /></Link>
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
