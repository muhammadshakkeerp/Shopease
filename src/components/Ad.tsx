
export const Ad = () => {
  return (
    <div className="bg-gray-400 rounded-lg shadow-lg overflow-hidden md:flex xl:h-[80vh]">
      {/* Image Section */}
      <div className="md:w-1/2">
        <img
          src="https://via.placeholder.com/500x300"
          alt="Product"
          className="w-full h-auto md:h-full object-cover"
        />
      </div>

      {/* Text and Button Section */}
      <div className="p-4 md:w-1/2">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Exclusive Offer!
        </h2>
        <p className="text-gray-600 mb-4">
          Limited Time Only - Grab it now!
        </p>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition duration-300">
          Shop Now
        </button>
      </div>
    </div>
  );
};

