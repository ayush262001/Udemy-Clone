import React from 'react'
import './Navbar.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
function NavbarMobile() {
    return (
        <div className="navbar-mobile">
            <MenuIcon className="navbar-icon"/>
            <img src="/Images/logo.png" className="navbar-logo" />
            <div>
            <SearchIcon className="navbar-icon" />
            <ShoppingCartOutlinedIcon className="navbar-icon" />
            </div>
        </div>
    )
}

export default NavbarMobile
