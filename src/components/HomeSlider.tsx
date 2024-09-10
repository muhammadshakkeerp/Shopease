import { useState, useEffect } from "react";
import {
  bannerImg1,
  bannerImg2,
} from "../assets/globalUtlities";

const HomeSlider = () => {
  const bannerImgArray = [
    bannerImg1,
    bannerImg2,
  ];
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    // Modulo Operation algorithms used here
    // Cycling Through Images Using Modulo
    const timer = setInterval(() => {
      // (1+1) % 5 =
      const nextImg = (currentImg + 1) % bannerImgArray.length;
      setCurrentImg(nextImg);
    }, 2000);
    return () => clearInterval(timer);
  }, [bannerImgArray.length, currentImg]);

  return (
    <div className=" transition-all ease-linear transform-gpu">
      <img src={bannerImgArray[currentImg]} alt="banner_img" className="w-full" />
    </div>
  );
};

export { HomeSlider };
