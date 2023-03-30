import React from 'react'
import './cardComp.css'
import ui from '../../Images/download.jpeg'

const CardComp = () => {
  return (
    <>
    <div className='d-flex justify-content-around'>
      <div class="card ccClass" >
        <div className='d-flex flex-row justify-content-around align-items-center' style={{height:'450px',backgroundColor:' #F9FBFE'}}>
        <img class="card-img-top uiageClass" src={ui} alt="Card image cap"/>
        </div>
        
        <div class="card-body my-4 mx-3 d-flex flex-column align-items-center" style={{height:'250px'}}>
            <p class="card-text ctxtClass d-flex flex-column justify-content-around">We are very pleased with the way Besnik handled our purchase of a lake home. 
            He was prompt, friendly, and very knowledgeable. He followed up on any and all concerns.</p>
            <p className='nameClass'>Becky Nelson</p>
            <p><i class="fa fa-star" aria-hidden="true" style={{color:'#FE7E22'}}></i>
            <i class="fa fa-star" aria-hidden="true" style={{color:'#FE7E22'}}></i>
            <i class="fa fa-star" aria-hidden="true" style={{color:'#FE7E22'}}></i>
            <i class="fa fa-star" aria-hidden="true" style={{color:'#FE7E22'}}></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            </p>
        </div>
        </div>
    </div>
    </>
  )
}

export default CardComp
