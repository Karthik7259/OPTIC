import React, { useState, useContext, useRef } from "react";
import axios from "axios";
import './Login.css';
import { useNavigate, Link } from 'react-router-dom';
import { UserDataContext } from "../context/UserContext";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [registerName, setRegisterName] = useState('');
    const { user, setuser } = useContext(UserDataContext);
    const navigate = useNavigate();
    const containerRef = useRef(null);

    const loginHandler = async (e) => {
        e.preventDefault();
        const userData = {
            email: email,
            password: password
        };
        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/login`, userData);
            if (response.status === 200) {
                const data = response.data;
                setuser(data.user);
                localStorage.setItem('token', data.token);
                navigate('/home');
            }
        } catch (error) {
            console.error("Login error:", error);
        }
    };

    const registerHandler = async (e) => {
        e.preventDefault();
        const userData = {
            fullname: registerName,
            email: registerEmail,
            password: registerPassword
        };
        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/register`, userData);
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
                <h1 className="text-black font-thin" >Login</h1>
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
                    <button type="submit" className="btn font-thin">Login</button>
                    {/* <div className="social-icon">
                        <a href="#"><i className="bx bxl-facebook"></i></a>
                        <a href="#"><i className="bx bxl-google"></i></a>
                        <a href="#"><i className="bx bxl-twitter"></i></a>
                    </div> */}
                </form>
            </div>

            <div className="form-box register text-black">
                <h1 className="text  text-black" >Register </h1>
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
                    <Link to={'/adminlogin'} className="inline-block text-sm text-black">Sign up as Manager</Link>
                    <button type="submit" className="btn ml-10px">Sign Up</button>
                   
                </form>
            </div>

            <div className="toggle-box">
                <div className="toggle-panel toggle-left">
                    <h1>Welcome Back!</h1>
                    <p>Login with your personal details to use all features</p>
                    <button className="btn" onClick={togglePanel}>Register In</button>
                </div>
                <div className="toggle-panel toggle-right">
                    <h1>Hello, Friend!</h1>
                    <p>Register with your personal details to use all features</p>
                    <button className="btn" onClick={togglePanel}>Login in</button>
                </div>
            </div>
        </div>
    );
};

export default Login;