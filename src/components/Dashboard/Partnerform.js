import React,{useState} from "react";
import './Partnerform.css'

function Partnerform(){

    const[formData,setFormData]=useState({
        name:"",
        project:"",
        status:""
    })

    // handle changes when a value is entered in the form

    function handleInputChange(e){
       setFormData({
         ...formData,[e.target.name]:e.target.value
       })
    }

    // submitting form components

    function handleSubmit(){
        e.preventdefault()
    }
    return(
        <div className='formWrapper'>
            <form className='form'>
               <label>
                Organization Name:
                <input type='text' name='name'value={formData.name} onChange={handleInputChange}/>
               </label> 

               <label>
                  Project Description:
                  <input type='text' name='project' value={formData.project} onChange={handleInputChange}/>
               </label>

               <label>
                Project Status:
                <input type='text' name='status' value={formData.status} onChange={handleInputChange}/>
               </label>

               <label>
                 <input type='submit'/>
                </label> 
               
            </form>
        </div>
    )
}

export default Partnerform
