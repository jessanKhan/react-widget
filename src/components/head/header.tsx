import React from "react"
import backarrow from "../../assests/back-arrow.png"
import powerbutton from "../../assests/switch.png"
const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#EDAD61",
        flexDirection: "row",
      }}
    >
      <div>
        <a href="">
          <img src={backarrow} alt="" />
        </a>
      </div>
      <h1>STATIONS</h1>
      <div>
        <a href="">
          <img src={powerbutton} alt="" />
        </a>
      </div>
    </div>
  )
}

export default Header
