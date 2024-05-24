import React from 'react'
import style from "./Header.module.css"
import Logo from "../../Assests/Logo.png"

const Header = () => {
  return (
    <div className='{style.container}'>
        <header>
            <div className= {style.logo}>
                <a href="/">
                <img src={Logo} alt='Logo' />
                </a>
            </div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="about">About Us</a></li>
                    <li><a href="service">Services</a></li>
                    <li><a href="contact">Contact Us</a></li>
                    <li><a href="driving">Driving</a></li>
                </ul>
            </nav>
            </header>
        </div>
  )
}

export default Header