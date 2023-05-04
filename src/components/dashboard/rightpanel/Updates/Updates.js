import React from 'react'
import "./assets/Updates.css"
import { UpdatesData } from '../../../Dummy/Dummy-data'


const Updates = () => {
  return (
    <div className="Updates">
        {UpdatesData.map((update) => {
            return(
                <div className="update">
                    <img src={update.img} alt="" />
                    <div  className="notifications">
                        <div style={{marginBottom: '0.5rem'}}>
                            <span>{update.name}</span>
                            <span> {update.noti}</span>
                        </div>
                        <span>{update.time}</span>
                    </div>
                    
                </div>
            )
        })}
    </div>

  )
}

export default Updates