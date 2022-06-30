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
              <h2>Basket</h2> 

              <div className="cartDataShow">
               <img src={item.image} alt="" />
                  
              </div>
               </div>

            )
          })
        }
        

         </div>



    )
          }
   export default ShowDataCart;
  
