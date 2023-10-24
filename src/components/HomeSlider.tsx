import { useState, useEffect } from "react";
import {
  bannerImg1,
  bannerImg2,
  bannerImg3,
  bannerImg4,
  bannerImg5,
} from "../assets/globalUtlities";

const HomeSlider = () => {
  const bannerImgArray = [
    bannerImg1,
    bannerImg2,
    bannerImg3,
    bannerImg4,
    bannerImg5,
  ];
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      // (1+1) % 5 =
      const nextImg = (currentImg + 1) % bannerImgArray.length;
      setCurrentImg(nextImg);
    }, 2000);
    console.log(currentImg)
    return () => clearInterval(timer);
  }, [currentImg]);

  return (
    <div className=" transition-all ease-linear transform-gpu">
      <img src={bannerImgArray[currentImg]} alt="banner_img"  />
    </div>
  );
};

export { HomeSlider };
