import React from "react"
import logo from "./logo.svg"
import "./App.css"

import Header from "./components/head/header"
import Footer from "./components/footer/footer"
import Stations from "./components/stations/stations"
function App() {
  return (
    <div className="App">
      <div
        style={{
          border: "1px solid grey",
          // padding: 24,
          maxWidth: 500,
          margin: "auto",
          marginTop: 24,
          // backgroundColor: "red",
        }}
      >
        <Header />
        <Stations />
        <Footer />
      </div>
    </div>
  )
}

export default App
