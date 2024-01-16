import {
  accountLinks,
  headerMoreBtnData,
  searchIcon,
} from "../assets/globalUtlities";
import logo from "/logo.png";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { CgDarkMode, CgProfile } from 'react-icons/cg'
import { MdOutlineMenu } from "react-icons/md";
import { BsCart } from 'react-icons/bs'
import { Link } from "react-router-dom";
import { RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { FC, useState } from "react";
import { toggleDarkMode } from "../redux/actions/DarkModeAction";

interface HeaderProps {
  toggleDarkMode: () => void

}

export const Header: FC<HeaderProps> = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch()
  const darkMode = useSelector((state: RootState) => state?.dark)
 

  const [showHoverItem, setShowHoverItem] = useState<boolean>(false);

  const handleDarkMode = () => {
    dispatch(toggleDarkMode())
  }
  return (
    <header className={`h-[50px] ${darkMode?.isEnabled ? " bg-darkModeBg text-darkModeText" : "bg-white"} md:h-[66px] flex items-center justify-around   md:flex-row  md:justify-between relative`}>
      {/* Logo */}

      <div className="flex items-center gap-4 md:gap-0">
        <MdOutlineMenu className="md:hidden" />
        <Link to={`/`} className=" z-30 top-[20px] left-[20px] md:left-0 md:flex flex-col">
          <img src={logo} alt="logo" className="w-[100px] md:w-[150px] object-none" />
          {/* <h4 className=" text-[#a1a09e] primary-font font-fam2 ">
          Explore<span className="text-[#ffc200]">Plus</span>
          <img src="" alt="" />
        </h4> */}
        </Link>
      </div>
      {/* Searchbar */}

      <div className="hidden md:flex items-center border-2 border-none w-full  md:w-2/3 bg-[#f0f5ff] h-[40px] px-2 rounded-md">
        <img
          src={searchIcon}
          alt="serach_icon"
          className="w-[22px] opacity-50 mr-2"
        />
        <input
          type="search"
          placeholder="Search for Products,Brands and More"
          className=" md:w-full border-none bg-transparent outline-none h-[40px]   text-[10px] md:text-[18px] placeholder-[#717478] pl-5"
        />
      </div>
      {/* third */}
      <div className="flex gap-3 lg:gap-0 items-center justify-evenly w-[40%] lg:w-1/3 font-fam">
        <button className="hidden md:flex lg:ml-2 lg:gap-2">
          <AiOutlineHome />
          <p className="hidden lg:block text-sm ">Become a Seller</p>
        </button>
        <div className="flex items-center gap-4">
          {/* Login  icon */}
          <div
            className="flex p-2 cursor-pointer group primary-bg-h rounded-md relative"
            onMouseEnter={() => setShowHoverItem(true)}
            onMouseLeave={() => setShowHoverItem(false)}
          > 
            <CgProfile className=" group-hover:text-white" />
            <button className="hidden lg:block text-sm">Login</button>
            <span className="hidden lg:block transition-transform transform-gpu  ease-in-out group-hover:rotate-180">
              <BiChevronDown />
            </span>
            {showHoverItem && (
              <ul className={`hidden md:flex flex-col primary-font font-[400] absolute z-50 ${darkMode ? "bg-darkModeBg text-darkModeText" : "bg-white"} md:px-[10px] md:py-[15px] md:w-[200px] md:top-[40px] md:right-[20px]`}>
                {accountLinks?.map((item) => (
                  <Link key={item.id} to={`/account/${item.id}`}>
                    <li key={item.id} className="py-1 ">
                      {item.value}
                    </li>
                  </Link>
                ))}
              </ul>
            )}
          </div>
          {/* Cart icon */}
          <Link to={"/cart"}>
            <div className="relative ">
              <BsCart />
              <span className="absolute bg-red-500/50 px-1 rounded-full -top-4 -right-2">
                {cart?.cart?.length > 0 && cart?.cart?.length}
              </span>
            </div>
          </Link>
        </div>
        <button onClick={handleDarkMode}><CgDarkMode /></button>
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
