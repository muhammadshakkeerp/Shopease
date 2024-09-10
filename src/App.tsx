import { FC, Suspense, useEffect, useState } from "react";
import { Footer, Header, PopupCard } from "./paths";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { DarkState } from "./redux/store";
import { Account, Cart, ChatBot, Checkout, Home, NestedHoverNavlink, PaymentSuccessful, ProductGallery, ProductsGroup, ProductDetails } from "./optimazation/AppOptimazation";
import { ProductProps } from "./types/productTypes";


const App: FC<ProductProps> = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const DarkMode = useSelector((state: { dark: DarkState }) => state?.dark)
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


  const productDetails: ProductProps = {
    id: 0,
    title: "",
    img: "",
    offerAvailable: false,
    price: 0,
    quantity: 0,
    cart: [],
    thumbImg: ""
  }

  return (
    <div className={`${DarkMode?.isEnabled ? "dark:bg-darkModeBg text-darkModeText" : "bg-gradient-primary from-primary-start to-parimary-end"} relative`}>
      {showPopUp && <PopupCard setShowPopUp={setShowPopUp} />}
      <Header toggleDarkMode={() => { }} />
      <Suspense fallback={<div className="text-center mt-10">Loading...</div>} >
        <Routes>
          <Route path="/" element={<Home headerCategories={[]} />} />
          <Route
            path="/productDetails/:id"
            element={
              <ProductDetails
                {...productDetails}        />
            }
          />
          <Route path="/productDetails/:id/checkout" element={<Checkout />}></Route>
          <Route path="/productDetails/:id/checkout/successfull" element={<PaymentSuccessful />}></Route>
          {/* Nested Routing... */}
          <Route path="/account/*" element={<Account />} />
          {/* END -- Nested Routing... */}

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
          <Route path="/productsGroup" element={<ProductsGroup />} />
          <Route path="/nested" element={<NestedHoverNavlink />} />
          <Route path="/productGallery" element={<ProductGallery />} />
        </Routes>

        <div className="fixed bottom-5 right-4 z-50">
          <ChatBot />
        </div>
      </Suspense >
      <Footer />
    </div >
  );
};

export default App;
