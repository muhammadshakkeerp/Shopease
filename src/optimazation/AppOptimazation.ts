import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const Account = lazy(() => import("../pages/Account"));
const Cart = lazy(() => import("../pages/Cart"));
const ProductsGroup = lazy(() => import("../pages/ProductsGroup"));
const NestedHoverNavlink = lazy(
  () => import("../components/NestedHoverNavlink")
);
const ProductGallery = lazy(() => import("../pages/ProductGallery"));
const ProductDetails = lazy(() => import("../components/ProductDetails"));
const Checkout = lazy(() => import("../components/Checkout"));
const PaymentSuccessful = lazy(() => import("../components/PaymentSuccesfull"));
const ChatBot = lazy(() => import("../components/chatbot/ChatBot"));

export {
  Home,
  Account,
  Cart,
  ProductsGroup,
  NestedHoverNavlink,
  ProductGallery,
  ProductDetails,
  Checkout,
  PaymentSuccessful,
  ChatBot,
};

// Account section optimization
const AccountDetails = lazy(() => import("../components/AccountDetails"));
const Login = lazy(() => import("../pages/Login"));

const Profile = lazy(() => import("../components/Profile"));
const Wishlist = lazy(() => import("../components/WishList"));
const Orders = lazy(() => import("../components/Orders"));
const Rewards = lazy(() => import("../components/Rewards"));

export { AccountDetails, Login, Profile, Wishlist, Orders, Rewards };
