import { CustomProductsRows } from "./components/CustomProductsRows";
import { Header } from "./components/Header";
import { HeaderCatogory } from "./components/HeaderCatogory";
import { HomeBanner } from "./components/HomeBanner";
import { HomeSlider } from "./components/HomeSlider";
import { Offer } from "./components/Offer";
import { ProductDatails } from "./components/ProductDatails";
import { SearchBar } from "./components/SearchBar";
import { ProductCard } from "./components/ProductCard";
import { Footer } from "./components/Footer";
import { PopupCard } from "./components/PopupCard";
import { Rewards } from "./components/Rewards";
import { Profile } from "./components/Profile";
import { Wishlist } from "./components/WishList";
import { Orders } from "./components/Orders";
import { Login } from "./firebase/Login";
import { ProductGroupsTab } from "./components/ProductGroupsTab";
import { ProductFilterSiderbar } from "./components/ProductFilterSiderbar"
import { Ad } from "./components/Ad";
import { AccountSidebar } from "./components/AccountSidebar";
import { AccountDetails } from "./components/AccountDetails"
import { Checkout } from './components/Checkout'
import { PaymentSuccessful } from "./components/PaymentSuccesfull";

export {
  CustomProductsRows,
  Ad,
  Header,
  HeaderCatogory,
  HomeBanner,
  HomeSlider,
  Rewards,
  Profile,
  Wishlist,
  Orders,
  Login,
  Offer,
  ProductDatails,
  SearchBar,
  PopupCard,
  ProductCard,
  ProductGroupsTab,
  ProductFilterSiderbar,
  Checkout,
  AccountSidebar,
  PaymentSuccessful,
  AccountDetails,
  Footer,
};

// pages
import { default as Home } from "./pages/Home";
import { default as Cart } from "./pages/Cart";
import ProductsGroup from "./pages/ProductsGroup";
import { default as Error } from "./pages/Error";
import { default as ProductGallery } from "./pages/ProductGallery";
import Account from "./pages/Accout";

export { Home, Cart, Error, ProductGallery, ProductsGroup, Account };
