import React from 'react'
import './SixthRowComponent.css'

const SixthRowComponent = () => {
  return (
    <>
    {/* <div className='row rowClass container-fluid col-xl-10 col-lg-11'>
        
        <div className='col-6 d-flex justify-content-around align-items-center'>
            <div className=' col-sm-7 d-flex flex-column text-start'>
                <p className='p1Text'>Talk to a Redfin Agent</p>
                <p className='p2Text'>Start your search with an expert local agent—there’s no pressure or obligation.</p>
            </div>
        </div>

        <div className='col-6 d-flex justify-content-around align-items-center'>
        <div className=' d-flex flex-column text-start'>
                <p className='p2Text'>Where are you searching for homes?</p>
                <p><div class="input-group">
                    <div class="form-outline">
                        <input type="search" id="form1" class="form-control isClass" placeholder='City, Address, ZIP'/>
                        <label class="form-label" for="form1">Search</label>
                    </div>
                    <button type="button" class="btn btn-primary sbtnClass">
                        <i class="fas fa-search"></i>
                    </button>
                    </div>
                </p>
            </div>
        </div>

    </div> */}

    <div className='rowClass d-flex align-items-center'>
        
        <div className='container-fluid col-xl-10 col-lg-11'>
            <div className='row'>

                <div className='col-6 d-flex flex-column text-start'>
                <p className='p1Text'>Talk to a Redfin Agent</p>
                    <p className='p2Text col-8'>Start your search with an expert local agent—there’s no pressure or obligation.</p>
                </div>
            
                <div className='col-6 d-flex flex-column'>
                    <p className='p2Text'>Where are you searching for homes?</p>
                    <p><div class="input-group">
                        <div class="form-outline">
                            <input type="search" id="form1" class="form-control isClass" placeholder='City, Address, ZIP'/>
                            <label class="form-label" for="form1">Search</label>
                        </div>
                        <button type="button" class="btn btn-primary sbtnClass">
                            <i class="fas fa-search"></i>
                        </button>
                        </div>
                    </p>
                </div>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default SixthRowComponent
