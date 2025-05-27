
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../redux/CartSlice';
import { toast } from 'react-toastify';

const Shop = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.products)
    console.log(products)

    const handleAddToCart = (e, product) => {
        e.preventDefault();
        dispatch(addToCart(product));
        toast.success(`${product.name} added to cart!`);
    };

    return (
        <div className="font-sans mt-16">
            {/* Hero Section */}
            <section className="bg-orange-400 py-20">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold text-gray-800 mb-6">
                        Shop Authentic Rudraksha
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                        Explore our exclusive collection of Rudraksha beads, malas, bracelets, and more.
                    </p>
                </div>
            </section>

            {/* Product Grid Section */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-800 bg-gradient-to-r from-white via-orange-400 to-white py-4 text-center mb-12">
                        Our Products
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {products?.map((product) => (
                            <Link
                                to={`/viewDetails/${product.id}`}  // Added product ID to URL
                                key={product.id}
                                style={{ boxShadow: '21px 21px 22px #fb913c' }}
                                className="bg-gradient-to-r from-orange-100 to-orange-200 hover:scale-105 hover:shadow-2xl shadow-orange-500 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition duration-300"
                            >
                                <img
                                    src={product.images || '/placeholder.jpg'}  // Added fallback image
                                    alt={product.name}
                                    className="w-24 h-24 mx-auto mb-4 bg-transparent mix-blend-multiply object-contain"
                                />
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {product.name}
                                </h3>
                                <p className="text-xl font-bold text-gray-800 mb-4">
                                    ₹{product.price}
                                </p>
                                <button
                                    onClick={(e) => handleAddToCart(e, product)}
                                    className="bg-teal-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-teal-500 transition duration-300"
                                >
                                    Add To Cart
                                </button>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Shop;


// import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom'; // For navigation (if using React Router)
// import { addToCart } from '../redux/CartSlice';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const Shop = () => {
//     const dispatch = useDispatch()

//     const [allProducts, setAllProducts] = useState([]);
//     console.log(allProducts)
//     const products = async () => {
//         try {
//             const res = await axios.get('http://localhost:8000/products/getAllProducts')
//             //  console.log(res.data.products)
//             setAllProducts(res.data.products)
//             dispatch(setAllProducts(res.data.products))
//         } catch (error) {
//             toast.error(error.res?.data?.msg || 'Error fetching products');
//         }
//     }

//     useEffect(() => {
//         products()
//     }, [])

//     return (
//         <div className="font-sans mt-16">
//             {/* Hero Section */}
//             <section className="bg-orange-400 py-20">
//                 <div className="max-w-6xl mx-auto px-4 text-center">
//                     <h1 className="text-5xl font-bold text-gray-800 mb-6">
//                         Shop Authentic Rudraksha
//                     </h1>
//                     <p className="text-xl text-gray-600 mb-8">
//                         Explore our exclusive collection of Rudraksha beads, malas, bracelets, and more.
//                     </p>
//                 </div>
//             </section>

//             {/* Product Grid Section */}
//             <section className="py-16 bg-white">
//                 <div className="max-w-6xl mx-auto px-4">
//                     <h2 className="text-3xl font-bold text-gray-800 bg-gradient-to-r from-white via-orange-400 to-white py-4 text-center mb-12">
//                         Our Products
//                     </h2>
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//                         {allProducts.map((product) => (
//                             <Link
//                                 to={'/viewDetails'}
//                                 key={product.id}
//                                 style={{ boxShadow: '21px 21px 22px #fb913c' }}
//                                 className="bg-gradient-to-r from-orange-100 to-orange-200 hover:scale-105 hover:shadow-2xl shadow-orange-500 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition duration-300"
//                             >
//                                 <img
//                                     src={product.images}
//                                     alt={product.name}
//                                     className="w-24 h-24 mx-auto mb-4 bg-transparent mix-blend-multiply"
//                                 />
//                                 <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                                     {product.name}
//                                 </h3>
//                                 {/* <p className="text-gray-600 mb-4">{product.description}</p> */}
//                                 <p className="text-xl font-bold text-gray-800 mb-4">
//                                     {product.price}
//                                 </p>
//                                 <button
//                                     onClick={(e) => {
//                                         e.preventDefault(); // Prevent navigation when clicking button
//                                         dispatch(addToCart(product));
//                                     }}
//                                     className="bg-teal-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-teal-500 transition duration-300"
//                                 >
//                                     Add To Cart
//                                 </button>
//                             </Link>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default Shop;