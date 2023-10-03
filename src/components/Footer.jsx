import React from 'react'
import '../index.css'

const Footer = () => {
  const currentYear= new Date().getFullYear();
  return (
    <div className='footer'>
     <h3>
     Created By Salma CHANA   
       Copyright  &copy; <span id='current-year'>{currentYear}</span>
      </h3> 
      <br />
      <br />
    </div>
  )
}

export default Footer
