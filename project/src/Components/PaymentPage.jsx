import React from 'react'
import { Link } from 'react-router-dom';
import "./styles/payment.css";
// import OrderConfirm from './OrderConfirm';
export default function PaymentPage() {
  return (
    <div style={{display:"flex"}}>



      <div class="container">

        <form action="">

          <div class="row">

            <div class="col">

              <h3 class="title">billing address</h3>

              <div class="inputBox">
                <span>full name :</span>
                <input type="text" placeholder="john deo" />
              </div>
              <div class="inputBox">
                <span>email :</span>
                <input type="email" placeholder="example@example.com" />
              </div>
              <div class="inputBox">
                <span >address :</span>
                <input type="text" placeholder="room - street - locality" />
              </div>
              <div class="inputBox">
                <span>city :</span>
                <input type="text" placeholder="mumbai" />
              </div>

              <div class="flex">
                <div class="inputBox">
                  <span>state :</span>
                  <input type="text" placeholder="india" />
                </div>
                <div class="inputBox">
                  <span >zip code :</span>
                  <input type="text" placeholder="123 456" />
                </div>
              </div>

            </div>

            <div class="col">

              <h3 class="title">payment</h3>

              <div id="card" class="inputBox" >
                <span>cards accepted :</span>
                <img src="./images/card_img.png" alt="" />
              </div>
              <div class="inputBox">
          <span >name on card :</span>
                <input type="text" placeholder="mr. john deo" />
              </div>
              <div class="inputBox">
                <span >credit card number :</span>
                <input type="number" id="cardNumber" placeholder="1111-2222-3333-4444" />
              </div>
              <div class="inputBox">
                <span >exp month :</span>
                <input type="text" placeholder="january" />
              </div>

              <div class="flex">
                <div class="inputBox">
                  <span>exp year :</span>
                  <input type="number" placeholder="2022" />
                </div>
                <div class="inputBox">
                  <span >CVV :</span>
                  <input type="text" placeholder="1234" />
                </div>
              </div>

            </div>

          </div>
         

        </form>

      </div>
      <div className='orderSummary'>
        <h2>Order Summary</h2>
        <div className='ordersummary-box'>
          <div className='summarydata'>
            <div>
              <p>Sub Total</p>
              <p>Shipping</p>
              <p>Estimated Task</p>
              <p>Total</p>
            </div>
            <div>
              <p>348</p>
              <p>TBD</p>
              <p>$0.0</p>
              <p>999</p>
            </div>
          </div>

        <Link to="/orderconfirm"><input id="submit" type="submit" value="SHIP TO THIS ADDRESS" class="submit-btn" /></Link>
        </div>
      </div>
    </div>
  )
}
