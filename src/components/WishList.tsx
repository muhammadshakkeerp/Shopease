// WishList.tsx
import React ,{useState}from 'react';

interface WishlistItem {
    id: number;
    name: string;
    price: number;
    image: string;
  }
  
  export const Wishlist: React.FC = () => {
    const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([
      {
        id: 1,
        name: 'Product One',
        price: 20,
        image: 'product1.jpg',
      },
      {
        id: 2,
        name: 'Product Two',
        price: 30,
        image: 'product2.jpg',
      },
      // Add more items as needed
    ]);
  
    const removeFromWishlist = (itemId: number) => {
      const updatedWishlist = wishlistItems.filter(item => item.id !== itemId);
      setWishlistItems(updatedWishlist);
    };
  
    return (
      <div className="p-6">
        <h1 className="text-3xl font-semibold mb-4">Wishlist</h1>
        {wishlistItems.length === 0 ? (
          <p>Your wishlist is empty.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlistItems.map(item => (
              <div key={item.id} className="border p-4 rounded-lg">
                <img src={item.image} alt={item.name} className="w-full h-40 object-cover mb-4" />
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">${item.price}</p>
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md"
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
