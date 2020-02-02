import React from 'react';

export default class About extends React.Component{
    render(){
        
        return(
        <div>
             <div class="card text-center" id="about">
                <div class="card-header">
                 <h2 style={{color: "black", paddingTop: "80px", paddingBottom:"20px"}}> About Us</h2>
                </div>

            <div class="card-body">
                 <img style={{ opacity: "1", filter: "", marginTop: "0px", background:" rgba(0, 0, 0, 0.6))", width: "60%", justifyContent: "left" }} className="hero" src={require("../about-image.jpg")} /> 
            <h5 class="card-title text">Our Philosphy</h5>
            <p class="card-text text about-card">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            <a href="#" class="btn btn-primary btn-about">Contact Us</a>
            </div>

            <div class="card-footer text-muted">
           
            </div>
        </div>


                {/* <div class="row">
                     <div class="col-8" id="about" >
                    
                        <h3>lkjlkhjlhlhljhbj</h3>
                    </div>
                    <div class="col-4">
                         <img style={{ opacity: "1", filter: "", marginTop: "0px", background:" rgba(0, 0, 0, 0.6))" }} className="hero" src={require("../about-image.jpg")} /> 
                  </div> 
                </div> */}
            </div>
        )
    }
}

