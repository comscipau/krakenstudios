import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ visible, onClose, src }) => {
  //   if (!visible) return null;

  return (
    <div
      className={`${
        visible
          ? "fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50"
          : "hidden"
      }`}
    >
      <div className="bg-white w-[18rem] h-[18rem] md:w-[35rem] md:h-[35rem] relative flex items-center justify-center">
        <div className="absolute -top-5 -right-5">
          <button
            onClick={onClose}
            className="border-[3px] border-gold text-white bg-black
            rounded-lg font-medium text-base p-2 mt-1"
          >
            <AiOutlineClose />
          </button>
        </div>

        <img src={src} alt="NFT" className="object-cover p-2" />
      </div>
    </div>
  );
};

export default Modal;
