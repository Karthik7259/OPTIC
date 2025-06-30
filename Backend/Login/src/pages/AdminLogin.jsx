

import React, { useState, useContext, useRef } from "react";
import { useNavigate,Link } from 'react-router-dom'
import axios from 'axios'
import { AdminDataContext } from '../context/AdminContext'
import './login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [registerName, setRegisterName] = useState('');
    const {Admin, setAdmin}=useContext(AdminDataContext)
    const navigate = useNavigate();
    const containerRef = useRef(null);

    const loginHandler = async (e) => {
        e.preventDefault();
        const AdminData = {
            email: email,
            password: password
        };
        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/admin/login`, AdminData);
            console.log(response.data)
            if (response.status === 200) {
                const data = response.data;
                setAdmin(data.Admin);
                localStorage.setItem('token', data.token);
                window.location.href = 'http://localhost:5177';
            }
        //     <button
        //     className="bg-black text-white px-6 py-3 rounded-full mt-8 inline-flex items-center hover:bg-purple-900"
        //     // Add the onClick handler here
        //     onClick={() => {
        //       window.location.href = 'http://localhost:5173';
        //     }}
        //   >
        } catch (error) {
             console.log("check")
            console.error("Login error:", error);
            alert("Invalid credentials. Please try again.");
        }
    };

    const registerHandler = async (e) => {
        e.preventDefault();
        const AdminData = {
            fullname: registerName,
            email: registerEmail,
            password: registerPassword
        };
        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/admin/register`, AdminData);
            if (response.status === 201) {
                // Switch to login after successful registration
                window.location.href = 'http://localhost:5177';
            }
        } catch (error) {
            console.error("Registration error:", error);
        }
    };

    const togglePanel = () => {
        containerRef.current.classList.toggle('active');
    };

    return (
        <div className="container" ref={containerRef}>
            <div className="form-box login">
                <h1 className="text-black font-medium">Login</h1>
                <form onSubmit={loginHandler}>
                    <div className="input-box">
                        <input 
                            type="email" 
                            placeholder="Email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <i className="bx bxs-user"></i>
                    </div>
                    <div className="input-box">
                        <input 
                            type="password" 
                            placeholder="Password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <i className="bx bxs-lock-alt"></i>
                    </div>
                    <div className="forgot_link">
                        
                    </div>
                    <button type="submit" className="btn" font-thin>Login</button>
                    {/* <div className="social-icon">
                        <a href="#"><i className="bx bxl-facebook"></i></a>
                        <a href="#"><i className="bx bxl-google"></i></a>
                        <a href="#"><i className="bx bxl-twitter"></i></a>
                    </div> */}
                </form>
            </div>

            <div className="form-box register">
                <h1 className="text  text font-medium" >Register </h1>
                <form onSubmit={registerHandler}>
                    <div className="input-box">
                        <input 
                            type="text" 
                            placeholder="Username" 
                            value={registerName}
                            onChange={(e) => setRegisterName(e.target.value)}
                            required
                        />
                        <i className="bx bxs-user"></i>
                    </div>
                    <div className="input-box">
                        <input 
                            type="email" 
                            placeholder="Email" 
                            value={registerEmail}
                            onChange={(e) => setRegisterEmail(e.target.value)}
                            required
                        />
                        <i className="bx bxs-envelope"></i>
                    </div>
                    <div className="input-box">
                        <input 
                            type="password" 
                            placeholder="Password" 
                            value={registerPassword}
                            onChange={(e) => setRegisterPassword(e.target.value)}
                            required
                        />
                        <i className="bx bxs-lock-alt"></i>
                    </div>
                    <Link to={'/'} className="inline-block text-sm text-black font-medium">Sign up as user</Link>
                    <button type="submit" className="btn ml-10px">Sign Up</button>
                   
                </form>
            </div>

            <div className="toggle-box">
                <div className="toggle-panel toggle-left">
                    <h1 className="text-black">Welcome Back!</h1>
                    <p className="text-black">Login with your personal details to use all features</p>
                    <button className="btn" onClick={togglePanel}>Register In</button>
                </div>
                <div className="toggle-panel toggle-right text-black">
                    <h1 className="text-black">Hello, Friend!</h1>
                    <p className="text-black">Register with your personal details to use all features</p>
                    <button className="btn text-black" onClick={togglePanel}>Login in</button>
                </div>
            </div>
        </div>
    );
};

export default Login;