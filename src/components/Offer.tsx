import { useState, useEffect } from 'react';
import { offerImgs } from '../assets/globalUtlities';

export const Offer = () => {
  const [numImagesToShow, setNumImagesToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setNumImagesToShow(2); // Show 2 images on mobile devices
      } else if (window.innerWidth < 1280) {
        setNumImagesToShow(3); // Show 4 images on medium devices
      } else {
        setNumImagesToShow(4); // Show all images on extra-large devices
      }
    };

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Initial call to set the initial number of images
    handleResize();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex flex-wrap justify-center flex-shrink-0 flex-row relative z-30">
      {offerImgs?.slice(0, numImagesToShow).map((img, index) => (
        <div key={index} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 md:p-1">
          <img src={img.img} alt={img.img} className="w-full h-auto " />
        </div>
      ))}
    </div>
  );
};


