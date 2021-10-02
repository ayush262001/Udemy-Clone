import React, { useState } from 'react'
import './Course.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import StarIcon from '@material-ui/icons/Star';
import {Button} from '@material-ui/core';
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 15
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 10
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 5
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 3
    }
};

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
function Course() {

    const [course, setCourse] = useState("python");

    const bottomLine = (e, s) => {
        var elements = document.querySelectorAll("#para");
        elements.forEach((element) => {
            element.style.color = "grey";
        });
        elements[e].style.color = "black";

        setCourse(s);
    }

    return (
        <div className="course">
            <Carousel responsive={responsive}>
                <div><p className="para" id="para" onClick={() => bottomLine(0, "python")}>Python</p></div>
                <div><p className="para" id="para" onClick={() => bottomLine(1, "excel")}>Excel</p></div>
            </Carousel>
            <div className="courses">
                    {{
                        "python": (
                            <>
                            <div className="item-top">
                            <h1 className="top">Expand your career opportunities with Python</h1>
                            <p  className="top">Whether you work in machine learning or finance, or are pursuing a career in web development or data science, Python is one of the most important skills you can learn. Python's simple syntax is especially suited for desktop, web, and business applications. Python's design philosophy emphasizes readability and usability. Python was</p>
                            <Button className="button-top">Explore Python</Button>
                            </div>
                            <Carousel responsive={responsiveTwo}>
                            <div className="item">
                                <img src="/Images/coursesarea/python/six.jpg" className="item-image" />
                                <h3 className="heading">2021 Complete Python Bootcamp From Zero to Hero...</h3>
                                <p className="teacher">Jose Portilla</p>
                                <h3 className="rating">5 &nbsp; <StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /></h3>
                                <h3 className="heading">₹8,640</h3>
                            </div>
                            <div className="item">
                                <img src="/Images/coursesarea/python/two.jpg" className="item-image" />
                                <h3 className="heading">2021 Complete Python Bootcamp From Zero to Hero...</h3>
                                <p className="teacher">Jose Portilla</p>
                                <h3 className="rating">5 &nbsp; <StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /></h3>
                                <h3 className="heading">₹8,640</h3>
                            </div>
                            <div className="item">
                                <img src="/Images/coursesarea/python/three.jpg" className="item-image" />
                                <h3 className="heading">2021 Complete Python Bootcamp From Zero to Hero...</h3>
                                <p className="teacher">Jose Portilla</p>
                                <h3 className="rating">5 &nbsp; <StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /></h3>
                                <h3 className="heading">₹8,640</h3>
                            </div>
                            <div className="item">
                                <img src="/Images/coursesarea/python/four.jpg" className="item-image" />
                                <h3 className="heading">2021 Complete Python Bootcamp From Zero to Hero...</h3>
                                <p className="teacher">Jose Portilla</p>
                                <h3 className="rating">5 &nbsp; <StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /></h3>
                                <h3 className="heading">₹8,640</h3>
                            </div>
                            <div className="item">
                                <img src="/Images/coursesarea/python/five.jpg" className="item-image" />
                                <h3 className="heading">2021 Complete Python Bootcamp From Zero to Hero...</h3>
                                <p className="teacher">Jose Portilla</p>
                                <h3 className="rating">5 &nbsp; <StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /></h3>
                                <h3 className="heading">₹8,640</h3>
                            </div>
                            <div className="item">
                                <img src="/Images/coursesarea/python/one.jpg" className="item-image" />
                                <h3 className="heading">2021 Complete Python Bootcamp From Zero to Hero...</h3>
                                <p className="teacher">Jose Portilla</p>
                                <h3 className="rating">5 &nbsp; <StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /></h3>
                                <h3 className="heading">₹8,640</h3>
                            </div>
                            </Carousel>
                            </>
                        ),
                        "excel": (
                            <>
                            <div className="item-top">
                            <h1 className="top">Expand your career opportunities with Excel</h1>
                            <p  className="top">Whether you work in machine learning or finance, or are pursuing a career in web development or data science, Python is one of the most important skills you can learn. Python's simple syntax is especially suited for desktop, web, and business applications. Python's design philosophy emphasizes readability and usability. Python was</p>
                            <Button className="button-top">Explore Python</Button>
                            </div>
                            <Carousel responsive={responsiveTwo}>
                            <div className="item">
                                <img src="/Images/coursesarea/python/one.jpg" className="item-image" />
                                <h3 className="heading">2021 Complete Python Bootcamp From Zero to Hero...</h3>
                                <p className="teacher">Jose Portilla</p>
                                <h3 className="rating">5 &nbsp; <StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /></h3>
                                <h3 className="heading">₹8,640</h3>
                            </div>
                            <div className="item">
                                <img src="/Images/coursesarea/python/three.jpg" className="item-image" />
                                <h3 className="heading">2021 Complete Python Bootcamp From Zero to Hero...</h3>
                                <p className="teacher">Jose Portilla</p>
                                <h3 className="rating">5 &nbsp; <StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /></h3>
                                <h3 className="heading">₹8,640</h3>
                            </div>
                            <div className="item">
                                <img src="/Images/coursesarea/python/six.jpg" className="item-image" />
                                <h3 className="heading">2021 Complete Python Bootcamp From Zero to Hero...</h3>
                                <p className="teacher">Jose Portilla</p>
                                <h3 className="rating">5 &nbsp; <StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /></h3>
                                <h3 className="heading">₹8,640</h3>
                            </div>
                            <div className="item">
                                <img src="/Images/coursesarea/python/five.jpg" className="item-image" />
                                <h3 className="heading">2021 Complete Python Bootcamp From Zero to Hero...</h3>
                                <p className="teacher">Jose Portilla</p>
                                <h3 className="rating">5 &nbsp; <StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /></h3>
                                <h3 className="heading">₹8,640</h3>
                            </div>
                            <div className="item">
                                <img src="/Images/coursesarea/python/four.jpg" className="item-image" />
                                <h3 className="heading">2021 Complete Python Bootcamp From Zero to Hero...</h3>
                                <p className="teacher">Jose Portilla</p>
                                <h3 className="rating">5 &nbsp; <StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /></h3>
                                <h3 className="heading">₹8,640</h3>
                            </div>
                            <div className="item">
                                <img src="/Images/coursesarea/python/one.jpg" className="item-image" />
                                <h3 className="heading">2021 Complete Python Bootcamp From Zero to Hero...</h3>
                                <p className="teacher">Jose Portilla</p>
                                <h3 className="rating">5 &nbsp; <StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /><StarIcon className="star" /></h3>
                                <h3 className="heading">₹8,640</h3>
                            </div>
                            </Carousel>
                            </>
                        )
                    }[course]}
            </div>

        </div>
    )
}

export default Course
