import React, { Component } from 'react'
import "./assets/css/style.css"
import Navbar from './navbar/Navbar'
import Dashpanel from './Mainpanel/Dashpanel'
import Rightpanel from './rightpanel/Rightpanel'



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