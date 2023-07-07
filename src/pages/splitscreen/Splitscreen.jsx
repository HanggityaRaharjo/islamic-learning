import React from "react";
import { Link } from "react-router-dom";

const Splitscreen = () => {
  return (
    <div className="min-h-screen bg-[#1cae81] text-white flex justify-center items-center font-poppins">
      <div className="w-80">
        <div className="flex justify-center">
          <img src="screen-1.png" className="h-72" alt="" />
        </div>
        <div>
          <h3 className="text-3xl font-bold mb-5">
            Belajar dimanapun, Kapanpun
          </h3>
          <p className="text-gray-100 text-sm">Lorem ipsum dolor sit amet</p>
          <p className="text-gray-100 text-sm mb-5">
            consectetur adipisicing elit. Deleniti,
          </p>
          <Link to={"/home"}>
            <div className="py-2 border-b border-[#c0ed7c] active:scale-95 w-fit transition duration-150">
              Mulai Sekarang
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Splitscreen;
