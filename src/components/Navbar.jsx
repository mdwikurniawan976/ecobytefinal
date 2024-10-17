import React, { useState, useEffect } from 'react';
import UserImage from '../assets/user.png';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';
const Navbar = ({ setState, display }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [scrolled, setscrolled] = useState(false);

    const nav = useNavigate();

    // State for theme toggle
    const [theme, setTheme] = useState('light');
    const [isChangingTheme, setIsChangingTheme] = useState(false); // State to track delay

    // Effect to handle scroll event
    useEffect(() => {
        if (display == 'true') {
            setscrolled(true);
            return;
        }
        const handleScroll = () => {

            if (window.scrollY > 300) {
                setscrolled(true);
            } else {
                setscrolled(false);
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Effect to update theme based on state
    useEffect(() => {
        document.body.setAttribute('data-bs-theme', theme);
    }, [theme]);

    // Toggle theme function with delay
    const toggleTheme = () => {
        setIsChangingTheme(true);
        setTimeout(() => {
            const newTheme = theme === 'light' ? 'dark' : 'light';
            setTheme(newTheme);
            setIsChangingTheme(false);
        }, 300);
    };

    return (
        <div>
            <nav
                className={`navbar navbar-expand-md z-5 text-bold fixed-top navbar-dark nvStatic ${scrolled ? '' : 'd-none'}`}
                style={{ backgroundColor: '#325D55' }}
            >
                <div className="container">
                    <a className="navbar-brand cursor-pointer" onClick={()=>nav('/')}>
                        <img src={logo} alt="Logo" width="30" height="30" className="d-inline-block align-text-top bg-light rounded-pill me-2 cursor-pointer" />
                        EcoByte</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link active cursor-pointer" aria-current="page" onClick={()=>nav('/')}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#desc">About Us</a>
                            </li>
                            <li className="nav-item dropdown me-3
                            ">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Feature
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item cursor-pointer" onClick={()=>nav('/recipe')}>Recipe's</a></li>
                                    <li><a className="dropdown-item cursor-pointer" onClick={() => nav('/contact')}>Contact</a></li>
                                    <li><a className="dropdown-item cursor-pointer" onClick={() => nav('/calculator')}>Nutrition Calculator</a></li>
                                </ul>
                            </li>
                            {
                                !display && (
                                    <li>
                                        <button className="btn btn-light rounded-circle me-3 py-2 " onClick={() => setState(true)}>
                                            <img src={UserImage} alt="Statistik" style={{ width: '20px', height: '20px' }} />
                                        </button>
                                    </li>
                                )
                            }

                            <li>
                                <button
                                    className={`btn ${theme === 'light' ? 'btn-dark' : 'btn-light'} rounded-5`}
                                    onClick={toggleTheme}
                                    disabled={isChangingTheme}
                                >
                                    {isChangingTheme ? 'Changing...' : (theme === 'light' ? 'Dark Mode' : 'Light Mode')}
                                </button>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
