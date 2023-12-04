import {
  cartIcon,
  headerMoreBtnData,
  searchIcon,
  userIcon,
} from "../assets/globalUtlities";
import logo from "/logo.png";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import { useState } from "react";

export function Header() {
  const cart = useSelector((state: RootState) => state.cart);
  const logginArray = [
    { id: "newCustomer", value: "New Customer" },
    { id: "profile", value: "Profile" },
    { id: "flipkartPlus", value: "Flipkart pluse zone" },
    { id: "orders", value: "Orders" },
    { id: "wishlist", value: "WishList" },
    { id: "rewards", value: "Rewards" },
    { id: "gitcards", value: "Git Cards" },
  ];

  const [showHoverItem, setShowHoverItem] = useState<boolean>(false);
  return (
    <header className="h-[104px]  bg-[#2874f0] md:bg-white md:h-[66px] flex items-center justify-around  flex-col-reverse md:flex-row  md:justify-between relative">
      {/* Logo */}
      <Link to={`/`} className="absolute z-30 top-[20px] left-[20px] md:left-0 md:flex flex-col">
        <img src={logo} alt="logo" className="w-[100px] md:w-[150px]" />
        {/* <h4 className=" text-[#a1a09e] primary-font font-fam2 ">
          Explore<span className="text-[#ffc200]">Plus</span>
          <img src="" alt="" />
        </h4> */}
      </Link>
      {/* Searchbar */}
      <div className="flex items-center border-2 border-none w-full md:w-[600px] bg-[#f0f5ff] h-[40px] px-2 rounded-md">
        <img
          src={searchIcon}
          alt="serach_icon"
          className="w-[22px] opacity-50 mr-2"
        />
        <input
          type="text"
          placeholder="Search for Products,Brands and More"
          className=" border-none bg-transparent outline-none h-[40px]  md:w-[570px] text-[10px] md:text-[18px] placeholder-[#717478] pl-5"
        />
      </div>
      {/* third */}
      <div className="flex gap-3 lg:gap-0 items-center justify-between w-[40%] lg:w-[540px] font-fam">
        <button className="hidden md:flex lg:ml-2 lg:gap-2">
          <AiOutlineHome />
          <p className="hidden lg:block primary-font">Become a Seller</p>
        </button>
        <Link
          to={"/login"}
          className="flex p-2 cursor-pointer group primary-bg-h rounded-md relative"
          onMouseEnter={() => setShowHoverItem(true)}
          onMouseLeave={() => setShowHoverItem(false)}
        >
          <img src={userIcon} alt="user" className=" group-hover:text-white" />
          <button className="hidden lg:block primary-fon">Login</button>
          <span className="hidden lg:block transition-transform transform-gpu  ease-in-out group-hover:rotate-180">
            <BiChevronDown />
          </span>
          {showHoverItem && (
            <ul className="hidden md:flex flex-col primary-font font-[400] absolute z-50 bg-white md:px-[10px] md:py-[15px] md:w-[200px] md:top-[40px] md:right-[20px]">
              {logginArray?.map((item) => (
                <Link key={item.id} to={`/${item.id}`}>
                  <li key={item.id} className="py-1 ">
                    {item.value}
                  </li>
                </Link>
              ))}
            </ul>
          )}
        </Link>

        <Link to={"/cart"}>
          <div className="relative ">
            <img src={cartIcon} alt="cart_icon" />
            <span className="absolute bg-red-500/50 px-1 rounded-full -top-4 -right-2">
              {cart?.cart?.length > 0 && cart?.cart?.length}
            </span>
          </div>
        </Link>

        <div className="hidden md:flex group">
          <button>
            <PiDotsThreeVerticalBold />
          </button>
          <ul className="hidden group-hover:flex flex-col w-48  absolute  right-0 top-10 bg-white border border-blue-800 z-50">
            {headerMoreBtnData?.map((data) => (
              <li
                key={data}
                className=" border primary-font px-2 py-1 md:px-5 md:py-5"
              >
                {data}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
