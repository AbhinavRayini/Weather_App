import React, { useState } from 'react'

function Form({addCity}) {
    const [cityName,setCityName]=useState("");
    const [error, setError]= useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        try{
            if(!cityName.trim()){
                throw new error ("Plesae Enter Valid City Name");
            }
        
        addCity(cityName);
        setCityName('');
        setError('');
        }
        catch(error){
            setError(error.message);
        }
    }
  return (
    <>
    <form onSubmit={handleSubmit} className='form-container'>
        <input type='text' value={cityName} onChange={(e)=>setCityName(e.target.value)}         placeholder='Enter City Name' />&nbsp;
        <button type='submit'>Add City</button>
    </form>
    
    {error && <p style={{color:'red'}}>{error}</p>}
    </>
  )
}

export default Form
