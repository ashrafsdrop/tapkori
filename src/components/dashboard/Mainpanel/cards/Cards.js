import React from 'react'
import "./cards.css"
import { cardsData } from '../../../Dummy/Dummy-data'
import Card from "./card/Card"

const Cards = () => {
  return (
    <div className="cards">
        {cardsData.map((cards, id)=>{
            return(
                <div className="parentContainer">
                    <Card
                    title={cards.title}
                    color={cards.color}
                    barValue={cards.barValue}
                    value={cards.value}
                    png={cards.png}
                    series={cards.series}

                     />
                </div>
            )
        })}
    </div>
  )
}

export default Cards