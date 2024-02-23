import { lazy } from "react";
const Home = lazy(() => import("../pages/Home"));
const Account = lazy(() => import("../pages/Accout"));
const Cart = lazy(() => import("../pages/Cart"));
const ProductsGroup = lazy(() => import("../pages/ProductsGroup"));
const NestedHoverNavlink = lazy(
  () => import("../components/NestedHoverNavlink")
);
const ProductGallery = lazy(() => import("../pages/ProductGallery"));
const ProductDatails = lazy(() => import("../components/ProductDetails"));
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
  ProductDatails,
  Checkout,
  PaymentSuccessful,
  ChatBot,
};
