const AccountDetails: React.FC = () => {
    return (
        <div className="max-w-md mx-auto bg-white shadow-md rounded-md p-8 mt-8">
            <h1 className="text-2xl font-semibold mb-4">Personal Information</h1>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">First Name</label>
                <input type="text" className="mt-1 p-2 border rounded-md w-full" placeholder="Muhammad" />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                <input type="text" className="mt-1 p-2 border rounded-md w-full" placeholder="Shakkeer" />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Gender</label>
                <div className="mt-1">
                    <label className="inline-flex items-center">
                        <input type="radio" className="form-radio" name="gender" />
                        <span className="ml-2">Male</span>
                    </label>
                    <label className="inline-flex items-center ml-6">
                        <input type="radio" className="form-radio" name="gender" />
                        <span className="ml-2">Female</span>
                    </label>
                </div>
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" className="mt-1 p-2 border rounded-md w-full" placeholder="Your Email Address" />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
                <input type="tel" className="mt-1 p-2 border rounded-md w-full" placeholder="+919895315230" />
            </div>
            <div className="mb-4">
                <button className="bg-yellow-500 text-white px-4 py-2 rounded-md">Save Changes</button>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-2">FAQs</h2>
                {/* Insert FAQ content here */}
            </div>
        </div>
    );
};

export default AccountDetails