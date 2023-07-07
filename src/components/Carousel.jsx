import React from "react";

const Carousel = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-64 carousel rounded-box">
        <div className="carousel-item w-full">
          <img
            src="screen-1.png"
            className="w-full"
            alt="Tailwind CSS Carousel component"
          />
        </div>
        <div className="carousel-item w-full">
          <img
            src="screen-1.png"
            className="w-full"
            alt="Tailwind CSS Carousel component"
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
