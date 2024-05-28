import React from "react";
import cvImg from "../../assets/templates/cv-template-04.png";
import cvImg3 from "../../assets/templates/cv-template-03.png";
import SelectResumeTemplateCard from "./SelectResumeTemplateCard";
function SelectResumeTemplateModal({ activeTab }) {
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
      src: cvImg3,
    },
    {
      name: "Salik",

      src: cvImg3,
    },
    {
      name: "Hassan",
      src: cvImg3,
    },
  ];
  const my = [];
  return (
    <div className="grid grid-cols-3 gap-[1rem] place-items-center">
      {activeTab == "free"
        ? free.map((data, i) => (
            <SelectResumeTemplateCard
              data={data}
              route={"/app/resume-details"}
              key={i}
            />
          ))
        : activeTab == "premium"
        ? premium.map((data, i) => (
            <SelectResumeTemplateCard
              data={data}
              route={"/app/resume-details"}
              key={i}
            />
          ))
        : activeTab == "my" &&
          my?.map((data, i) => (
            <SelectResumeTemplateCard
              data={data}
              route={"/app/resume-details"}
              key={i}
            />
          ))}
    </div>
  );
}

export default SelectResumeTemplateModal;
