import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { RowProductsProps } from "../assets/types";
import { removeToCart } from "../redux/actions/cartActions";

type CartProps = {
  items: RowProductsProps;
};

const Cart: React.FC<CartProps> = ({}) => {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">My Cart</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cart?.items?.length === 0 ? (
          <div className="h-[50vh] w-full flex justify-center items-center">
            empty
          </div>
        ) : (
          cart?.items?.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow">
              <button onClick={() => dispatch(removeToCart(product.id))}>
                X
              </button>
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-48 object-contain"
              />
              <div className="mt-2">
                <p className="text-lg font-semibold">{product.title}</p>
                <p className="text-gray-600">{`500`}</p>
              </div>
              {/* The closing div tag is missing */}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;
