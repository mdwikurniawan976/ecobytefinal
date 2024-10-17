import React, { useEffect, useState } from 'react';
import UserImage from '../assets/user.png';
import { useNavigate } from 'react-router-dom';

const Jumbotron = ({ setState }) => {
    const nav = useNavigate();
    const [theme, setTheme] = useState('light');
    const [isChangingTheme, setIsChangingTheme] = useState(false);
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
        <div className="jumbotron-container">

            <nav
                className='navbar navbar-expand-md text-bold navbar-dark bg-transparent nvJumbo'
            >
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src="./favicon.ico" alt="Logo" width="40" height="40" className="d-inline-block align-text-top  rounded-pill me-2" />
                        EcoByte</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse alig-self-center" id="navbarNavDropdown">
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
                            <li>
                                <button className="btn btn-light rounded-circle me-3 py-2 " onClick={() => setState(true)}>
                                    <img src={UserImage} alt="Statistik" style={{ width: '20px', height: '20px' }} />
                                </button>
                            </li>
                            <li>
                                <button
                                    className={`d-none btn ${theme === 'light' ? 'btn-dark' : 'btn-light'} rounded-5`}
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

            <div className="parallax"></div>
            <div className="overlay"></div>
            <div className="content">

                <h3 className='display-5 font-playfair '>
                    Ecobyte: where flavor meets eco-friendly innovation for a tastier food.
                </h3>
                <p className='lead'>Discover Delicious Recipes That Are Good for You and the Planet</p>
                <button className="btn btn-success rounded-5 mt-3" onClick={()=>nav('/recipe')}>Get started</button>
            </div>
            <div className="shadow"></div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#f3f4f5" fillOpacity="1" d="M0,224L30,218.7C60,213,120,203,180,186.7C240,171,300,149,360,154.7C420,160,480,192,540,176C600,160,660,96,720,90.7C780,85,840,139,900,138.7C960,139,1020,85,1080,74.7C1140,64,1200,96,1260,96C1320,96,1380,64,1410,48L1440,32L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
            </svg>
        </div>
    );
}

export default Jumbotron;
