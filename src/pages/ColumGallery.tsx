import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { DataState } from "../redux/store";
import { BiHeart, BiStar } from "react-icons/bi";
import { GraphProducts } from "../types/globalTypes";

const ColumGallery = () => {
  const dispatch = useDispatch();
  // const data = useSelector((state:{data:DataState}) => state.data.data.products);
  const data = useSelector((state: { data: DataState }) => state?.data.data);
  console.log(data);
  console.log("Loading", data?.loading);


  const [toggleFevourite, setToggleFevourite] = useState<number[]>([]);
  const [inViewPort, setInViewport] = useState(false)
  const galleryRef = useRef<HTMLDivElement>(null)
  const { pathname } = useLocation();
  console.log(toggleFevourite);

  useEffect(() => {
    window.scrollTo(0, 0);
    // const fetchDataAsync = async () => {
    //   await dispatch(fetchData());
    // }
    // fetchDataAsync();
  }, [pathname, dispatch]);

  useEffect(() => {
    // const fetchDataAsync = async () => {
    //   await dispatch(fetchData());
    // }
    // fetchDataAsync();
  }, []);


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
  }, [])
  return (

    <div>
      {data?.loading && <h3 className="text-xl text-center">Loading...</h3>}
      <div className="flex flex-wrap items-center justify-center" ref={galleryRef}
        style={{
          opacity: inViewPort ? 1 : 0,
          transition: "opacity .5s ease-in-out"
        }}  >

        {data?.map(
          (item: GraphProducts) => (
            <div key={item?.id} className="w-[250px] font-robo"
            >
              <img className="w-[200px] h-[200px]" src={item?.image} alt="img" />
              <h3>{item?.title}</h3>
              <h3>$ {item?.price}</h3>
              <p className="text-sm">{item?.rating?.count}</p>
              <p className="flex items-center">
                <BiStar />
                {item?.rating?.rate}
              </p>
              <button
                onClick={() => setToggleFevourite((prev) => [...prev, item?.id])}
              >
                <BiHeart
                  className={
                    toggleFevourite?.includes(item.id) ? "text-yellow-500" : ""
                  }
                />
              </button>
            </div>
          )
        )}
      </div>
      <div>{data?.error && "Error..."}</div>
    </div>

  );
};

export default ColumGallery;
