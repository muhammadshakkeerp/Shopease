import { useState, FC, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux/es/exports";
import { useParams } from "react-router-dom";
import { rowProductsData } from "../assets/globalUtlities";
import { ProductDetailsProps, } from "../assets/types";
import { addToCart, removeToCart } from "../redux/actions/cartActions";
import { CartState } from "../redux/store";
import { ProductProps } from "../types/globalTypes";

const ProductDatails: FC<ProductDetailsProps & CartState> = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [showDetails, setShowDetials] = useState<ProductProps[]>([]);
  // if click to add-to-card , then show counter ( +  or - )
  const cartProducts = useSelector((state:{cart:CartState}) => state.cart);
  console.log(cartProducts);
  const getProductDetails = () => {
    if (id) {
      const filteredItem = rowProductsData?.filter(
        (data) => data.id === parseInt(id)
      );
      setShowDetials(filteredItem || []);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getProductDetails();
  }, [id, cartProducts]);


  const isProductInCart = (productId: number) =>
    rowProductsData.some((item) => item.id === productId);
    

    // PICK TO REDUX 
    // const [showDetails, setShowDetails] = useState([]);
  const [userReview, setUserReview] = useState('');
  const [reviews, setReviews] = useState<string[]>([]); // Store reviews here

  const handleReviewSubmit = () => {
    // Add logic to submit user review
    setReviews([...reviews, userReview]); // Add user review to reviews array
    setUserReview(''); // Clear the input after submitting review
  };

  return (
    <div>
    {showDetails.length > 0 &&
      showDetails.map((item) => (
        <div key={item.id} className="flex items-center justify-between">
          <div className="flex flex-col items-start">
            <img src={item.img} alt={item.title} className="w-40 h-auto" />
            <div>
              <h5 className="text-lg font-bold">{item.title}</h5>
              {item.offerAvailable && <p className="text-sm text-green-500">Offer 40%</p>}
              <p className="text-sm text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam tempore
                ratione necessitatibus aperiam placeat facilis illum porro, sapiente laborum
                eius fugit qui neque iste, modi autem id dolores ullam quam?
              </p>
              <div className="flex items-center space-x-2">
                {cartProducts?.cart?.length > 0 && isProductInCart(item.id) ? (
                  <div>
                    <button className="px-3 py-1 rounded-md bg-blue-500 text-white">+</button>
                    <button className="px-3 py-1 rounded-md bg-red-500 text-white">-</button>
                  </div>
                ) : (
                  <button
                    className="px-4 py-2 rounded-md bg-yellow-500 text-white"
                    onClick={() => dispatch(addToCart(item.id))}
                  >
                    Add to Cart
                  </button>
                )}

                <button
                  className="px-4 py-2 rounded-md bg-red-500 text-white"
                  onClick={() => dispatch(removeToCart(item.id))}
                >
                  Remove from Cart
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold">User Reviews</h3>
            <div className="bg-gray-100 p-4 rounded-lg w-80">
              {reviews.length === 0 ? (
                <p className="text-gray-500">No reviews yet.</p>
              ) : (
                reviews.map((review, index) => (
                  <div key={index} className="border-b pb-2">
                    <p className="text-sm">{review}</p>
                  </div>
                ))
              )}
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Write your review..."
                  value={userReview}
                  onChange={(e) => setUserReview(e.target.value)}
                  className="w-full p-2 border rounded-md outline-none"
                />
                <button
                  onClick={handleReviewSubmit}
                  className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                  Submit Review
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
  </div>
  );
};

export { ProductDatails };
