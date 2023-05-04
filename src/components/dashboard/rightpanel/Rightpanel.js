import React from 'react'
import "./assets/rpanel.css"
import Updates from './Updates/Updates'
import Chartses from './Charts/Chartses'

const Rightpanel = () => {
  return (
    <div className="Rightside">
        <div>
            <h3>Updates</h3>
            <Updates />
        </div>
        <div className='review'>
            <h3>Coustomer review</h3>
            <Chartses />
        </div>
    </div>
  )
}

export default Rightpanel