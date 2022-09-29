import React from 'react'

const InputForm = () => {
  return (
    
    <div className="form-group" style={styleInputForm}>
        <label >Email address</label>
        <input type="text" name="email" value = {email} className="form-control" id="exampleInputEmail1"  onChange={handleChange} minLength="6"  aria-describedby="emailHelp"  placeholder="Enter email" required />
    </div>
   
  )
}

export default InputForm