import React from 'react'
import { Link } from 'react-router-dom';
import "./styles/MobileLogin.css"
export default function MobileSign() {
  const [number, setnumber] = React.useState("");
  return (
    <div className='mobileLogin'>
      <Link to="/"><img className="closeMark" src='https://icon-library.com/images/close-x-icon/close-x-icon-19.jpg' /></Link>

      <h2>Sign In</h2>
      <hr className='mobilehr'></hr>
      <p>Sign in so you can save items to your wishlists, track your orders, and check out faster!</p>

      <form className='SIgnInForm'>

        <div style={{ display: "flex" }}>
          <div>

            <label style={{ marginLeft: "60px" }}>Mobile Number*</label><br />
            <select className='selectNumber'>
              <option>+91</option>
              <option>+44</option>
              <option>+59</option>
            </select>
          </div>
          <div className="mobilenum">

            <input type="text"  value={number} onChange={(e) => setnumber(e.target.value)} />
          </div>



        </div>
        <p>Enter your mobile number to receive a verification code. Note: This action does not enroll you in SMS marketing messages.</p>
        <Link to="/mobileotp"><input type="button" className='signInButton' value="NEXT" /></Link>

      </form>
      <Link to="/"><span className='linkspan'>Sign In with Email Instead</span></Link>
      <p>Landlines, VoIP, and prepaid phones are not supported. Standard message & data rates may apply. Message frequency may vary. Reply HELP for help, and STOP to cancel.</p>
      <hr className='mobilehr'></hr>

      <h2>Sign Up</h2>
      <p className='signInPara' style={{ marginTop: "-7px" }}>*Welcome! It's quick and easy to set up an account*</p>
      <Link to="/signup"><button className='createAnAccount'>CREATE AN ACCOUNT</button></Link>

    </div>
  )
}
