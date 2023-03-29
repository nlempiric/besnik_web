import React from 'react'
import './ThirdRowComponent.css'
import i1 from '../../Images/icon 01.png'
import i2 from '../../Images/icon 02.png'
import i3 from '../../Images/icon 03.png'


const ThirdRowComponent = () => {
  return (
    <>
    <div className='row mt-5 mb-5'>
      <div className='col tclass mt-5'>
      What Can We Help You Find?
      </div>
      <div className='row mt-5 d-flex flex-column'>
          <div class="card-group">
            <div class="card cardGroup d-flex flex-column align-items-center">
              <img class="card-img-top iClass" src={i1} alt="Card image cap"/>
              
              <div class="card-body">
                <h5 class="card-title titleClass">Buy a home</h5>
                <p class="card-text">With over 1 million+ homes for sale available on the website, Trulia can match you with a house.</p>
              </div>
            </div>
            <div class="card cardGroup d-flex flex-column align-items-center">
              <img class="card-img-top iClass" src={i2} alt="Card image cap"/>
              <div class="card-body">
                <h5 class="card-title titleClass">Rent a home</h5>
                <p class="card-text">With 35+ filters and custom keyword search, Trulia can help you find a home</p>
              </div>
            </div>
            <div class="card cardGroup d-flex flex-column align-items-center">
              <img class="card-img-top iClass" src={i3} alt="Card image cap"/>
              <div class="card-body ">
                <h5 class="card-title titleClass">See neighborhoods</h5>
                <p class="card-text">With more neighborhood insights than any other real estate website.</p>
              </div>
            </div>
          </div>
      </div>
    </div>
    </>
  )
}

export default ThirdRowComponent
