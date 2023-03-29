import React from 'react'
import './Header.css'
import ig from '../../Images/hello.png'

const Header = () => {
  return (
    <>
   
      <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
      <div className='container-fluid col-xl-10 col-lg-11 mt-1 mb-5'>
        <a class="navbar-brand" href="#" style={{color:"#0F2B4A;"}}><img src={ig}/></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse d-flex justify-content-end mt-1 headerNav" id="navbarTogglerDemo02">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0 ">
            <li class="nav-item active me-5">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item me-5">
              <a class="nav-link" href="#">About us</a>
            </li>
            <li class="nav-item me-5">
              <a class="nav-link " href="#">Feature</a>
            </li>
            <li class="nav-item me-5">
              <a class="nav-link " href="#">Contact</a>
            </li>
            
          </ul >
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0 ">
          <li class="nav-item">
            <button class="btn btn-outline-primary mx-3 px-4 sup" type="submit">Sign In</button>
            </li>
            <li class="nav-item">
            <button class="btn btn-primary mx-3 px-4 sin" type="submit">Sign In</button>
            </li>
            </ul>
        </div>
        </div>
      </nav>
    
    </>
  )
}

export default Header
