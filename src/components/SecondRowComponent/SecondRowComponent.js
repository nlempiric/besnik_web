import React from 'react'
import Content from './Content'
import Imagecontent from './Imagecontent'
import Logo from './Logo'

const SecondRowComponent = () => {
  return (
    <div>
        <div className='row mt-5 pb-5'>
          <div className='col-lg-6 mt-5 '>
            <Content></Content>
        </div>
        <div className='col-lg-6'>
        <Imagecontent></Imagecontent>
        </div>
    </div>
    <div className='row mt-5'>
      <Logo></Logo>
    </div>
     </div> 
    
  )
}

export default SecondRowComponent
