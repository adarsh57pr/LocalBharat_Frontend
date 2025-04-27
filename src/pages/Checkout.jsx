import React, { useState } from 'react';

const Checkout = () => {
    const [paymentMethod, setPaymentMethod] = useState('creditCard'); // Toggle between payment methods

    return (
        <div className="font-sans mt-8 min-h-screen bg-[url('ttps://as2.ftcdn.net/v2/jpg/13/02/56/77/1000_F_1302567731_1zEXfQVY5GBmPo1M025sl1tJB8H4ZvFg.jpg')] bg-cover py-12">
            <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-gray-800 text-center bg-gradient-to-r from-white via-orange-400 to-white py-4 mb-2 ">Checkout</h1>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden bg-gradient-to-r from-orange-300/50 to-orange-300/20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                        {/* Left Side: Order Summary */}
                        <div className="bg-gradient-to-br from-pink-100 to-purple-100 p-6 rounded-2xl">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Order Summary</h2>
                            <div className="space-y-6">
                                {/* Product 1 */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <img
                                            src="https://via.placeholder.com/80"
                                            alt="Product 1"
                                            className="w-16 h-16 rounded-lg"
                                        />
                                        <div className="ml-4">
                                            <h3 className="text-lg font-semibold text-gray-800">Rudraksha Mala</h3>
                                            <p className="text-sm text-gray-600">1 x $50.00</p>
                                        </div>
                                    </div>
                                    <p className="text-lg font-semibold text-gray-800">$50.00</p>
                                </div>

                                {/* Product 2 */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <img
                                            src="https://via.placeholder.com/80"
                                            alt="Product 2"
                                            className="w-16 h-16 rounded-lg"
                                        />
                                        <div className="ml-4">
                                            <h3 className="text-lg font-semibold text-gray-800">Rudraksha Bracelet</h3>
                                            <p className="text-sm text-gray-600">1 x $30.00</p>
                                        </div>
                                    </div>
                                    <p className="text-lg font-semibold text-gray-800">$30.00</p>
                                </div>

                                {/* Divider */}
                                <div className="border-t border-gray-200"></div>

                                {/* Subtotal */}
                                <div className="flex justify-between">
                                    <p className="text-lg text-gray-600">Subtotal</p>
                                    <p className="text-lg font-semibold text-gray-800">$80.00</p>
                                </div>

                                {/* Shipping */}
                                <div className="flex justify-between">
                                    <p className="text-lg text-gray-600">Shipping</p>
                                    <p className="text-lg font-semibold text-gray-800">$5.00</p>
                                </div>

                                {/* Total */}
                                <div className="flex justify-between">
                                    <p className="text-2xl font-bold text-gray-800">Total</p>
                                    <p className="text-2xl font-bold text-gray-800">$85.00</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Checkout Form */}
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Payment Details</h2>
                            <form className="space-y-6">
                                {/* Payment Method Toggle */}
                                <div>
                                    <div className="flex space-x-4 mb-4">
                                        <button
                                            type="button"
                                            onClick={() => setPaymentMethod('creditCard')}
                                            className={`px-6 py-3 rounded-full transition-all duration-300 ${
                                                paymentMethod === 'creditCard'
                                                    ? 'bg-gradient-to-r from-orange-500 to-orange-400 text-white shadow-lg'
                                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                            }`}
                                        >
                                            Credit Card
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setPaymentMethod('paypal')}
                                            className={`px-6 py-3 rounded-full transition-all duration-300 ${
                                                paymentMethod === 'paypal'
                                                    ? 'bg-gradient-to-r from-orange-500 to-orange-400 text-white shadow-lg'
                                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                            }`}
                                        >
                                            PayPal
                                        </button>
                                    </div>

                                    {/* Credit Card Form */}
                                    {paymentMethod === 'creditCard' && (
                                        <div className="space-y-4">
                                            <input
                                                type="text"
                                                placeholder="Card Number"
                                                className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            />
                                            <div className="grid grid-cols-2 gap-4">
                                                <input
                                                    type="text"
                                                    placeholder="Expiry Date"
                                                    className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                                />
                                                <input
                                                    type="text"
                                                    placeholder="CVV"
                                                    className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                                />
                                            </div>
                                        </div>
                                    )}

                                    {/* PayPal Message */}
                                    {paymentMethod === 'paypal' && (
                                        <div className="bg-gray-100 p-4 rounded-lg">
                                            <p className="text-gray-600">
                                                You will be redirected to PayPal to complete your payment.
                                            </p>
                                        </div>
                                    )}
                                </div>

                                {/* Place Order Button */}
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-orange-500 to-orange-400 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-600 transition duration-300 shadow-lg"
                                >
                                    Place Order
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;