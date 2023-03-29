import React from 'react'
import './Imagecontent.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ci from '../../Images/webaliser-_TPTXZd9mOo-unsplash 1 (4).png'
import HomeImage from '../../Images/Mask group.png'
import {Typography} from '@mui/material'
import { fontSize } from '@mui/system';
import KingBedOutlinedIcon from '@mui/icons-material/KingBedOutlined';
import ig from '../../Images/Group 4929.png'

const Imagecontent = () => {
  return (
    <div className='ig d-flex flex-column '>
            <img src={HomeImage} alt="" />
          <Card  className='cardClass'>
          <Card.Img variant="top" src={ci} className='cardImage' style={{width:'287px'}}/>
          <Card.Body>
            <Card.Text style={{height:'25px'}}><Typography className='typoClass' variant='h5' style={{color:'#2289FF',textAlign:'left'}}>$599,000</Typography></Card.Text>
            <Card.Text>
            <Typography className='typoClass' style={{color:'#0F2B4A',fontSize:'23px',textAlign:'left',fontFamily:'myFirstFont1'}}>Newport</Typography> 
            {/* <img className='igClass' src={ig} alt="" width='20px'/> */}
            </Card.Text>
            <Card.Text><Typography className='typoClass' style={{color:'#576B81',textAlign:'left', fontSize:'15px',fontFamily:'myFirstFont1'}}>15 Lee Ave, Newport, Rl 02564 </Typography></Card.Text>
          </Card.Body>
        </Card>
    </div>  
  )
}

export default Imagecontent
