// Orders.tsx
import React from 'react';

 const Orders: React.FC = () => {
  // Sample orders data
  const orders = [
    {
      id: '1',
      date: '2023-11-29',
      items: [
        { name: 'Product 1', price: 0 },
        { name: 'Product 2', price: 0 },
        // Additional item details
      ],
      total: 0,
      status: 'Delivered',
    },
    // More orders
  ];

  return (
    <div className="p-6">
      {/*  */}
      <div className=' w-full flex justify-center items-center flex-col'>
        <img src="/imgs/emptyOrders.png" alt="empty image" />
        <h4 className='font-bold'>You have no orders</h4>
        <button className='bg-blue-700 text-white p-1 rounded-sm primary-font font-semibold'>Start Shopping</button>
      </div>
      {/*  */}
      <h1 className="text-3xl font-semibold mb-4">Your Orders</h1>
      {orders.map((order) => (
        <div key={order.id} className="border border-gray-200 rounded p-4 mb-4">
          <div className="flex justify-between items-center mb-2">
            <p className="text-lg font-semibold">Order ID: {order.id}</p>
            <p className="text-sm text-gray-500">Date: {order.date}</p>
          </div>
          <div>
            {order.items.map((item, index) => (
              <div key={index} className="flex justify-between items-center mb-1">
                <p>{item.name}</p>
                <p>${item.price}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center mt-2">
            <p className="font-semibold">Total:</p>
            <p>${order.total}</p>
          </div>
          <p className="text-sm mt-1">Status: {order.status}</p>
        </div>
      ))}
    </div>
  );
};


export default Orders