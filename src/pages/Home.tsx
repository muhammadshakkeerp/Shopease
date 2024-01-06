import { FC } from "react";
import { HeaderCategory } from "../assets/types";
import {
  Ad,
  CustomProductsRows,
  HeaderCatogory,
  HomeSlider,
  Offer,
} from "../paths";

interface headerCategoriesProps {
  headerCategories: HeaderCategory[]
}


const Home: FC<headerCategoriesProps> = () => {

  return (
    <div>
      <HomeSlider />
      <HeaderCatogory headerCategories={[]} />
      <Offer />

      <CustomProductsRows title={"Popular Products"} totalProductsDisplay={12} />
      <CustomProductsRows title={"Offers"} totalProductsDisplay={12} />

      <div className="flex flex-col-reverse xl:flex-row ">
        <div>
          <CustomProductsRows title={undefined} totalProductsDisplay={4} />
          <CustomProductsRows title={"Trending Products"} totalProductsDisplay={4} />
        </div>
        <div>
          <Ad />
        </div>
      </div>


      <CustomProductsRows title={"Popular Products"} totalProductsDisplay={12} />
      <CustomProductsRows title={"Offers"} totalProductsDisplay={12} />



      <div className="flex flex-col-reverse xl:flex-row ">
        <div>
          <CustomProductsRows title={undefined} totalProductsDisplay={4} />
          <CustomProductsRows title={"Trending Products"} totalProductsDisplay={4} />
        </div>
        <div>
          <Ad />
        </div>
      </div>


    </div>
  );
}

export default Home;
