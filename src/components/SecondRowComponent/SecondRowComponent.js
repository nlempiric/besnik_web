import React from 'react'
import Content from './Content'
import Imagecontent from './Imagecontent'
import Carousel from './Carousel'
const SecondRowComponent = () => {
  return (
    <div>
        <div className='row mt-5  pb-5'>
          <div className='col-lg-6 mt-5 '>
            <Content></Content>
        </div>
        <div className='col-lg-6'>
        <Imagecontent></Imagecontent>
        </div>
    </div>
    <div className='row mt-5'>
      <Carousel></Carousel>
    </div>
     </div> 
    
  )
}

export default SecondRowComponent
