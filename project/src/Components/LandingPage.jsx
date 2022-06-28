import React from 'react'
import ShopNew from "./images/ShopNew.webp";
import Shoes from "./images/ShopShoes.webp";
import Accessories from "./images/NewAccessories.webp";
import Tops from "./images/Tops.webp";
import Jeans from "./images/Jeans.webp";
import "./LandingPage.css"

const LandingPage = () => {
  return (
    <div className="MainDiv">
            <div className='item1'><img className="ShopNew_img" src={ShopNew}></img></div>
            <div className='item2'><img className="Shoe_img"src={Shoes}></img></div>
            <div></div>
            <div className='item3'><img src={Accessories}></img></div>
            <div className='item4'><img src={Tops}></img></div>
            <div className='item5'><img src={Tops}></img></div>
            <div className='item6'><img src={Tops}></img></div>
            <div className='item7'><img src={Jeans}></img></div>
            
        
            
        
    </div>
  )
}

export default LandingPage