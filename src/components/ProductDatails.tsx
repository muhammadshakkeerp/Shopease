import { useState, FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { rowProductsData } from "../assets/globalUtlities";
import { ProductDetailsProps, RowProductsProps } from "../assets/types";


const ProductDatails: FC<ProductDetailsProps> = ({}) => {
  const { id } = useParams();
  const [showDetails, setShowDetials] = useState<RowProductsProps>([
    { id: 0, title: "", img: "", offerAvailable: false },
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
            </div>
          </div>
        ))}
    </div>
  );
};

export { ProductDatails };
