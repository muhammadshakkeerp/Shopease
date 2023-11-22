import {
  CustomProductsRows,
  HeaderCatogory,
  HomeSlider,
  Offer,
} from "../paths";

type Props = {};

function Home({}: Props) {
  return (
    <div>
      <HomeSlider />
      <HeaderCatogory />
      <Offer />
      <CustomProductsRows />
      <CustomProductsRows />
    </div>
  );
}

export default Home;
