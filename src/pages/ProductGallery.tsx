import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, } from "react-router-dom";
import { DataState } from "../redux/store";
import { BiHeart, BiStar } from "react-icons/bi";
import { fetchData } from "../apollo/fetchData";

const ProductGallery = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: { fetchData: DataState }) => state.fetchData);
  // console.log(data);
  // console.log("Loading", data.loading);

  const [toggleFevourite, setToggleFevourite] = useState<string[]>([])

  const [inViewPort, setInViewport] = useState(false)
  const galleryRef = useRef<HTMLDivElement>(null)
  const { pathname } = useLocation();
  console.log("view port", inViewPort);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchData()(dispatch);

    // refetching when network is restored
    const handleOnline = async () => {
      await fetchData()(dispatch)
    }
    window.addEventListener("online", handleOnline)
    return () => window.addEventListener("online", handleOnline)
  }, [pathname, dispatch]);

  useEffect(() => {
    fetchData()(dispatch)
  }, [])


  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-10px",
      threshold: .5,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry => {
        if (entry.isIntersecting) {
          setInViewport(true)
          observer.unobserve(entry.target)
        }
      }))
    }, options)
    if (galleryRef.current) {
      observer.observe(galleryRef.current)
    }

    return () => {
      if (galleryRef.current) {
        observer.unobserve(galleryRef.current)
      }
    }
  }, [pathname])
  return (

    <div>
      {data && data.loading && <h3 className="text-xl text-center">Loading...</h3>}
      <div className={`flex flex-wrap items-center justify-center transition-opacity duration-500 ease-in-out ${inViewPort ? "opacity-100" : "opacity-0"}`} ref={galleryRef}>
        {data && data.result.map((item) => (
          <div key={item?.id} className="w-[250px] font-robo">
            <img className="w-[200px] h-[200px]" src={item?.image} alt={item?.title} />
            <h3>{item?.title}</h3>
            <h3>$ {item?.price}</h3>
            <p className="text-sm">{item?.rating?.count}</p>
            <p className="flex items-center">
              <BiStar />
              {item?.rating?.rate}
            </p>
            <button title="click to add your wishlist" type="button" onClick={() => setToggleFevourite((prev) => [...prev, item?.id])}>
              <BiHeart className={toggleFevourite?.includes(item.id) ? "text-yellow-500" : ""} />
            </button>
          </div>
        ))}
      </div>
      {data && data.error && <div>Error: {data.error}</div>}
    </div>
  );
};

export default ProductGallery;
