import React, { useEffect, useState } from "react";
import cvImg from "../../assets/templates/cv-template-04.png";
import cvImg3 from "../../assets/templates/cv-template-03.png";
import SelectResumeTemplateCard from "./SelectResumeTemplateCard";
import { GET_RESUME_TEMP } from "../../constants/apis.js";
import axios from "axios";
import { resumeSuccess } from "../../Redux/Slices/resumeSlices";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function SelectResumeTemplateModal({ activeTab, setIsWebsiteResumeTitleModal }) {
  console.log(activeTab);
  const dispatch = useDispatch()
  const [freeResumeTemplate, setFreeResumeTemplate] = useState([]);
  console.log(freeResumeTemplate)
  const apiCalling = async () => {
    try {
      const res = await axios.get(`/api${GET_RESUME_TEMP}`);
      console.log(res);
      // console.log(res.data);

      setFreeResumeTemplate(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    apiCalling();
  }, []);

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
        ? freeResumeTemplate.map((data, i) => (
          <Link to={"/app/resume-details"} onClick={dispatch(resumeSuccess({ templateId: data._id }))}>
            <SelectResumeTemplateCard
            
              key={i}
              data={data}
              activeTab={activeTab}
              setIsWebsiteResumeTitleModal={setIsWebsiteResumeTitleModal}
            />
            </Link>
          ))
        : activeTab == "premium"
        ? premium.map((data, i) => (
            <SelectResumeTemplateCard
              key={i}
              data={data}
              route={"/app/resume-details"}
              activeTab={activeTab}
            />
          ))
        : activeTab == "my" &&
          my?.map((data, i) => (
            <SelectResumeTemplateCard
              key={i}
              data={data}
              route={"/app/resume-details"}
              activeTab={activeTab}
            />
          ))}
    </div>
  );
}

export default SelectResumeTemplateModal;
