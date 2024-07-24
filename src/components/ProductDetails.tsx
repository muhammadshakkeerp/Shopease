import { useState, FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { Link, useParams } from "react-router-dom";
import { rowProductsData } from "../assets/globalUtlities";
// import { ProductDetailsProps, } from "../types/layoutTypes";
import { CartState, RootState } from "../redux/store";
import { ProductProps } from "../types/productTypes";
import { MdLocalOffer, MdLocationSearching, MdOutlineDelete } from "react-icons/md";
import { BsHeart } from "react-icons/bs";
import { RiEditBoxLine } from "react-icons/ri";
import { addToCart } from "../redux/actions/cartActions";

const ProductDatails: FC<ProductProps> = () => {
const { id } = useParams();
  const dispatch = useDispatch();
  const darkMode = useSelector((state: RootState) => state?.dark)

  const [showDetails, setShowDetials] = useState<ProductProps[]>([]);
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

  const [userReview, setUserReview] = useState('');
  const [reviews, setReviews] = useState<string[]>([]);

  const handleReviewSubmit = () => {
    if (userReview.trim() !== "") {
      setReviews([...reviews, userReview]);
    } // Add user review to reviews array
    setUserReview(''); // Clear the input after submitting review
  };

  return (
    <div >
      {showDetails.length > 0 &&
        showDetails.map((item) => (
          // ProductDetails section
          <div key={item.id} className={`flex items-center justify-center ${darkMode.isEnabled ? "bg-darkModeBg" : "bg-white"}`}>
            <div className="flex flex-col xl:flex-row items-start">
              {/* Left side with item details */}
              <div className="flex flex-col xl:flex-row mx-auto  shadow-lg rounded-lg overflow-hidden">
                <div className="xl:w-2/5 relative">
                  <img src={item.img} alt={item.title} className="w-full h-[60vh] xl:h-auto object-cover border rounded-lg" />
                  <span className="absolute top-4 right-4 p-2 rounded-full bg-primary">
                    <BsHeart className="" />
                  </span>
                  <div className="fixed w-full md:w-auto bottom-0 md:static md:flex gap-4 justify-center mt-2">
                    <button type="button" title="click to buy" className="bg-[#ff9f00] px-6 py-3 tracking-wider font-semibold w-1/2 md:w-auto text-white rounded-lg shadow-md transition duration-300 hover:bg-[#e69100]"
                      onClick={() => dispatch(addToCart(item.id))}
                    >
                      Add To Cart
                    </button>
                    <button type="button" title="click to buy" className="bg-[#fb641b] px-6 py-3 tracking-wider font-semibold w-1/2 md:w-auto text-white rounded-lg shadow-md transition duration-300 hover:bg-[#e64a19]">
                      <Link to={`/productDetails/${item.id}/checkout`} >
                        Buy Now

                      </Link>
                    </button>
                  </div>
                </div>

                <div className="max-w-3/5 mx-auto p-6">
                  <h1 className="text-3xl font-semibold mb-4">SAMSUNG Evo Plus 256 GB MicroSDXC Class 10</h1>
                  <p className="text-sm mb-2 text-gray-600 font-semibold">
                    <span className="h-2 bg-green-700 text-white rounded-md px-1 py-[2px]">4.4 ★</span> 4,41,04,486 Ratings & 9,287 Reviews
                  </p>
                  <div className={`p-4 rounded-lg mb-4 ${darkMode.isEnabled ? "bg-gray-700/50" : "bg-green-50"} `}>
                    <p className="text-green-800 text-sm font-semibold">Special price</p>
                    <p className="text-2xl text-gray-500 font-semibold mb-2">₹1,689 <span className="text-gray-500 text-sm line-through">₹4,999</span>  <span className="text-green-800" >66% off</span> </p>
                    <p className="text-sm text-gray-600 mt-2">Available offers:</p>
                    <div className="py-2">
                      <div className="flex items-center text-green-600 font-semibold">
                        <MdLocalOffer className="text-green-800 tex-[20px] xl:text-[40px]" />
                        <p>5% Cashback on ShopEase Axis Bank Card <span className="text-sm">(T&C)</span></p>
                      </div>
                      <div className="flex items-center text-green-600 font-semibold">
                        <MdLocalOffer className="text-green-800 tex-[20px] xl:text-[40px]" />
                        <p>10% off on HDFC Bank Credit Card EMI Transactions, up to ₹1,500 on orders of ₹7,500 and above
                          <span className="text-sm">(T&C)</span>
                        </p>
                      </div>
                      <div className="flex items-center text-green-600 font-semibold">
                        <MdLocalOffer className="text-green-800 tex-[20px] xl:text-[40px]" />
                        <p>Special Price: Get extra 29% off (price inclusive of cashback/coupon) <span className="text-sm">(T&C)</span>
                        </p>
                      </div>
                      <div className="flex items-center text-green-600 font-semibold">
                        <MdLocalOffer className="text-green-800 tex-[20px] xl:text-[40px]" />
                        <p>Combo Offer: Buy 2 items save ₹20; Buy 3-4 save ₹30; Buy 5+ save ₹50 <span className="text-sm">(See all products, T&C)</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className={`max-w-3/5 mx-auto p-6 ${darkMode?.isEnabled ? "bg-darkModeBg " : "bg-white"} rounded-lg mb-4 shadow-md border border-gray-200`}>
                    <div className="flex flex-col gap-4">
                      <div className="flex gap-2 items-center">
                        <h2 className={`text-lg font-semibold ${darkMode?.isEnabled ? "text-white" : "text-gray-900"}`}>10 Years Domestic Warranty</h2>
                        <p className="text-primary text-sm font-semibold cursor-pointer">Know More</p>
                      </div>
                      <div className="mb-4">
                        <h2 className={`text-lg font-semibold mb-2 ${darkMode?.isEnabled ? "text-white" : "text-gray-900"}`}>Delivery</h2>
                        <div className="flex items-center">
                          <MdLocationSearching className="text-primary" />
                          <input type="number" className={`outline-none bg-transparent font-semibold border-b-2 border-primary${darkMode.isEnabled ? 'text-white' : " text-gray-900"}`} placeholder="Enter Delivery Pincode" />
                          <p className="text-sm font-semibold text-primary cursor-pointer">Change</p>
                        </div>
                        <p className="text-sm text-gray-700 mt-1">Delivery by Tomorrow, Wednesday | Free ₹70? if ordered before 4:35 PM</p>
                        <p className="text-sm text-gray-700">View Details</p>
                      </div>
                      <div className="mb-4">
                        <h2 className={`text-lg font-semibold mb-2 ${darkMode?.isEnabled ? "text-white" : "text-gray-900"}`}>Capacity</h2>
                        <div className={`flex space-x-4 ${darkMode?.isEnabled ? "text-white" : "text-gray-900"}`}>
                          <p className="text-sm border-2 px-3 border-gray-300 ">64 GB</p>
                          <p className="text-sm border-2 px-3 border-gray-300 ">128 GB</p>
                          <p className="text-sm border-2 px-3 border-gray-300 ">256 GB</p>
                          <p className="text-sm border-2 px-3 border-gray-300 ">512 GB</p>
                        </div>
                      </div>
                      <div className="mb-4">
                        <h2 className="text-lg font-semibold mb-2 text-gray-900">Highlights</h2>
                        <ul className="list-disc list-inside text-sm text-gray-700">
                          <li>For Camera, Computer, Gaming Console, Mobile, Tablet</li>
                          <li>Capacity: 256 GB</li>
                          <li>MicroSDXC</li>
                          <li>Class 10</li>
                          <li>Read Speed: 130 MB/s</li>
                        </ul>
                      </div>
                      <div className="mb-4">
                        <h2 className="text-lg font-semibold mb-2 text-gray-900">Services</h2>
                        <p className="text-sm text-gray-700">10 Years Domestic Warranty</p>
                        <p className="text-sm text-gray-700">Cash on Delivery available?</p>
                        <p className="text-sm text-gray-700">Seller</p>
                        <p className="text-sm text-gray-700">MPDSLERetail4.9</p>
                        <p className="text-sm text-gray-700">7 Days Service Center Replacement/Repair?</p>
                        <p className="text-sm text-gray-700">GST invoice available?</p>
                      </div>
                    </div>
                  </div>

                  <div className="max-w-3/5 mx-auto p-6 bg-white rounded-lg shadow-md border border-gray-200">
                    <h2 className="text-2xl font-semibold mb-4 text-primary">Ratings & Reviews</h2>
                    <div className="border border-gray-300 rounded-lg p-4 mb-4">
                      <h3 className="text-lg font-semibold mb-2">Rate Product</h3>
                      <div className="flex items-center mb-2">
                        <p className="text-4xl font-bold mr-2 text-primary">4.4</p>
                        <p className="text-sm text-primary">★</p>
                      </div>
                      <p className="text-sm mb-2">1,04,486 Ratings & 9,287 Reviews</p>
                      <div className="flex items-center space-x-4">
                        <div>
                          <p className="text-sm text-primary">5★</p>
                          <p className="text-primary">64,106</p>
                        </div>
                        {/* <!-- Include similar blocks for 4★, 3★, 2★, and 1★ ratings --> */}
                      </div>
                    </div>
                    <div className="border border-gray-300 rounded-lg p-4">
                      {/* <!-- Review 1 --> */}
                      <div className="flex items-start mb-4">
                        <div className="flex-shrink-0">
                          <p className="text-2xl font-bold text-primary">4</p>
                          <p className="text-sm text-primary">Nice product</p>
                        </div>
                        <div className="ml-4">
                          <p className="text-sm text-primary">Product Received in Good condition. But...</p>
                          <p className="text-sm text-primary">Thank you for reading my Review.🙂</p>
                          <p className="text-sm text-primary">ShopEase Customer</p>
                          <p className="text-sm text-primary">Certified Buyer, Aduthurai</p>
                          <p className="text-sm text-primary">10 months ago</p>
                          <p className="text-primary">83158</p>
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
        <h3 className="text-lg font-semibold text-primary">User Reviews</h3>
        {/* Reviews section */}
        <div className="bg-white shadow-lg rounded-lg w-96">
          <div className="mt-4 p-4">
            <input
              type="text"
              placeholder="Write your review..."
              value={userReview}
              onChange={(e) => setUserReview(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md outline-none focus:border-primary"
            />
            <button type="submit"
              onClick={handleReviewSubmit}
              className="mt-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors duration-300"
            >
              Submit Review
            </button>
          </div>
          {/* Display reviews */}
          {reviews.length === 0 ? (
            <p className="text-gray-500 p-4">No reviews yet.</p>
          ) : (
            reviews.map((review, index) => (
              <div key={index} className="border-b border-gray-200 p-4 flex justify-between">
                <p className="text-sm">{review}</p>
                <span><button type="button" title="click to edit"><RiEditBoxLine /></button>
                  <button type="button" title="click to delete"><MdOutlineDelete /></button></span>
              </div>
            ))
          )}
          {/* Input for adding a review */}

        </div>
      </div>

    </div>
  );
};

export default  ProductDatails
