import { ProductCard } from "../paths";
import { AiOutlineRight, rowProductsData } from "../assets/globalUtlities";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef, WheelEvent, FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

interface RowProps {
  title: string | undefined;
  totalProductsDisplay: number  | undefined;
}

const CustomProductsRows: FC<RowProps> = ({ title, totalProductsDisplay }) => {
  // Darkmode
  const darkMode = useSelector((state: RootState) => state?.dark)
  // INTERSECTION OBSERVER - LAZY LOADING
  const [inViewport, setInViewport] = useState(false);







  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "10px",
      threshold: .5, // Intersection ratio to trigger the callback
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInViewport(true);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => {
      if (galleryRef.current) {
        observer.unobserve(galleryRef.current);
      }
    };
  }, []);

  // SCROLLING PRODUCT WHEN MOUSE WHEEL (middle button)
  const galleryRef = useRef<HTMLDivElement>(null);
  const handleWheel = (e: WheelEvent<HTMLDivElement>) => {
    if (galleryRef.current) {
      console.log(galleryRef.current);
      galleryRef.current.scrollLeft += e.deltaY;
      // e.preventDefault();  
    }
    // console.log(e);
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleScroll = (_e: React.UIEvent<HTMLDivElement>) => {
    // e.preventDefault(); // Prevent the default window scroll behavior when using touch events (optional)
  };
  return (
    <div className={`relative ${darkMode?.isEnabled ? "bg-darkModeBg text-darkModeText" : "bg-white"} m-2 `} onWheel={handleScroll} >
      <Link to="/productGallery">
        {
          <AiOutlineRight className="absolute right-0 top-2 bg-blue-500 text-white rounded-full text-[14px] md:text-[20px] " />
        }{" "}
      </Link>
      {/* ROW TITLE */}
      <h5 className="primary-font text-color font-bold md:text-[20px] md:py-5 md:px-5">
        {title}
      </h5>
      <div
        className={`flex gap-2 w-full overflow-x-auto scroll-smooth ${inViewport ? "fade-in" : "opacity-0"
          }`}
        onWheel={handleWheel}
        ref={galleryRef}
      >
        {rowProductsData?.slice(0, totalProductsDisplay).map((product, index) => (
          <ProductCard
            index={index}
            key={index}
            product={{
              id: product.id,
              title: product.title,
              img: product.img,
              price: product.price,
              offerAvailable: false,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export { CustomProductsRows };
