


import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ViewDetails = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    };

    return (
        <div className="font-sans mt-16">
            {/* Product Details Section */}
            <section className="bg-white py-12">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Product Image Slider */}
                        <div>
                            <Slider {...sliderSettings}>
                                <div>
                                    <img
                                        src="/Rudreaksha_Photos/five mukhi.jpg"
                                        alt="Product 1"
                                        className="w-full h-88 object-cover rounded-lg"
                                    />
                                </div>
                                <div>
                                    <img
                                        src="/Rudreaksha_Photos/5mukhi1-photoroom-500x500.webp"
                                        alt="Product 2"
                                        className="w-full h-96 object-cover rounded-lg"
                                    />
                                </div>
                                <div>
                                    <img
                                        src="/Rudreaksha_Photos/1000_F_1225786490_XS5T3I8qzr2eYbycHLqjDE6NVptv5jNB.jpg"
                                        alt="Product 3"
                                        className="w-full h-96 object-cover rounded-lg"
                                    />
                                </div>
                            </Slider>
                        </div>

                        {/* Product Information */}
                        <div className="flex flex-col justify-center">
                            <h1 className="text-4xl font-bold text-gray-800 mb-4">
                                5 Mukhi Rudraksha Mala
                            </h1>
                            <p className="text-xl text-gray-600 mb-6">
                                Handcrafted with authentic 5 Mukhi Rudraksha beads, this mala is perfect for meditation and spiritual growth.
                            </p>
                            <div className="space-y-4 mb-6">
                                <p className="text-lg text-gray-700">
                                    <span className="font-semibold">Material:</span> Genuine Rudraksha Beads
                                </p>
                                <p className="text-lg text-gray-700">
                                    <span className="font-semibold">Bead Count:</span> 108 Beads
                                </p>
                                <p className="text-lg text-gray-700">
                                    <span className="font-semibold">Benefits:</span> Health, Wealth, and Prosperity
                                </p>
                            </div>
                            <p className="text-3xl font-bold text-gray-800 mb-6">$50.00</p>
                            <button
                                className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition duration-300"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Description Section */}
            <section className="bg-gray-50 py-12 bg-gradient-to-r from-orange-100 to-orange-400">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Product Description</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        The 5 Mukhi Rudraksha Mala is crafted with the finest Rudraksha beads, each with five natural facets (mukhis). This mala is known for its powerful spiritual and healing properties. It helps in enhancing focus, reducing stress, and promoting overall well-being. The beads are strung together with a strong thread, ensuring durability and longevity. Perfect for daily meditation and spiritual practices, this mala is a must-have for anyone seeking peace and prosperity.
                    </p>
                </div>
            </section>

            {/* Related Products Section */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-800 bg-gradient-to-r from-white via-orange-400 to-white py-4 text-center mb-12">
                        Related Products
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Related Product 1 */}
                        <div className="bg-gradient-to-r from-orange-100 to-orange-200 p-6 rounded-tl-[30px] rounded-br-[30px] shadow-lg text-center hover:shadow-xl transition duration-300 hover:scale-110" style={{ boxShadow: '21px 21px 22px #fb913c' }}>
                            <img
                                src="Rudreaksha_Photos/one-mukhi-rudraksha.png"
                                alt="1 Mukhi Rudraksha"
                                className="w-24 h-24 mx-auto mb-4 bg-transparent mix-blend-multiply"
                            />
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">1 Mukhi Rudraksha</h3>
                            <p className="text-gray-600 mb-4">
                                For ultimate peace and enlightenment.
                            </p>
                            <a
                                href="#"
                                className="bg-green-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-600 transition duration-300"
                            >
                                Explore
                            </a>
                        </div>

                        {/* Related Product 2 */}
                        <div className="bg-gradient-to-r from-orange-100 to-orange-200 p-6 rounded-tl-[30px] rounded-br-[30px] shadow-lg text-center hover:shadow-xl transition duration-300 hover:scale-110" style={{ boxShadow: '21px 21px 22px #fb913c' }}>
                            <img
                                src="Rudreaksha_Photos/7 mukhi.jpg"
                                alt="7 Mukhi Rudraksha"
                                className="w-24 h-24 mx-auto mb-4 bg-transparent mix-blend-multiply"
                            />
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">7 Mukhi Rudraksha</h3>
                            <p className="text-gray-600 mb-4">
                                For success and overcoming obstacles.
                            </p>
                            <a
                                href="#"
                                className="bg-green-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-600 transition duration-300"
                            >
                                Explore
                            </a>
                        </div>

                        {/* Related Product 3 */}
                        <div className="bg-gradient-to-r from-orange-100 to-orange-200 p-6 rounded-tl-[30px] rounded-br-[30px] shadow-lg text-center hover:shadow-xl transition duration-300 hover:scale-110" style={{ boxShadow: '21px 21px 22px #fb913c' }}>
                            <img
                                src="Rudreaksha_Photos/14 mukhi.jpg"
                                alt="14 Mukhi Rudraksha"
                                className="w-24 h-24 mx-auto mb-4 bg-transparent mix-blend-multiply"
                            />
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">14 Mukhi Rudraksha</h3>
                            <p className="text-gray-600 mb-4">
                                For divine blessings and protection.
                            </p>
                            <a
                                href="#"
                                className="bg-green-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-600 transition duration-300"
                            >
                                Explore
                            </a>
                        </div>

                        {/* Related Product 4 */}
                        <div className="bg-gradient-to-r from-orange-100 to-orange-200 p-6 rounded-tl-[30px] rounded-br-[30px] shadow-lg text-center hover:shadow-xl transition duration-300 hover:scale-110" style={{ boxShadow: '21px 21px 22px #fb913c' }}>
                            <img
                                src="Rudreaksha_Photos/braceleteKada.jpg"
                                alt="Rudraksha Kada"
                                className="w-24 h-24 mx-auto mb-4 bg-transparent mix-blend-multiply"
                            />
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Rudraksha Kada</h3>
                            <p className="text-gray-600 mb-4">
                                Stylish Kada for spiritual and fashion purposes.
                            </p>
                            <a
                                href="#"
                                className="bg-green-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-600 transition duration-300"
                            >
                                Explore
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ViewDetails;

