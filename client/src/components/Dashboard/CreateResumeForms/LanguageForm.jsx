import React, { useState } from "react";

// React Icons
import { ImBackward2, ImForward3 } from "react-icons/im";
import { TfiSave } from "react-icons/tfi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { resumeSuccess } from "../../../Redux/Slices/resumeSlices.js";
import Swal from "sweetalert2";

const LanguageForm = ({ setActiveTab }) => {
  const [languagesList, setLanguagesList] = useState([
    { language: "", level: "" },
    { language: "", level: "" },
    { language: "", level: "" },
  ]);

  console.log(languagesList);

  const dispatch = useDispatch();
  const resumeData = useSelector((state) => state.resume.resumeAllData);

  const handleLanguageChange = (index, key, value) => {
    const updatedLanguagesList = languagesList.map((languageItem, i) =>
      i === index ? { ...languageItem, [key]: value } : languageItem
    );
    setLanguagesList(updatedLanguagesList);
  };

  const handlePrevious = (e) => {
    e.preventDefault();
    setActiveTab("Summary");
  };
  const handleNext = (e) => {
    e.preventDefault();
    setActiveTab("Certifications");
  };

  const saveLanguagesDataHandler = (e) => {
    e.preventDefault();
    console.log("save language data is working");
    const payload = {
      ...resumeData,
      languages: languagesList,
    };
    dispatch(resumeSuccess(payload));
    Swal.fire({
      icon: "success",
      title: "Good Job",
      text: "Your Language Data Saved Successfully!",
    });
  };

  return (
    <div className="w-full">
      {/* Language Form Fields */}
      <form action="#" className="w-full flex flex-col gap-[2rem]">
        {/* Row First */}
        {languagesList.map((item, index) => (
          <div key={index} className="rowFirst grid grid-cols-12 gap-[2rem]">
            {/* Language */}
            <div className="languageInput col-span-4 flex flex-col gap-[1rem]">
              <label
                htmlFor={`language-${index}`}
                className="text-[1.5rem] leading-[1.5rem] text-theme-red"
              >
                Language
              </label>
              <input
                onChange={(e) =>
                  handleLanguageChange(index, "language", e.target.value)
                }
                type="text"
                name={`language-${index}`}
                id={`language-${index}`}
                value={item.language}
                className="outline-none px-[1rem] py-[0.8rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
              />
            </div>

            {/* Language Status */}
            <div className="languageStatusInput col-span-4 flex flex-col gap-[0.8rem]">
              <label
                htmlFor={`languageStatus-${index}`}
                className="text-[1.5rem] leading-[1.5rem] text-theme-red"
              >
                Level
              </label>
              <select
                onChange={(e) =>
                  handleLanguageChange(index, "level", e.target.value)
                }
                name={`languageStatus-${index}`}
                id={`languageStatus-${index}`}
                value={item.level}
                className="outline-none px-[1rem] py-[0.8rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
              >
                <option value="">Select</option>
                <option value="novice">Novice</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="proficient">Proficient</option>
                <option value="expert">Expert</option>
              </select>
            </div>

            <div className="deleteIcon col-span-2 h-full flex items-center justify-start">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setLanguagesList((prevLanguagesList) =>
                    prevLanguagesList.filter((_, i) => i !== index)
                  );
                }}
                className="text-[2.8rem] text-theme-red mt-6"
              >
                <RiDeleteBin6Line />
              </button>
            </div>
          </div>
        ))}

        {/* Add More Language */}
        <div className="addLanguage w-full flex py-[2rem]">
          <button
            onClick={(e) => {
              e.preventDefault();
              setLanguagesList([...languagesList, { language: "", level: "" }]);
            }}
            className="border-theme-red text-theme-red text-[1.5rem] px-[1.5rem] py-[0.8rem] flex items-center gap-[0.6rem] rounded-lg border-[0.2rem]"
          >
            <FaPlus size={20} />
            Add More Language
          </button>
        </div>

        {/* Buttons Row */}
        <div className="btnRow w-full flex justify-between py-[1rem]">
          <button
            onClick={(e) => handlePrevious(e)}
            className="bg-theme-red text-white text-[1.5rem] px-[2rem] py-[1rem] flex items-center gap-[0.6rem] rounded-lg"
          >
            <ImBackward2 size={20} />
            <span>Previous</span>
          </button>

          <button
            onClick={(e) => e.preventDefault()}
            className="bg-green-500 text-white text-[1.5rem] px-[2rem] py-[1rem] flex items-center gap-[0.6rem] rounded-lg"
          >
            <TfiSave />
            <span onClick={saveLanguagesDataHandler}>Save</span>
          </button>

          <button
            onClick={(e) => handleNext(e)}
            className="bg-theme-red text-white text-[1.5rem] px-[2rem] py-[1rem] flex items-center gap-[0.6rem] rounded-lg"
          >
            <span>Next</span>
            <ImForward3 size={20} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default LanguageForm;
