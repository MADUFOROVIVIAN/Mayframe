import React from "react";
import style from "./Testimonials.module.css";
import client from "../../Assests/client.png";
import Slider from "react-slick";

function AutoPlay() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={style.container}>
      <div className={style.top}>
        <h5>Testimonials</h5>
        <h2>What Our Students Says About Us</h2>
      </div>
      <div className={style.cards}>
        <Slider {...settings}>
          <div className={style.cardWrap}>
            <div className={style.card}>
              <div className={style.cardImage}>
                <img src={client} alt="Client" />
              </div>
              <h4>Tolu Oyeh</h4>
              <h5>Business woman</h5>
              <p>
                Choosing Mayframe driving academy was the best decision I made
                for learning how to drive. The instructors were patient,
                knowledgeable, and made me feel at ease behind the wheel. Thanks
                to their expert guidance, I gained the skills and confidence to
                pass my driving test with ease.
              </p>
            </div>
          </div>
          <div className={style.cardWrap}>
            <div className={style.card}>
              <div className={style.cardImage}>
                <img src={client} alt="Client" />
              </div>
              <h4>Tolu Oyeh</h4>
              <h5>Business woman</h5>
              <p>
                Choosing Mayframe driving academy was the best decision I made
                for learning how to drive. The instructors were patient,
                knowledgeable, and made me feel at ease behind the wheel. Thanks
                to their expert guidance, I gained the skills and confidence to
                pass my driving test with ease.
              </p>
            </div>
          </div>
          <div className={style.cardWrap}>
            <div className={style.card}>
              <div className={style.cardImage}>
                <img src={client} alt="Client" />
              </div>
              <h4>Tolu Oyeh</h4>
              <h5>Business woman</h5>
              <p>
                Choosing Mayframe driving academy was the best decision I made
                for learning how to drive. The instructors were patient,
                knowledgeable, and made me feel at ease behind the wheel. Thanks
                to their expert guidance, I gained the skills and confidence to
                pass my driving test with ease.
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default AutoPlay;
