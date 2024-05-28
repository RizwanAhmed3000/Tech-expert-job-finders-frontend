import React, { useState } from "react";

// React Icons
import { ImBackward2, ImForward3 } from "react-icons/im";
import { TfiSave } from "react-icons/tfi";

const EducationForm = () => {
  const [isCheckCurrentStudy, setIsCheckCurrentStudy] = useState(false);

  const [schoolName, setSchoolName] = useState("");
  const [schoolCity, setSchoolCity] = useState("");
  const [lastQualification, setLastQualification] = useState("");
  const [schoolState, setSchoolState] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [fieldOfStudy, setFieldOfStudy] = useState("");

  // console.log(schoolName)
  // console.log(schoolCity)
  // console.log(lastQualification)
  // console.log(schoolState)
  // console.log(startDate)
  // console.log(endDate)
  // console.log(fieldOfStudy)
  return (
    <div className="w-full">
      {/* Education Form FIelds */}
      <form action="#" className="w-full flex flex-col gap-[2rem]">
        {/* Row First */}
        <div className="rowFirst grid grid-cols-2 gap-[2rem]">
          {/* School Name */}
          <div className="schoolNameInput flex flex-col gap-[1rem]">
            <label
              htmlFor="schoolName"
              className="text-[1.5rem] leading-[1.5rem] text-theme-red"
            >
              School Name
            </label>
            <input
            onChange={(e)=> setSchoolName(e.target.value)}
              type="text"
              name="schoolName"
              id="schoolName"
              className="outline-none px-[1rem] py-[0.8rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
            />
          </div>

          {/* City */}
          <div className="cityInput flex flex-col gap-[0.8rem]">
            <label
              htmlFor="city"
              className="text-[1.5rem] leading-[1.5rem] text-theme-red"
            >
              City
            </label>
            <input
            onChange={(e)=> setSchoolCity(e.target.value)}
              type="text"
              name="city"
              id="city"
              className="outline-none px-[1rem] py-[0.8rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
            />
          </div>
        </div>

        {/* Row Second */}
        <div className="rowSecond grid grid-cols-2 gap-[2rem]">
          {/* State */}
          <div className="stateInput flex flex-col gap-[0.8rem]">
            <label
              htmlFor="state"
              className="text-[1.5rem] leading-[1.5rem] text-theme-red"
            >
              State
            </label>
            <input
            onChange={(e)=> setSchoolState(e.target.value)}
              type="text"
              name="state"
              id="state"
              className="outline-none px-[1rem] py-[0.8rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
            />
          </div>

          {/* Last Qualification */}
          <div className="qualificationInput flex flex-col gap-[0.8rem]">
            <label
              htmlFor="qualification"
              className="text-[1.5rem] leading-[1.5rem] text-theme-red"
            >
              Last Qualification / Degree
            </label>
            <input
            onChange={(e)=> setLastQualification(e.target.value)}
              type="text"
              name="qualification"
              id="qualification"
              className="outline-none px-[1rem] py-[0.8rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
            />
          </div>
        </div>

        {/* Row Third */}
        <div className="rowThird grid grid-cols-12 gap-[2rem] mb-[6rem]">
          {/* Field Of Study */}
          <div className="fieldOfStudyInput col-span-6 flex flex-col gap-[0.8rem]">
            <label
              htmlFor="fieldOfStudy"
              className="text-[1.5rem] leading-[1.5rem] text-theme-red"
            >
              Field Of Study
            </label>
            <input
            onChange={(e)=> setFieldOfStudy(e.target.value)}
              type="text"
              name="fieldOfStudy"
              id="fieldOfStudy"
              className="outline-none px-[1rem] py-[0.8rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
            />
          </div>

          {/* Start Date */}
          <div className="startDateInput col-span-3 flex flex-col gap-[0.8rem]">
            <label
              htmlFor="startDate"
              className="text-[1.5rem] leading-[1.5rem] text-theme-red"
            >
              Start Date:
            </label>
            <input
            onChange={(e)=> setStartDate(e.target.value)}
              type="date"
              name="startDate"
              id="startDate"
              className="outline-none px-[1rem] py-[0.8rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
            />
          </div>

          {/* End Date */}
          <div className="endDateInput col-span-3 relative flex flex-col gap-[0.8rem]">
            <label
              htmlFor="endDate"
              className="text-[1.5rem] leading-[1.5rem] text-theme-red"
            >
              End Date:
            </label>
            <input
            onChange={(e)=> setEndDate(e.target.value)}
              type={isCheckCurrentStudy ? "text" : "date"}
              name="endDate"
              id="endDate"
              defaultValue={isCheckCurrentStudy && "I currently study here"}
              disabled={isCheckCurrentStudy}
              className="outline-none px-[1rem] py-[0.8rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
            />

            <div className="currentWorkingCheckbox absolute bottom-[-3.2rem] left-0 flex items-center gap-[1rem] px-[0.5rem]">
              <input
                type="checkbox"
                name="CurrentWorking"
                id="currentWorking"
                onChange={() => setIsCheckCurrentStudy(!isCheckCurrentStudy)}
                className="w-7 h-7 border-2 border-gray-300 rounded-full accent-theme-red ring-2 ring-offset-2 ring-theme-red"
              />
              <label
                htmlFor="currentWorking"
                className="text-[1.5rem] leading-[1.4rem]"
              >
                I currently study here
              </label>
            </div>
          </div>
        </div>

        {/* Buttons Row */}
        <div className="btnRow w-full flex justify-between py-[1rem]">
          <button
            onClick={(e) => e.preventDefault()}
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
            <span>Save</span>
          </button>

          <button
            onClick={(e) => e.preventDefault()}
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

export default EducationForm;
