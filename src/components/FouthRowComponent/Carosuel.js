import React from 'react'
import CardsGroups from './CardsGroups'

const Carosuel = () => {
  return (
    <>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
            <CardsGroups></CardsGroups>
            </div>
            <div class="carousel-item">
            <CardsGroups></CardsGroups>
            </div>
            <div class="carousel-item">
            <CardsGroups></CardsGroups>
            </div>
        </div>
        
        </div>

    </>
  )
}

export default Carosuel
