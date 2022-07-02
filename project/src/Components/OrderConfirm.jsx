import React from 'react';
import { Link } from 'react-router-dom';
import "./styles/OrderConfirm.css"

export default function OrderConfirm() {
  return (
    <div>
        <div className='orderconfirm'>
            <img  className = "img" src="https://i.pinimg.com/originals/0d/e4/1a/0de41a3c5953fba1755ebd416ec109dd.gif"></img>
            <h2 style={{marginTop:"-5px"}}>Order Confirmed</h2>
            <Link to="/"><h3 style={{marginLeft:"172px",cursor:"pointer"}}>go to shopping</h3></Link>
        </div>




    </div>
  )
}
