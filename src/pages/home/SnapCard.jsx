const SnapCard = ({
  title,
  arabic,
  proggess,
  date,
  position,
  color,
  backgroundColor,
}) => {
  let margin = position == "start" ? `ml-5` : position == "end" ? `mr-5` : null;

  return (
    <div className="snap-start shrink-0">
      <div
        className={` bg-white w-56 h-40 rounded-xl shadow-md p-6 ${margin} relative`}
      >
        <div
          className="absolute -top-4 font-bold p-1 rounded-md"
          style={{ color: color, backgroundColor: backgroundColor }}
        >
          {arabic}
        </div>
        <h6 className="font-semibold">{title}</h6>

        <div className="w-36 mb-4">
          <h4 className="text-xl font-semibold text-center text-primary translate-y-3">
            {proggess}%
          </h4>
          <progress
            className="progress progress-primary w-full"
            value={proggess}
            max="100"
          ></progress>
        </div>

        <div
          className="absolute bottom-0 right-0 font-bold p-1 rounded-tl-xl  h-16 flex items-center rounded-br-xl text-white"
          style={{ backgroundColor: color }}
        >
          {proggess == "100" ? (
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
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          ) : (
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </div>

        <p className="text-sm text-gray-400">{date}</p>
      </div>
    </div>
  );
};

export default SnapCard;
