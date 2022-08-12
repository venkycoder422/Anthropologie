import React from 'react';
import styled from "styled-components";
import ShopNew from "./images/ShopNew.webp";
import Wedding from "./images/Wedding.webp"
import Shoes from "./images/ShopShoes.webp";
import Accessories from "./images/NewAccessories.webp";
import Tops from "./images/Tops.webp";
import Decors from "./images/Decor.webp"
import Jeans from "./images/Jeans.webp";
import Pants from "./images/Pants.webp";
import Furniture from "./images/KitchenDining.webp";
import Jackets from "./images/Jackets.webp";
import Getaway from "./images/Getaway.webp";
import FanFave from "./images/Fan-Fave.webp";
import LeftArrow from "./images/LeftArrow.png";
import Honoring from "./images/Honoring.webp";
import Donate from "./images/Donate.webp";
import GreaterGood from "./images/GreaterGood.webp";
import "./LandingPage.css"
import { Cloths } from './NewShop';
import { Link } from "react-router-dom";
import { usePagination } from "use-pagination-hook";
// Styled Components 

const YouMayLike = styled.p`
  font-size:20px;
`;


const MoreToExplore = styled.h2`
text-align:center;
color:#26262C;
font:2.2rem/1.5 Spectral Extra Light,serif;
margin-bottom:10px;
`;
const HeadLine = styled.h2`
color:#26262C;
font:22px Spectral Extra Light,serif;
`;
const Information = styled.p`
color:#26262C;
font: 16px "Avenir Book", sans-serif;
letter-spacing:.07rem;
`;

const AccessButtonsLargeImage = styled.a`
background-color: white;
border: 1pxsolidrgb(var(--grey-dark));
color: rgb(var(--grey-dark));
font: 1.1rem/1.3 Avenir Book,sans-serif;
letter-spacing: .06rem;
margin:  0px 10px 20px;
padding: 13px 20px;
text-decoration: none;
position:relative;
top:-100px;
left:350px;
&:hover{
 
  text-decoration:underline;
}
`;

const AccessButtons = styled.a`
background-color: white;
border: 1pxsolidrgb(var(--grey-dark));
color: rgb(var(--grey-dark));
font: 1.1rem/1.3 Avenir Book,sans-serif;
letter-spacing: .06rem;
margin: 0px 10px 20px;
padding: 13px 20px;
text-decoration: none;
position:relative;
top:-80px;
left:120px;
&:hover{
 
  text-decoration:underline;
}
`;
const LandingPageTitle=styled.p`
  text-decoration:none;
  &:hover{
    text-decoration:underline;
    
  }
`;
const PER_PAGE=10;

const LandingPage = () => {
  const [TotalData, setTotalData] = React.useState([]);
  const [data, setData] = React.useState([]);
  const [data1, setData1] = React.useState([]);

  const [trendingPage,settrendingPage] = React.useState(1);
  const [likePage,setlikePage] = React.useState(1);
  React.useEffect(() => {
    fetch(`https://anthropologie.herokuapp.com/new_clothing`)
      .then((res) => res.json())
      .then((res) => setTotalData(res))
      .catch((err) => console.log(err))
    fetch(`https://anthropologie.herokuapp.com/new_clothing/?_page=${trendingPage}&_limit=5`)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err))
      fetch(`https://anthropologie.herokuapp.com/new_clothing/?_page=${likePage}&_limit=5`)
      .then((res) => res.json())
      .then((res) => setData1(res))
      .catch((err) => console.log(err))


  }, [trendingPage,likePage])
// ********Pagination code*******
  
