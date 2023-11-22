import { Link } from "react-router-dom";

type ProductProp = {
  id:number
  title: string;
  img: string;
  offerAvailable: boolean;
};

const ProductCard = ({
  product,
  index,
}: {
  product: ProductProp;
  index: number;
}) => {
  return (
    <div className="w-[160px] h-[212px] border img-card-p flex-shrink-0 mx-2">
      <Link key={index} to={`/productDetails/${product.id}`}>
        <img src={product.img} alt="row-img" className="w-full " />
        <div className="flex flex-col justify-center items-center">
          <p className="font-[400]">{product.title}</p>
          <p className="font-semibold">offer</p>
        </div>
      </Link>
    </div>
  );
};

export { ProductCard };
