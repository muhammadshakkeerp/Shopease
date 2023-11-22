import { FC } from "react";
import { Cart, Error, Home, Login, PopupCard } from "./paths";
import { Footer, Header, ProductDatails } from "./paths";
import { Route, Routes } from "react-router-dom";
import { ProductDetailsProps } from "./assets/types";
import NestedHoverNavlink from "./components/NestedHoverNavlink";

const App: FC<ProductDetailsProps> = () => {
  return (
    <div className="">
      <PopupCard />
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
        <Route path="/cart" element={<Cart />} />
        <Route path="/*" element={<Error />} />
        <Route path="/nested" element={<NestedHoverNavlink />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
