import { Link } from "react-router-dom";
import { ProductProps } from "../types/productTypes";

const ProductCard = ({
  product,
  index,
}: {
  product: ProductProps | undefined;
  index: number;
  refreshSite: boolean
}) => {
  return (
    <div className="w-[100px] md:w-[160px] h-[150px] md:h-[212px] border img-card-p flex-shrink-0 md:mx-2">
      <Link key={index} to={`/productDetails/${product?.id}`}>
        <img src={product?.thumbImg} alt="row-img" className="w-full " />
        <div className="flex flex-col justify-center items-center mt-2 md:mt-0">
          <div className="w-full flex justify-center">
            <p className="font-[400] primary-font text-color">{product?.title}</p>
          </div>
          <p className="font-semibold primary-font">{product?.title}</p>
        </div>
      </Link>
    </div>
  );
};

export { ProductCard };
