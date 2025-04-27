import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';



const Home = () => {

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
};
    return (
        <div className="font-sans mt-16 ">
                    {/* Hero Section with Slider */}
                    <section className="bg-orange-400 py-12">
                <div className="max-w-6xl mx-auto px-4">
                    <Slider {...sliderSettings}>
                        {/* Slide 1 */}
                        <div className="relative">
                            <img src="https://as1.ftcdn.net/v2/jpg/09/28/94/62/1000_F_928946279_XE2nIxjA0u3NxyzgOKiYaRTeSEk0vIiK.jpg" alt="Rudraksha Collection" className="w-full h-96 bg-cover rounded-lg"/>

                            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 rounded-lg">
                                <h1 className="text-4xl font-bold text-white mb-4">
                                    Discover Authentic Rudraksha
                                </h1>
                                <p className="text-xl text-white mb-6">
                                    Enhance your spiritual journey with our premium collection.
                                </p>
                                <Link to={'/shop'} className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition duration-300" >
                                    Shop Now
                                </Link>
                            </div>
                        </div>

                        {/* Slide 2 */}
                        <div className="relative">
                            <img src="https://m.media-amazon.com/images/I/61HLh1T5iEL._AC_UY300_.jpg" alt="Rudraksha Mala" className="w-full h-96 bg-cover rounded-lg"/>
                            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 rounded-lg">
                                <h1 className="text-4xl font-bold text-white mb-4">
                                    Handcrafted Rudraksha Malas
                                </h1>
                                <p className="text-xl text-white mb-6">
                                    Perfect for meditation and spiritual growth.
                                </p>
                                <Link to={''} className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition duration-300">
                                    Explore Malas
                                </Link>
                            </div>
                        </div>

                        {/* Slide 3 */}
                        <div className="relative">
                            <img
                                src="Rudreaksha_Photos/braceletNaturalStone.jpg"
                                alt="Rudraksha Bracelets"
                                className="w-full h-96 object-cover rounded-lg"
                            />
                            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 rounded-lg">
                                <h1 className="text-4xl font-bold text-white mb-4">
                                    Stylish Rudraksha Bracelets
                                </h1>
                                <p className="text-xl text-white mb-6">
                                    Wear positivity and protection every day.
                                </p>
                                <Link
                                    to={''}
                                    className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition duration-300"
                                >
                                    Shop Bracelets
                                </Link>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>

            {/* Hero Section */}
            <section className="bg-orange-400 py-20">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold text-gray-800 mb-6">
                        Discover the Power of Rudraksha
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                        Explore our exclusive collection of authentic Rudraksha beads for spiritual and mental well-being.
                    </p>
                    <Link to={'/shop'}
                        className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition duration-300">
                        Shop Now
                    </Link>
                </div>
            </section>

            {/* Categories Section */}
            <section id="categories" className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-800 bg-gradient-to-r from-white via-orange-400 to-white py-4 text-center mb-12">
                        Shop by Category
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
                        {/* Category 1 */}
                        <div className="bg-gradient-to-r from-orange-100 to-orange-200 p-6 rounded-tl-[30px] rounded-br-[30px] shadow-lg text-center hover:shadow-xl transition duration-300 hover:scale-110" style={{boxShadow:  '21px 21px 22px #fb913c'}}>
                            <img
                                src="Rudreaksha_Photos/one-mukhi-rudraksha.png"
                                alt="1 Mukhi Rudraksha"
                                className="w-24 h-24 mx-auto mb-4 bg-transparent mix-blend-multiply"/>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">1 Mukhi Rudraksha</h3>
                            <p className="text-gray-600 mb-4 ">
                                For ultimate peace and enlightenment.
                            </p>
                            <Link to="#"
                                className="bg-green-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-600 transition duration-300">
                                Explore
                            </Link>
                        </div>

                        {/* Category 2 */}
                        <div className="bg-gradient-to-r from-orange-100 to-orange-200 p-6  rounded-tl-[30px] rounded-br-[30px] shadow-lg text-center hover:shadow-xl transition duration-300 hover:scale-110" style={{boxShadow:  '21px 21px 22px #fb913c'}}>
                            <img
                                src="Rudreaksha_Photos/five mukhi.jpg"
                                alt="5 Mukhi Rudraksha"
                                className="w-24 h-24 mx-auto mb-4 bg-transparent mix-blend-multiply"/>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">5 Mukhi Rudraksha</h3>
                            <p className="text-gray-600 mb-4">
                                For health, wealth, and prosperity.
                            </p>
                            <Link to="#"
                                className="bg-green-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-600 transition duration-300" >
                                Explore
                            </Link>
                        </div>

                        {/* Category 3 */}
                        <div className="bg-gradient-to-r from-orange-100 to-orange-200 p-6  rounded-tl-[30px] rounded-br-[30px] shadow-lg text-center hover:shadow-xl transition duration-300 hover:scale-110" style={{boxShadow:  '21px 21px 22px #fb913c'}}>
                            <img
                                src="Rudreaksha_Photos/7 mukhi.jpg"
                                alt="7 Mukhi Rudraksha"
                                className="w-24 h-24 mx-auto mb-4 bg-transparent mix-blend-multiply"
                            />
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">7 Mukhi Rudraksha</h3>
                            <p className="text-gray-600 mb-4">
                                For success and overcoming obstacles.
                            </p>
                            <Link
                                to="#"
                                className="bg-green-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-600 transition duration-300"
                            >
                                Explore
                            </Link>
                        </div>

                        {/* Category 4 */}
                        <div className="bg-gradient-to-r from-orange-100 to-orange-200 p-6  rounded-tl-[40px] rounded-br-[40px] shadow-lg text-center hover:shadow-xl transition duration-300 hover:scale-110" style={{boxShadow:  '21px 21px 22px #fb913c'}}>
                            <img
                                src="Rudreaksha_Photos/14 mukhi.jpg"
                                alt="14 Mukhi Rudraksha"
                                className="w-24 h-24 mx-auto mb-4 bg-transparent mix-blend-multiply"
                            />
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">14 Mukhi Rudraksha</h3>
                            <p className="text-gray-600 mb-4">
                                For divine blessings and protection.
                            </p>
                            <Link
                                to="#"
                                className="bg-green-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-600 transition duration-300"
                            >
                                Explore
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Products Section */}
            <section className="pb-16 bg-gradient-to-r from-white to-orange-50">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl bg-gradient-to-r from-white via-orange-400 to-white py-4 font-bold text-gray-800 text-center mb-12">
                        Featured Products
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Product 1 */}
                        <div className="bg-gradient-to-t from-orange-100 to-orange-300 p-3 rounded-lg transition duration-300 hover:scale-105" style={{boxShadow:'21px 21px 22px #fb913c'}}>
                            <img
                                src="Rudreaksha_Photos/5mukhi1-photoroom-500x500.webp"
                                alt="Rudraksha Mala"
                                className="w-full h-48 bg-cover rounded-lg mb-4 bg-transparent mix-blend-multiply"
                            />
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Rudraksha Mala</h3>
                            <p className="text-gray-600 mb-4">
                                Handcrafted mala for meditation and spiritual growth.
                            </p>
                           <div className='flex justify-evenly'>
                           <Link
                                to="#"
                                className="bg-green-500 text-white px-4 py-1 rounded-full font-semibold hover:bg-green-600 transition duration-300"
                            >
                                Buy Now
                            </Link>
                            <Link
                                to="#"
                                className="bg-orange-400 text-white px-2 py-1 rounded-full font-semibold hover:bg-orange-500 transition duration-300"
                            >
                                Add to cart
                            </Link>
                           </div>
                        </div>

                        {/* Product 2 */}
                        <div className="bg-gradient-to-t from-orange-100 to-orange-300 p-3 rounded-lg hover:scale-105 transition duration-300" style={{boxShadow:  '21px 21px 22px #fb913c'}}>
                            <img
                                src="Rudreaksha_Photos/HomeMade.jpg"
                                alt="Rudraksha Bracelet"
                                className="w-full h-48 bg-cover rounded-lg mb-4 bg-transparent mix-blend-multiply"
                            />
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Rudraksha Bracelet</h3>
                            <p className="text-gray-600 mb-4">
                                Elegant bracelet for daily wear and positive energy.
                            </p>
                            <div className='flex justify-evenly'>
                           <Link
                                to="#"
                                className="bg-green-500 text-white px-4 py-1 rounded-full font-semibold hover:bg-green-600 transition duration-300"
                            >
                                Buy Now
                            </Link>
                            <Link
                                to="#"
                                className="bg-orange-400 text-white px-2 py-1 rounded-full font-semibold hover:bg-orange-500 transition duration-300"
                            >
                                Add to cart
                            </Link>
                           </div>
                        </div>

                        {/* Product 3 */}
                        <div className="bg-gradient-to-t from-orange-100 to-orange-300 p-3 rounded-lg hover:scale-105 transition duration-300" style={{boxShadow:  '21px 21px 22px #fb913c'}}>
                            <img
                                src="Rudreaksha_Photos/goldenCap.jpg"
                                alt="Rudraksha Pendant"
                                className="w-full h-48 bg-cover rounded-lg mb-4 bg-transparent mix-blend-multiply"
                            />
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Rudraksha Pendant</h3>
                            <p className="text-gray-600 mb-4">
                                Stylish pendant for spiritual and fashion purposes.
                            </p>
                            <div className='flex justify-evenly'>
                           <Link
                                to="#"
                                className="bg-green-500 text-white px-4 py-1 rounded-full font-semibold hover:bg-green-600 transition duration-300"
                            >
                                Buy Now
                            </Link>
                            <Link
                                to="#"
                                className="bg-orange-400 text-white px-2 py-1 rounded-full font-semibold hover:bg-orange-500 transition duration-300"
                            >
                                Add to cart
                            </Link>
                           </div>
                        </div>
                        {/* Product 4 */}
                        <div className="bg-gradient-to-t from-orange-100 to-orange-300 p-3 rounded-lg hover:scale-105 transition duration-300" style={{boxShadow:  '21px 21px 22px #fb913c'}}>
                            <img
                                src="Rudreaksha_Photos/braceleteKada.jpg"
                                alt="Rudraksha Pendant"
                                className="w-full h-48 bg-cover rounded-lg mb-4 bg-transparent mix-blend-multiply"
                            />
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Rudraksha Kada</h3>
                            <p className="text-gray-600 mb-4">
                                Stylish Kada for spiritual and fashion purposes.
                            </p>
                            <div className='flex justify-evenly'>
                           <Link
                                to="#"
                                className="bg-green-500 text-white px-4 py-1 rounded-full font-semibold hover:bg-green-600 transition duration-300"
                            >
                                Buy Now
                            </Link>
                            <Link
                                to="#"
                                className="bg-orange-400 text-white px-2 py-1 rounded-full font-semibold hover:bg-orange-500 transition duration-300"
                            >
                                Add to cart
                            </Link>
                           </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;