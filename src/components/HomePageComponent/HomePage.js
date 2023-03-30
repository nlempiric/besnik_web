import React from 'react'
import Header from '../HeaderComponent/Header'
import SecondRowComponent from '../SecondRowComponent/SecondRowComponent'
import ThirdRowComponent from '../ThirdRowComponent/ThirdRowComponent'
import FouthRowComponent from '../FouthRowComponent/FouthRowComponent'
import FifthRowComponent from '../FifthRowComponent/FifthRowComponent'
import SixthRowComponent from '../SixthRowComponent/SixthRowComponent'
import Footer from '../Footer/Footer'


const HomePage = () => {
  return (
    <>
    <Header></Header>
    
    <div className='container-fluid col-xl-10 col-lg-11'>
      <div className='row '>
          <SecondRowComponent/>
      </div>
      <div className='row mt-5'>
          <ThirdRowComponent/>
      </div>
        <div className='row mt-5'>
            <FouthRowComponent/>
      </div>
      
    </div>
    <div className='row mt-5'>
          <FifthRowComponent/>
    </div>
      <div className='row mt-5'>
          <SixthRowComponent/>
    </div>
    {/* <div className='container-fluid col-xl-10 col-lg-11'> */}
    <div className='row mt-5'>
          <Footer/>
    </div>
    {/* </div> */}
   </>
  )
}

export default HomePage
