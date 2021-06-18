import React, { useState } from "react"
import { Data } from "../../data/stationData"
import Station from "./stations.module.css"
const Stations = () => {
  const [clicked, setClicked] = useState<any>(false)

  const toggle = (index: any) => {
    if (clicked === index) {
      //if clicked Station is already active, then close it
      return setClicked(null)
    }

    setClicked(index)
  }

  return (
    <div className={Station.AccourdionSeclection}>
      <div className={Station.Container}>
        {Data.map((item, index) => {
          return (
            <>
              {clicked === index ? (
                <div className={Station.dropdown}>
                  <p>
                    {item.stationName}
                    {item.frequecny}
                  </p>
                </div>
              ) : null}
              <div
                className={Station.wrap}
                onClick={() => toggle(index)}
                key={index}
              >
                <h1>
                  {item.stationName} {item.frequecny}
                </h1>
              </div>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default Stations
