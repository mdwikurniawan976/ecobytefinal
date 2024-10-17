import React from 'react'
import logo from '../assets/ecobytelogonew.png';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const nav = useNavigate();
    return (
        <footer className='border-top shadow-sm' style={{ backgroundColor: '#CCD6C0' }}>
            <div className="container pt-4 pb-3">
                <div className="row">
                    <div className="col-sm-12 col-md-4">
                        <div className="text-center">
                            <img className='img-fluid' style={{ width: '150px' }} src={logo} alt="" />
                            <h5 style={{cursor : "default"}} className='text-center text-dark fw-bold'>EcoByte's</h5>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-2 mb-3">
                        <div className="d-flex flex-column">
                            <h5 className='text-decoration-underline text-success'>EcoByte's</h5>
                            <a className='link-dark text-decoration-none' href="/">Home</a>
                            <a className='link-dark text-decoration-none cursor-pointer' onClick={() => nav('/contact')}>Contact</a>
                            <a className='link-dark text-decoration-none cursor-pointer' onClick={() => nav('/recipe')}>Recipe's</a>
                            <a className='link-dark text-decoration-none cursor-pointer' onClick={() => nav('/calculator')}>Nutrition Calculator</a>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-2 mb-3">
                        <div className="d-flex flex-column">
                            <h5 className='text-decoration-underline text-success'>Social Media</h5>
                            <a className='link-dark text-decoration-none' href="https://www.instagram.com/" target="_blank">Instagram</a>
                            <a className='link-dark text-decoration-none' href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F%3Flocale%3Did_ID" target='_blank'>Facebook</a>
                            <a className='link-dark text-decoration-none' href="https://id.linkedin.com/" target="_blank">LinkedIn</a>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <p className='text-dark'>Ecobyte is a platform that combines technology and sustainability to reduce food waste. It offers solutions for managing leftovers,creative recipes, and a nutrition calculator, empowering users to minimize waste effectively.</p>
                    </div>
                    
                </div>
            </div>
            <p className="bg-polly text-center py-3 text-light mb-0">© 2024. EcoByte. by NesabaTechno Team All rights reserved</p>
        </footer>
    )
}

export default Footer