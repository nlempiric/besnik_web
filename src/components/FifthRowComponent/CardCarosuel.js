import React from 'react'
import CardComp from './CardComp'
import Carousel from 'react-bootstrap/Carousel';

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

      {/* <Carousel fade>
            <Carousel.Item>
              <CardComp/>
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <CardComp/>

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <CardComp/>

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel> */}
        
    </>
  )
}

export default CardCarosuel
