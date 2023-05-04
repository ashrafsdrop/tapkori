import React, {useState} from 'react'
import "./Card.css"
import { motion, AnimateSharedLayout } from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Card = (props) => {

  const [expanded, setExpanded] = useState(false);

  return (
    <AnimateSharedLayout>
        {
            expanded?(
                "Expanded"
            ):
            <Compacted params = {props} />
        }
        {/* <div className="Card">
            <div>cards</div>
        </div> */}
    </AnimateSharedLayout>
    
  )
}

function Compacted({params}) {
    const Png = params.png;
    return(
        <div className="compacted" style={{
            background: params.color.backGround,
            boxShadow: params.color.boxShadow,

        }}>
            <div className="redialbar">
                <CircularProgressbar
                value={params.barValue}
                text={`${params.barValue} %`}
                 />
                 {/* <span>{params.title}</span> */}
            </div>
            <div className="detail">
                <Png/>
                <span>${params.value}</span>
                <span>Last 24 hours</span>
            </div>
        </div>
    )
}


export default Card