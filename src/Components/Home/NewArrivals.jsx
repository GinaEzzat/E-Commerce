import React from 'react'
import asgaardSofa from '../../assets/Images/Asgaard sofa 1.png'
import { useNavigate } from 'react-router-dom'
import './newarrivals.css'
const NewArrivals = () => {
    const navigate = useNavigate();
    const orderNow = () => {
        navigate('/orderNow')
    }
  return (
    <div className='newArrivalsContainer'>
        <div className='ImageContainer'>
            <img src={asgaardSofa} alt='Asgaard Sofa Image' className='AsgaardSofa'/>
        </div>
        <div className='orderNowContainer'>
            <p>New Arrivals</p>
            <h1>Asgaard Sofa</h1>
            <button onClick={orderNow} >Order Now</button>
        </div>
    </div>
  )
}

export default NewArrivals