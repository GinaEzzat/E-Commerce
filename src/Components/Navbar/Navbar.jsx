import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import account from '../../assets/vectors/Vector3.png'
import search from '../../assets/vectors/Vector2.png'
import favorite from '../../assets/vectors/Vector1.png'
import cart from '../../assets/vectors/Vector.png'
const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <div className='Links'>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to='/'>Home </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/shop">Shop</Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact</a>
                            </li>
                        </div>
                        <div className='Vectors'>
                            <li class="nav-item">
                                <img className='vector' src={account} />
                            </li>
                            <li class="nav-item">
                                <img className='vector' src={search} />
                            </li>
                            <li class="nav-item">
                                <img className='vector' src={favorite} />
                            </li>
                            <li class="nav-item">
                                <img className='vector' src={cart} />
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar