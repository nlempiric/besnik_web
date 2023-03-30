import React from 'react'
import CardComp from './CardComp'

const CardCarosuel = () => {
  return (
    <>
  
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1" ></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" ></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
            <CardComp/>
            </div>
            <div class="carousel-item">
            <CardComp/>
            </div>
            <div class="carousel-item">
            <CardComp/>
            </div>
        </div>
        
        </div>
   
    </>
  )
}

export default CardCarosuel
