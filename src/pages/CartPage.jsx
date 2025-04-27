import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CartPage = () => {
    // Sample cart data with state
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: '5 Mukhi Rudraksha Mala',
            price: 2999,
            quantity: 1,
            image: 'Rudreaksha_Photos/5mukhi1-photoroom-500x500.webp'
        },
        {
            id: 2,
            name: 'Rudraksha Bracelet',
            price: 1499,
            quantity: 2,
            image: 'Rudreaksha_Photos/HomeMade.jpg'
        },
        {
            id: 3,
            name: 'Golden Cap Rudraksha',
            price: 1999,
            quantity: 1,
            image: 'Rudreaksha_Photos/goldenCap.jpg'
        }
    ]);

    const [couponCode, setCouponCode] = useState('');
    const [discount, setDiscount] = useState(0);
    const [couponMessage, setCouponMessage] = useState('');

    // Handle quantity increase
    const increaseQuantity = (id) => {
        setCartItems(cartItems.map(item => 
            item.id === id ? {...item, quantity: item.quantity + 1} : item
        ));
    };

    // Handle quantity decrease
    const decreaseQuantity = (id) => {
        setCartItems(cartItems.map(item => 
            item.id === id && item.quantity > 1 
                ? {...item, quantity: item.quantity - 1} 
                : item
        ));
    };

    // Remove item from cart
    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    // Apply coupon
    const applyCoupon = () => {
        if (couponCode.toUpperCase() === 'RUDRA10') {
            setDiscount(0.1); // 10% discount
            setCouponMessage('10% discount applied!');
        } else if (couponCode.toUpperCase() === 'RUDRA20') {
            setDiscount(0.2); // 20% discount
            setCouponMessage('20% discount applied!');
        } else {
            setDiscount(0);
            setCouponMessage('Invalid coupon code');
        }
    };

    // Calculate totals
    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 5000 ? 0 : 99; // Free shipping over ₹5000
    const discountAmount = subtotal * discount;
    const total = subtotal + shipping - discountAmount;

    return (
        <div className="font-sans mt-2">
            {/* Breadcrumb */}
            <div className="bg-orange-50 py-4">
                {/* <div className="max-w-6xl mx-auto px-4">
                    <div className="flex items-center space-x-2 text-sm">
                        <Link to="/" className="text-orange-500 hover:underline">Home</Link>
                        <span>/</span>
                        <span className="text-gray-600">Shopping Cart</span>
                    </div>
                </div> */}
            </div>

            {/* Cart Section */}
            <section className="py-12">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl bg-gradient-to-r from-white via-orange-400 to-white py-4 font-bold text-gray-800 text-center mb-8">
                        Your Shopping Cart
                    </h2>

                    {cartItems.length > 0 ? (
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Cart Items */}
                            <div className="lg:col-span-2">
                                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                    {/* Table Header */}
                                    <div className="hidden md:grid grid-cols-12 bg-orange-100 p-4 font-semibold text-gray-700">
                                        <div className="col-span-5">Product</div>
                                        <div className="col-span-2 text-center">Price</div>
                                        <div className="col-span-3 text-center">Quantity</div>
                                        <div className="col-span-2 text-right">Total</div>
                                    </div>

                                    {/* Cart Items */}
                                    {cartItems.map((item) => (
                                        <div key={item.id} className="grid grid-cols-12 p-4 border-b border-gray-200 items-center">
                                            {/* Product */}
                                            <div className="col-span-6 md:col-span-5 flex items-center">
                                                <img 
                                                    src={item.image} 
                                                    alt={item.name} 
                                                    className="w-20 h-16 object-cover rounded mr-4 bg-transparent mix-blend-multiply"
                                                />
                                                <div>
                                                    <h3 className="font-medium text-gray-800">{item.name}</h3>
                                                    <button 
                                                        onClick={() => removeItem(item.id)}
                                                        className="text-orange-500 text-sm hover:underline mt-1"
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Price */}
                                            <div className="col-span-3 md:col-span-2 text-center text-gray-600">
                                                ₹{item.price.toLocaleString()}
                                            </div>

                                            {/* Quantity */}
                                            <div className="col-span-3 md:col-span-3 flex justify-center">
                                                <div className="flex items-center border border-gray-300 rounded">
                                                    <button 
                                                        onClick={() => decreaseQuantity(item.id)}
                                                        className="px-3 py-1 text-gray-600 hover:bg-orange-50"
                                                    >
                                                        -
                                                    </button>
                                                    <span className="px-3 py-1">{item.quantity}</span>
                                                    <button 
                                                        onClick={() => increaseQuantity(item.id)}
                                                        className="px-3 py-1 text-gray-600 hover:bg-orange-50"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Total */}
                                            <div className="col-span-3 md:col-span-2 text-right font-medium text-gray-800">
                                                ₹{(item.price * item.quantity).toLocaleString()}
                                            </div>
                                        </div>
                                    ))}

                                    {/* Cart Actions */}
                                    <div className="p-4 flex justify-between">
                                        <Link to="/shop" className="bg-orange-400 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-500 transition duration-300">
                                            Continue Shopping
                                        </Link>
                                        <button 
                                            onClick={() => setCartItems([])}
                                            className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full font-semibold hover:bg-gray-300 transition duration-300"
                                        >
                                            Clear Cart
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Order Summary */}
                            <div>
                                <div className="bg-gradient-to-r from-orange-100 to-orange-200 p-6 rounded-lg shadow-lg" style={{boxShadow: '21px 21px 22px #fb913c'}}>
                                    <h3 className="text-xl font-bold text-gray-800 mb-6 border-b pb-2">Order Summary</h3>
                                    
                                    <div className="space-y-4 mb-6">
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Subtotal</span>
                                            <span className="font-medium">₹{subtotal.toLocaleString()}</span>
                                        </div>
                                        
                                        {discount > 0 && (
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Discount ({discount * 100}%)</span>
                                                <span className="font-medium text-green-600">-₹{discountAmount.toLocaleString()}</span>
                                            </div>
                                        )}
                                        
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Shipping</span>
                                            <span className="font-medium">
                                                {shipping === 0 ? (
                                                    <span className="text-green-600">Free</span>
                                                ) : (
                                                    `₹${shipping.toLocaleString()}`
                                                )}
                                            </span>
                                        </div>
                                        
                                        <div className="flex justify-between border-t pt-4">
                                            <span className="text-lg font-bold text-gray-800">Total</span>
                                            <span className="text-lg font-bold text-orange-600">₹{total.toLocaleString()}</span>
                                        </div>
                                    </div>

                                    <Link 
                                        to="/checkout" 
                                        className="block w-full bg-green-500 text-white text-center py-3 rounded-full font-semibold hover:bg-green-600 transition duration-300"
                                    >
                                        Proceed to Checkout
                                    </Link>

                                    <div className="mt-4 text-center text-sm text-gray-500">
                                        or <Link to="/shop" className="text-orange-500 hover:underline">continue shopping</Link>
                                    </div>
                                </div>

                                {/* Coupon Code */}
                                <div className="mt-6 bg-gradient-to-r from-orange-100 to-orange-200 p-6 rounded-lg shadow-lg" style={{boxShadow: '21px 21px 22px #fb913c'}}>
                                    <h3 className="text-xl font-bold text-gray-800 mb-4">Apply Coupon</h3>
                                    <div className="flex">
                                        <input 
                                            type="text" 
                                            placeholder="Enter coupon code" 
                                            value={couponCode}
                                            onChange={(e) => setCouponCode(e.target.value)}
                                            className="flex-1 px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-1 focus:ring-orange-400"
                                        />
                                        <button 
                                            onClick={applyCoupon}
                                            className="bg-orange-400 text-white px-4 py-2 rounded-r font-semibold hover:bg-orange-500 transition duration-300"
                                        >
                                            Apply
                                        </button>
                                    </div>
                                    {couponMessage && (
                                        <p className={`mt-2 text-sm ${discount > 0 ? 'text-green-600' : 'text-red-500'}`}>
                                            {couponMessage}
                                        </p>
                                    )}
                                    <div className="mt-3 text-xs text-gray-500">
                                        Try <span className="font-mono">RUDRA10</span> for 10% off or <span className="font-mono">RUDRA20</span> for 20% off
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <div className="text-5xl mb-4">🛒</div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Your cart is empty</h3>
                            <p className="text-gray-600 mb-6">Looks like you haven't added anything to your cart yet</p>
                            <Link 
                                to="/shop" 
                                className="bg-orange-400 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-500 transition duration-300"
                            >
                                Start Shopping
                            </Link>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default CartPage;



