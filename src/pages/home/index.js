import React from "react"
import "./index.css"
import Button from "@mui/material/Button"

const Home = () => {
  return (
    <div className="main">
      <div className="container">
        <section className="home-area">
          <picture>
            <img src="./assets/images/logo.png" alt="logo" />
          </picture>
          <header>
            <h1>Smart Contact</h1>
          </header>
          <div className="button">
            <Button variant="contained">Contained</Button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
