import React, { useEffect, useState } from 'react'
/* eslint-disable */
import '../utility/bootstrap/js/bootstrap.bundle.min.js'
/* eslint-enable */

import Navbar from '../components/Navbar'
import Jumbotron from '../components/Jumbotron.jsx'
import Laman from '../components/Laman.jsx'
import About1 from '../components/konten1.jsx'
import UserStatistik from '../components/UserStatistik.jsx'
import Konten2 from '../components/Konten2.jsx'
import Konten3 from '../components/Konten3.jsx'
import Konten4 from '../components/Konten4.jsx'
import Footer from '../components/Footer.jsx'

import imageContent2 from '../assets/content2.png'
import imageContent3 from '../assets/content3.png'
import imageContent4 from '../assets/content4.png'
import Team from '../components/Team.jsx'
import Testfood from '../components/Testfood.jsx'
import { useLocation, useNavigate } from 'react-router-dom'

import AOS from 'aos';


const Dashboard = () => {

  const [showModal, setshowModal] = useState(false)

  const nav = useNavigate()

 

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0,0)
    AOS.init({
      // once: true,
    });
    
    AOS.refresh();
  }, [location]);

  return (
    //style={{ maxWidth: '100vw' }}
    <div style={{ margin: '0', padding: '0' , maxWidth: '100%', overflowX:'hidden'}} className='position-relative'>
      <Navbar setState={setshowModal} />
      <Jumbotron setState={setshowModal} />
      {/* <Team /> */}
      <About1 />
      <Konten2 />

      <Konten3 subtitle={"EcoByte's"} title={"Share Your Creative Leftover Recipes "} description={"Leverage the power of social media to inspire others by sharing your innovative recipes made from leftover ingredients. Encourage users to showcase how they transform food scraps into delicious, eco-friendly meals. Strengthen our community’s commitment to reducing food waste through engaging, user-driven content."} imgSrc={imageContent2} imgUrl={" https://www.pexels.com/photo/top-view-of-food-1640772/"} 
      link="/recipe/create"/>

      <Konten4 subtitle={"EcoByte's"} title={"Track Your Nutritional Impact"} description={"Whether you’re exploring new ways to cook with leftovers or using our nutrition calculator to balance your diet, our platform helps you track the nutritional value of your meals and make informed decisions. Enhance your cooking skills and nutritional knowledge through meaningful, eco-conscious activities."} imgSrc={imageContent3} imgUrl={"https://www.pexels.com/photo/delicious-grilled-seafood-and-vegetables-platter-28559509/"} link="/calculator"/>

      <Laman />

      <Konten3 subtitle={"EcoByte's"} title={"Discover New Leftover Ingredient Recipes "} description={"Explore innovative recipes that turn leftover ingredients into delicious meals. Share your own creations and find inspiration from others on how to make the most out of your kitchen scraps. This feature helps promote sustainable cooking practices and encourages users to embrace eco-friendly eating habits."} imgSrc={imageContent4} imgUrl={"https://www.instagram.com/p/C6L9Pn4ih-i/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="} link="/recipe"/>

      {/* <Testfood /> */}

      <UserStatistik State={showModal} setState={setshowModal} />
      <Footer />
    </div>
  )
}

export default Dashboard