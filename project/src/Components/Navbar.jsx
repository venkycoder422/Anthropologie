import React from 'react'
import "./Navbar.css"
import styled from 'styled-components'
import {Link} from "react-router-dom"
import user from "./images/user.png"
import globeicon from "./images/contryglobe.png"
import anthrologo from "./images/anthro-logo.svg"
import anthrologo2 from "./images/anthro-logo2.svg"
import SearchIcon from "./images/SearchIcon.png"
import CartIcon from "./images/CartIcon.png"
import SignInSignUp from "./SignInSignUp";
export const Navbar = () => {
    const NavbarWrapper=styled.div`
    margin: 20px 50px 0px 50px;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
    `;

    
  return (
    <>
    <NavbarWrapper>
    <div className="ContryAndGlobe">
    <div className="Globe"style={{display:"flex",fontSize:"20px",marginLeft:"70%"}}><img src={globeicon}></img><Link className="LinksNav"to=""><p className="ContryIcon"style={{marginTop:"2px"}}>English ($)</p></Link></div>
    <div style={{display:"flex",fontSize:"20px",marginLeft:"5%"}}><img src={user}></img><Link className="LinksNav" to="/SignInSignUp" ><p style={{marginTop:"2px"}}>Sign In / Sign Up</p></Link></div>
    </div>
    <div className='HomeIconSearch'>
      <div className="NavigateHomeDiv">
        <div className='AnthroLogo'><Link to="/"><img src={anthrologo}></img></Link></div>
        <div className='AnthroLogo'><Link to="/"><img src={anthrologo2}></img></Link></div>
      </div>
      <div className='SearchBox'>
        <div>
            <input className="InputSearch" aria-label='Search' placeholder='Search Anthropologie'></input>
        </div>
        <div><button className='SearchButton_Transparent'><img src={SearchIcon}></img></button></div>
        
      </div>
      <div className='CartIcon'><Link to="/CheckOut"><img src={CartIcon}></img><p></p></Link></div>
    </div>
    <hr style={{margin:"0px"}}></hr>
    <div className='AccessingCategory'>
      <ul>
        <Link style={{textDecoration:"none"}}to=""><li>New!</li></Link>
        <Link style={{textDecoration:"none"}} to=""><li>Dresses</li></Link>
        <Link style={{textDecoration:"none"}} to="/Cloths"><li>Clothing</li></Link>
        <Link style={{textDecoration:"none"}} to=""><li>Shoes</li></Link>
        <Link style={{textDecoration:"none"}} to=""><li>Accessories</li></Link>
        <Link style={{textDecoration:"none"}} to=""><li>Gifts & Candles</li></Link>
        <Link style={{textDecoration:"none"}}to=""><li>Home& Furnitures</li></Link>
        <Link style={{textDecoration:"none"}}to=""><li>Beauty & wellness</li></Link>
        <Link style={{textDecoration:"none"}} to=""><li>Garden & Outdoor</li></Link>
        <Link style={{textDecoration:"none"}} to=""><li>Weddings</li></Link>
        <Link style={{textDecoration:"none"}} to=""><li>Sale</li></Link>
        
      </ul>
    </div>
    <hr></hr>
    </NavbarWrapper>
    
    
    </>
    
  )
}
