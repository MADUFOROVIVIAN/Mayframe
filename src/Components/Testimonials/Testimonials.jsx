import React from 'react'
import style from "./Testimonials.module.css"
import client from  "../../Assests/client.png"
const Testimonials = () => {
  return (
    <div className={style.container}>
        <div className={style.top}>
            <h5>Testimonials</h5>
            <h2>What Our Students Says About Us</h2>
        </div>
        <div className={style.cards}>
            <div className={style.cardWrap}>
            <div className={style.cardImage}>
            <img src={client} alt="Client" />
            </div>
            </div>
            <h3>Toyosi Wales</h3>
            <h4>Business woman</h4>
            <p>
            Mayframe property development exceeded all my expectations
            when it comes to property development. Their attention to detail, exceptional
            craftsmanship, and unwavering commitment to quality are truly unmatched.
            </p>
        </div>
    </div>
  )
}

export default Testimonials