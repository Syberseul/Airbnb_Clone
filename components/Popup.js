import React, { useState } from "react";

function Popup() {
  const [popup, setPopup] = useState(true);
  const handleCloseBtn = () => {
    setPopup(false);
  };

  if (popup) {
    return (
      <div className="fixed w-[100%] h-[100%] z-50">
        <div className="absolute w-[400px] h-[450px] bg-gray-400 opacity-90 top-[50%] left-[50%] mt-[-15%] ml-[-10%]">
          <p className="font-bold text-3xl my-[1rem] ml-[1rem]">Instruction:</p>
          <div className="mx-[1.5rem]">
            <p className="py-[0.5rem] font-bold">
              - This is the demo version of Airbnb Clone
            </p>
            <p className="py-[0.5rem] font-bold">
              - Only top search bar is currently working
            </p>
            <p className="py-[0.5rem] font-bold">
              - Use customize API to show fixed search result
            </p>
            <p className="py-[0.5rem] font-bold">
              - Notice: the map on the search result page may not show properly,
              as vercel directly use source code from github, where .gitignore
              file protect the primary-key to be exposed
            </p>
          </div>
          <button
            className="mt-[1rem] ml-[30%] w-[10rem] h-[3rem] cursor-pointer bg-white outline-none rounded-full shadow-md font-bold hover:shadow-xl active:scale-90 transation duration-150"
            onClick={() => handleCloseBtn()}
          >
            Yes, I got it!
          </button>
        </div>
      </div>
    );
  }
  return null;
}

export default Popup;
