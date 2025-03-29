import "react-router-dom"
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Slash from "./slash"
import Signup from "./signup"
import Login from "./login"
import Home from "./home"

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Slash/>} />
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
