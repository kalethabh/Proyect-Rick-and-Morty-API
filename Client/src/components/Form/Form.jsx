import React, { useState } from 'react'
import './Form.css'
import Validation from './Validation'

export default function Form(props) {

    const [userData, setUserData] = useState(
      {
          username: '',
          password: ''
      }
    )
    const [errors, setErrors] = useState(
      {
          username: '',
          password: ''
      }
    )
    const handleInputChange = (e)=> {
      setUserData({
        ...userData,
        [e.target.name]: e.target.value
      })
      setErrors(Validation({
        ...userData,
        [e.target.name]: e.target.value
      }))
    }
    const handleSubmit = (e)=>{
      e.preventDefault()
      props.login(userData)
    }
  return (
    <div className='login-form'>
      <form onSubmit={handleSubmit}>

        <label>Username: </label>
        <input name="username" value={userData.username} placeholder='Escribe tu email...' type='text' onChange={(e)=>handleInputChange(e)}/>
        <p className='danger'>{errors.username}</p>

        <label>Password: </label>
        <input name='password' value={userData.password} placeholder='**********' type='password' onChange={(e)=>handleInputChange(e)}/>
        <p className='danger'>{errors.password}</p>

        <button type='submit' >Login</button>

      </form>

    </div>
  )
}
