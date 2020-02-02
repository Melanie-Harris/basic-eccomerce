import React from 'react'

class HeroImage extends React.Component {
    render() {
        return (

            <div class="topnav" id="img">
                <div >
                    <div>
                        <span id="mainText">Tea Haven Shop <br/>
                            <span id="secondaryText">High Quality Teas * Globally Sourced</span> <br/>
                            <a href="#products" class="btn btn-primary btn-about btn-shop">Shop Products</a>
                        </span>
                    </div>
                    
                    <img style={{ opacity: "1", filter: "", marginTop: "0px", background:" rgba(0, 0, 0, 0.6))" }} className="hero" src={require("../hero.jpg")} />
                    
                    
                </div>
            </div>

        )
    }
}
export default HeroImage;