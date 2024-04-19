import { FC, } from "react";
import { HeaderCategory } from "../assets/types";
import {
  Ad,
  CustomProductsRows,
  HeaderCatogory,
  HomeSlider,
  Offer,
} from "../paths";
import { useSelector } from "react-redux";
import { AxiosFetchState } from "../redux/store";

interface headerCategoriesProps {
  headerCategories: HeaderCategory[]
}

const Home: FC<headerCategoriesProps> = () => {
  const axiosData = useSelector((state: AxiosFetchState) => state)
  console.log(axiosData.categoryMap)
  return (
    <div>
      <HomeSlider />
      <HeaderCatogory headerCategories={[]} />
      <Offer />
      <CustomProductsRows title={"Popular Products"} starProducts={0} endProducts={12} />
      <CustomProductsRows title={"Offers"} starProducts={0} endProducts={12} />
      <div className="flex flex-col-reverse xl:flex-row ">
        <div>
          <CustomProductsRows title={undefined} starProducts={0} endProducts={4} />
          <CustomProductsRows title={"Trending Products"} starProducts={0} endProducts={4} />
          <CustomProductsRows title={undefined} endProducts={4} starProducts={0} />
          <CustomProductsRows title={"Best Sellers"} endProducts={4} starProducts={0} />
        </div>
        <div>
          <Ad />
        </div>
      </div>
      <CustomProductsRows title={"Popular Products"} starProducts={0} endProducts={12} />
      <CustomProductsRows title={"Offers"} starProducts={0} endProducts={12} />
      <div className="flex flex-col-reverse xl:flex-row ">
        <div>
          <CustomProductsRows title={undefined} starProducts={0} endProducts={4} />
          <CustomProductsRows title={"Trending Products"} starProducts={0} endProducts={4} />
          <CustomProductsRows title={"Featured Products"} endProducts={12} starProducts={0} />
          <CustomProductsRows title={"Top Rated Products"} endProducts={12} starProducts={0} />
          <div className="flex flex-col-reverse xl:flex-row ">
            <div>
              <CustomProductsRows title={undefined} endProducts={4} starProducts={0} />
              <CustomProductsRows title={"Limited Time Offers"} endProducts={4} starProducts={0} />
            </div>
            <div>
              <Ad />
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default Home;
