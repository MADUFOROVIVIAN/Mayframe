import React, { useState } from "react";
import style from "./Header.module.css";
import Logo from "../../Assests/Logo.png";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };

  const handleNavLinkClick = () => {
    setNavOpen(false);
  };
  return (
    <div className={style.container}>
      <header>
        <div className={style.logo}>
          <a href="/">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
        <nav className={style.navMenu}>
          <ul>
            <li>
              <a href="/" onClick={handleNavLinkClick}>
                Home
              </a>
            </li>
            <li>
              <a href="about" onClick={handleNavLinkClick}>
                About Us
              </a>
            </li>
            <li>
              <a href="contact" onClick={handleNavLinkClick}>
                Contact Us
              </a>
            </li>
            <li>
              <a href="consultancy" onClick={handleNavLinkClick}>
                Consultancy
              </a>
            </li>
            <li>
              <a href="Investment" onClick={handleNavLinkClick}>
                Investment
              </a>
            </li>
            <li>
              <a href="property" onClick={handleNavLinkClick}>
                Property
              </a>
            </li>
            <li>
              <a href="driving" onClick={handleNavLinkClick}>
                Driving
              </a>
            </li>
          </ul>
        </nav>
        <div className={style.hamburger} onClick={handleNavToggle}>
          {!navOpen ? (
            <IoMdMenu className={style.Icons} />
          ) : (
            <IoMdClose className={style.Icons} />
          )}
        </div>
        <div className={navOpen ? style.active : style.mobileMenu}>
          <nav className={style.mobileNav}>
            <ul>
              <li>
                <a href="/" onClick={handleNavLinkClick}>
                  Home
                </a>
              </li>
              <li>
                <a href="about" onClick={handleNavLinkClick}>
                  About Us
                </a>
              </li>
              <li>
                <a href="contact" onClick={handleNavLinkClick}>
                  Contact Us
                </a>
              </li>
              <li>
                <a href="consultancy" onClick={handleNavLinkClick}>
                  Consultancy
                </a>
              </li>
              <li>
                <a href="Investment" onClick={handleNavLinkClick}>
                  Investment
                </a>
              </li>
              <li>
                <a href="property" onClick={handleNavLinkClick}>
                  Property
                </a>
              </li>
              <li>
                <a href="driving" onClick={handleNavLinkClick}>
                  Driving
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
