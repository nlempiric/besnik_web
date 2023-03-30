import React from 'react'
import {MenuItem,Select,FormControl,InputLabel,Button} from '@mui/material'

import './Content.css'

const Content = () => {
  return (
    <>
    <div className='row'>
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
    </>
  )
}

export default Content
