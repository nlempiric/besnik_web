import React from 'react'
import './FifthRowComponent.css'
import bi from '../../Images/Testimonial.png'
import CardCarosuel from './CardCarosuel'

const FifthRowComponent = () => {
  return (
    <>
        <div className='row my-5'>
            <img src={bi} alt="" style={{position:'relative',padding:'0' }} width='100%'/>
            <div className='d-flex flex-column justify-content-around align-item-center' style={{position:'absolute'}}> 
                <div className='row txtClass d-flex justify-content-around mt-5 mb-4 pt-5'>
                        TESTIMONIALS
                </div>
                <div className='row txt1Class d-flex justify-content-around ' >
                    Our Clients send us bunch of smilies with our services and we love them
                </div>
                <div>
                    <CardCarosuel></CardCarosuel>
                </div>
            </div>
        </div>
        
    </>
  )
}

export default FifthRowComponent
