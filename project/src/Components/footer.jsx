import "./styles/footer.css"
import React from 'react'

export const Footer = () => {
    return (
        <div style={{marginTop:"15%"}}>
            <hr className="hr"></hr>
            <h2 style={{ marginLeft: "-70%" }}>About Us</h2>

            <p style={{ width: "90%", margin: "auto" }}>Our mission at Anthropologie has always been
                to surprise and delight you with unexpected, distinctive finds for your closet and home.
                We source and craft all of our products with care, ensuring that any
                treasure you find at Anthropologie is unique, just like you. Explore
                our dress shop to find styles and fits perfect for any occasi...</p>

            <div className="footerMain">
                <div style={{display:"flex",paddingTop:"15px",justifyContent:"space-around"}}>
                    <div>
                        <h2 style={{marginLeft:"0%"}}>Sign Up for Email</h2>
                        <p>Receive early access to new arrivals, sales, exclusive content, events and much more!</p>


                    </div>
                    <div style={{display:"flex"}}>
                        <div>
                            <form>
                                <label style={{marginLeft:"0"}}>Email:</label><br />
                                <input className = "footerInput" type="text"></input>
                                <button className="footerSubmit" >SUBMIT</button>
                            </form>
                        </div>
                        <div></div>


                    </div>


                </div>
                <hr className="hr"></hr>



                <div className="footergrid">

                    {/* <hr className="hr"></hr> */}
                    <div >
                        <h3>Help</h3>
                        <p>Track Your Order</p>
                        <p>Start A Return Or Exchange</p>
                        <p>Returns & Exchanges</p>
                        <p>Shipping</p>
                        <p>Customer Service</p>
                        <p>Current Promotions</p>
                        <p>Product Recalls</p>

                    </div>

                    <div>
                        <h3>About Us</h3>
                        <p>Our Story</p>
                        <p>Events</p>
                        <p>A Greater Good</p>
                        <p>Diversity & Inclusion</p>
                        <p>Stories</p>

                    </div>

                    <div>
                        <h3>Services</h3>
                        <p>AnthroPerks</p>
                        <p>Gift Cards</p>
                        <p>Trade Membership</p>
                        <p>Furniture: Guides & Services</p>
                        <p>Store Pickup & Collection Points</p>
                        <p>Klarna</p>

                    </div>

                    <div>
                        <h3>Connect</h3>
                        <p>Contact Us</p>
                        <p>Stay Connected</p>
                        <p>Careers</p>
                        <p>Styling Services</p>
                        <p>Request A Catalog</p>

                    </div>

                    <div>
                        <div style={{display:"flex"}}>

                        <div>
                        <img src = "https://media.istockphoto.com/vectors/map-pin-icon-vector-id1190338480?k=20&m=1190338480&s=612x612&w=0&h=8M7fUvVjJA4cpSwCDh14GbUhEQj6JMoMLruq7acRhqE="></img>
                        
                        </div>

                        <div>
                            <p>Store Locator</p>
                        </div>

                        </div>
                        <div style={{display:"flex"}}>

                        <div>
                        <img src =" https://image.shutterstock.com/z/stock-vector-email-envelope-icon-vector-illustration-1672898794.jpg"></img>
                        
                        </div>

                        <div>
                            <p>Get Email</p>
                        </div>

                        </div>

                    </div>

                </div>

                <div className="logo">
                    <div>
                        <img  style = {{width:"120px",height:"40px",marginTop:"20px"}} src = "https://images.ctfassets.net/5de70he6op10/4gWq1G4qLLgmqlNeHfzV2T/55298745127c36c5876f4013434c0c37/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917_Copy_2.svg"></img>
                    </div>
                    <div>
                    <img src = "https://ci6.googleusercontent.com/proxy/omH4cyzpZoY6iaBcI_Q1vlpvFXL9x6nP5WsCc4Ut1y8AV8qJBE7DgKTBpFHmF0gREXQpNFkUGsvtx2fbRLu4-Ho9a-UOf6vj2RQxugC75LzSfLtV8eRCxnEixJoDHYs=s0-d-e1-ft#https://i.pinimg.com/originals/d3/d1/75/d3d175e560ae133f1ed5cd4ec173751a.png"></img>
                    </div>
                    <div>
                    <img src = "https://www.logo.wine/a/logo/Instagram/Instagram-Logo.wine.svg"></img>
                    </div>
                    <div>
                    <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/600px-Facebook_Logo_%282019%29.png"></img>
                    </div>
                    <div>
                    <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/512px-Twitter-logo.svg.png?20211104142029"></img>
                    </div>



                </div>

        <div className="banner">
            <img src="https://images.ctfassets.net/5de70he6op10/2DRgCRXNIEkk0wIqUo2ywa/20ea44a95fb361eaf034b42eec179d44/_site_footer__download_app_enable_push_.jpg"></img>
        </div>

        <div>
            <p>US | France | Germany | Italy | SpainUK</p>
        </div>






            </div>


            </div>
    )
}


export default Footer;