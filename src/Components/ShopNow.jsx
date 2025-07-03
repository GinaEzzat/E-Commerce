import React from 'react'
import rocketSEater from '../assets/Images/Rocket single seater 1.png'
import './shopnow.css'
import { useNavigate } from 'react-router-dom'
const ShopNow = () => {
    const navigate = useNavigate();
    const goShopping = () =>{
        navigate('/shop')
    }
    return (
        <>
            <div className='homeScreen'>
                <div className='introWithBtn'>
                    <h1 className='Header'>
                        Rocket Single Seater
                    </h1>
                    <button className='shopBtn' onClick={goShopping}>Shop Now</button>
                </div>
                <div className='homeScreenImage'>
                    <img src={rocketSEater} width={900} height={1000} />
                </div>
            </div>
        </>
    )
}

export default ShopNow