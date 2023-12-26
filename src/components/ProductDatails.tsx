import { useState, FC, useEffect } from "react";

import {  useSelector } from "react-redux/es/exports";
import { useParams } from "react-router-dom";
import { rowProductsData } from "../assets/globalUtlities";
import { ProductDetailsProps, } from "../assets/types";
import { CartState } from "../redux/store";
import { ProductProps } from "../types/globalTypes";
import { MdLocalOffer, MdLocationSearching } from "react-icons/md";

const ProductDatails: FC<ProductDetailsProps & CartState> = () => {
  const { id } = useParams();
  // const dispatch = useDispatch();

  const [showDetails, setShowDetials] = useState<ProductProps[]>([]);
  // if click to add-to-card , then show counter ( +  or - )
  const cartProducts = useSelector((state: { cart: CartState }) => state.cart);
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


  // const _isProductInCart = (productId: number) =>
  //   rowProductsData.some((item) => item.id === productId);


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
          // ProductDetails section
          <div key={item.id} className="flex items-center justify-between">
            <div className="flex flex-col xl:flex-row items-start">
              {/* Left side with item details */}
              <div className="flex flex-col xl:flex-row mx-auto">
                <img src={item.img} alt={item.title} className="w-full xl:w-2/5 h-[100vh] object-contain" />
                <div className="max-w-3/5 mx-auto p-6">
                  <h1 className="text-3xl font-semibold mb-4">SAMSUNG Evo Plus 256 GB MicroSDXC Class 10</h1>
                  <p className="text-sm mb-2 text-gray-600 font-semibold"> <span className="h-2 bg-green-700 text-white rounded-md px-1 py-[2px]">4.4 ★</span> 4,41,04,486 Ratings & 9,287 Reviews</p>
                  <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <p className="text-green-800 text-sm font-semibold">Special price</p>
                    <p className="text-2xl font-semibold mb-2">₹1,689 <span className="text-gray-500 text-sm line-through">₹4,999</span>  <span className="text-green-800" >66% off</span> </p>
                    {/* Add your available offers section */}
                    <p className="text-sm text-gray-600 mt-2">Available offers:</p>
                    <div className="bg-gray-100 py-4 rounded-lg mb-4">
                      <p className="text-green-600 font-semibold">Bank Offer</p>
                      <p className="mb-2 flex  items-start"><MdLocalOffer className="text-green-800 text-[40px]" /> 10% off on HDFC Bank Credit Card EMI Transactions, up to ₹1,500 on orders of ₹7,500 and above <span className="text-sm">(T&C)</span></p>
                      <p className="mb-2 flex  items-start"><MdLocalOffer className="text-green-800 text-[40px]" /> 5% Cashback on Flipkart Axis Bank Card <span className="text-sm">(T&C)</span></p>
                      <p className="mb-2 flex  items-start"><MdLocalOffer className="text-green-800 text-[40px]" /> Special Price: Get extra 29% off (price inclusive of cashback/coupon) <span className="text-sm">(T&C)</span></p>
                      <p className="mb-2 flex  items-start"><MdLocalOffer className="text-green-800 text-[40px]" /> Combo Offer: Buy 2 items save ₹20; Buy 3-4 save ₹30; Buy 5+ save ₹50 <span className="text-sm">(See all products, T&C)</span></p>
                    </div>

                    {/* Include your available offers content here */}
                  </div>

                  {/* delivery ,  ,  */}
                  <div className="max-w-3/5 mx-auto p-6 bg-gray-100 rounded-lg mb-4">
                    <div className=" flex gap-2 mb-4">
                      <h2 className="text-base   items-center text-black">10 Years Domestic Warranty <p className="text-primary text-sm font-semibold">Know More</p> </h2>

                    </div>
                    <div className="mb-4">
                      <h2 className="text-lg font-semibold mb-2">Delivery</h2>
                      <div className="flex items-center">
                        <MdLocationSearching />
                        <input type="number" className="outline-none bg-transparent font-semibold border-b-2 border-primary" placeholder="Enter Delivery Pincode" />
                        <p className="text-sm font-semibold text-primary">Change</p>
                      </div>

                      <p className="text-sm">Delivery byTomorrow, Wednesday | Free₹70? if ordered before 4:35 PM</p>
                      <p className="text-sm">View Details</p>
                    </div>
                    <div className="mb-4">
                      <h2 className="text-lg font-semibold mb-2">Capacity</h2>
                      <div className="flex space-x-4">
                        <p className="text-sm border-2 px-3 border-gray-300">64 GB</p>
                        <p className="text-sm border-2 px-3 border-gray-300">128 GB</p>
                        <p className="text-sm border-2 px-3 border-gray-300">256 GB</p>
                        <p className="text-sm border-2 px-3 border-gray-300">512 GB</p>
                      </div>
                    </div>
                    <div className="mb-4">
                      <h2 className="text-lg font-semibold mb-2">Highlights</h2>

                      <ul className="decoration-slice">
                        <li className="text-sm">For Camera, Computer, Gaming Console, Mobile, Tablet</li>
                        <li className="text-sm">Capacity: 256 GB</li>
                        <li className="text-sm">MicroSDXC</li>
                        <li className="text-sm">Class 10</li>
                        <li className="text-sm">Read Speed: 130 MB/s</li>
                      </ul>
                    </div>
                    <div className="mb-4">
                      <h2 className="text-lg font-semibold mb-2">Services</h2>
                      <p className="text-sm">10 Years Domestic Warranty</p>
                      <p className="text-sm">Cash on Delivery available?</p>
                      <p className="text-sm">Seller</p>
                      <p className="text-sm">MPDSLERetail4.9</p>
                      <p className="text-sm">7 Days Service Center Replacement/Repair?</p>
                      <p className="text-sm">GST invoice available?</p>
                    </div>
                  </div>
                  {/* specifications */}
                  <div className="max-w-3/5 mx-auto p-6">
                    <h2 className="text-2xl font-semibold mb-4">Specifications</h2>
                    <div className="border border-gray-300 rounded-lg p-4 mb-4">
                      <h3 className="text-lg font-semibold mb-2">General</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p><span className="font-semibold">Sales Package:</span> 1 Memory Card, Adapter</p>
                          <p><span className="font-semibold">Pack of:</span> 1</p>
                          <p><span className="font-semibold">Series:</span> Evo Plus</p>
                          <p><span className="font-semibold">Model Number:</span> MB-MC256KA/RU, MB-MC256KA/IN</p>
                          <p><span className="font-semibold">Color:</span> White</p>
                          <p><span className="font-semibold">Net Quantity:</span> 1</p>
                          <p><span className="font-semibold">Warranty:</span></p>
                          <p><span className="font-semibold">Covered in Warranty:</span> Manufacturing Defects</p>
                          <p><span className="font-semibold">Warranty Service Type:</span> Off-site</p>
                          <p><span className="font-semibold">Not Covered in Warranty:</span> Damaged Product will Not Covered in Warranty</p>
                          <p><span className="font-semibold">Warranty Summary:</span> 10 Years Domestic Warranty</p>
                          <p><span className="font-semibold">Domestic Warranty:</span> 10 Year</p>
                        </div>
                        <div>
                          
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* review and reating */}
                  <div className="max-w-3/5 mx-auto p-6">
                    <h2 className="text-2xl font-semibold mb-4">Ratings & Reviews</h2>

                    {/* <!-- Rate Product section --> */}
                    <div className="border border-gray-300 rounded-lg p-4 mb-4">
                      <h3 className="text-lg font-semibold mb-2">Rate Product</h3>
                      <div className="flex items-center mb-2">
                        <p className="text-4xl font-bold mr-2">4.4</p>
                        <p className="text-sm">★</p>
                      </div>
                      <p className="text-sm mb-2">1,04,486 Ratings & 9,287 Reviews</p>
                      <div className="flex items-center space-x-4">
                        <div>
                          <p className="text-sm">5★</p>
                          <p>64,106</p>
                        </div>
                        {/* <!-- Include similar blocks for 4★, 3★, 2★, and 1★ ratings --> */}
                      </div>
                    </div>

                    {/* <!-- Reviews section --> */}
                    <div className="border border-gray-300 rounded-lg p-4">
                      {/* <!-- Review 1 --> */}
                      <div className="flex items-start mb-4">
                        <div className="flex-shrink-0">
                          <p className="text-2xl font-bold">4</p>
                          <p className="text-sm">Nice product</p>
                        </div>
                        <div className="ml-4">
                          <p className="text-sm">Product Received in Good condition. But...</p>
                          <p className="text-sm">Thank you for reading my Review.🙂</p>
                          <p className="text-sm">Flipkart Customer</p>
                          <p className="text-sm">Certified Buyer, Aduthurai</p>
                          <p className="text-sm">10 months ago</p>
                          <p>83158</p>
                        </div>
                      </div>
                      {/* <!-- Include similar blocks for other reviews --> */}
                    </div>
                  </div>

                </div>
              </div>


            </div>


          </div>
        ))}

      {/* Right side with reviews and other details */}
      <div className="flex flex-col items-center">
        <h3 className="text-lg font-semibold">User Reviews</h3>
        {/* Reviews section */}
        <div className="bg-gray-100 p-4 rounded-lg w-80">
          {/* Display reviews */}
          {reviews.length === 0 ? (
            <p className="text-gray-500">No reviews yet.</p>
          ) : (
            reviews.map((review, index) => (
              <div key={index} className="border-b pb-2">
                <p className="text-sm">{review}</p>
              </div>
            ))
          )}
          {/* Input for adding a review */}
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
  );
};

export { ProductDatails };
