import React, { Component } from 'react'
import "./assets/css/style.css"
import Navbar from './navbar/Navbar'
import Dashpanel from './Mainpanel/Dashpanel'
import Rightpanel from './rightpanel/Rightpanel'
import { Route, Routes } from 'react-router-dom'
import Test from './Test'
import Tables from './Mainpanel/mainbody/Table'
import Dashbody from './Mainpanel/mainbody/Dashbody'


export class Dashboard extends Component {
  render() {
    
    return (
      <>
      <div className="dashboard">
        <div className="main">
          <div className="glows">
            <Navbar />
            <Dashpanel />
            <Rightpanel />

          </div>
        </div>
      </div>
      </>
    )
  }
}

export default Dashboard