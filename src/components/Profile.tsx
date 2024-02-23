import React from 'react';
import { FaUser, FaEnvelope, FaPhone, FaGenderless } from 'react-icons/fa';

const Profile: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto py-8 px-8 xl:px-0">
      {/* Personal Information Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
        <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4">
          <div className="flex items-center mb-2">
            <FaUser className="text-blue-500 mr-2" />
            <label className="font-semibold">Name:</label>
            <p className="ml-2">John Doe</p>
          </div>
          <div className="flex items-center mb-2">
            <FaEnvelope className="text-blue-500 mr-2" />
            <label className="font-semibold">Email Address:</label>
            <p className="ml-2">johndoe@example.com</p>
          </div>
          <div className="flex items-center mb-2">
            <FaPhone className="text-blue-500 mr-2" />
            <label className="font-semibold">Mobile Number:</label>
            <p className="ml-2">+1234567890</p>
          </div>
          <div className="flex items-center">
            <FaGenderless className="text-blue-500 mr-2" />
            <label className="font-semibold">Gender:</label>
            <p className="ml-2">Male</p>
          </div>
        </div>
      </section>

      {/* Account Settings Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Account Settings</h2>
        <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4">
          {/* Add your content for account settings here */}
          <p>Manage your addresses, edit profile information, and more.</p>
        </div>
      </section>

      {/* My Stuff Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">My Stuff</h2>
        <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4">
          {/* Add your content for my stuff here */}
          <p>Access your orders, reviews, wishlist, and saved UPI.</p>
        </div>
      </section>
    </div>
  );
};
export default Profile