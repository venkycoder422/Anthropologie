import React from "react";
import "./styles/CheckOut.css";
import { Link } from "react-router-dom"

export const ShowDataCart = () => {

  const [cartState, setCartState] = React.useState([]);

  React.useEffect(() => {
    fetch(`https://anthropologie.herokuapp.com/cartData`)
      .then((res) => res.json())
      .then((res) => setCartState(res))

      .then((err) => console.log(err))
  }, [])
  console.log(cartState)
  return (
    <>
     <div className="BasketOrder">
                <p>Basket</p>
                <p>Order Summary</p>
      </div>
      {
        
        cartState.map((item) => {
         
              // <hr width="950px" align="left" margin-top="-2px" />
          return (
            // console.log(item)
            <div className="main_div_checkOut">
              
             
              <div className="itemOrderSummary">

                <div className="Item-ItemPrice">

                  <div className="itemData">

                    <div id="item"><p>Item</p></div>
                    {/* <hr width="950px" align="left" margin-top="-2px"></hr> */}
                    <div className="image-name">
                      <div className="imageData"> <img src={item.image} alt="" /></div>
                      <div className="nameData"> <p>{item.title}</p>
                        <p>Style #4130089540081</p>
                        <p>Color:Black</p></div>




                    </div>
                  </div>
                  <div className="otherItem">
                    <div className="Item1">
                      <p>Item Price</p>

                      <div className="itemprice"><p>{item.price}</p></div>
                    </div>
                    <div>
                      <p>Quantity</p>
                      <div>1</div>
                    </div>
                    <div>
                      <p>Total Price</p>
                      <div><p>{item.price}</p></div>
                    </div>
                  </div>
                </div>
        
                <div className="OrderSummary">
                  <div className="subtotal">
                    <p className="para">Subtotal</p>
                    {/* {
                // cartState.reduce((a,b)=> {return a+(+(b.price))},0)
          } */}
                    <div>{item.price}</div>

                  </div>
                  <div className="ship">
                    <p className="para">Shipping</p>
                    <p className="para">TBD</p>

                  </div>
                  <div className="estimatedtax">
                    <p className="para">Estimated Tx</p>
                    <p className="para">$0.00</p>
                  </div>
                  <div className="subtotal">
                    <p>Total</p>
                    {/* <p></p> */}
                    {
                      cartState.reduce((a, b) => { return a + (+(b.price)) }, 0)
                    }
                  </div>
                  <p>or 4 interest-free installments of $389.50 with</p>
                  <div className="klarnaorafterpay">
                    <p className="klarna">PayNow.</p>
                    <p className="or">or</p>
                    <p className="afterpay">afterpay</p>
                  </div>
                  <Link to="/PaymentPage"><button id="checkout">PROCCED TO CHECKOUT</button></Link>

                </div>
              </div>
              {/* <div className="Big-box">
                <div className="cartDataShow">
                  <div className="imageData"> <img src={item.image} alt="" /></div>
                  <div> <p>{item.name}</p>
                    <p>Style #4130089540081</p>
                    <p>Color:Black</p></div>

                  <div><p>{item.price}</p></div>
                  <div>1</div>
                  <div>{item.price}</div>
                </div>
              </div> */}
            </div>
          )
        })
      }




    </>
  )
}

