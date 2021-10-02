import React from 'react'
import './English.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import StarIcon from '@material-ui/icons/Star';
import {Button} from '@material-ui/core';


const responsiveTwo = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 1270 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 1270, min: 900 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 900, min: 550 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 550, min: 0},
        items: 1
    }
};
function English() {
    return (
        <div className="course">
            <h1 className="hot">Hot and new courses in English</h1>
            <Carousel responsive={responsiveTwo}>
                            <div className="item">
                                <img src="/Images/hot and new courses in english/six.jpg" className="item-image" />
                                <h3 className="heading">2021 Complete Python Bootcamp From Zero to Hero...</h3>
                                <p className="teacher">Jose Portilla</p>
                                <h3 className="rating">5 &nbsp; <StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /></h3>
                                <h3 className="heading">₹8,640</h3>
                            </div>
                            <div className="item">
                                <img src="/Images/hot and new courses in english/two.jpg" className="item-image" />
                                <h3 className="heading">2021 Complete Python Bootcamp From Zero to Hero...</h3>
                                <p className="teacher">Jose Portilla</p>
                                <h3 className="rating">5 &nbsp; <StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /></h3>
                                <h3 className="heading">₹8,640</h3>
                            </div>
                            <div className="item">
                                <img src="/Images/hot and new courses in english/three.jpg" className="item-image" />
                                <h3 className="heading">2021 Complete Python Bootcamp From Zero to Hero...</h3>
                                <p className="teacher">Jose Portilla</p>
                                <h3 className="rating">5 &nbsp; <StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /></h3>
                                <h3 className="heading">₹8,640</h3>
                            </div>
                            <div className="item">
                                <img src="/Images/hot and new courses in english/four.jpg" className="item-image" />
                                <h3 className="heading">2021 Complete Python Bootcamp From Zero to Hero...</h3>
                                <p className="teacher">Jose Portilla</p>
                                <h3 className="rating">5 &nbsp; <StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /></h3>
                                <h3 className="heading">₹8,640</h3>
                            </div>
                            <div className="item">
                                <img src="/Images/hot and new courses in english/five.jpg" className="item-image" />
                                <h3 className="heading">2021 Complete Python Bootcamp From Zero to Hero...</h3>
                                <p className="teacher">Jose Portilla</p>
                                <h3 className="rating">5 &nbsp; <StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /></h3>
                                <h3 className="heading">₹8,640</h3>
                            </div>
                            <div className="item">
                                <img src="/Images/hot and new courses in english/one.jpg" className="item-image" />
                                <h3 className="heading">2021 Complete Python Bootcamp From Zero to Hero...</h3>
                                <p className="teacher">Jose Portilla</p>
                                <h3 className="rating">5 &nbsp; <StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /></h3>
                                <h3 className="heading">₹8,640</h3>
                            </div>
                            </Carousel>

        </div>
    )
}

export default English
