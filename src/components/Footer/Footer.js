import React from 'react'
import li from'../../Images/hello.png'
import './Footer.css'

const Footer = () => {
  return (
    <>
    {/* <div className='row mt-5'> */}
    <div className='mt-5 container-fluid col-xl-10 col-lg-11' style={{height:'455px'}}>
   
      <div className='d-flex justify-content-between  fClass mt-5 mb-5'>
        <div className='d-flex flex-column text-start'>
            <h3>Popular Searches</h3>
            <p>Apartment for Rent</p>
            <p>Apartment Low to hide</p> 
            <p>Offices for Buy</p> 
            <p>Offices for Rent</p>
        </div>

        <div className='d-flex flex-column text-start'>
            <h3>Our Story</h3>
            <p>Team Members </p>
            <p>Careers</p> 
            <p>Contact Us</p> 
        </div>

        <div className='d-flex flex-column text-start'>
            <h3>Terms of Use</h3>
            <p> Privacy Policy</p>
            <p> Contact Support</p> 
            <p>FAQs</p> 
        </div>
        <div className='d-flex flex-column text-start'>
            <h3>Help Center </h3>
            <p>Loan Support </p>
            <p>Managment</p> 
            <p>Privacy Policy</p> 
       
        </div>
      
    </div>
    <div className='row '>
        <div className='d-flex flex-row justify-content-between'>
        <img src={li} height='25px'/>
        <p style={{color:'#A2AFBD',fontSize:'20px'}}>© 2021 Besnik. All Rights Reserved</p>
        </div>
    </div>
    </div>
    {/* </div> */}
    </>
  )
}

export default Footer
