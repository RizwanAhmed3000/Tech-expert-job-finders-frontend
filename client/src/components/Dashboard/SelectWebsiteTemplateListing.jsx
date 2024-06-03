import React, { useEffect, useState } from "react";
import cvImg from "../../assets/website-template/Website-Template.jpg";
import cvImg3 from "../../assets/templates/cv-template-03.png";
import SelectResumeTemplateCard from "./SelectResumeTemplateCard";
import { GET_RESUME_TEMP } from "../../constants/apis.js";
import axios from "axios";
import SelectWebsiteTemplateCard from "./SelectWebsiteTemplateCard.jsx";
import { useSelector } from "react-redux";
import EnterWebsiteResumeTitleModal from "./EnterWebsiteResumeTitleModal.jsx";

function SelectWebsiteTemplateListing({ activeTab ,setIsChooseTempModalOpen, setIsSelectResumeModalOpen}) {
  // const { currentData } = useSelector((state) => state)

  // const [freeResumeTemplate, setFreeResumeTemplate] = useState([]);

  // console.log(freeResumeTemplate)
  // const apiCalling = async () => {
  //   try {
  //     const res = await axios.get(`/api${GET_RESUME_TEMP}`);
  //     // console.log(res?.data?.data);

  //     const { _id } = res?.data?.data;
  //     setFreeResumeTemplate(res?.data?.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   apiCalling();
  // }, []);

  const free = [
    {
      name: "BELA",
      src: cvImg,
    },
    {
      name: "Jhon",
      src: cvImg,
    },
    {
      name: "Salik",
      src: cvImg,
    },
  ];

  const premium = [
    {
      name: "Rizwan",
      src: cvImg,
    },
    {
      name: "Salik",
      src: cvImg,
    },
    {
      name: "Hassan",
      src: cvImg,
    },
  ];
  const my = [];
  return (
    <div className="grid grid-cols-3 gap-[1rem] place-items-center">
      {activeTab == "free"
        ? free.map((data, i) => (
            <SelectWebsiteTemplateCard
              key={i}
              data={data}
              route={"/app/resume-details"}
              activeTab={activeTab}
              setIsChooseTempModalOpen={setIsChooseTempModalOpen}
              setIsSelectResumeModalOpen={setIsSelectResumeModalOpen}
            />
          ))
        : activeTab == "premium"
        ? premium.map((data, i) => (
            <SelectWebsiteTemplateCard
              key={i}
              data={data}
              route={"/app/resume-details"}
              activeTab={activeTab}
            />
          ))
        : activeTab == "my" &&
          my?.map((data, i) => (
            <SelectWebsiteTemplateCard
              key={i}
              data={data}
              route={"/app/resume-details"}
              activeTab={activeTab}
            />
          ))}
      <button className="text-center border disabled:"></button>
      <button className="text-center border bg-theme-red px-6 py-3 text-white ">
        Load More...
      </button>
    </div>
  );
}

export default SelectWebsiteTemplateListing;
