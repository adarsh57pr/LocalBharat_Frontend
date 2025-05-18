import React, { useRef, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {
    const [isLogin, setIsLogin] = useState(false);
    const navigate = useNavigate();

    let nameRef = useRef();
    let emailRef = useRef();
    let passwordRef = useRef();

    const handleRegister = async (e) => {
        e.preventDefault();
        const userDetails = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        try {
            const res = await axios.post('http://localhost:8000/users/createUser', userDetails);
            const registerData = res.data;
            console.log(registerData);

            if (registerData.success) {
                toast.success(registerData.msg, { position: 'top-right' });
                setIsLogin(false);
            } else {
                toast.error(registerData.msg, { position: 'top-right' });
            }
        } catch (error) {
            toast.error('Server error..', { position: 'top-right' });
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const loginDetails = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        try {
            const res = await axios.post('http://localhost:8000/users/loginUser', loginDetails);
            const loginData = res.data;
            console.log(loginData);
            if (loginData.success) {
                localStorage.setItem('LocalBharat', JSON.stringify({token:loginData.token, login:true}))
                toast.success(loginData.msg, { position: 'top-right' });
                navigate('/');
            } else {
                toast.error(loginData.msg, { position: 'top-right' });
            }
        } catch (error) {
            toast.error('Server error..', { position: 'top-right' });
        }
    };

    return (
        <div className="font-sans mt-10 bg-[url('https://as2.ftcdn.net/v2/jpg/09/90/21/53/1000_F_990215383_wGhW18HK6ndA1kyz48PJcjUuMsC9HTZ0.jpg')] bg-cover min-h-screen flex items-center justify-center py-12">
            <div className="bg-gradient-to-r from-orange-400/60 to-orange-300/20 rounded-3xl shadow-2xl overflow-hidden w-full max-w-md mx-4 p-4 border border-white/40 relative">
                <div className="absolute -top-20 -left-20 w-40 h-40 bg-orange-300/20 rounded-full blur-md animate-float"></div>
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-orange-400/20 rounded-full blur-lg animate-float-reverse"></div>

                {/* Login Form */}
                {!isLogin && (
                    <form className="space-y-6 animate-fade-in">
                        <h2 className="text-3xl font-bold text-gray-100 mb-4 text-center">
                            Welcome Back!
                        </h2>
                        <div>
                            <label className="text-gray-100" htmlFor="loginEmail">
                                Email Address
                            </label>
                            <input
                                className="w-full px-4 py-2 bg-transparent border-2 rounded-full border-gray-300 focus:border-orange-500 focus:outline-none transition duration-300"
                                id="loginEmail"
                                type="email"
                                placeholder="Enter Email Address"
                                ref={emailRef}
                                required
                            />
                        </div>
                        <div>
                            <label className="text-gray-100" htmlFor="loginPassword">
                                Password
                            </label>
                            <input
                                className="w-full px-4 py-2 bg-transparent border-2 rounded-full border-gray-300 focus:border-orange-500 focus:outline-none transition duration-300"
                                id="loginPassword"
                                type="password"
                                placeholder="Enter Password"
                                ref={passwordRef}
                                required
                            />
                        </div>

                        <div className="flex justify-evenly items-center">
                            <p>  <Link to='/forgetpassword' className=' text-blue-500 font-semibold'>Forget your Password?</Link></p>
                            <button
                                className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-8 py-2 rounded-full font-semibold hover:from-orange-500 hover:to-orange-600 transition duration-300 transform hover:scale-105"
                                type="submit"
                                onClick={handleLogin}
                            >
                                Login
                            </button>

                        </div>
                        <div className="mt-4 text-center">
                            <p class="text-sm text-gray-100">Don't have an account?
                                <Link to="#" onClick={() => setIsLogin(true)} className="font-bold text-blue-500 no-underline hover:text-blue-400"> Register</Link></p>
                        </div>
                    </form>
                )}

                {/* Register Form */}
                {isLogin && (

                    <form className="space-y-3 animate-fade-in">
                        <h2 className="text-3xl font-bold text-gray-100 text-center p-2">
                            Create Your Account
                        </h2>
                        <div>
                            <label className="text-gray-100" htmlFor="name">
                                Full Name
                            </label>
                            <input
                                className="w-full px-4 py-2 bg-transparent border-2 rounded-full border-gray-300 focus:border-orange-500 focus:outline-none transition duration-300"
                                id="name"
                                type="text"
                                placeholder="Enter your Name"
                                ref={nameRef}
                                required
                            />
                        </div>
                        <div>
                            <label className="text-gray-100" htmlFor="email">
                                Email Address
                            </label>
                            <input
                                className="w-full px-4 py-2 bg-transparent border-2 border-gray-300 rounded-full focus:border-orange-500 focus:outline-none transition duration-300"
                                id="email"
                                type="email"
                                placeholder="Enter Email Address"
                                ref={emailRef}
                                required
                            />
                        </div>
                        <div>
                            <label className="text-gray-100" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="w-full px-4 py-2 bg-transparent border-2 rounded-full border-gray-300 focus:border-orange-500 focus:outline-none transition duration-300"
                                id="password"
                                type="password"
                                placeholder="Enter Password"
                                ref={passwordRef}
                                required
                            />
                        </div>

                        <div className="flex justify-center">
                            <button
                                className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-8 py-2 rounded-full font-semibold hover:from-orange-500 hover:to-orange-600 transition duration-300 transform hover:scale-105"
                                type="submit"
                                onClick={handleRegister}
                            >
                                Register
                            </button>
                        </div>
                        <div className="mt-4 text-center">
                            <p class="text-sm text-gray-100">Already have an account?
                                <Link to="#" onClick={() => setIsLogin(false)} className="font-bold text-blue-500 no-underline hover:text-blue-400"> Login</Link></p>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Register;
