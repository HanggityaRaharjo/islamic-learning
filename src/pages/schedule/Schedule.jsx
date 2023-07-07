import Layout from "../../Layout";
import { HeaderLoader } from "../../components/loader";
import HeaderSchedule from "./HeaderSchedule";
const Schedule = () => {
  const scheduleData = [
    {
      day: "Senin",
      data: [
        { course: "Tartil", from: "", to: "", lecture: "" },
        { course: "Talaqqi", from: "", to: "", lecture: "" },
      ],
    },
    {
      day: "Selasa",
      data: [
        { course: "Tartil", from: "", to: "", lecture: "" },
        { course: "Talaqqi", from: "", to: "", lecture: "" },
      ],
    },
    {
      day: "Rabu",
      data: [
        { course: "", from: "", to: "", lecture: "" },
        { course: "", from: "", to: "", lecture: "" },
        { course: "", from: "", to: "", lecture: "" },
        { course: "", from: "", to: "", lecture: "" },
      ],
    },
    {
      day: "Kamis",
      data: [
        { course: "", from: "", to: "", lecture: "" },
        { course: "", from: "", to: "", lecture: "" },
        { course: "", from: "", to: "", lecture: "" },
        { course: "", from: "", to: "", lecture: "" },
      ],
    },
    {
      day: "Jum'at",
      data: [
        { course: "", from: "", to: "", lecture: "" },
        { course: "", from: "", to: "", lecture: "" },
        { course: "", from: "", to: "", lecture: "" },
        { course: "", from: "", to: "", lecture: "" },
      ],
    },
    {
      day: "Sabtu",
      data: [
        { course: "", from: "", to: "", lecture: "" },
        { course: "", from: "", to: "", lecture: "" },
        { course: "", from: "", to: "", lecture: "" },
        { course: "", from: "", to: "", lecture: "" },
      ],
    },
    {
      day: "Minggu",
      data: [
        { course: "", from: "", to: "", lecture: "" },
        { course: "", from: "", to: "", lecture: "" },
        { course: "", from: "", to: "", lecture: "" },
        { course: "", from: "", to: "", lecture: "" },
      ],
    },
  ];
  return (
    <>
      <Layout>
        {/* <HeaderLoader /> */}
        <HeaderSchedule />
        <div className="p-5">
          <ul className="steps steps-vertical w-full">
            <li className="step step-primary">
              <CardSchedule day="Senin" />
            </li>
            <li className="step step-primary">
              <CardSchedule day="Selasa" />
            </li>
            <li className="step step-primary">
              <CardSchedule day="Rabu" />
            </li>
            <li className="step step-primary">
              <CardSchedule day="Kamis" />
            </li>
            <li className="step step-primary">
              <CardSchedule day="Jum'at" />
            </li>
            <li className="step step-primary">
              <CardSchedule day="Sabtu" />
            </li>
            <li className="step step-primary">
              <CardSchedule day="Minggu" />
            </li>
          </ul>
        </div>
      </Layout>
    </>
  );
};

const CardSchedule = () => {
  return (
    <div className="shadow-md p-2 text-sm text-left rounded-lg w-full">
      <h4 className="text-xl font-semibold ">Senin</h4>
      <p>asd</p>
    </div>
  );
};

export default Schedule;
