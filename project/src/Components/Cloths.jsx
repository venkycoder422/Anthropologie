import React from "react";
import styled from "styled-components";
import "./Cloths.css";
import LeftArrow from "./images/LeftArrow.png";
import { Link } from "react-router-dom";


export const Cloths = () => {
    const LeftText = styled.h1`
background-color:aqua;
`;

const HoverButton=styled.button`

`;




    const [clothingdata, setclothingdata] = React.useState([]);

    React.useEffect(() => {
        fetch(`http://localhost:3000/new_clothing`)
            .then((res) => res.json())
            .then((res) => setclothingdata(res))

            .then((err) => console.log(err))
    }, [])

    const sorting = (e) => {
        const sorting = e.target.value;
            const sortRes = clothingdata.sort((a, b) => {
                if (sorting === "low") {
                    return +(a.price) > +(b.price) ? 1 : -1;
                }
    
                if (sorting === "high") {
                    return +(a.price) < +(b.price) ? 1 : -1;
                }
    
                // if (sorting === "rating") {
                //      return a.ratings < b.ratings ? 1 : -1;
                // }
            })
            console.log("CLOTHS",clothingdata);
            setclothingdata(sortRes)
        
    }
    //console.log(clothingdata)


    // sorting functiinality
    // const [sortType, setSortType] = React.useState(0);



    // // console.log(sortType);
    // React.useEffect(() => {
        
    //       const sortProperty = sortType;
    //       const sorted = [...clothingdata].sort((a, b) => +(b[sortProperty]) - +(a[sortProperty]));
    //       setclothingdata(sorted);
        
    //     setSortType(sortType);
    //   }, [sortType]); 

    //   console.log(clothingdata)

//       var str = sortType;

//       var sortdata = clothingdata.sort(function (a, b) {

//           if (str === "LowToHigh") {
//               return a.price - b.price;
//           }
//           return b.price - a.price;
//       });
//       return sortdata;
//   }
    

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
                        
                        <div className="left" style={{width:"200px"}}><h3>Women's Clothing</h3></div>

                        <div className="right"><h4>{clothingdata.length} products</h4></div>
                        
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
                        {/* Pagination */}
                        
                        <div className='clothsleftarrow1'><img src={LeftArrow}></img></div>
                        <div style={{marginTop:"15px"}}>{10}</div>
                        <div className='clothsleftarrow2'><img src={LeftArrow}></img></div>
                        
                        </div>
                    </div>

                    {/* <div className="rightupperRightpart">
                        <div className="leftb"></div>
                        <div className="rightb"></div>

                    </div> */}

                </div>
                <div className="lowerRightpart">

                    {
                        clothingdata.map((data) => (
                            <div className="CartData">
                                <Link className='Links' to={`/new_clothing/${data.id}`}>
                                <img className="fullimage" src={data.image}></img>
                                <HoverButton className="But">Quick Shop</HoverButton>
                                <p className="clothname">{data.title}</p></Link>
                                <p className="pricetag">${data.price}</p>
                                <button className="circlebutton"><img src={data.color[0].colorsimg}></img></button>
                            </div>
                        ))
                    }



                </div>





            </div>
        </div>

    );
}
