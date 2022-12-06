import { Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Login from "./pages/login"
import "./style.css"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  )
}

export default App
