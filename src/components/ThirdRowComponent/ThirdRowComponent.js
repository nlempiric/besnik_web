import React from 'react'
import './ThirdRowComponent.css'
import i1 from '../../Images/icon 01.png'
import i2 from '../../Images/icon 02.png'
import i3 from '../../Images/icon 03.png'


const ThirdRowComponent = () => {
  return (
    <>
    <div className='row my-5'>
      <div className='col tclass mt-5'>
      What Can We Help You Find?
      </div>
      <div className='row mt-5 d-flex flex-column'>
          <div class="card-group">
            <div class="card cardGroup d-flex flex-column align-items-center">
              <img class="card-img-top iClass mt-5 mb-5" src={i1} alt="Card image cap"/>
              
              <div class="card-body ">
                <h5 class="card-title titleClass ">Buy a home</h5>
                <p class="card-text ctextClass">With over 1 million+ homes for sale <br/>available on the website, Trulia can  <br/>match you with a house.</p>
              </div>
            </div>
            <div class="card cardGroup d-flex flex-column align-items-center">
              <img class="card-img-top iClass mt-5 mb-5" src={i2} alt="Card image cap"/>
              <div class="card-body">
                <h5 class="card-title titleClass">Rent a home</h5>
                <p class="card-text ctextClass">With 35+ filters and custom keyword <br/> search, Trulia can help you  <br/>find a home</p>
              </div>
            </div>
            <div class="card cardGroup d-flex flex-column align-items-center">
              <img class="card-img-top iClass mt-5 mb-5" src={i3} alt="Card image cap"/>
              <div class="card-body ">
                <h5 class="card-title titleClass">See neighborhoods</h5>
                <p class="card-text ctextClass">With more neighborhood insights  <br/>than any other real estate  <br/>website.</p>
              </div>
            </div>
          </div>
      </div>
    </div>
    </>
  )
}

export default ThirdRowComponent
