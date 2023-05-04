import React, { useState } from 'react'
import Logo from "../navbar/assets/images/TapKori.png"
import {UilSignOutAlt, UilBars} from "@iconscout/react-unicons";
import { SidebarData } from '../../Dummy/Dummy-data'
import { motion } from "framer-motion";
import "../navbar/assets/navbar.css"

const Navbar = () => {

    const [activated, setActive] = useState(0)
    const [expanded, setExpanded] = useState(true)

    const sidebarVariants = {
        true: {
          left : '0'
        },
        false:{
          left : '-60%'
        }
      }

  return (
    <>
    <div className='bars' style={expanded?{left: '60%'}: {left: '5%'}} onClick={()=>setExpanded(!expanded)}>
            <UilBars />
    </div>
    <motion.div className="sidebar"
    variants={sidebarVariants}
    animate={window.innerWidth<=768?`${expanded}`:''}
    >
        {/* logo */}
        <div className="logo">
            <img src={Logo} alt="" srcset="" />
        </div>

        {/* menu */}
        
        <div className="menu">
            {SidebarData.map((item, index)=>{
                return(
                    <div className={activated === index? 'menuitems actives': "menuitems"}
                    key={index}
                    onClick={()=>setActive(index)}
                    >
                        <item.icon />
                        <span>
                            {item.heading}
                        </span>
                    </div>
                );
            })}

            <div className='menuitems'>
                <UilSignOutAlt />
            </div>            
        </div>

    </motion.div>
    </>
  )
}

export default Navbar