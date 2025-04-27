import React from 'react';

const Contact = () => {
    return (
        <div className="font-sans mt-16">
            {/* Hero Section */}
            <section className="bg-orange-400 py-12">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        Contact Us
                    </h1>
                    <p className="text-xl text-gray-600">
                        We'd love to hear from you! Reach out to us for any questions or feedback.
                    </p>
                </div>
            </section>

            {/* Contact Form and Details Section */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-gradient-to-r from-orange-100 to-orange-200 p-8 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">
                                Send Us a Message
                            </h2>
                            <form>
                                <div className="mb-6">
                                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                        placeholder="Enter your name"
                                        required
                                    />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                        placeholder="Enter your message"
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="bg-green-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-600 transition duration-300"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Contact Details */}
                        <div className="bg-gradient-to-r from-orange-100 to-orange-200 p-8 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">
                                Contact Information
                            </h2>
                            <div className="space-y-6">
                                <div className="flex items-center">
                                    <svg
                                        className="w-6 h-6 text-gray-700 mr-4"
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
                                    <p className="text-gray-700">
                                        kumbh Nagari, Prayagraj, India
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    <svg
                                        className="w-6 h-6 text-gray-700 mr-4"
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
                                    <p className="text-gray-700">
                                        +91 123 456 7890
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    <svg
                                        className="w-6 h-6 text-gray-700 mr-4"
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
                                    <p className="text-gray-700">
                                        info@rudrakshaworld.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="pb-16 bg-gradient-to-r from-white to-orange-50">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-800 bg-gradient-to-r from-white via-orange-400 to-white py-4 text-center mb-12">
                        Our Location
                    </h2>
                    <div className="rounded-lg overflow-hidden shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.346252462277!2d81.88486867395744!3d25.426685022370023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39854bb705363145%3A0x5631f309d7607f0e!2sPrayagraj%20Sangam!5e0!3m2!1sen!2sin!4v1742441192242!5m2!1sen!2sin"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;