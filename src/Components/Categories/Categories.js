import React from 'react'
import './Categories.css';
function Categories() {
    return (
        <div className="categories">
             <h1>Top Categories</h1>
             <div className="category-item">
                 <div className="c-i">
                     <img src="/Images/categories/one.jpg" className="c-image" />
                     <p>Business</p>
                 </div>

                 <div className="c-i">
                     <img src="/Images/categories/two.jpg" className="c-image" />
                     <p>Photography</p>
                 </div>

                 <div className="c-i">
                     <img src="/Images/categories/three.jpg" className="c-image" />
                     <p>Personal Development</p>
                 </div>

                 <div className="c-i">
                     <img src="/Images/categories/four.jpg" className="c-image" />
                     <p>Music</p>
                 </div>

                 <div className="c-i">
                     <img src="/Images/categories/five.jpg" className="c-image" />
                     <p>Marketing</p>
                 </div>

                 <div className="c-i">
                     <img src="/Images/categories/six.jpg" className="c-image" />
                     <p>IT & Software</p>
                 </div>

                 <div className="c-i">
                     <img src="/Images/categories/seven.jpg" className="c-image" />
                     <p>Development</p>
                 </div>

                 <div className="c-i">
                     <img src="/Images/categories/eight.jpg" className="c-image" />
                     <p>Design</p>
                 </div>
             </div>
        </div>
    )
}

export default Categories
