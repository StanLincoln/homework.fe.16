import React from 'react'
import './aboutUs.scss'
import icon1 from './../img/icon_01.svg'
import icon2 from './../img/icon_02.svg'
import icon3 from './../img/icon_03.svg'
import icon4 from './../img/icon_04.svg'


const AboutUs = () => {
  return (
    <section className='about'>
      <div className="about__container">
        <div className="about__row">
          <div className="about__card">
            <div className="card__img"><img src={icon1} alt="icon" /></div>
            <div className="card__text">
              <h4>High Quality</h4>
              <p>crafted from top materials</p>
            </div>
          </div>
          <div className="about__card">
            <div className="card__img"><img src={icon2} alt="icon" /></div>
            <div className="card__text">
              <h4>Warranty Protection</h4>
              <p>Over 2 years</p>
            </div>
          </div>
          <div className="about__card">
            <div className="card__img"><img src={icon3} alt="icon" /></div>
            <div className="card__text">
              <h4>Free Shipping</h4>
              <p>Order over 150 $</p>
            </div>
          </div>
          <div className="about__card">
            <div className="card__img"><img src={icon4} alt="icon" /></div>
            <div className="card__text">
              <h4>24 / 7 Support</h4>
              <p>Dedicated support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs