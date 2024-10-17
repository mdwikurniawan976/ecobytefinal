import React from 'react'

const About1 = () => {
    return (
        <div>
            <div className="container" id='desc'>
                <div className="py-3"></div>
                <div className="row">
                    <div className="col-sm-12 col-md-6 align-self-center" data-aos='fade-right'>
                        <p className="text-success">About Us</p>
                        <h3 className='mb-4'>Innovative Platform Merging Technology and Sustainability to Reduce Food Waste</h3>
                        <p>Ecobyte is a forward-thinking platform that merges technology with sustainability, focusing on reducing food waste. It provides practical solutions for managing leftovers, including tips on food storage and creative recipes, empowering users to make the most of their food and minimize waste.</p>
                    </div>
                    <div data-aos="zoom-in" className="col-sm-12 col-md-6 position-relative">
                        <img className='img-fluid imgabout1 no-select' src="./images/about.png" alt="" />
                        {/* https://img.freepik.com/free-psd/xocoatl-isolated-transparent-background_191095-31762.jpg?t=st=1726643854~exp=1726647454~hmac=c5fe191addcf3aa627a7339ed87689b9f86420a0fe1be3fcf875d474730f1c1b&w=740 */}
                        <svg className='position-absolute blob1' style={{ zIndex: -1, top: '0', right: '70' }} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#CCD6C0" d="M45.1,-63.6C58.2,-61.7,68.4,-48.8,75.1,-34.2C81.9,-19.7,85.3,-3.5,83.8,12.6C82.3,28.6,76,44.5,64,51.9C52,59.3,34.4,58.2,18.2,63.8C2,69.4,-12.8,81.8,-21.9,77.7C-31,73.6,-34.3,53.1,-38.3,38.7C-42.2,24.2,-46.9,15.8,-49.7,6.2C-52.6,-3.4,-53.7,-14.2,-50,-23.1C-46.3,-31.9,-37.9,-38.9,-28.8,-42.5C-19.6,-46.2,-9.8,-46.6,3.1,-51.4C16,-56.2,32,-65.4,45.1,-63.6Z" transform="translate(100 100)" />
                        </svg>
                    </div>

                </div>
                <div className="py-3"></div>
            </div>
        </div>
    )
}

export default About1