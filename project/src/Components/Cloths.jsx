import React from "react";
import styled from "styled-components";
import "./Cloths.css";
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
    console.log(clothingdata)

    return (
        <div className="fullbox">
            <div className="leftpart">
                <h6>Browse by:</h6>
                <h6><a href="default.asp" target="_blank">Clothing</a></h6>
                <h6>_</h6>
                <h6><a href="default.asp" target="_blank">New!</a></h6>
                <h6><a href="default.asp" target="_blank">Top-Rated</a></h6>
                <h6><a href="default.asp" target="_blank">Activewear</a></h6>
                <h6><a href="default.asp" target="_blank">Dresses</a></h6>
                <h6><a href="default.asp" target="_blank">Gateway & Resort Wear</a></h6>
                <h6><a href="default.asp" target="_blank">Intimates & Lingerie</a></h6>
                <h6><a href="default.asp" target="_blank">Jackets</a></h6>
                <h6><a href="default.asp" target="_blank">Jeans</a></h6>
                <h6><a href="default.asp" target="_blank">Jumpsuits</a></h6>
                <h6><a href="default.asp" target="_blank">Kimonos</a></h6>
                <h6><a href="default.asp" target="_blank">Loungewear</a></h6>
                <h6><a href="default.asp" target="_blank">Pants</a></h6>
                <h6><a href="default.asp" target="_blank">Petites</a></h6>
                <h6><a href="default.asp" target="_blank">Plus</a></h6>
                <h6><a href="default.asp" target="_blank">Sets</a></h6>
                <h6><a href="default.asp" target="_blank">Shorts</a></h6>
                <h6><a href="default.asp" target="_blank">Skirts</a></h6>
                <h6><a href="default.asp" target="_blank">Sleepwear</a></h6>
                <h6><a href="default.asp" target="_blank">Sweaters</a></h6>
                <h6><a href="default.asp" target="_blank">Swimwear</a></h6>
                <h6><a href="default.asp" target="_blank">Tops & Tees</a></h6>
            </div>

            <div className="rightpart">
                <div className="upperRightpart">
                    <div className="leftupperRightpart">
                        <div className="left"><h2>Women's Clothing</h2></div>

                        <div className="right"><h4>3715 products</h4></div>

                    </div>

                    <div className="rightupperRightpart">
                        <div className="leftb"></div>
                        <div className="rightb"></div>

                    </div>

                </div>
                <div className="lowerRightpart">

                    {
                        clothingdata?.map((data) => (
                            <div className="CartData">
                                <img className="fullimage" src={data.image}></img>
                                <HoverButton className="But">Quick Shop</HoverButton>
                                <p className="clothname">{data.title}</p>
                                <p className="pricetag">{data.price}</p>
                                <button className="circlebutton"><img src={data.color}></img></button>
                            </div>
                        ))
                    }



                </div>





            </div>
        </div>

    );
}
