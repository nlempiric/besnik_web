import React from 'react'
import Header from '../HeaderComponent/Header'
import SecondRowComponent from '../SecondRowComponent/SecondRowComponent'
import ThirdRowComponent from '../ThirdRowComponent/ThirdRowComponent'
import FouthRowComponent from '../FouthRowComponent/FouthRowComponent'
import FifthRowComponent from '../FifthRowComponent/FifthRowComponent'
import SixthRowComponent from '../SixthRowComponent/SixthRowComponent'
import Footer from '../Footer/Footer'
import './HomePage.css';


const HomePage = () => {
  return (
    <>
    <Header></Header>
    
    <div className='container-fluid col-xl-10 col-lg-11'>
        <div className='row mt-5'>
            <SecondRowComponent/>
        </div>
        <div className='row my-5'>
          <ThirdRowComponent/>
        </div>
        <div className='row my-5'>
          <FouthRowComponent/>
        </div>
    
    </div>
    {/* <div className="container-fluid col-xl-10 col-lg-11"> */}
    
    <div className='row my-5'>
        <FifthRowComponent/>
      </div>
      <div className='row mt-5'>
      <SixthRowComponent/>
      </div>

      <div className='row mt-5'>
      <Footer/>
        </div>     
      
            
      
    {/* </div> */}
    {/* <div className='container-fluid col-xl-10 col-lg-11'> */}
    
          
    {/* </div> */}
   </>
  )
}

export default HomePage
