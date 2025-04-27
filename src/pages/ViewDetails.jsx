// import React from 'react';
// import { useParams, Link } from 'react-router-dom'; // For dynamic routing and navigation

// const ViewDetails = () => {
//     // Sample product data (replace with your actual data or fetch from an API)
//     const products = [
//         {
//             id: 1,
//             name: '1 Mukhi Rudraksha',
//             price: '$199',
//             image: 'Rudreaksha_Photos/one-mukhi-rudraksha.png',
//             description: 'The 1 Mukhi Rudraksha is known for its ability to bring ultimate peace and enlightenment. It is highly revered in spiritual practices and is believed to connect the wearer with divine energy.',
//             category: 'rudraksha',
//         },
//         {
//             id: 2,
//             name: '5 Mukhi Rudraksha',
//             price: '$99',
//             image: 'Rudreaksha_Photos/5mukhi1-photoroom-500x500.webp',
//             description: 'The 5 Mukhi Rudraksha is associated with health, wealth, and prosperity. It is widely used for meditation and is believed to balance the five elements of nature.',
//             category: 'rudraksha',
//         },
//         {
//             id: 3,
//             name: '7 Mukhi Rudraksha',
//             price: '$149',
//             image: 'Rudreaksha_Photos/7 mukhi.jpg',
//             description: 'The 7 Mukhi Rudraksha is known for bringing success and overcoming obstacles. It is often worn by those seeking growth in their personal and professional lives.',
//             category: 'rudraksha',
//         },
//         {
//             id: 4,
//             name: '14 Mukhi Rudraksha',
//             price: '$299',
//             image: 'Rudreaksha_Photos/14 mukhi.jpg',
//             description: 'The 14 Mukhi Rudraksha is believed to provide divine blessings and protection. It is considered one of the most powerful Rudraksha beads for spiritual growth.',
//             category: 'rudraksha',
//         },
//         {
//             id: 5,
//             name: 'Rudraksha Mala',
//             price: '$79',
//             image: 'Rudreaksha_Photos/5mukhi1-photoroom-500x500.webp',
//             description: 'This handcrafted Rudraksha Mala is perfect for meditation and spiritual growth. It is made with high-quality beads and is designed for daily use.',
//             category: 'mala',
//         },
//         {
//             id: 6,
//             name: 'Rudraksha Bracelet',
//             price: '$49',
//             image: 'Rudreaksha_Photos/HomeMade.jpg',
//             description: 'This elegant Rudraksha Bracelet is designed for daily wear. It brings positive energy and protection to the wearer.',
//             category: 'bracelet',
//         },
//         {
//             id: 7,
//             name: 'Rudraksha Pendant',
//             price: '$89',
//             image: 'Rudreaksha_Photos/goldenCap.jpg',
//             description: 'This stylish Rudraksha Pendant is perfect for both spiritual and fashion purposes. It is crafted with precision and care.',
//             category: 'pendant',
//         },
//         {
//             id: 8,
//             name: 'Rudraksha Kada',
//             price: '$69',
//             image: 'Rudreaksha_Photos/braceleteKada.jpg',
//             description: 'This Rudraksha Kada is designed for spiritual and fashion purposes. It is a perfect blend of tradition and style.',
//             category: 'kada',
//         },
//     ];

//     // Get the product ID from the URL parameter
//     const { id } = useParams();

//     // Find the product by ID
//     const product = products.find((p) => p.id === parseInt(id));

//     // If the product is not found, display a message
//     if (!product) {
//         return (
//             <div className="font-sans mt-16 text-center py-20">
//                 <h1 className="text-3xl font-bold text-gray-800">Product Not Found</h1>
//                 <Link to="/" className="text-green-500 hover:underline">
//                     Go back to Home
//                 </Link>
//             </div>
//         );
//     }

//     return (
//         <div className="font-sans mt-16">
//             {/* Product Details Section */}
//             <section className="py-12 bg-gradient-to-r from-orange-50 to-white">
//                 <div className="max-w-6xl mx-auto px-4">
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                         {/* Product Image */}
//                         <div className="flex justify-center items-center">
//                             <img
//                                 src={product.image}
//                                 alt={product.name}
//                                 className="w-full h-96 object-cover rounded-lg shadow-lg"
//                             />
//                         </div>

//                         {/* Product Information */}
//                         <div className="flex flex-col justify-center">
//                             <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.name}</h1>
//                             <p className="text-xl text-gray-600 mb-6">{product.description}</p>
//                             <p className="text-2xl font-bold text-gray-800 mb-6">{product.price}</p>
//                             <button className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition duration-300">
//                                 Add to Cart
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Related Products Section */}
//             <section className="py-16 bg-white">
//                 <div className="max-w-6xl mx-auto px-4">
//                     <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
//                         Related Products
//                     </h2>
//                     <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//                         {products
//                             .filter((p) => p.category === product.category && p.id !== product.id) // Filter related products
//                             .map((relatedProduct) => (
//                                 <div
//                                     key={relatedProduct.id}
//                                     className="bg-gradient-to-r from-orange-100 to-orange-200 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition duration-300"
//                                 >
//                                     <img
//                                         src={relatedProduct.image}
//                                         alt={relatedProduct.name}
//                                         className="w-24 h-24 mx-auto mb-4 bg-transparent mix-blend-multiply"
//                                     />
//                                     <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                                         {relatedProduct.name}
//                                     </h3>
//                                     <p className="text-gray-600 mb-4">{relatedProduct.description}</p>
//                                     <Link
//                                         to={`/product/${relatedProduct.id}`}
//                                         className="bg-green-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-600 transition duration-300"
//                                     >
//                                         View Details
//                                     </Link>
//                                 </div>
//                             ))}
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default ViewDetails;


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
                                        className="w-full h-96 object-cover rounded-lg"
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


