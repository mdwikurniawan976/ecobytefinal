import React from 'react'
import img1 from '../assets/lecture-3986809_1280.jpg';
import cmnt1 from '../assets/comunity1.jpg'
import cmnt2 from '../assets/comunity2.jpg'
import cmnt3 from '../assets/comunity3.jpg'
import cmnt4 from '../assets/comunity4.jpeg'
import { useNavigate } from 'react-router-dom';

const Konten2 = () => {
    const nav = useNavigate();

    return (
        <div className='text-center' data-aos="zoom-in">
            <div className="container pt-5 pb-3">
                <p>SEE HOW</p>
                <h3 className='text-success mb-5'>Communities Thrive with EcoByte's Health Initiatives</h3>
                <div className="row">
                    <div className="col-sm-12 col-md-3 mb-4">
                        <div className="card shadow-sm rounded-4 cardKonten2" style={{minHeight: '20rem'}}>
                            <img src={cmnt1} className="card-img-top rounded-top-4" alt="" style={{height: '10rem'}}/>
                            {/* https://www.google.com/url?sa=i&url=https%3A%2F%2Fnutritionaustralia.org%2Fprograms%2Fworkplaces-organisations%2Fworkplace-seminars-17819%2F&psig=AOvVaw1OD30nnrdQLbrWeMnz8U6u&ust=1727398273136000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCODs4tWy34gDFQAAAAAdAAAAABAQ */}
                            <div className="card-body">
                                <p className="text-success mb-0">EcoByte's</p>
                                <p className="card-text fw-bold">Community Nutrition Workshop</p>
                                <a onClick={()=>nav('/contact')} className='cardKonten2a cursor-pointer'>Learn More 	&#8594;</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3 mb-4">
                        <div className="card shadow-sm rounded-4 cardKonten2" style={{minHeight: '20rem'}}>
                            <img src={cmnt2} className="card-img-top rounded-top-4" alt="" style={{height: '10rem'}}/>
                            {/* https://samsungfood.com/recipe-nutrition-calculator/  */}
                            <div className="card-body">
                                <p className="text-success mb-0">EcoByte's</p>
                                <p className="card-text fw-bold"> Nutrition Calculator</p>
                                <a onClick={()=>nav('/calculator')} className='cardKonten2a cursor-pointer'>Learn More 	&#8594;</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3 mb-4">
                        <div className="card shadow-sm rounded-4 cardKonten2" style={{minHeight: '20rem'}}>
                            <img src={cmnt3} className="card-img-top rounded-top-4" alt="" style={{height: '10rem'}}/>
                            {/* https://www.pexels.com/search/healty%20breakfast/ */}
                            <div className="card-body">
                                <p className="text-success mb-0">EcoByte's</p>
                                <p className="card-text fw-bold">Healthy Breakfast Menu</p>
                                <a onClick={()=>nav("/recipe?filter=breakfast")} className='cardKonten2a cursor-pointer'>Learn More 	&#8594;</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3 mb-4">
                        <div className="card shadow-sm rounded-4 cardKonten2" style={{minHeight: '20rem'}}>
                            <img src={cmnt4} className="card-img-top rounded-top-4" alt="" style={{height: '10rem'}}/>
                            {/* https://www.google.com/url?sa=i&url=https%3A%2F%2Fnews.stanford.edu%2Fstories%2F2023%2F01%2Faddressing-climate-change-one-bite-time&psig=AOvVaw2betcCpTMwxG8VGOGi1Nef&ust=1727398959488000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMDygt2034gDFQAAAAAdAAAAABAE */}
                            <div className="card-body">
                                <p className="text-success mb-0">EcoByte's</p>
                                <p className="card-text fw-bold">Sustainable Foods Programs</p>
                                <a onClick={()=>nav('/contact')} className='cardKonten2a cursor-pointer'>Learn More 	&#8594;</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Konten2