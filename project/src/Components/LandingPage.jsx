import React from 'react';
import styled from "styled-components";
import ShopNew from "./images/ShopNew.webp";
import Wedding from "./images/Wedding.webp"
import Shoes from "./images/ShopShoes.webp";
import Accessories from "./images/NewAccessories.webp";
import Tops from "./images/Tops.webp";
import  Decors from "./images/Decor.webp"
import Jeans from "./images/Jeans.webp";
import Pants from "./images/Pants.webp";
import Furniture from "./images/KitchenDining.webp";
import Jackets from "./images/Jackets.webp";
import Getaway from "./images/Getaway.webp";
import FanFave from "./images/Fan-Fave.webp";
import "./LandingPage.css"

// Styled Components 

const YouMayLike=styled.p`
  font-size:20px;
`;
const Trending=styled.p`
font-size:20px;
`;


const LandingPage = () => {
     
    const [data,setData]= React.useState([]);

React.useEffect(()=>{
  fetch(`http://localhost:3000/new_clothing/?limit=10`)
  .then((res)=> res.json())
  .then((res)=> setData(res))
  .catch((err)=>console.log(err))
},[])

//console.log(data);
const da=[];


  return (
    <div className='MainPage'>

    <div className="MainDiv">
            <div className='item1'><img className="ShopNew_img" src={ShopNew} alt=""></img></div>
            <div className='item2' ><img className="Shoe_img"src={Wedding} alt=""></img></div>
            <div className='item3'><img src={Jackets} alt=""></img></div>
            <div className='item4'><img src={Pants} alt=""></img></div>
            <div className='item5'><img src={Decors} alt=""></img></div>
            <div className='item6'><img src={Furniture} alt=""></img></div>
            <div className='item7'><img src={Jeans} alt=""></img></div>
            <div className='item8'><img src={Getaway} alt=""></img></div>
            <div className="item9"><img src={FanFave} alt=""></img></div>
    </div>
    <div>
      <YouMayLike>You May Also Like</YouMayLike>
      <hr></hr>
      <div className="MayLikeDiv">
        {
          
          data?.map((data)=>(
            <>
              <div>
                <img src={data.image}/>
                <button>Quick Shop</button>
              </div>
            </>
          ))
        }
      </div>
    </div>
    {/* TRENDING */}
    <div className="Trending">
    <Trending>Trending Now</Trending>
    </div>
    </div>
  )
}

export default LandingPage

