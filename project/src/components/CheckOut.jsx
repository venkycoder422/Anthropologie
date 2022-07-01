  import React from "react";
  import "./CheckOut.css";

     

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
      // console.log(userCart)

     }
   
     React.useEffect(()=>{
      getCartData().then((res)=>{

        // console.log(res)


          setCartState(res);
          
          
      })
  },[])

      
   
    return(
         <>
          {
          cartState.map((item)=>{
            return(
              // console.log(item)
              <div>
                <div className="BasketOrder">
              <p>Basket</p> 
              <p>Order Summary</p>
              </div>
              <hr  width="950px" align="left" margin-top="-2px"/>
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
                 <div className="item1">
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
                {
                      cartState.reduce((a,b)=> {return a+(+(b.price))},0)
                    }

                </div>
                <div className="ship">
                 <p className="para">Shipping</p> 
                 <p className="para">TBD</p>

                </div>
                <div  className="estimatedtax">
                  <p className="para">Estimated TAx</p>
                  <p className="para">$0.00</p>
                </div>
                  <div className="subtotal">
                    <p>Total</p>
                    {/* <p></p> */}
                    {
                      cartState.reduce((a,b)=> {return a+(+(b.price))},0)
                    }
                  </div>
                   <p>or 4 interest-free installments of $389.50 with</p>
                   <div className="klarnaorafterpay">
               <p className="klarna">Klarna.</p>
                 <p className="or">or</p>
                 <p className="afterpay">afterpay</p>
                 </div>
                 <button id="checkout">PROCCED TO CHECKOUT</button>

              </div>
              </div>
              <div  className="Big-box">
              <div className="cartDataShow">
              <div className="imageData"> <img src={item.image} alt="" /></div>
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
        

         

</>

    )
          }
   export default ShowDataCart;
  
