import { useState, FC, useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";
import { useParams } from "react-router-dom";
import { rowProductsData } from "../assets/globalUtlities";
import { ProductDetailsProps, RowProductsProps } from "../assets/types";
import { addToCart, removeToCart } from "../redux/actions/cartActions";

const ProductDatails: FC<ProductDetailsProps> = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [showDetails, setShowDetials] = useState<RowProductsProps>([
    { id:  0, title: "", img: "", offerAvailable: false },
  ]);
  const getProductDetails = () => {
    if (id) {
      const filteredItem = rowProductsData?.filter(
        (data) => data.id === parseInt(id)
      );
      console.log(filteredItem);
      setShowDetials(filteredItem || []);
    }
  };
  useEffect(() => {
    // window.resizeTo(0,0)
    getProductDetails();
  }, [id]);
  return (
    <div>
      {showDetails.length > 0 &&
        showDetails?.map((item) => (
          <div key={item.id}>
            <img src={item.img} alt={item.title} />
            <div>
              <h5>{item.title}</h5>
              <p>{item.offerAvailable && "Offer 40%"}</p>
              {/* // description */}
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                tempore ratione necessitatibus aperiam placeat facilis illum
                porro, sapiente laborum eius fugit qui neque iste, modi autem id
                dolores ullam quam?
              </p>
              <button
                className="px-4 py-2 rounded-md bg-yellow-500"
                onClick={() => dispatch(addToCart(item.id))}
              >
                Add to Cart
              </button>
              <button
                className="px-4 py-2 rounded-md bg-red-500"
                onClick={() => dispatch(removeToCart(item.id))}
              >
                Remove from Cart
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export { ProductDatails };
