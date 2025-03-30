import React,{useState,useContext} from 'react'
import { useNavigate ,Link} from 'react-router-dom'
import { AdminDataContext } from '../context/AdminContext'
import axios from 'axios'

const AdminSignup = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')  
    const [FirstName, setFirstName] = useState('')
    const [LastName, setLastName] = useState('')
  
    const navigate=useNavigate()
    const {Admin, setAdmin}=useContext(AdminDataContext)

    const SubmitHandler=async(e)=>{
    
        e.preventDefault()
        const newAdmin={
          fullname:{
            firstname:FirstName,
            lastname: LastName,
          },
          email:email,
          password:password
        }
        const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/admin/register`,newAdmin)
        if(response.status===201){
          const data=response.data
          setAdmin(data.Admin)
          localStorage.setItem('token',data.token)
          navigate('/home')
        }
    
        setFirstName('')
        setLastName('')
        setEmail('')
        setPassword('')
      }


  return (
    <div className=''>
        <div className='form-box-register'>
        <form 
        onSubmit={(e)=>{SubmitHandler(e)}}
        >
        <h1>Admin Registration</h1>
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

         <p className='text-center'>Already have a Account? <Link to='/adminlogin' className='text-blue-600 '>Login here</Link></p>
        </div>
        
    </div>
  )
}

export default AdminSignup