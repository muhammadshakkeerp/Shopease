import { FC, useEffect, useState } from "react";
import { Account, Cart, ProductGallery, Home, PopupCard, ProductsGroup, Checkout, PaymentSuccessful, } from "./paths";
import { Footer, Header, ProductDatails } from "./paths";
import { Route, Routes } from "react-router-dom";
import { ProductDetailsProps } from "./assets/types";
import NestedHoverNavlink from "./components/NestedHoverNavlink";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { AdminProductAddConsole } from "./components/addProducts/AdminProductAddConsole";

// graphQl apollo client

const App: FC<ProductDetailsProps> = () => {
  const [showPopUp, setShowPopUp] = useState(false);

  const DarkMode = useSelector((state: RootState) => state?.dark)
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
    <div className={`${DarkMode?.isEnabled ? "dark:bg-darkModeBg text-darkModeText" : "bg-white"}`}>
      {showPopUp && <PopupCard setShowPopUp={setShowPopUp} />}
      <Header toggleDarkMode={() => { }} />

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
              quantity={0}
              cart={[]}
            />
          }
        />
        <Route path="/productDetails/:id/checkout" element={<Checkout />}></Route>
        <Route path="/productDetails/:id/checkout/successfull" element={<PaymentSuccessful />}></Route>
        <Route path="/adminProductAddConsole" element={<AdminProductAddConsole/>} ></Route>
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
      <Footer />
    </div >
  );
};

export default App;
