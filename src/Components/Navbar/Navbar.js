import React from 'react'
import './Navbar.css';
import {Button} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';

function Navbar() {
    return (
        <div className="navbar">
            <img src="/Images/logo.png" alt="logo" className="navbar-logo" />
            <p className="navbar-item">Categories</p>
            <form className="navbar-form">
                <SearchIcon className="navbar-icon" />
                <input type="text" className="navbar-input" placeholder="Search for anything" />
            </form>
            <p className="navbar-item udemy">Udemy Business</p>
            <p className="navbar-item teach">Teach on Udemy</p>
            <ShoppingCartOutlinedIcon className="navbar-icon" />
            <Button className="navbar-button-white">Log in</Button>
            <Button className="navbar-button-black">Sign up</Button>
            <Button className="navbar-button-white"><LanguageOutlinedIcon className="icon-web" /></Button>
        </div>
    )
}

export default Navbar
