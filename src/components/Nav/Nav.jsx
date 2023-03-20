import React from 'react'
import './Nav.css'
import SearchBar from '../SearcBar/SearchBar'
import { Link, useNavigate } from 'react-router-dom'

function Nav(props) {
  const navigate = useNavigate()
  
  const handleLogOut = ()=>{
      navigate("/")
    }

  return (
    <div className='div' >
        <button onClick={handleLogOut} className='logout' >
          LogOut
        </button> 
      <div>
        <Link className='home' to="/home">
          <button className='button'>
            Home
          </button>
        </Link>
        <Link className='about' to="/about">
        <button className='button'>
          About
        </button>  
        </Link>
      </div>
      <div className='search-bar'>
          <SearchBar onSearch={(props.onSearch)}/>
      </div >
    </div>
  )
}

export default Nav
