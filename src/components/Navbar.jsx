

import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const cartDetails = useSelector((state)=> state.cart)
    // console.log(cartDetails)
    const [mobileOpen, setMobileOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const profileRef = useRef(null);

    const toggleMobile = () => {
        setMobileOpen(!mobileOpen);
    };

    const toggleProfile = () => {
        setProfileOpen(!profileOpen);
    };

    // Close profile dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setProfileOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className=''>
            <nav className="bg-gradient-to-r from-white to-orange-400 shadow-lg fixed top-0 w-full z-40">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between">
                        <div className="flex space-x-7">
                            <div>
                                <a href="#" className="flex items-center py-4 px-2">
                                    <img src="logo.png" alt="Logo" className="h-10 w-24 mr-2 bg-transparent mix-blend-multiply" />
                                </a>
                            </div>
                            <div className="hidden md:flex items-center space-x-2">
                                <Link to="/" className=" px-2 text-gray-500 font-semibold hover:text-white hover:scale-125 hover:border-2 rounded-md hover:bg-orange-400 transition duration-300">Home</Link>
                                <Link to="/shop" className=" px-2 text-gray-500 font-semibold hover:text-white hover:scale-125 hover:border-2 rounded-md hover:bg-orange-400 transition duration-300">Shop</Link>
                                <Link to="/category" className=" px-2 text-gray-500 font-semibold hover:text-white hover:scale-125 hover:border-2 rounded-md hover:bg-orange-400 transition duration-300">Categories</Link>
                                <Link to='/contact' className=" px-2 text-gray-500 font-semibold hover:text-white hover:scale-125 hover:border-2 hover:bg-orange-400 rounded-md transition duration-300">Contact</Link>
                            </div>
                        </div>
                        <div className="hidden md:flex items-center space-x-3">
                            <div className="relative">
                                <input type="text" placeholder="Search" className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500" />
                                <button className="absolute right-0 top-0 mt-2 mr-4">
                                    <svg className="h-5 w-5 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </button>
                            </div>
                            <Link to="/cart" className="py-2 px-2 flex">
                                <svg className="h-6 w-6 text-gray-100 hover:text-green-500 hover:scale-125 transition duration-300" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <sup className='text-white font-xl mt-1'>{cartDetails.items.length}</sup>
                            </Link>
                            <div className="relative" ref={profileRef}>
                                <button onClick={toggleProfile} className="py-2 px-2 focus:outline-none">
                                    <svg className="h-6 w-6 text-gray-100 hover:text-green-500 hover:scale-125 transition duration-300" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                  
                                </button>
                                {profileOpen && (
                                    <div className="absolute -right-10 mt-2 w-28 bg-white rounded-lg shadow-lg py-2 font-semibold">
                                        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-green-400">Profile</a>
                                        <Link to="/register" className="block px-4 py-2 text-gray-700 hover:bg-green-400">Sign In</Link>
                                        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-green-400">Sign Out</a>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="md:hidden flex items-center">
                            <button className="outline-none mobile-menu-button" onClick={toggleMobile}>
                                <svg className="w-6 h-6 text-gray-500 hover:text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={`${mobileOpen ? 'block' : 'hidden'} md:hidden mobile-menu`}>
                    <ul>
                        <li className="px-2 py-4">
                            <div className="relative">
                                <input type="text" placeholder="Search" className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-green-500" />
                                <button className="absolute right-0 top-0 mt-2 mr-4">
                                    <svg className="h-5 w-5 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </button>
                            </div>
                        </li>
                        <li className="active">
                            <Link to="/" className="block text-sm px-2 py-4 hover:bg-gradient-to-r from-orange-400 to-white font-semibold hover:text-white">Home</Link>
                        </li>
                        <li>
                            <Link to="/shop" className="block text-sm px-2 py-4 hover:bg-gradient-to-r from-orange-400 to-white font-semibold hover:text-white">Shop</Link>
                        </li>
                        <li>
                            <Link to="/category" className="block text-sm px-2 py-4 hover:bg-gradient-to-r from-orange-400 to-white font-semibold hover:text-white">Categories</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="block text-sm px-2 py-4 hover:bg-gradient-to-r from-orange-400 to-white font-semibold hover:text-white">Contact</Link>
                        </li>
                        <li>
                            <Link to="/cart" className="block text-sm px-2 py-4 hover:bg-gradient-to-r from-orange-400 to-white font-semibold hover:text-white flex items-center">
                                <svg className="h-5 w-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                Cart
                            </Link>
                        </li>
                        <li ref={profileRef}>
                            <button onClick={toggleProfile} className="block text-sm px-2 py-4 hover:bg-gradient-to-r from-orange-400 to-white font-semibold hover:text-white w-full text-left flex items-center">
                                <svg className="h-5 w-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                Profile
                            </button>
                            {profileOpen && (
                                <div className="pl-4">
                                    <a href="#" className="block text-sm px-2 py-2 hover:bg-gradient-to-r from-orange-400 to-white font-semibold hover:text-white">Profile</a>
                                    <Link to="/register" className="block text-sm px-2 py-2 hover:bg-gradient-to-r from-orange-400 to-white font-semibold hover:text-white">Sign In</Link>
                                    <a href="#" className="block text-sm px-2 py-2 hover:bg-gradient-to-r from-orange-400 to-white font-semibold hover:text-white">Sign Out</a>
                                </div>
                            )}
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
