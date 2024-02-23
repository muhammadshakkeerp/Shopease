import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
// import { useHistory } from 'react-router-dom'; // Assuming you're using React Router for navigation

const Checkout: React.FC = () => {
    const { id } = useParams();
    console.log(id)

    // State for form fields
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-semibold mb-4">Checkout</h1>

            {/* Shipping Address */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Shipping Address</h2>
                <form>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Full Name"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 mb-2"
                    />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 mb-2"
                    />
                    <textarea
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Shipping Address"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 mb-2"
                    />
                </form>
            </div>

            {/* Payment Method */}
            <div className="mb-6">
                <Payment />
            </div>


            {/* Place Order Button */}
            <button
                className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors"
            >
                <Link to={`/productDetails/${id}/checkout/successfull`} > Place Order</Link>

            </button>
        </div>
    );
};

export const Payment: React.FC = () => {
    // const history = useHistory();

    // State for form fields
    const [paymentMethod, setPaymentMethod] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCVV] = useState('');


    // Function to render payment method form based on the selected payment method
    const renderPaymentMethodForm = () => {
        switch (paymentMethod) {
            case 'credit-card':
            case 'debit-card':
                return (
                    <div>
                        <input
                            type="text"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            placeholder="Card Number"
                            className="w-full border border-gray-300 rounded-md px-4 py-2 mb-2"
                        />
                        <input
                            type="text"
                            value={expiryDate}
                            onChange={(e) => setExpiryDate(e.target.value)}
                            placeholder="Expiry Date"
                            className="w-full border border-gray-300 rounded-md px-4 py-2 mb-2"
                        />
                        <input
                            type="text"
                            value={cvv}
                            onChange={(e) => setCVV(e.target.value)}
                            placeholder="CVV"
                            className="w-full border border-gray-300 rounded-md px-4 py-2 mb-2"
                        />
                    </div>
                );
            case 'paypal':
                return (
                    <div>
                        {/* PayPal form fields */}
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">

            {/* Shipping Address */}
            <div className="mb-6">
                <form>
                    {/* Shipping address form fields */}
                </form>
            </div>

            {/* Payment Method */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Payment Method</h2>
                <select
                    title='Add Your Payment here'
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-4 py-2"
                >
                    <option value="">Select Payment Method</option>
                    <option value="credit-card">Credit Card</option>
                    <option value="debit-card">Debit Card</option>
                    <option value="paypal">PayPal</option>
                </select>
            </div>

            {/* Payment Method Details */}
            <div className="mb-6">
                {renderPaymentMethodForm()}
            </div>
        </div>
    );
};
export default Checkout