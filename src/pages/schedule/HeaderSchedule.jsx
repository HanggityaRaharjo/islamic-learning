import React from "react";

const HeaderSchedule = () => {
  return (
    <div className="h-36 text-white bg-[#1cae81] p-5 rounded-b-3xl relative overflow-hidden">
      {/* Bubble */}
      <div className="absolute right-20 top-8 w-16 h-16 bg-[#22b386] rounded-full"></div>
      <div className="absolute -right-2 -top-10 w-32 h-32 bg-[#2cba8d] rounded-full"></div>
      {/* End Bubble */}
      <div className="my-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
          />
        </svg>
      </div>
      <div className="flex justify-between items-end relative z-50 mb-3">
        <h4 className="text-2xl font-bold ">Jadwal</h4>
      </div>
    </div>
  );
};

export default HeaderSchedule;
