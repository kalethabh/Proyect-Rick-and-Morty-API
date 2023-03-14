import React from 'react'
import './Nav.css'
import SearchBar from '../SearcBar/SearchBar'
import { Link } from 'react-router-dom'

function Nav(props) {
  return (
    <div className='div'>
      <div className='link'>
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
