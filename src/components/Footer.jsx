import React from 'react';
import { Link } from 'react-router-dom'; // For navigation links

const Footer = () => {
    return (
        <footer className="bg-black py-12 bg-[url('https://images.pexels.com/photos/30218192/pexels-photo-30218192/free-photo-of-arial-view-of-kumbh-mela-at-triveni-sangam.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-fixed">

            <div className="max-w-6xl mx-0 px-4 py-5 bg-black opacity-75 rounded-r-full ">
                {/* Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {/* Column 1: About Us */}
                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-gray-100 mb-4">About Us</h3>
                        <p className="text-gray-200">
                            We are dedicated to providing authentic Rudraksha beads and spiritual products to enhance your well-being.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-gray-100 mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-gray-200 hover:text-orange-500 transition duration-300">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/shop" className="text-gray-200 hover:text-orange-500 transition duration-300">
                                    Shop
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-200 hover:text-orange-500 transition duration-300">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-200 hover:text-orange-500 transition duration-300">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Categories */}
                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-gray-100 mb-4">Categories</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/category/rudraksha" className="text-gray-200 hover:text-orange-500 transition duration-300">
                                    Rudraksha
                                </Link>
                            </li>
                            <li>
                                <Link to="/category/mala" className="text-gray-200 hover:text-orange-500 transition duration-300">
                                    Malas
                                </Link>
                            </li>
                            <li>
                                <Link to="/category/bracelet" className="text-gray-200 hover:text-orange-500 transition duration-300">
                                    Bracelets
                                </Link>
                            </li>
                            <li>
                                <Link to="/category/pendant" className="text-gray-200 hover:text-orange-500 transition duration-300">
                                    Pendants
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Social Media */}
                    <div className="mb-8 lg:-ms-10">
                        <h3 className="text-xl font-bold text-gray-100 mb-4">Contact Info</h3>
                        <div className="space-y-6">
                            <div className="flex items-center">
                                <svg
                                    className="w-6 h-6 text-gray-200 mr-4 hover:text-orange-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <Link to="https://maps.app.goo.gl/Twbb8DafetcjLE7J7" className="text-white hover:text-orange-400">
                                    kumbh Nagari, Prayagraj,Uttar Pradesh, India
                                </Link>
                            </div>
                            <div className="flex items-center">
                                <svg
                                    className="w-6 h-6 text-gray-200 hover:text-orange-400 mr-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                <p className="text-white hover:text-orange-400">
                                    +91 123 456 7890
                                </p>
                            </div>
                            <div className="flex items-center">
                                <svg
                                    className="w-6 h-6 text-gray-200 hover:text-orange-400 mr-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <p className="text-white hover:text-orange-400">
                                    info@rudrakshaworld.com
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Copyright Section */}
                <div className="border-t border-gray-200 pt-8 mt-8 flex flex-col items-center gap-4">
                    <div className="flex gap-5 space-x-4">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-200 hover:text-orange-500 transition duration-300"
                        >
                            <i className="fab fa-facebook text-2xl"></i>
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-200 hover:text-orange-500 transition duration-300"
                        >
                            <i className="fab fa-twitter text-2xl"></i>
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-200 hover:text-orange-500 transition duration-300"
                        >
                            <i className="fab fa-instagram text-2xl"></i>
                        </a>
                        <a
                            href="https://youtube.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-200 hover:text-orange-500 transition duration-300"
                        >
                            <i className="fab fa-youtube text-2xl"></i>
                        </a>
                    </div>
                    <p className="text-white font-semibold">
                        &copy; 2025 <span className='text-green-500'>लोकल</span>
                        <span className='text-orange-500'> भारत  </span> . All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;