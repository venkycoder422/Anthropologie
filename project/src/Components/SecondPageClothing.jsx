
import "./styles/SecondPageClothing.css"
import { Link } from "react-router-dom"
// import {useDispatch,useSelector} from "react-redux"

// import ADDTOCART from "./cart-redux/cart-action"

import { useParams } from "react-router-dom";
// const dispatch=useDispatch()

// const getDatafromdba = async (id) => {
//   try {
//     let response = await fetch(`http://localhost:5000/users/${id}`)
//     let result = await response.json();
//     //  console.log(result)
//     return result.userCart;


//   } catch (error) {
//     console.log(error)
//   }

// }

// const updateCartInDB = async (updatedCart, id) => {
//   await fetch(`http://localhost:5000/users/${id}`, {
//     method: "PATCH",
//     body: JSON.stringify({ userCart: updatedCart }),
//     headers: { "Content-Type": "application/json" }
//   })
// }

// const sendData = (productDetails) => {
//   getDatafromdba(1).then((res) => {
//     // console.log(res)
//     let updatedCart = [...res, productDetails];
//     updateCartInDB(updatedCart, 1);
//     // console.log(updatedCart)
//   });
//   // console.log(productDetails)

// }
// // Displayinng IMages
// const ProductsShow = () => {
//   // const productCategory = "new_clothing";
//   // const productId = 1;
//   const { productId } = useParams();
//   const [productDetails, setProductDetails] = React.useState([])
//   const getAllData = async (productId) => {
//     try {
//       let response = await fetch(`http://localhost:5000/new_clothing/?${productId}`)
//       let result = await response.json()
//       //  console.log(result)
//       return result;
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   React.useEffect(() => {
//     getAllData().then((res) => {
//       // console.log(res)

//       setProductDetails(res)
//     })
//   }, [])

//   // console.log(productDetails)
//   // console.log(productDetails.img1)
//   // console.log(productDetails.otherimg[1])
//   // let fourImages={productDetails.otherimg}
//   return (
   
//   )
// }

import React from 'react'

export const SecondPageClothing = () => {

  const [productDetails, setProductDetails] = React.useState({});

  const { id } = useParams();
  console.log(id);

  React.useEffect(() => {
    fetch(`https://anthropologie.herokuapp.com/new_clothing/${id}`)
      .then((res) => res.json())
      .then((res) => setProductDetails(res))

      .then((err) => console.log(err))
  }, [id])
  console.log(productDetails)
  const [addToBasket,setaddToBasket]=React.useState([]);
const sendData=()=>{

  fetch(`https://anthropologie.herokuapp.com/cartData`,{
    method:"POST",
    body : JSON.stringify(productDetails),
    headers : {
      "Content-Type":"application/json"
    }

  })
  .then((res)=>res.json())
  .then((res)=>setaddToBasket(res))
  .catch((err)=>console.log(err))
}
  
  return (
    <div className="Main-outside-div">

    <div className="productMainImage">

      {
        productDetails && productDetails.otherimg ?
          <div className="otherimg">

            <img src={productDetails.otherimg[0]} alt="" />
            <br />
            <img src={productDetails.otherimg[1]} alt="" />
            <br />
            <img src={productDetails.otherimg[2]} alt="" />
            <br />
            <img src={productDetails.otherimg[3]} alt="" />

          </div>
          : null
      }
      {/* <div className="product-big-image"> */}
      <img src={productDetails.image} alt="" />
      {/* </div> */}
    </div>
    <div className="allDataShow">
      <h3 className="Plenty">{productDetails.title}</h3>
      <p className="PlentyTracy">Plenty by Tracy</p>
      <div>

        {/* <svg xmlns="http://www.w3.org/2000/svg" class="i-pwa-review-star" viewBox="16 -12.2 131.7 125.2" aria-label="Rating Star" role="img" focusable="false"><path d="m41.2 113 15.2-47.4-40.4-30 50.2-.2 15.6-47.6 15.6 47.6h50.2l-40.5 30 15.5 47.5-40.8-29.3Z"></path></svg> */}
        <p className="PlentyTracy">
          Write a Review</p>
      </div>
      <p className="priceTotal">{productDetails.price}</p>
      <p className="interest">Or 4 interest-free installments of $99.50 with </p>
      <div className="klarnaorafterpay">
        <p className="klarna">Klarna.</p>
        <p className="or">or</p>
        <p className="afterpay">afterpay</p>
      </div>
      {/* <h2>Online Exclusive</h2> */}
      <hr />
      <p className="colorname">Color:ORANGE MOTIF</p>
      {
        productDetails && productDetails.color ?
          <img className="colorimage" src={productDetails.color[0]} alt="" />
          : null
      }

      {/* <img className="colorimage" src={productDetails.color[1]} alt="" />
             <img className="colorimage" src={productDetails.color[2]} alt="" /> */}
      <p className="sizeDress">Size*</p>
      <div className="productSizes">
        <div>0</div>
        <div>2</div>
        <div>4</div>
        <div>6</div>
        <div>8</div>
        <div>10</div>
        <div>12</div>
        <div>14</div>
        <div>16</div>
      </div>
      <div><p className="PlentyTracy">Size Guide</p></div>
      <div className="productQunatity">
        <p>Qty*</p>
        <div className="quantity">
          <p>1</p>
        </div>
      </div>
      <br /><br />
      <div className="addToBasket">
        <Link to="/CheckOut"><button onClick={() => sendData(productDetails)} >ADD TO BASKET</button></Link>
      </div>
      <div className="addToRegister">
        <p>Add To Registry</p>
        <p>Add To Wish List</p>
      </div>
      <hr />
      <div className="productDetails">
        <p>Product Details</p>

      </div>
      {/* <p>Style No. 4130089540081; Color Code:001</p>
                 <div className="cottonMode">
                  <ul>
                    <li>
                      Cotton;modal lining
                    </li>
                    <li>Side zip</li>
                    <li>Handwash</li>
                    Imported
                  </ul>
                 </div>
                 <br /><br /><br />
                 <div className="dimension">
                  <br />
                  <ul>
                    <li>Falls 40" from shoulder</li>
                  </ul>
                 </div>
               </div>
               <hr /> */}
      <hr />
      <div className="shippin">
        <p>Shipping & Returns</p>

      </div>
      <hr />
    </div>



  </div>
  )
}
