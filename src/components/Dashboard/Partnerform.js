import React from "react";
import './Partnerform.css'

function Partnerform(){
    return(
        <div className='formWrapper'>
            <form className='form'>
               <label>
                Organization Name:
                <input type='text'value='name'/>
               </label> 

               <label>
                  Project Description:
                  <input type='text' placeholder="project description"/>
               </label>
               <label>
                 <input type='submit'/>
                </label> 
               
            </form>
        </div>
    )
}

export default Partnerform
