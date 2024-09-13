import { ProductCard } from "../paths";
import { AiOutlineRight, rowProductsData } from "../assets/globalUtlities";
import { Link } from "react-router-dom";
import { useState,FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { ProductProps } from "../types/productTypes";

interface RowProps {
  title: string | undefined;
  starProducts: number;
  endProducts: number | undefined;
  featuredProducts: ProductProps[] | undefined
}

const CustomProductsRows: FC<RowProps> = ({ title, endProducts, starProducts }) => {
  // Darkmode
  const darkMode = useSelector((state: RootState) => state?.dark)
  // refresh window when click home more allow btn 
  const [refreshSite, setRefreshSite] = useState(false)
  // INTERSECTION OBSERVER - LAZY LOADING
  // const [inViewport, setInViewport] = useState(false);

  // useEffect(() => {
  //   const options = {
  //     root: null,
  //     rootMargin: "10px",
  //     threshold: .5, // Intersection ratio to trigger the callback
  //   };

  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         setInViewport(true);
  //         observer.unobserve(entry.target);
  //       }
  //     });
  //   }, options);

  //   if (galleryRef.current) {
  //     observer.observe(galleryRef.current);
  //   }

  //   return () => {
  //     if (galleryRef.current) {
  //       observer.unobserve(galleryRef.current);
  //     }
  //   };
  // }, []);

  // SCROLLING PRODUCT WHEN MOUSE WHEEL (middle button)
  // const galleryRef = useRef<HTMLDivElement>(null);
  // const handleWheel = (e: WheelEvent<HTMLDivElement>) => {
  //   if (galleryRef.current) {
  //     console.log(galleryRef.current);
  //     galleryRef.current.scrollLeft += e.deltaY;
  //     // e.preventDefault();  
  //   }
  //   // console.log(e);
  // };

  return (
    <div className={`relative ${darkMode?.isEnabled ? "bg-darkModeBg text-darkModeText" : ""} m-2 `} >
      <Link to="/ProductGallery" >
        <button type="button" title="Display More products" onClick={() => setRefreshSite(true)}>
          {
            <AiOutlineRight className="absolute right-0 top-2 bg-blue-500 text-white rounded-full text-[14px] md:text-[20px] " />
          }{" "}
        </button>
      </Link>
      {/* ROW TITLE */}
      <h5 className="primary-font  font-bold md:text-[20px] md:py-2 md:px-5">
        {title}
      </h5>
      <div
        style={{
          scrollbarWidth: "thin",
        }}
        className={`flex justify-between gap-2 w-full overflow-x-auto scroll-smooth`
        }
      // onWheel={handleWheel}
      // ref={galleryRef}
      >
        {rowProductsData?.slice(starProducts, endProducts).map((product, index) => (
          <ProductCard
            index={index}
            key={index}
            product={{
              id: product.id,
              title: product.title,
              thumbImg: product.thumbImg,
              img: product.img,
              price: product.price,
              offerAvailable: false,
            }}
            refreshSite={refreshSite}
          />
        ))}
      </div>
    </div>
  );
};

export { CustomProductsRows };
