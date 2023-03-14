import React, { useState } from 'react'
import './Form.css'
import Validation from './Validation'

export default function Form() {

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
    const handleInputChange = (event)=> {
      const {name,value} = event.target
      setUserData({
        ...userData,
        [name]: value
      })
      setErrors(Validation({
        ...userData,
        [name]: value
      }))
      console.log(name,value)
    }
  return (
    <div className='login-form'>
      
      <label>Username: </label>
      <input name="username" placeholder='Escribe tu email...' type='text' onChange={(e)=>handleInputChange(e)}/>
      <p className='danger'>{errors.username}</p>

      <label>Password: </label>
      <input name='password' placeholder='************' type='password' onChange={(e)=>handleInputChange(e)}/>
      <p className='danger'>{errors.password}</p>

      <button>Login</button>

    </div>
  )
}
