import { FC } from "react";
import { Cart, Error, Home, Login } from "./paths";
import { Footer, Header, ProductDatails } from "./paths";
import { Route, Routes } from "react-router-dom";
import { ProductDetailsProps } from "./assets/types";

const App: FC<ProductDetailsProps> = () => {
  return (
    <div className="">
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
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
