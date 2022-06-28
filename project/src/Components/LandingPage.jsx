import React from 'react'
import ShopNew from "./images/ShopNew.webp";
import Shoes from "./images/ShopShoes.webp";
import Accessories from "./images/NewAccessories.webp";
import Tops from "./images/Tops.webp";
import Jeans from "./images/Jeans.webp";
import "./LandingPage.css"

const LandingPage = () => {
  return (
    <div>
        <div className='L_Div1'>
            <img className="ShopNew_img"src={ShopNew}></img>
            <img className="Shoe_img"src={Shoes}></img>
        </div>
        <div className="L_Div2">
            <img src={Accessories}></img>
            <img src={Tops}></img>
            <img src={Jeans}></img>
        </div>
            
        
    </div>
  )
}

export default LandingPage