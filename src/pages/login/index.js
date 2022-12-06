import React from "react"
import "./index.css"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded"
import LockOpenIcon from "@mui/icons-material/LockOpen"

const Login = () => {
  return (
    <main>
      <div className="container">
        <div className="main">
          <section className="login-area">
            <picture>
              <img src="./assets/images/logo.png" alt="logo" />
            </picture>
            <header>
              <h3>Sign In</h3>
            </header>
            <div className="g-btn">
              <button className="google-btn">
                <img src="./assets/images/google.svg" alt="" />
                <p>Login with Google</p>
              </button>
            </div>

            {/* Login Inputs Start */}
            <div className="login-input">
              <div className="email">
                <PersonOutlineRoundedIcon
                  style={{ marginTop: "20px", marginRight: "10px" }}
                />
                <TextField
                  id="standard-basic"
                  label="Email"
                  variant="standard"
                />
              </div>

              <div className="password">
                <LockOpenIcon
                  style={{ marginTop: "20px", marginRight: "10px" }}
                />
                <TextField
                  id="standard-basic"
                  label="Password"
                  variant="standard"
                />
              </div>
            </div>
            {/* Login Inputs End */}

            <div className="button">
              <Button variant="contained">Sign In </Button>
            </div>
            <p className="forgotpass">Forgot Password?</p>

            <p className="signup">
              Dont have an account?{" "}
              <span style={{ color: "red" }}>Sign Up</span>
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}

export default Login
