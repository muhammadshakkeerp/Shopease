import { FC, useEffect, useState } from "react";
import { Cart, Error, Home, Login, PopupCard } from "./paths";
import { Footer, Header, ProductDatails } from "./paths";
import { Route, Routes } from "react-router-dom";
import { ProductDetailsProps,  } from "./assets/types";
import NestedHoverNavlink from "./components/NestedHoverNavlink";

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
        <Route path="/" element={<Home />} />
        <Route
          path="/productDetails/:id"
          element={
            <ProductDatails id={0} title={""} img={""} offerAvailable={false} />
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
                  offerAvailable: false,
                },
              ]}
            />
          }
        />
        <Route path="/*" element={<Error />} />
        <Route path="/nested" element={<NestedHoverNavlink />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
