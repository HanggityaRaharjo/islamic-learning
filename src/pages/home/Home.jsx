import { useEffect, useState } from "react";
import Layout from "../../Layout";
import {
  LoaderContent,
  LoaderCircle,
  ActivityCardLoader,
  SnapCardLoader,
  HeaderLoader,
} from "../../components/loader";
import SnapCard from "./SnapCard";
import HomeHeader from "./HomeHeader";
import ActivityCard from "./ActivityCard";

const Home = () => {
  const [snapData, setSnapData] = useState([]);
  const SnapCardData = [
    {
      title: "Tahsin",
      arabic: "تحسین",
      proggess: "100",
      date: "3 hari yang lalu",
      position: "start",
      color: "#ffa26b",
      backgroundColor: "#ffe8da",
    },
    {
      title: "Tartil",
      arabic: "ترتيل",
      proggess: "10",
      date: "1 hari yang lalu",
      position: "center",
      color: "#6676f8",
      backgroundColor: "#f0f2ff",
    },
    {
      title: "Talaqqi",
      arabic: "تلقي",
      proggess: "10",
      date: "4 hari yang lalu",
      position: "center",
      color: "#1cae81",
      backgroundColor: "#ddf3ec",
    },
    {
      title: "Bahasa Arab",
      arabic: "عربي",
      proggess: "100",
      date: "1 bulan yang lalu",
      position: "end",
      color: "#ff77af",
      backgroundColor: "#ffe1ed",
    },
  ];
  useEffect(() => {
    setTimeout(() => {
      setSnapData(SnapCardData);
    }, 3000);
  }, []);

  return (
    <Layout>
      <main>
        <div className="font-poppins w-full">
          {snapData.length != 0 ? <HomeHeader /> : <HeaderLoader />}
          {/* Pilihan Kelas */}
          <div className=" -mt-20">
            {/* Carousel Card */}
            <div className="flex snap-x snap-mandatory w-full mx:auto overflow-scroll py-5 gap-5">
              {snapData.length != 0 ? (
                snapData.map((item) => (
                  <SnapCard
                    title={item.title}
                    arabic={item.arabic}
                    proggess={item.proggess}
                    date={item.date}
                    position={item.position}
                    color={item.color}
                    backgroundColor={item.backgroundColor}
                  />
                ))
              ) : (
                <SnapCardLoader />
              )}
            </div>
            {/* End Carousel Card */}
          </div>
          {/* End Pilihan Kelas */}
          <div className="px-5">
            <div className="flex justify-between items-center">
              {snapData.length != 0 ? (
                <h4 className="text-2xl font-semibold mb-3">Kelas Hari ini </h4>
              ) : (
                <LoaderContent width={"250px"} height={"30px"} />
              )}

              <div className="flex flex-col justify-center items-center">
                {snapData.length != 0 ? (
                  <>
                    <div
                      className="radial-progress text-primary "
                      style={{ "--value": 70, "--size": "3rem" }}
                    >
                      70%
                    </div>
                    <p className="text-gray-300 text-sm">Progress</p>
                  </>
                ) : (
                  <>
                    <LoaderCircle size={"3rem"} />
                    <LoaderContent width={"50px"} height={"10px"} />
                  </>
                )}
              </div>
            </div>
            {snapData.length != 0 ? (
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
            ) : (
              <ActivityCardLoader />
            )}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
