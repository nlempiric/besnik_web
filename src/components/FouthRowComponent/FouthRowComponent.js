import React from 'react'
import './FourthRowcomponent.css'
import {MenuItem,Select,FormControl,InputLabel,Button} from '@mui/material'
import i1 from '../../Images/pexels-expect-best-1269560 1.png'
import i2 from '../../Images/iamge.png'
import i3 from '../../Images/pexels-expect-best-1193714 1.png'
import i4 from '../../Images/pexels-melina-vargas-2360948 1.png'

const FouthRowComponent = () => {
  return (
    <>
    <div className='row mt-5 mb-3'>
        <div className='col-4 t1Class'>
        Our trending latest proparty
        </div>
        <div className='col-8 d-flex justify-content-end pt-5'>
        <FormControl className='dropdClass mx-5'>
            <InputLabel id="demo-simple-select-label">Property Type</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                label="Age"
                // onChange={handleChange}
            >
                <MenuItem >Ten</MenuItem>
                <MenuItem >Twenty</MenuItem>
                <MenuItem >Thirty</MenuItem>
            </Select>
            </FormControl>
            <button class="btn btn-primary sp mx-3" type="submit">See all Property</button>
        </div>
    </div>
    <div className='row mt-4'>
        <div className='col-4 t2Class'>
        Our unique process gives you peace of mind from home rent to services
        </div>
    </div>

    <div className='row mt-5'>
        <div className='row'>
            
            <div className='col'>
                <div class="card cClass" style={{width: "700px"}}>
                    <div class="row no-gutters">
                        <div class="col-sm-5">
                            <img class="card-img imgClass" src={i1} alt="Suresh Dasari Card"/>
                        </div>
                        <div class="col-sm-7">
                            <div class="card-body">
                                <h5 class="card-title">Suresh Dasari</h5>
                                <p class="card-text">Suresh Dasari is a founder and technical lead developer in tutlane.</p>
                                <a href="#" class="btn btn-primary">View Profile</a>
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
                            <div class="card-body">
                                <h5 class="card-title">Suresh Dasari</h5>
                                <p class="card-text">Suresh Dasari is a founder and technical lead developer in tutlane.</p>
                                <a href="#" class="btn btn-primary">View Profile</a>
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
                            <div class="card-body">
                                <h5 class="card-title">Suresh Dasari</h5>
                                <p class="card-text">Suresh Dasari is a founder and technical lead developer in tutlane.</p>
                                <a href="#" class="btn btn-primary">View Profile</a>
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
                            <div class="card-body">
                                <h5 class="card-title">Suresh Dasari</h5>
                                <p class="card-text">Suresh Dasari is a founder and technical lead developer in tutlane.</p>
                                <a href="#" class="btn btn-primary">View Profile</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>      
      )}
    

export default FouthRowComponent
