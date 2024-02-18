import React from 'react';
import { Link } from 'react-router-dom';

export const PaymentSuccessful: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8 text-center bg-white rounded-lg shadow-lg">
            <h1 className="text-3xl font-semibold text-green-500 mb-4">Payment Successful</h1>
            <p className="text-lg mb-4">Your payment has been successfully processed.</p>
            <p className="text-lg mb-4">Thank you for shopping with us!</p>
            {/* Add any additional information or action buttons here */}
            <button className='bg-yellow-500 hover:bg-yellow-400 py-2 px-3 rounded-md'> <Link to={`/`}>Back to Home Page</Link></button>
        </div>

    );
};
