import React, { useEffect } from "react";
import style from "./Footer.module.css";
import footlogo from "../../Assests/Logo.png";
import locate from "../../Assests/locate.png";
import call from "../../Assests/call.png";
import whatsapp from "../../Assests/whatsapp.png";
import IG from "../../Assests/IG.png";
import LN from "../../Assests/LN.png";
import X from "../../Assests/X.png";
import FB from "../../Assests/FB.png";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { FaWhatsappSquare } from "react-icons/fa";

const Footer = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className={style.container}>
      <footer>
        <div className={style.logoside}>
          <div className={style.footlogo}>
            <img src={footlogo} alt="footlogo" />
          </div>
          <p>
            {" "}
            <span>
              We are all about empowering growth and transforming industries
            </span>
          </p>
          <div className={style.info}>
            <div className={style.location}>
              <div className={style.locationimage}>
                <img src={locate} alt="locate" />
              </div>
              <div className={style.locationtext}>
                <p>Osun State, Nigeria</p>
              </div>
            </div>

            <div className={style.location}>
              <div className={style.locationimage}>
                <img src={call} alt="call" />
              </div>
              <div className={style.locationtext}>
                <p>08066758355</p>
              </div>
            </div>

            <div className={style.location}>
              <div className={style.locationimage}>
                <img src={whatsapp} alt="whatsapp" />
              </div>
              <div className={style.locationtext}>
                <p>08066758355</p>
              </div>
            </div>
          </div>
        </div>

        <div className={style.footside}>
          <div className={style.quick}>
            <h3>Quick Links</h3>
            <p>Home</p>
            <p> Services</p>
            <p>About Us </p>
            <p> Contact Us</p>
          </div>

          <div className={style.quick}>
            <h3>Follow Us</h3>
            <div className={style.socials}>
              <img src={X} alt="X" />
              <img src={IG} alt="Instagram" />
              <img src={LN} alt="Linkedln" />
              <img src={FB} alt="Facebook" />
            </div>
          </div>

          <div className={style.quick}>
            <h3>Email</h3>
            <p>consulting@mayframe-group.com</p>
          </div>
        </div>

        <div
          className={style.scrollUp}
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          <BsFillArrowUpCircleFill className={style.iconscroll} />
        </div>

        <div className={style.whatsapp}>
          <a href="https://wa.me/qr/K62V3OTIYAFSP1">
        <FaWhatsappSquare className={style.whatsappIcon} />
        </a>
        </div>

      </footer>
    </div>
  );
};

export default Footer;
