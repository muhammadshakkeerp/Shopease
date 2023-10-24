import { ProductCard } from "../paths";
import { AiOutlineRight,  rowProductsData } from "../assets/globalUtlities";
import { Link } from "react-router-dom";
const CustomProductsRows = () => {
  return (
    <div className="relative">
      <Link to="">{<AiOutlineRight className="absolute right-0 -top-3 bg-blue-500 text-white rounded-full " />} </Link>
      <h5>Products Row Catogory</h5>
      <div className="flex gap-2 w-full overflow-x-scroll " >
        
        {rowProductsData?.map((product,index) => (
          <ProductCard index={index} key={index}
            product={{
              title: product.title,
              img: product.img,
              offerAvailable: false,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export { CustomProductsRows };
