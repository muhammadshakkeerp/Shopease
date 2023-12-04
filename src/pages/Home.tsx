import { FC } from "react";
import { HeaderCategory } from "../assets/types";
import {
  CustomProductsRows,
  HeaderCatogory,
  HomeSlider,
  Offer,
} from "../paths";

interface headerCategoriesProps {
  headerCategories: HeaderCategory[]
}


const  Home:FC<headerCategoriesProps >=()=> {

  return (
    <div>
      <HomeSlider />
      <HeaderCatogory headerCategories={[]} />
      <Offer />
      <CustomProductsRows title={"Popular Products"} />
      <CustomProductsRows title={"Offers"} />
      <CustomProductsRows title={undefined} />
      <CustomProductsRows title={"Trending Products"} />
      
      <CustomProductsRows title={"Popular Products"} />
      <CustomProductsRows title={"Offers"} />
      <CustomProductsRows title={undefined} />
      <CustomProductsRows title={"Trending Products"} />
      
    </div>
  );
}

export default Home;
