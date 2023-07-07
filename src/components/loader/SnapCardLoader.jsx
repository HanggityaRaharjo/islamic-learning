import React from "react";

const SnapCardLoader = () => {
  return (
    <>
      <div className="snap-start shrink-0">
        <div
          className={` bg-white w-56 h-40 rounded-xl shadow-md p-6 ml-5 relative`}
        >
          <div className="absolute -top-4 font-bold p-1 rounded-md bg-gray-200 h-8 w-12"></div>
          <div className="font-semibold h-4 bg-gray-200 mb-5"></div>

          <div className="text-xl font-semibold text-center text-primary h-8 bg-gray-200 w-full mb-6"></div>

          <div className="absolute bottom-0 right-0 font-bold p-4 rounded-tl-xl h-16 flex items-center rounded-br-xl text-white w-5 bg-gray-200 w-12"></div>

          <div className="text-sm text-gray-400 w-36 h-4 bg-gray-200"></div>
        </div>
      </div>
      <div className="snap-start shrink-0">
        <div
          className={` bg-white w-56 h-40 rounded-xl shadow-md p-6 relative`}
        >
          <div className="absolute -top-4 font-bold p-1 rounded-md bg-gray-200 h-8 w-12"></div>
          <div className="font-semibold h-4 bg-gray-200 mb-5"></div>

          <div className="text-xl font-semibold text-center text-primary h-8 bg-gray-200 w-full mb-6"></div>

          <div className="absolute bottom-0 right-0 font-bold p-4 rounded-tl-xl h-16 flex items-center rounded-br-xl text-white w-5 bg-gray-200 w-12"></div>

          <div className="text-sm text-gray-400 w-36 h-4 bg-gray-200"></div>
        </div>
      </div>
    </>
  );
};

export default SnapCardLoader;
