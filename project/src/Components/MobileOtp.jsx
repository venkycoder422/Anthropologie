import React from 'react'
import { Link } from 'react-router-dom';
import "./styles/otpform.css"

export default function MobileOtp() {
    const [otp, setotp] = React.useState("")

    return (
        <div className='otpMain'>
            <Link to="/"><img className="closeMark" src='https://icon-library.com/images/close-x-icon/close-x-icon-19.jpg' /></Link>


            <h2>Finish Signing In</h2>
            <hr className='hr'></hr>
            <p>If your mobile number is verified with us, you will recieve a one-time code sent to:</p>
            <p>{ }</p>

            <form className='otpform'>
                <label style={{ marginLeft:"-380px"
                }}>*Enter Code*</label>

                <input type="text" value={otp} onChange={(e) => setotp(e.target.value)} className="otpnumber" ></input>
                <Link to = "homepage"><input type="button" value="NEXT" className='nextbtn'></input></Link>
            </form>
            <p>Having trouble? <Link to="/"><span style={{ color: "blue", textDecoration: "underline" }}>Sign in with your email instead</span></Link></p>
            <p>Landlines, VoIP, and prepaid phones are not supported. Standard message & data rates may apply. Message frequency may vary. Reply HELP for help, and STOP to cancel.</p>
            <div className='termsCondition'>
                <div><span>Terms Of Use</span></div>
                <div><span>Privacy Policy</span></div>
                <div><span>Support Contact Info</span></div>

            </div>





        </div>
    )
}
