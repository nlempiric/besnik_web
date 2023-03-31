import React from 'react'
import './CardsGroup.css'
import i1 from '../../Images/pexels-expect-best-1269560 1.png'
import i2 from '../../Images/iamge.png'
import i3 from '../../Images/pexels-expect-best-1193714 1.png'
import i4 from '../../Images/pexels-melina-vargas-2360948 1.png'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton'

const CardsGroups = () => {
  return (
    <div>
      <div>
      <div className='row mt-5'>
            
            <div className='col'>
                <div class="card cClass" style={{width: "700px"}}>
                    <div class="row no-gutters">
                        <div class="col-sm-5">
                            <img class="card-img imgClass" src={i1} alt="Suresh Dasari Card"/>
                        </div>
                        <div class="col-sm-7">
                            <div class="card-body cbodyClass">
                                <div className='d-flex flex-row priceClass justify-content-between mb-2'>
                                    <h3>$259,000</h3> 
                                    <FavoriteIcon style={{backgroundColor:'#D7EAFF',borderRadius:'6px' ,height:'25px',width:'25px'}}></FavoriteIcon>
                                </div>
                                <div className='d-flex flex-row nClass mt-2'>
                                    <h3>Case Alda</h3> 
                                </div>
                                <div className='d-flex flex-row'>
                                    <p>Co Rd Tribune Tribune</p> 
                                </div>
                                <div className='d-flex flex-row'>
                                    <span className='spanClass'><i class="fa-solid fa-bed i1conClass"></i>2 Beds</span>
                                    <span className='spanClass'><i class="fa-solid fa-bath i1conClass"></i>2 Bath</span>
                                </div>
                                <div className='d-flex flex-row mt-4'>
                                <button class="btn btn-primary sin" type="submit">View Details</button> 
                                </div>
                                    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col'>
                <div class="card cClass" style={{width: "700px"}}>
                    <div class="row no-gutters">
                        <div class="col-sm-5">
                            <img class="card-img imgClass" src={i2} alt="Suresh Dasari Card"/>
                        </div>
                        <div class="col-sm-7">
                        <div class="card-body cbodyClass">
                                <div className='d-flex flex-row priceClass justify-content-between mb-2'>
                                    <h3>$$229,000</h3> 
                                    <FavoriteBorderIcon style={{border:'1px solid #2289FF',borderRadius:'6px' ,height:'25px',width:'25px'}}/>
                                </div>
                                <div className='d-flex flex-row nClass mt-2'>
                                    <h3>Langes Beach House</h3> 
                                </div>
                                <div className='d-flex flex-row'>
                                    <p>375 Highland Ave NE UNIT 1002</p> 
                                </div>
                                <div className='d-flex flex-row'>
                                    <span className='spanClass'><i class="fa-solid fa-bed i1conClass"></i>2 Beds</span>
                                    <span className='spanClass'><i class="fa-solid fa-bath i1conClass"></i>2 Bath</span>
                                </div>
                                <div className='d-flex flex-row mt-4'>
                                <button class="btn btn-outline-primary sup" type="submit">View Details</button> 
                                </div>
                                    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div className='row mt-5'>
        <div className='row'>
            
            <div className='col'>
                <div class="card cClass" style={{width: "700px"}}>
                    <div class="row no-gutters">
                        <div class="col-sm-5">
                            <img class="card-img imgClass" src={i3} alt="Suresh Dasari Card"/>
                        </div>
                        <div class="col-sm-7">
                        <div class="card-body cbodyClass">
                                <div className='d-flex flex-row priceClass justify-content-between mb-2'>
                                    <h3>$289,000</h3> 
                                    <FavoriteBorderIcon style={{border:'1px solid #2289FF',borderRadius:'6px' ,height:'25px',width:'25px'}}/>
                                </div>
                                <div className='d-flex flex-row nClass mt-2'>
                                    <h3>Supper Delax Home</h3> 
                                </div>
                                <div className='d-flex flex-row'>
                                    <p>1398 Lynford Dr SW, Atlanta</p> 
                                </div>
                                <div className='d-flex flex-row'>
                                    <span className='spanClass'><i class="fa-solid fa-bed i1conClass"></i>2 Beds</span>
                                    <span className='spanClass'><i class="fa-solid fa-bath i1conClass"></i>2 Bath</span>
                                </div>
                                <div className='d-flex flex-row mt-4'>
                                <button class="btn btn-outline-primary sup" type="submit">View Details</button> 
                                </div>
                                    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-6'>
                <div class="card cClass" style={{width: "700px"}}>
                    <div class="row no-gutters">
                        <div class="col-sm-5">
                            <img class="card-img imgClass" src={i4} alt="Suresh Dasari Card"/>
                        </div>
                        <div class="col-sm-7">
                        <div class="card-body cbodyClass">
                                <div className='d-flex flex-row priceClass justify-content-between mb-2'>
                                    <h3>$329,000</h3> 
                                    <IconButton className='MyCustomButton'>
                                    <FavoriteBorderIcon style={{border:'1px solid #2289FF', color:'#2289FF',borderRadius:'6px' ,height:'25px',width:'25px'}}/> 
                                    </IconButton>

                                    {/* <FavoriteBorderIcon style={{border:'1px solid #2289FF',borderRadius:'6px' ,height:'25px',width:'25px'}}/> */}
                                </div>
                                <div className='d-flex flex-row nClass mt-2'>
                                    <h3>Clinton Villa</h3> 
                                </div>
                                <div className='d-flex flex-row'>
                                    <p>675 Albert St NW, Atlanta</p> 
                                </div>
                                <div className='d-flex flex-row'>
                                    <span className='spanClass'><i class="fa-solid fa-bed i1conClass"></i>2 Beds</span>
                                    <span className='spanClass'><i class="fa-solid fa-bath i1conClass"></i>2 Bath</span>
                                </div>
                                <div className='d-flex flex-row mt-4'>
                                <button class="btn btn-outline-primary sup" type="submit">View Details</button> 
                                </div>
                                    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default CardsGroups
