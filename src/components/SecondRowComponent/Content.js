import React from 'react'
import './Content.css'
const Content = () => {
  return (
    <div style={{color:'#0F2B4A'}}>
      {/* <div className='row mt-5'>
          <div className='col-lg-6 mt-5'> */}
            <div className='row h1tag mb-4 mt-4'>
                <div className='col-sm-9'>
                    <p>Search For Homes In Your Neighborhood</p>
                </div>
            </div>

            <div className='row mt-4'>
                <div className='col-sm-9 desc'>
                        <p style={{color:'#576B81'}}>Online Estate Agency, the modern way to sell your own home. 
                            You can use griffin residential to market your property.
                        </p>
                </div>
            </div>

            <div className='row mt-4 '>
                <div className='col-sm-8 d-flex justify-content-around align-items-center p-3 SearchField ' >

                    <div className='d-flex flex-column text-start'>

                        <label htmlFor="add" className=''>Address</label>
                        <input type="text"  id='add' placeholder='587 Bridgeton Road'/> 
                    </div>
              
                    <div className='d-flex flex-column text-start'>

                        <label htmlFor="city">City</label>
                        <input type="text"  id='city' placeholder='El Paso, Texas'/>   
                    </div>
                 
                    <div className='d-flex flex-column text-start'>

                        <button className='btn btn-primary '>Search</button>
                    </div>
                        
                    {/* </div> */}
                {/* </div> */}
                </div>
                </div>
          </div>

    //     </div>
    // </div>
  )
}

export default Content
