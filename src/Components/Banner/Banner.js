import React from 'react'
import './Banner.css';
import SearchIcon from '@material-ui/icons/Search';
function Banner() {
    return (
        <div className="banner">
            <img src="/Images/Banner.jpg" className="banner-image" />
            <div className="banner-content">
                  <h1>Welcome back — time to learn & save</h1>
                  <p>We missed you! So here’s an offer just for you: get courses from ₹490. It’s six hours of savings.</p>
                  <form className="banner-form">
                      <input type="text" className="navbar-input" placeholder="What do you want to learn ?"/>
                      <SearchIcon className="navbar-icon search" />
                  </form>
            </div>
        </div>
    )
}

export default Banner
