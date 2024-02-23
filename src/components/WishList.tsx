// WishList.tsx
import React, { useState } from 'react';

interface WishlistItem {
  id: number;
  name: string;
  price: number;
  image: string;
}

 const Wishlist: React.FC = () => {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([
    {
      id: 1,
      name: 'Product One',
      price: 20,
      image: 'https://th.bing.com/th/id/OIP.6sPhq9sCxNc4cCq-XW70mwHaE8?rs=1&pid=ImgDetMain',
    },
    {
      id: 2,
      name: 'Product Two',
      price: 30,
      image: 'https://i1.wp.com/clippingpathsource.com/wp-content/uploads/2018/07/Product-photography-on-Wooden-Background.png?resize=960%2C581&ssl=1',
    },
    // Add more items as needed
  ]);

  const removeFromWishlist = (itemId: number) => {
    const updatedWishlist = wishlistItems.filter(item => item.id !== itemId);
    setWishlistItems(updatedWishlist);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-4 text-center">My Wishlist ({wishlistItems.length})</h1>
      {wishlistItems.length === 0 ? (
        <p className="text-center text-gray-600">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistItems.map(item => (
            <div key={item.id} className="border p-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
              <img src={item.image} alt={item.name} className="w-full h-40 object-cover mb-4 rounded-md" />
              <h3 className="text-lg font-semibold text-center">{item.name}</h3>
              <p className="text-gray-600 text-center">${item.price}</p>
              <button
                onClick={() => removeFromWishlist(item.id)}
                className="mt-2 w-full px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none"
              >
                Remove from Wishlist
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Wishlist