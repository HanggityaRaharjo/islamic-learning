import React from "react";

const Home = () => {
  return (
    <>
      <div className="bg-white min-h-screen flex justify-center">
        <div className="font-poppins max-w-sm">
          <div className="h-64 text-white bg-[#1cae81] p-5 rounded-b-3xl relative overflow-hidden">
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
              <h4 className="text-2xl font-bold ">Semangat Belajar</h4>
              <div className="rounded-full w-10 h-10 bg-white overflow-hidden">
                <img
                  src="https://cdn3d.iconscout.com/3d/premium/thumb/man-avatar-6299539-5187871.png"
                  alt=""
                  className=""
                />
              </div>
            </div>
            <div>
              {/* <input
                type="text"
                className="p-3 w-full rounded-lg bg-white bg-opacity-10 text-sm text-white placeholder:text-gray-100 outline-none"
                placeholder="Cari apa yang ingin di pelajari . . ."
              /> */}
              <button
                onClick={() => window.my_modal_2.showModal()}
                className="w-full"
              >
                <div className="h-10 p-3 text-left  rounded-lg text-sm bg-white bg-opacity-10 w-full">
                  <p>Cari apa yang ingin di pelajari . . .</p>
                </div>
              </button>
              <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                  <input
                    type="text"
                    className="p-3 w-full rounded-lg text-sm  placeholder:text-gray-400 outline-none"
                    placeholder="Cari . . ."
                  />
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
            </div>
          </div>
          {/* Pilihan Kelas */}
          <div className=" -mt-20">
            {/* Carousel Card */}
            <div class="flex snap-x snap-mandatory w-full mx:auto overflow-scroll py-5 gap-5">
              <SnapCard
                title="Tahsin"
                arabic="تحسین"
                proggess="100"
                date="3 hari yang lalu"
                position="start"
                color="#ffa26b"
                backgroundColor="#ffe8da"
              />
              <SnapCard
                title="Tartil"
                arabic="ترتيل"
                proggess="10"
                date="1 hari yang lalu"
                position="center"
                color="#6676f8"
                backgroundColor="#f0f2ff"
              />
              <SnapCard
                title="Talaqqi"
                arabic="تلقي"
                proggess="10"
                date="4 hari yang lalu"
                position="center"
                color="#1cae81"
                backgroundColor="#ddf3ec"
              />
              <SnapCard
                title="Bahasa Arab"
                arabic="عربي"
                proggess="100"
                date="1 bulan yang lalu"
                position="end"
                color="#ff77af"
                backgroundColor="#ffe1ed"
              />
            </div>
            {/* End Carousel Card */}
          </div>
          {/* End Pilihan Kelas */}
          <div className="px-5">
            <div className="flex justify-between items-center">
              <h4 className="text-2xl font-semibold mb-3">Kelas Hari ini </h4>
              <div className="flex flex-col justify-center items-center">
                <div
                  className="radial-progress text-primary "
                  style={{ "--value": 70, "--size": "3rem" }}
                >
                  70%
                </div>
                <p className="text-gray-300 text-sm">Progress</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <ActivityCard
                title="Tahsin"
                arabic="تحسین"
                date="1 Jam yang lalu"
                color="#ffffff"
                backgroundColor="#1cae81"
                description="Lorem ipsum dolor sit amet."
              />
              <ActivityCard
                title="Tartil"
                arabic="تحسین"
                date="1 Jam yang lalu"
                color="#ffffff"
                backgroundColor="#ffa26b"
                description="Lorem ipsum dolor sit amet."
              />
              <ActivityCard
                title="Tartil"
                arabic="تحسین"
                date="1 Jam yang lalu"
                color="#ffffff"
                backgroundColor="#1cae81"
                description="Lorem ipsum dolor sit amet."
              />
              <ActivityCard
                title="Tartil"
                arabic="تحسین"
                date="1 Jam yang lalu"
                color="#ffffff"
                backgroundColor="#1cae81"
                description="Lorem ipsum dolor sit amet."
              />
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 w-full">
        <div className=" flex items-center justify-between h-16 relative bg-white shadow-[0_0px_50px_-15px_rgba(0,0,0,0.1)] px-6 ">
          <button className="p-1 text-[#1cae81] bg-[#ddf3ec] rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </button>
          <button className="p-1 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
              />
            </svg>
          </button>
          <div className="bg-gradient-to-t w-20 h-20 -translate-y-4 rounded-full flex justify-center items-center">
            <div className="bg-[#1cae81] w-14 h-14 rounded-full flex justify-center items-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
          </div>
          <button className="p-1 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
              />
            </svg>
          </button>
          <button className="p-1 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

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
    <div class="snap-start shrink-0">
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
          className="absolute bottom-0 right-0 font-bold p-1 rounded-tl-xl h-16 flex items-center rounded-br-xl text-white"
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

export default Home;
