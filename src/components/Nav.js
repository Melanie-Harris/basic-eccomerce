import React from 'react';
import action from "../scripts/action";

class Nav extends React.Component {
    render() {
        return (
            <div class="">
                <div class="topnav" id="myTopnav">
                    
                    
                    <a href="#home">Contact</a>
                    {/* <a href="#about">About</a> */}
                    {/* <div class="dropdown">
                        <button class="dropbtn">Dropdown
                            <i class="fa fa-caret-down"></i>
                        </button>
                        <div class="dropdown-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div> */}
                    <a href="#products">Products</a>
                    <a href="#about">About</a>
                    <a href="#" class="">Home</a>
                    <a href="javascript:void(0);" class="icon" onclick="myFunction()">&#9776;</a>
                </div>
            </div>
        )
    }
}

export default Nav;