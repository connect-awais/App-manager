import './App.css'
import { Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/HOME/Home'
import Calender from './pages/CALENDER/Calender'
import Login from './pages/LOGIN/Login'
import Register from './pages/REGISTER/Register'

function App() {

  return (
    <>
    <Navbar/>
    <div className="page-content">
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Calender" element={<Calender/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/Register" element={<Register/>}></Route>
    </Routes>
    </div>
    </>
  )
}

export default App
