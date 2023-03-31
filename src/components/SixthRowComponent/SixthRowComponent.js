import React from "react";
import "./SixthRowComponent.css";

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

      {/* <div className="rowClass row container-fluid col-xl-10 col-lg-11 p-5 d-flex justify-content-between ">
        <div className="col-6 d-flex flex-column text-start">
          <p className="p1Text">Talk to a Redfin Agent</p>
          <p className="p2Text col-8">
            Start your search with an expert local agent—there’s no pressure or
            obligation.
          </p>
        </div>

        <div className="col-6 ">
          <p className="p2Text text-start">
            Where are you searching for homes?
          </p> */}
          {/* <div class="input-group">
                        <div class="form-outline">
                            <input type="search" id="form1" class="form-control isClass" placeholder='City, Address, ZIP'/>
                            <label class="form-label" for="form1">Search</label>
                        </div>
                        <button type="button" class="btn btn-primary sbtnClass">
                            <i class="fas fa-search"></i>
                        </button>
                        </div>
                    */}
          {/* <div class="input-group mb-3" style={{ width: "500px" }}>
            <input
              type="text"
              class="form-control"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <div class="input-group-append">
              <span class="btn btn-primary input-group-text" id="basic-addon2">
                @example.com
              </span>
            </div>
          </div>
        </div>
      </div> */}

      <div class="rowClass row">
        <div class="container-fluid col-xl-10 col-lg-11 d-flex align-items-center ">          
            <div class="col-6 d-flex flex-column ">
            <p className="p1Text text-start">Talk to a Redfin Agent</p>
            <p className="p2Text text-start">
                Start your search with an expert local agent—there’s no <br/> pressure or
                obligation.
            </p>
            </div>
            <div class="col-2">
                
            </div>
            <div class="col-4">
            <p className="p2Text text-start">
                Where are you searching for homes?
            </p> 
           
            <div class="input-group mb-3" style={{ width: "450px" ,height:'50px'}}>
                <input
                type="text"
                class="form-control"
                placeholder="City, Address, ZIP"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                />
                <div class="input-group-append">
                <span class="btn btn-primary sbtnClass" id="basic-addon2">
                <i class="fa fa-search d-flex align-items-center mt-1" aria-hidden="true" style={{fontSize:'25px'}} ></i>
                </span>
                </div>
            </div>
         
            </div>
        </div>
      </div>
    </>
  );
};

export default SixthRowComponent;
