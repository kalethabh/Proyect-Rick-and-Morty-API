import React from 'react'
import { useNavigate } from 'react-router-dom'
import './About.css'

function About() {
  const navigate = useNavigate()
  return (
    <div className='text'>
        <button className='backToHome'onClick={() => navigate(-1)}>Volver</button>
        <h1>Bienvenidos a mi primer Single Page Application!</h1>
        <h2>Esta aplicacion es con el fin de poner en practica mis conocimientos adquiridos en el bootcamp de SoyHenry.</h2>
        <h1>Mi nombre es Kaleth Benjumea</h1>
      </div>
  )
}

export default About
