import React from "react"
import "./index.css"
import Button from "@mui/material/Button"
import { Link, useNavigate } from "react-router-dom"

const Home = () => {
  return (
    <main>
      <div className="container">
        <section className="home-area">
          <picture>
            <img src="./assets/images/logo.png" alt="logo" />
          </picture>
          <header>
            <h1>Smart Contact</h1>
          </header>
          <div className="button">
            <Button variant="contained">
              <Link to="/login">Get Started</Link>
            </Button>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Home
