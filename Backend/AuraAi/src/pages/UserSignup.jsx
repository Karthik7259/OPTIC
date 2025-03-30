import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { UserDataContext } from '../context/UserContext'
// import './Login.css'


const UserSignup = () => {
  
 const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')  
  const [FirstName, setFirstName] = useState('')
  const [LastName, setLastName] = useState('')

  const navigate=useNavigate()
  const {user,setuser}=React.useContext(UserDataContext)

  const SubmitHandler=async(e)=>{
    
    e.preventDefault()
    const newUser={
      fullname,
      email:email,
      password:password
    }
    const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/user/register`,newUser)
    if(response.status===201){
      const data=response.data
      setuser(data.user)
      localStorage.setItem('token',data.token)
      navigate('/home')
    }
  
    setEmail('')
    setPassword('')
  }

  return (
    <div className=''>
        <div className='form-box-register'>
        <form 
        onSubmit={(e)=>{SubmitHandler(e)}}
        >
        <h1>Registration</h1>
                <div className="input-box">
                    <input 
                     value={FirstName}
                     onChange={
                        (e) => {
                          setFirstName(e.target.value)
                     }}

                    type="text" placeholder="Firstname"
                    required/>
                    <i class='bx bxs-user'></i>
                    <input 
                     value={LastName}
                     onChange={
                        (e) => {
                          setLastName(e.target.value)
                     }}
                    type="text" placeholder="lastname"
                   
                    required/>
                    <i className='bx bxs-user'></i>
                </div>
                <div className="input-box">
                    <input 
                    value={email}
                    onChange={
                        (e) => {
                          setEmail(e.target.value)
                    }}
                    
                    type="email" placeholder="Email"
                    required/>
                    <i className='bx bxs-envelope' ></i>
                </div>
                <div className="input-box">
                    <input 
                    
                    value={password}
      onChange={
        (e) => {
          setPassword(e.target.value)
      }
    }
                    type="password" placeholder="password"
                    required />
                    <i className='bx bxs-lock-alt'></i>
                </div>
                <button type="submit" className="btn">Register</button>
         </form>

         <p className='text-center'>Already have a Account? <Link to='/' className='text-blue-600 '>Login here</Link></p>
        </div>
        
    </div>

   
   
  )
}

export default UserSignup