import React from 'react'
import Navbar from '../components/Navbar'

const NotFound = () => {
  return (
    <div className='d-flex flex-column align-items-center justify-content-center' style={{minHeight: '100vh', height: '100%'}}>
        
        {/* <img className='w-50' src={imgerror} alt="" /> */}
        <h1 className='text-success fw-bold' style={{fontSize: '7rem'}}>404 </h1>
        <h2>Error</h2>
        <h4>Page not Found</h4>
        <a className='link-success' href="/">Back to EcoByte's Home</a>
    </div>
  )
}

export default NotFound