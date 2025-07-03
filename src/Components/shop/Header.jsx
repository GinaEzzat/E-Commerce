import React from 'react'
import './shop.css'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/Vectors/Meubel House_Logos-05.png'
import arrow from '../../assets/Vectors/arrow.png'


const Header = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate('/home')
  }
  const goToShop = () => {
    navigate('/shop')
  }
  
  return (
    <div className='shopHeader'>
        <div className='headerInfo'>
          <div className='Logo'>
            <img src={logo} alt="Meubel House Logo" />
          </div>
          <h1>
              Shop
          </h1>
          <div className='pageReverse'>
              <button onClick={goToHome}>Home</button>
              <img src={arrow} alt='navigation arrow' />
              <button onClick={goToShop}>Shop</button>
          </div>
        </div>
    </div>
  )
}

export default Header