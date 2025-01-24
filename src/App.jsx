import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login'
import { Route, Routes } from 'react-router-dom'
import AdminDashboard from './pages/AdminDashboard'
import UserDashboard from './pages/UserDashboard'
import Register from './pages/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/login' element={<Login/>} ></Route>
      <Route path='/' element={<Register/>} ></Route>
      <Route path='/admindash' element={<AdminDashboard/>} ></Route>
      <Route path='/userdash' element={<UserDashboard/>} ></Route>
    </Routes>

    </>
  )
}

export default App
