import React from "react";

const ActivityCard = ({
  title,
  arabic,
  date,

  color,
  backgroundColor,
  description,
}) => {
  return (
    <div className="shadow-md rounded-xl p-2 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div
          className="p-1 py-3 rounded-md font-semibold"
          style={{ backgroundColor: backgroundColor, color: color }}
        >
          {arabic}
        </div>
        <div>
          <h5 className="text-sm font-semibold">{title}</h5>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
      </div>
      <div className="text-xs">{date}</div>
    </div>
  );
};

export default ActivityCard;
