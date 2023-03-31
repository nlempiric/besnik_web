import React from 'react'
import i1 from '../../Images/image 527.png'
import i2 from '../../Images/image 528.png'
import i3 from '../../Images/image 529.png'
import i4 from '../../Images/image 530.png'
import i5 from '../../Images/image 531.png'

const Logo = () => {
  return (
    <div className='row my-5 '>
      {/* <div className='col-3 p-3'>
      <img src={i1} alt="" />
      </div>
      <div className='col-3 p-3'>
      <img src={i2} alt="" />
      </div>
      <div className='col-3 p-3'>
      <img src={i3} alt="" />
      </div>
      <div className='col-3 p-3'>
      <img src={i4} alt="" />
      </div>
      <div className='col-3 p-3'>
      <img src={i5} alt="" />
      </div> */}
      <div className='d-flex flex-row justify-content-between my-5'>
        <div >
          <img src={i1} alt="" />
        </div>
        <div >
          <img src={i2} alt="" />
        </div>
        <div >
          <img src={i3} alt="" />
        </div>
        <div >
          <img src={i4} alt="" />
        </div>
        <div >
          <img src={i5} alt="" />
        </div>

      </div>
    </div>
  )
}

export default Logo
