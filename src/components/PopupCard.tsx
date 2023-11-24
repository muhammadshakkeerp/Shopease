// PopupCard.tsx
import React, { useState, SetStateAction } from "react";

interface PopupCardProps {
  //   onClose: () => void;
  setShowPopUp: React.Dispatch<SetStateAction<boolean>>;
}

export const PopupCard: React.FC<PopupCardProps> = ({ setShowPopUp }) => {
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const [isClose, setIsClose] = useState(false);

  const handleLike = () => {
    setLike(true);
    setDislike(false);
    setIsClose(true);
  };

  const handleDislike = () => {
    setLike(false);
    setDislike(true);
    setIsClose(true);
  };
  
  const onClose = () => {
    setIsClose(true);
    localStorage.setItem("isPopupClosed", "true");
    setShowPopUp(false);
  };

  return (
    <div
      className={`  fixed  bottom-4 right-4 flex items-center justify-center footer-bg bg-opacity-50  z-50 ${
        isClose && "hidden"
      }`}
    >
      <button
        className="mt-4 px-2 py-1 bg-blue-500/20 text-white rounded-md focus:outline-none absolute -top-2 right-2"
        onClick={onClose}
      >
        X
      </button>
      <div className=" p-8 rounded-md shadow-md ">
        <p className="text-lg font-semibold mb-4 text-white">
          Like the new Design?
        </p>
        <div className="flex space-x-4">
          <button
            className={`px-4 py-2 rounded-md focus:outline-none hover:bg-blue-500 ${
              like ? "bg-green-500 text-white" : "bg-gray-300 text-gray-700"
            }`}
            onClick={handleLike}
            disabled={like || dislike}
          >
            Like
          </button>
          <button
            className={`px-4 py-2 rounded-md focus:outline-none hover:bg-red-500 ${
              dislike ? "bg-red-500 text-white" : "bg-gray-300 text-gray-700"
            }`}
            onClick={handleDislike}
            disabled={like || dislike}
          >
            Dislike
          </button>
        </div>
      </div>
    </div>
  );
};
