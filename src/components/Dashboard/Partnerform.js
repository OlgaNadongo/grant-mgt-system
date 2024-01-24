import React from "react";

function Partnerform(){
    return(
        <div>
            <form>
               <label>
                Organization Name:
                <input type='text'value='name'/>
               </label> 

               <label>
                  Project Description:
                  <input type='text' placeholder="project description"/>
               </label>
               <label>
                 <input type='choice'/>
                </label> 
               
            </form>
        </div>
    )
}

export default Partnerform
