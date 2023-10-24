import React from "react";

// Sample product data
const products = [
  {
    id: 1,
    name: "Product 1",
    price: "$10.99",
    image: "product1.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    price: "$15.99",
    image: "product2.jpg",
  },
  // Add more product data
];

const Cart: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">My Cart</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.length === 0 && (
          <div className="h-[50vh] w-full flex justify-center items-center">
            empty
          </div>
        )}
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-contain"
            />
            <div className="mt-2">
              <p className="text-lg font-semibold">{product.name}</p>
              <p className="text-gray-600">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
