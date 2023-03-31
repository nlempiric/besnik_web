import React from 'react'
import './Imagecontent.css'
import Card from 'react-bootstrap/Card';
import ci from '../../Images/webaliser-_TPTXZd9mOo-unsplash 1 (4).png'
import HomeImage from '../../Images/Mask group.png'
import {Typography} from '@mui/material'


const Imagecontent = () => {
  return (
    <div className='ig d-flex flex-column '>
            <img src={HomeImage} alt="" />
          <Card  className='cardClass'>
          <Card.Img variant="top" src={ci} className='cardImage' style={{width:'287px'}}/>
          <Card.Body>
            <Card.Text style={{height:'25px'}}><Typography className='typoClass' variant='h5' style={{color:'#2289FF',textAlign:'left'}}>$599,000</Typography></Card.Text>
            
            <Card.Text className='d-flex flex-row justify-content-between'>
              <div>
            <Typography className='typoClass' style={{color:'#0F2B4A',fontSize:'23px',textAlign:'left',fontFamily:'myFirstFont1'}}>Newport</Typography> 
            {/* <i class="fa-light fa-bed-front"></i> */}
            </div>
            <div>
            <span><i class="fa-solid fa-bed iconClass" style={{fontSize:'20px'}}></i>3</span>
            <span>|</span>
            <span><i class="fa-solid fa-bath iconClass" style={{fontSize:'20px'}} ></i>2</span>
            </div>
            </Card.Text>
            <Card.Text><Typography className='typoClass' style={{color:'#576B81',textAlign:'left', fontSize:'15px',fontFamily:'myFirstFont1'}}>15 Lee Ave, Newport, Rl 02564 </Typography></Card.Text>
          </Card.Body>
        </Card>
    </div>  
  )
}

export default Imagecontent
