import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Banner from './Banner'
import Features from './Features'
import Blogs from './Blogs'
import Review from './Review'
import Bcontactus from './Bcontactus'
import "./assets/css/style.css"
import "./assets/vendors/mdi/css/materialdesignicons.min.css"
import "./assets/vendors/aos/css/aos.css"

function home() {
  return (
    <>
    <body id="body" data-spy="scroll" data-target=".navbar" data-offset="100">
    <Navbar />
    <Banner />
    <div class="content-wrapper">
      <div class="container">
        <Features />
        <Blogs />
        <Review />
        <Bcontactus></Bcontactus>
      </div>
    </div>
    <Footer />
    </body>
    
    
    </>
  )
}

export default home