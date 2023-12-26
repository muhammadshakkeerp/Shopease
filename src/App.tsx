import { FC, useEffect, useState } from "react";
import { Cart,  ColumGallery,  Home, Login, Orders, PopupCard, ProductsGroup, Profile, Rewards, Wishlist } from "./paths";
import { Footer, Header, ProductDatails } from "./paths";
import { Route, Routes } from "react-router-dom";
import {  ProductDetailsProps } from "./assets/types";
import NestedHoverNavlink from "./components/NestedHoverNavlink";



// graphQl apollo client

const App: FC<ProductDetailsProps> = () => {
  const [showPopUp, setShowPopUp] = useState(false);

  // after 4 sec of initial loading
  useEffect(() => {
    const timeOut = setTimeout(() => {
      // check local storage boolean data
      // not show popup again whether  website is  opened in same computer
      const isPopupClosed = localStorage.getItem("isPopupClosed");
      if (!isPopupClosed) {
        setShowPopUp(true);
      }
    }, 4000);

    return () => clearTimeout(timeOut);
  }, []);

  return (
    <div className="">
      {showPopUp && <PopupCard setShowPopUp={setShowPopUp} />}
      <Header />
      <Routes>
        <Route path="/" element={<Home headerCategories={[]} />} />
        <Route
          path="/productDetails/:id"
          element={
            <ProductDatails
              id={0}
              title={""}
              img={""}
              offerAvailable={false}
              price={0}
              quantity={0} cart={[]}            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/cart"
          element={
            <Cart
              items={[
                {
                  id: 0,
                  title: "",
                  img: "",
                  price: 0,
                  quantity: 0,
                  offerAvailable: false,
                },
              ]}
            />
          }
        />
        {/* <Route path="/*" element={<Error />} /> */}
        <Route path="/productsGroup" element={<ProductsGroup/>}/>
        <Route path="/nested" element={<NestedHoverNavlink />} />
        <Route path="/productGallery" element={<ColumGallery />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
