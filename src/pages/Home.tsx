import { FC, } from "react";
import { HeaderCategoryProps } from "../types/layoutTypes";
import {
  Ad,
  CustomProductsRows,
  HeaderCategory,
  HomeSlider,
  Offer,
} from "../paths";
import { useSelector } from "react-redux";
import { AxiosFetchState } from "../redux/store";
import { featuredProducts } from "../assets/globalUtlities";

interface headerCategoriesProps {
  headerCategories: HeaderCategoryProps[],

}

const Home: FC<headerCategoriesProps> = () => {
  const axiosData = useSelector((state: AxiosFetchState) => state)
  console.log(axiosData.categoryMap)
  return (
    <div>
      <HomeSlider />
      <HeaderCategory headerCategories={[]} />
      <Offer />
      <div>
        <CustomProductsRows title={"Popular Products"} starProducts={0} endProducts={12} featuredProducts={undefined} />
        <CustomProductsRows title={"Featured"} starProducts={0} endProducts={12} featuredProducts={featuredProducts} />
        <div className="flex flex-col-reverse xl:flex-row ">
          <div>
            <CustomProductsRows title={undefined} starProducts={0} endProducts={4} featuredProducts={undefined} />
            <CustomProductsRows title={"Best Sellers"} starProducts={0} endProducts={4} featuredProducts={undefined} />
          </div>
          <div>
            <Ad />
          </div>
        </div>
        <CustomProductsRows title={"Limited offers"} starProducts={0} endProducts={12} featuredProducts={undefined} />

        <div className="flex flex-col-reverse xl:flex-row ">
          <div>
            <CustomProductsRows title={"Top Rated"} endProducts={4} starProducts={0} featuredProducts={undefined} />
            <CustomProductsRows title={"Special Offers"} endProducts={4} starProducts={0} featuredProducts={undefined} />
          </div>
          <div>
            <Ad />
          </div>
        </div>

        <CustomProductsRows title={"Popular"} starProducts={0} endProducts={12} featuredProducts={undefined} />
        <CustomProductsRows title={"Popular"} starProducts={0} endProducts={12} featuredProducts={undefined} />
        <div className="flex flex-col-reverse xl:flex-row ">
          <div>
            <CustomProductsRows title={undefined} endProducts={4} starProducts={0} featuredProducts={undefined} />
            <CustomProductsRows title={"Limited Time Offers"} endProducts={4} starProducts={0} featuredProducts={undefined} />
          </div>
          <div>
            <Ad />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
