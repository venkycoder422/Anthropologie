import React from "react";
import styled from "styled-components";
import "./Cloths.css";
import LeftArrow from "./images/LeftArrow.png";
import { Link } from "react-router-dom";
import { usePagination } from "use-pagination-hook";
// export const Cloths = () => {
//   const LeftText = styled.h1`
// background-color:aqua;
// `;

const HoverButton=styled.button`

`;
export const Cloths=()=>{
const LeftText=styled.h1`
background-color:aqua;
`;



const [clothingdata,setclothingdata]=React.useState([]);
const { current, pages, display, next, previous } = usePagination({ items: clothingdata, size: 14 });

const getData = () =>{
    fetch(`https://anthropologie.herokuapp.com/new_clothing`)
    .then((res)=>res.json())
    .then((res)=>setclothingdata(res))
    
    .then((err)=>console.log(err))
}

React.useEffect(()=>{
 getData()
},[])


const sorting = (e) => {
  const sorting = e.target.value;
  let arr = [...clothingdata]

  console.log("working the sort")
  if(sorting == "featured"){
    getData()
  }
  if (sorting === "low") {
    arr.sort((a,b) => a.price - b.price);
    setclothingdata(arr);
  }
  if(sorting==="high") {
    arr.sort((a,b) => b.price - a.price);
    setclothingdata(arr);
  }
  
  console.log(clothingdata)
}

// console.log(clothingdata)

return (
  <div className="fullbox">
      <div className="leftpart">
          <h5 style={{color:"black"}}>Browse by:</h5>
          <hr></hr>
          <h5><a href="default.asp" target="_blank">Clothing</a></h5>
          <h5><a href="default.asp" target="_blank">New!</a></h5>
          <h5><a href="default.asp" target="_blank">Top-Rated</a></h5>
          <h5><a href="default.asp" target="_blank">Activewear</a></h5>
          <h5><a href="default.asp" target="_blank">Dresses</a></h5>
          <h5><a href="default.asp" target="_blank">Gateway & Resort Wear</a></h5>
          <h5><a href="default.asp" target="_blank">Intimates & Lingerie</a></h5>
          <h5><a href="default.asp" target="_blank">Jackets</a></h5>
          <h5><a href="default.asp" target="_blank">Jeans</a></h5>
          <h5><a href="default.asp" target="_blank">Jumpsuits</a></h5>
          <h5><a href="default.asp" target="_blank">Kimonos</a></h5>
          <h5><a href="default.asp" target="_blank">Loungewear</a></h5>
          <h5><a href="default.asp" target="_blank">Pants</a></h5>
          <h5><a href="default.asp" target="_blank">Petites</a></h5>
          <h5><a href="default.asp" target="_blank">Plus</a></h5>
          <h5><a href="default.asp" target="_blank">Sets</a></h5>
          <h5><a href="default.asp" target="_blank">Shorts</a></h5>
          <h5><a href="default.asp" target="_blank">Skirts</a></h5>
          <h5><a href="default.asp" target="_blank">Sleepwear</a></h5>
          <h5><a href="default.asp" target="_blank">Sweaters</a></h5>
          <h5><a href="default.asp" target="_blank">Swimwear</a></h5>
          <h5><a href="default.asp" target="_blank">Tops & Tees</a></h5>
      </div>
    <div className="rightpart">
     <div className="upperRightpart">
        <div className="leftupperRightpart">
            <div className="left"><h2>Women's Clothing</h2></div>
            
            <div className="right"><h2>{display.length} products</h2></div>
        </div>
           
        {/* <div className="rightupperRightpart"> */}
          
            <div className="FiltersDiv">
           
                        <p>Sort:</p>
                            <select className="Filters" onChange={sorting}>
                                
                                <option value="featured">Featured</option>
                                <option value="low">Price:Low to High</option>
                                <option value="high">Price:High to Low</option>
                                <option value="New">Newest</option>
                                <option value="BestSell">Bestselling</option>
                                <option>A-Z</option>
                                <option>Z-A</option>
                            </select>
                        
           
               
                        <div className='clothsleftarrow1'><button disabled={current===1} onClick={previous}><img src={LeftArrow}></img></button></div>
                        <div style={{marginTop:"15px"}}>{current}</div>
                        <div className='clothsleftarrow2'><button disabled ={current==pages}onClick={next}><img src={LeftArrow}></img></button></div>
            
                        </div>
                        {/* </div> */}
             
        

        </div>
        <div className="lowerRightpart">

{
    display.map((data) => (
        <div className="CartData">
            <Link className='Links' to={`/new_clothing/${data.id}`}>
            <img className="fullimage" src={data.image}></img>
            <HoverButton className="But">Quick Shop</HoverButton>
            <p className="clothname">{data.title}</p></Link>
            <p className="pricetag">${data.price}</p>
            {
                data.color?.map((colors,i)=>(
                    <button className="circlebutton" style={{margin:'0px 3px'}}><img src={data.color[colors,i]}></img></button>
                ))

            }
            
        </div>
    ))
}



</div>

           
           
          
          
    </div>
  </div>
    
    );
}
