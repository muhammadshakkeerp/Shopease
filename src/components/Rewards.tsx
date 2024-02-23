// Rewards.tsx
import React from 'react';

const Rewards: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-4">Rewards & Offers</h1>

      {/* Reward Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Sample Reward Card */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-semibold mb-2">Reward Title</h2>
          <p className="text-gray-600 mb-4">Description of the reward goes here.</p>
          <div className="flex justify-between items-center">
            <span className="text-green-500 font-semibold">50% Off</span>
            <button className="px-3 py-1 bg-blue-500 text-white rounded-md">
              Claim
            </button>
          </div>
        </div>

        {/* Add more Reward Cards here */}
        {/* ... */}
      </div>
    </div>
  );
};

export default Rewards