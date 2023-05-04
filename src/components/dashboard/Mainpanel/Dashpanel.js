import React from 'react'
import "./assets/panel.css"
import Cards from './cards/Cards'
import Dashbody from './mainbody/Dashbody'


const Dashpanel = () => {
  return (
    <div className="mainpanel">
        <h1>Dashboard</h1>
        <Cards />
        <Dashbody />
    </div>
  )
}

export default Dashpanel