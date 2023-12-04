import React from 'react';

export const Profile: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto py-8">
      {/* Personal Information Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
        <div className="border border-gray-200 p-4">
          <div className="mb-2">
            <label className="font-semibold">Name:</label>
            <p>John Doe</p>
          </div>
          <div className="mb-2">
            <label className="font-semibold">Email Address:</label>
            <p>johndoe@example.com</p>
          </div>
          <div className="mb-2">
            <label className="font-semibold">Mobile Number:</label>
            <p>+1234567890</p>
          </div>
          <div>
            <label className="font-semibold">Gender:</label>
            <p>Male</p>
          </div>
        </div>
      </section>

      {/* Account Settings Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Account Settings</h2>
        <div className="border border-gray-200 p-4">
          {/* Add your content for account settings here */}
          <p>Manage your addresses, edit profile information, and more.</p>
        </div>
      </section>

      {/* My Stuff Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">My Stuff</h2>
        <div className="border border-gray-200 p-4">
          {/* Add your content for my stuff here */}
          <p>Access your orders, reviews, wishlist, and saved UPI.</p>
        </div>
      </section>
    </div>
  );
};

