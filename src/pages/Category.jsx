import React from 'react';
import { Link, useParams } from 'react-router-dom'; // For navigation and dynamic routing

const Category = () => {
    // Sample product data (replace with your actual data or fetch from an API)
    const products = [
        {
            id: 1,
            name: '1 Mukhi Rudraksha',
            price: '$199',
            image: 'Rudreaksha_Photos/one-mukhi-rudraksha.png',
            description: 'For ultimate peace and enlightenment.',
            category: 'rudraksha',
        },
        {
            id: 2,
            name: '5 Mukhi Rudraksha',
            price: '$99',
            image: 'Rudreaksha_Photos/5mukhi1-photoroom-500x500.webp',
            description: 'For health, wealth, and prosperity.',
            category: 'rudraksha',
        },
        {
            id: 3,
            name: '7 Mukhi Rudraksha',
            price: '$149',
            image: 'Rudreaksha_Photos/7 mukhi.jpg',
            description: 'For success and overcoming obstacles.',
            category: 'rudraksha', // Corrected typo here
        },
        {
            id: 4,
            name: '14 Mukhi Rudraksha',
            price: '$299',
            image: 'Rudreaksha_Photos/14 mukhi.jpg',
            description: 'For divine blessings and protection.',
            category: 'rudraksha',
        },
        {
            id: 5,
            name: 'Rudraksha Mala',
            price: '$79',
            image: 'Rudreaksha_Photos/5mukhi1-photoroom-500x500.webp',
            description: 'Handcrafted mala for meditation and spiritual growth.',
            category: 'mala',
        },
        {
            id: 6,
            name: 'Rudraksha Bracelet',
            price: '$49',
            image: 'Rudreaksha_Photos/HomeMade.jpg',
            description: 'Elegant bracelet for daily wear and positive energy.',
            category: 'bracelet',
        },
        {
            id: 7,
            name: 'Rudraksha Pendant',
            price: '$89',
            image: 'Rudreaksha_Photos/goldenCap.jpg',
            description: 'Stylish pendant for spiritual and fashion purposes.',
            category: 'pendant',
        },
        {
            id: 8,
            name: 'Rudraksha Kada',
            price: '$69',
            image: 'Rudreaksha_Photos/braceleteKada.jpg',
            description: 'Stylish Kada for spiritual and fashion purposes.',
            category: 'kada',
        },
    ];

    // Get the category from the URL parameter
    const { category } = useParams();

    // Filter products by category
    const filteredProducts = products.filter(
        (product) => product.category === category
    );

    return (
        <div className="font-sans mt-16">
            {/* Hero Section */}
            <section className="bg-orange-400 py-20">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold text-gray-800 mb-6 capitalize">
                        {category}
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                        Explore our exclusive collection of {category}.
                    </p>
                </div>
            </section>

            {/* Product Grid Section */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-800 bg-gradient-to-r from-white via-orange-400 to-white py-4 text-center mb-12">
                        {category} Collection
                    </h2>
                    {products.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {products.map((product) => (
                                <div
                                    key={product.id}
                                    className="bg-gradient-to-r from-orange-100 to-orange-200 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition duration-300"
                                >
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-24 h-24 mx-auto mb-4 bg-transparent mix-blend-multiply" // Corrected typo here
                                    />
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                        {product.name}
                                    </h3>
                                    <p className="text-gray-600 mb-4">{product.description}</p>
                                    <p className="text-xl font-bold text-gray-800 mb-4">
                                        {product.price}
                                    </p>
                                    <Link
                                        to={`/viewDetails/${product.id}`} // Replace with your product detail route
                                        className="bg-green-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-600 transition duration-300"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-gray-600">No products found in this category.</p>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Category;