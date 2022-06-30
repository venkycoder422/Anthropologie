  import React from "react";

    const ShowDataCart=()=>{
     const [cartState, setCartState] =React.useState([])
     const getCartData=async()=>{
      try{
         let response=await fetch (`http://localhost:5000/users/1`)
         let result=await response.json();
        //  console.log(result)
         return result.userCart

      }catch(error)
      {
        console.log(error)
      }
     }

     React.useEffect(()=>{
      getCartData().then((res)=>{
        // console.log(res)


          setCartState(res)
      })
  },[])
   
    return(
         <div>
          {
          cartState.map((item)=>{
            return(
              // console.log(item)
              <div>
                <div>
              <h2>Basket</h2> 
              <h2>Order Summary</h2>
              </div>
              <hr />
              <div className="itemOrderSummary">
              <div className="Item-ItemPrice">
                <p>Item</p>
                <p>Item Price</p>
                <p>Quantity</p>
                <p>Total Price</p>

              </div>
              <div className="OrderSummary">
                <div>
                <p>Subtotal</p>
                <p></p>

                </div>
                <div>
                 <p>Shipping</p> 
                 <p>TBD</p>

                </div>
                <div>
                  <p>Estimated TAx</p>
                  <p>$0.00</p>
                </div>
                  <div>
                    <p>Total</p>
                    {/* <p></p> */}
                  </div>
                   <p>or 4 interest-free installments of $389.50 with</p>
                   <div className="klarnaorafterpay">
               <p className="klarna">Klarna.</p>
                 <p className="or">or</p>
                 <p className="afterpay">afterpay</p>
                 </div>
                 <button>PROCCED TO CHECKOUT</button>

              </div>
              </div>
              <div  className="Big-box">
              <div className="cartDataShow">
                <div> <img src={item.image} alt="" /></div>
                 <div> <p>{item.name}</p>
                 <p>Style #4130089540081</p>
                  <p>Color:Black</p></div>

                   <div><p>{item.price}</p></div>
                   <div>1</div>
                   <div>{item.price}</div>
              </div>
               </div>
               </div>
            )
          })
        }
        

         </div>



    )
          }
   export default ShowDataCart;
  