// const { current, pages, display, next, previous } = usePagination({ items: data, size: 5 });
console.log(TotalData);
const n_pages= Math.ceil(TotalData.length/5);
console.log(n_pages);
  return (
    <div className='MainPage'>

      <div className="MainDiv">
        <div className='item1'>
          <img className="ShopNew_img" src={ShopNew} alt=""></img>
          <Link to="/Cloths" className='Links'><AccessButtonsLargeImage href='#'>shop new-in dresses</AccessButtonsLargeImage></Link>
        </div>
        <div className='item2' >
          <img className="Shoe_img" src={Wedding} alt=""></img>
          <Link to="/Cloths" className='Links'><AccessButtons href="#">shop BHDLN weddings</AccessButtons></Link>
        </div>
        <div className='item3'>
          <img src={Jackets} alt=""></img>
          <Link to="/Cloths" className='Links'><AccessButtons href="#">shop Jackets</AccessButtons></Link>
        </div>
        <div className='item4'>
          <img src={Pants} alt=""></img>
          <Link to="/Cloths"><AccessButtons href="#">shop Jackets</AccessButtons></Link>
        </div>
        <div className='item5'>
          <img src={Decors} alt=""></img>
          <AccessButtons href="#">shop Furniture</AccessButtons>
        </div>
        <div className='item6'>
          <img src={Furniture} alt=""></img>
          <AccessButtonsLargeImage href="#">shop new-in dresses</AccessButtonsLargeImage>
        </div>
        <div className='item7'>
          <img src={Jeans} alt=""></img>
          <AccessButtons href="#">shop new-in dresses</AccessButtons>
        </div>
        <div className='item8'>
          <img src={Getaway} alt="">
          </img><AccessButtons href="#">shop new-in dresses</AccessButtons>
        </div>
        <div className="item9">
          <img src={FanFave} alt=""></img>
          <AccessButtonsLargeImage href="#">shop new-in dresses</AccessButtonsLargeImage></div>
      </div>
      <div>
        <YouMayLike>You May Also Like</YouMayLike>
        <hr></hr>
       <div className='leftarrow1' ><button disabled={likePage==1} onClick={()=>setlikePage(likePage-1)}><img src={LeftArrow}></img> </button></div>
        <div className="MayLikeDiv">

          {

            data1.map((data) => (
              <>
                <div>
                  <Link className='Links' to={`/new_clothing/${data.id}`}>
                  <img className='fullimageL'src={data.image} />
                  {/* <img src={data.color[0].colorsimg}></img> */}
                  <button className="But">Quick Shop</button>
                  <LandingPageTitle >{data.title}</LandingPageTitle>
                  </Link>
                 
                </div>
              </>
            ))
          }
        </div>
       <div className='leftarrow2' ><button  disabled={likePage==n_pages} onClick={()=>setlikePage(likePage+1)}><img src={LeftArrow}></img></button></div> 
      </div>
      {/* TRENDING */}
      {/* <div className="Trending">
    <Trending>Trending Now</Trending>
    </div> */}
      <div className='Trending'>
        <YouMayLike>Trending</YouMayLike>
        <hr></hr>
        <div className='leftarrow1'><button disabled={trendingPage==1}onClick={()=>settrendingPage(trendingPage-1)}><img src={LeftArrow} ></img></button></div>
         <div className="MayLikeDiv">

          {

            data.map((data) => (
              <>
                <div>

                <Link className="Links" to={`/new_clothing/${data.id}`}><img className="fullimageL"src={data.image} />
                  <button>Quick Shop</button>
                  <LandingPageTitle>{data.title}</LandingPageTitle></Link>
                  
                </div>
              </>
            ))
          }
        </div>
        <div className='leftarrow2'> <button disabled={trendingPage===n_pages} onClick={()=>settrendingPage(trendingPage+1)}><img src={LeftArrow}></img></button></div>
      </div>
      <div className='MoreToExplore'>
        <MoreToExplore>More To Explore</MoreToExplore>
        <hr></hr>
        <div className='ExploreGridDiv'>
          <div>
            <img src={Honoring}></img>
            <HeadLine>Honoring Pride with RHD's Morris Home</HeadLine>
            <Information>We're proud to continue to enrich the life-changing work of neiighbors and frineds for LGBTQIA+ equality.</Information>
            <br></br>
            <Link className='LinkWithoutDecoration' to=''>read the story</Link>
          </div>
          <div>
            <img src={Donate}></img>
            <HeadLine>We've pledged a financial donation to help support Morris Home - and we hope you will, too.</HeadLine>
            <br></br>
            <Link className='LinkWithoutDecoration' to=''>donate now</Link>
          </div>
          <div>
            <img src={GreaterGood}></img>
            <HeadLine>A Greatern Good</HeadLine>
            <Information>Our priority to be a force for good, a greater good, in better service of our planet, its people and our products.</Information>
            <br></br>
            <Link to='' className='LinkWithoutDecoration'>Learn more about our journey</Link>
          </div>
        </div>
        <div style={{textAlign:'center',padding:"40px"}}><p>*Extra 50% off sale items are final sale. Exclusions apply - see <Link to="details">details</Link></p></div>
      {/* About Page Starts */}
      <hr></hr>
      <div>
        <HeadLine>About Us</HeadLine>
        <Information style={{padding:'2px'}}>Our mission at Anthropologie has always been to surprise and delight you with unexpected, distinctive finds for your closet and home. We source and craft all of our products with care, ensuring that any treasure you find at Anthropologie is unique, just like you. Explore our <Link to="/dress">dress shop</Link> to find styles and fits perfect for any occasi...
        <Link to="/ReadMore">Read More</Link></Information>
      </div>
      </div>
      
    </div>
  )
}

export default LandingPage;

