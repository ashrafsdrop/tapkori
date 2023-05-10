import React, { useState, useEffect } from 'react'
import "./assets/panel.css"
import Cards from './cards/Cards'
import Dashbody from './mainbody/Dashbody'
import { Route, Routes } from 'react-router-dom'
import Test from '../Test'
import Tables from './mainbody/Table'

import {SidebarData} from "../../Dummy/Dummy-data"

const Dashpanel = () => {
  const [defaults, setDefault] = useState(false);
  const gandu = window.location.pathname;
  var ggs = gandu.split("/")
  SidebarData.map((item, index)=>{
    if (item.link === ggs[2]){
      console.log("working")
    } else{
      console.log("gasndu")
    }

      
  })

  return (
    <div className="mainpanel">
        <h1>Dashboard</h1>
        <Cards />
       
        {/* <Dashbody /> */}
        <Routes>
          <Route path="right" element={<Tables />} />
          <Route path="/" element={<Dashbody />} />
          

          


        </Routes>
        
        
    </div>
  )
}

export default Dashpanel