// import React, { useState } from 'react';

// const ViewDetails = () => {
//     const [selectedImage, setSelectedImage] = useState(0);

//     const images = [
//         "/Rudreaksha_Photos/five mukhi.jpg",
//         "/Rudreaksha_Photos/5mukhi1-photoroom-500x500.webp",
//         "/Rudreaksha_Photos/1000_F_1225786490_XS5T3I8qzr2eYbycHLqjDE6NVptv5jNB.jpg",
//     ];

//     const handleImageSelect = (index) => {
//         setSelectedImage(index);
//     };

//     return (
//         <div className="font-sans mt-16 min-h-screen bg-gray-50">
//             {/* Split-Screen Layout */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 ">
//                 {/* Left Side: Product Story */}
//                 <div className=" p-12 flex flex-col justify-center">
//                     <h1 className="text-5xl font-bold text-gray-800 mb-6">
//                         The Story of the 5 Mukhi Rudraksha Mala
//                     </h1>
//                     <p className="text-lg text-gray-600 mb-8 leading-relaxed">
//                         Handcrafted with love and care, the 5 Mukhi Rudraksha Mala is more than just a piece of jewelry. It’s a spiritual tool, a companion for meditation, and a symbol of peace and prosperity. Each bead is carefully selected and strung together to create a mala that resonates with positive energy.
//                     </p>
//                     <div className="space-y-4">
//                         <p className="text-lg text-gray-700">
//                             <span className="font-semibold">Material:</span> Genuine Rudraksha Beads
//                         </p>
//                         <p className="text-lg text-gray-700">
//                             <span className="font-semibold">Bead Count:</span> 108 Beads
//                         </p>
//                         <p className="text-lg text-gray-700">
//                             <span className="font-semibold">Benefits:</span> Health, Wealth, and Prosperity
//                         </p>
//                     </div>
//                 </div>

//                 {/* Right Side: Product Showcase */}
//                 <div className="bg-gray-50 p-12 flex flex-col justify-center">
//                     <div className="relative">
//                         <img
//                             src={images[selectedImage]}
//                             alt="Product"
//                             className="w-full h-auto rounded-lg shadow-xl transition-transform duration-500 hover:scale-105"
//                         />
//                         <div className="absolute bottom-4 left-4 flex space-x-2">
//                             {images.map((_, index) => (
//                                 <button
//                                     key={index}
//                                     onClick={() => handleImageSelect(index)}
//                                     className={`w-3 h-3 rounded-full ${
//                                         selectedImage === index ? 'bg-green-500' : 'bg-gray-300'
//                                     }`}
//                                 ></button>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Product Details Section */}
//             <section className="bg-gradient-to-r from-orange-100 to-orange-400 py-12">
//                 <div className="max-w-7xl mx-auto px-4">
//                     <h2 className="text-3xl font-bold text-gray-800 mb-6">Product Details</h2>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//                         {/* Key Features */}
//                         <div>
//                             <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Features</h3>
//                             <ul className="space-y-2">
//                                 <li className="text-lg text-gray-600">Handcrafted with authentic Rudraksha beads.</li>
//                                 <li className="text-lg text-gray-600">108 beads for a complete mala.</li>
//                                 <li className="text-lg text-gray-600">Promotes focus, peace, and spiritual growth.</li>
//                                 <li className="text-lg text-gray-600">Durable and long-lasting design.</li>
//                             </ul>
//                         </div>

//                         {/* How to Use */}
//                         <div>
//                             <h3 className="text-xl font-semibold text-gray-800 mb-4">How to Use</h3>
//                             <ul className="space-y-2">
//                                 <li className="text-lg text-gray-600">Use during meditation to enhance focus.</li>
//                                 <li className="text-lg text-gray-600">Wear as a bracelet for daily positivity.</li>
//                                 <li className="text-lg text-gray-600">Keep it close for spiritual protection.</li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Call to Action Section */}
//             <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-16">
//                 <div className="max-w-7xl mx-auto px-4 text-center">
//                     <h2 className="text-4xl font-bold text-gray-800 mb-6">
//                         Ready to Elevate Your Spiritual Journey?
//                     </h2>
//                     <p className="text-xl text-gray-600 mb-8">
//                         Bring home the 5 Mukhi Rudraksha Mala and experience the power of authentic Rudraksha beads.
//                     </p>
//                     <button
//                         className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition duration-300"
//                     >
//                         Add to Cart
//                     </button>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default ViewDetails;