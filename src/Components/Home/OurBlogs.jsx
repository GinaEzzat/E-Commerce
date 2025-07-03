import React from 'react'
import './ourblogs.css'
import './sideTable.css'
import blog1 from '../../assets/Images/Rectangle 13 (1).png'
import blog2 from '../../assets/Images/Rectangle 14.png'
import blog3 from "../../assets/Images/Rectangle 15.png"
import { useNavigate } from 'react-router-dom'
const OurBlogs = () => {
    const navigate = useNavigate();
            const viewMoreBtn = () =>{
                navigate('/viewMore')
            }
  return (
    <div className='ourBlogs'>
        <div className='headers'>
            <h1>Our Blogs</h1>
            <p>Find a bright ideal to suit your taste with our great selection</p>
        </div>
        <div className='Blogs'>
            <div className='blogContainer'>
                <img src={blog1} alt="blog 1 image" />
                <p>Going all-in with millennial design</p>
                <button className='Viewbtn' onClick={viewMoreBtn}>Read More</button>
                <div className='DateTime'></div>
            </div>
            <div className='blogContainer'>
                <img src={blog2} alt="blog 2 image" />
                <p>Going all-in with millennial design</p>
                <button className='Viewbtn' onClick={viewMoreBtn}>Read More</button>
                <div className='DateTime'></div>
            </div>
            <div className='blogContainer'>
                <img src={blog3} alt="blog 3 image" />
                <p>Going all-in with millennial design</p>
                <button className='Viewbtn' onClick={viewMoreBtn}>Read More</button>
                <div className='DateTime'></div>
            </div>
        </div>
    </div>
  )
}

export default OurBlogs