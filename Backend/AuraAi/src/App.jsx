import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Login from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import AdminSignup from './pages/AdminSignup'
import AdminLogin from  './pages/AdminLogin'

const App = () => {
  return (
    <div>
  <Routes>
  <Route path='/' element={<Login/>}/>
   <Route path='/home' element={ <h1>done</h1> }/>
    <Route path='/signup' element={ <UserSignup/> }/>
     <Route path='/adminsignup' element={ <AdminSignup/> }/>
     <Route path='/adminlogin' element={ <AdminLogin/> }/>
  </Routes>
    </div>
  )
}

export default App