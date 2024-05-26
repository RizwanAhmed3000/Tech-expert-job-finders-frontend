import React, { useState } from "react";

import { TfiSave } from "react-icons/tfi";

const ExperienceForm = () => {
  const [isCheckCurrentWork, setIsCheckCurrentWork] = useState(false);
  console.log(isCheckCurrentWork);

  return (
    <div className="w-full">
      <form action="#" className="w-full flex flex-col gap-[2rem]">
        {/* Row First */}
        <div className="rowFirst grid grid-cols-2 gap-[2rem]">
          {/* Job Title */}
          <div className="jobTitleInput flex flex-col gap-[1rem]">
            <label
              htmlFor="jobTitle"
              className="text-[1.5rem] leading-[1.5rem] text-theme-red"
            >
              Job Title
            </label>
            <input
              type="text"
              name="jobTitle"
              id="jobTitle"
              className="outline-none px-[1rem] py-[0.8rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
            />
          </div>

          {/* Employer */}
          <div className="employerInput flex flex-col gap-[1rem]">
            <label
              htmlFor="employer"
              className="text-[1.5rem] leading-[1.5rem] text-theme-red"
            >
              Employer
            </label>
            <input
              type="text"
              name="employer"
              id="employer"
              className="outline-none px-[1rem] py-[0.8rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
            />
          </div>
        </div>

        {/* Row Second */}
        <div className="rowSecond grid grid-cols-2 gap-[2rem]">
          {/* City */}
          <div className="cityInput flex flex-col gap-[0.8rem]">
            <label
              htmlFor="city"
              className="text-[1.5rem] leading-[1.5rem] text-theme-red"
            >
              City
            </label>
            <input
              type="text"
              name="city"
              id="city"
              className="outline-none px-[1rem] py-[0.8rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
            />
          </div>

          {/* State */}
          <div className="stateInput flex flex-col gap-[0.8rem]">
            <label
              htmlFor="state"
              className="text-[1.5rem] leading-[1.5rem] text-theme-red"
            >
              State
            </label>
            <input
              type="text"
              name="state"
              id="state"
              className="outline-none px-[1rem] py-[0.8rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
            />
          </div>
        </div>

        {/* Row Third */}
        <div className="rowThird grid grid-cols-2 gap-[2rem]">
          {/* Start Date */}
          <div className="startDateInput flex flex-col gap-[0.8rem]">
            <label
              htmlFor="startDate"
              className="text-[1.5rem] leading-[1.5rem] text-theme-red"
            >
              Start Date:
            </label>
            <input
              type="date"
              name="startDate"
              id="startDate"
              className="outline-none px-[1rem] py-[0.8rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
            />
          </div>

          {/* End Date */}
          <div className="endDateInput relative flex flex-col gap-[0.8rem]">
            <label
              htmlFor="endDate"
              className="text-[1.5rem] leading-[1.5rem] text-theme-red"
            >
              End Date:
            </label>
            <input
              type={isCheckCurrentWork ? "text" : "date"}
              name="endDate"
              id="endDate"
              defaultValue={isCheckCurrentWork ? "I currently work here" : ""}
              disabled={isCheckCurrentWork}
              className="outline-none px-[1rem] py-[0.8rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
            />

            <div className="currentWorkingCheckbox absolute bottom-[-3.2rem] left-0 flex items-center gap-[1rem] px-[0.5rem]">
              <input
                type="checkbox"
                name="CurrentWorking"
                id="currentWorking"
                onChange={() => setIsCheckCurrentWork(!isCheckCurrentWork)}
                className="w-7 h-7 border-2 border-gray-300 rounded-full accent-theme-red ring-2 ring-offset-2 ring-theme-red"
              />
              <label
                htmlFor="currentWorking"
                className="text-[1.5rem] leading-[1.4rem]"
              >
                I currently work here
              </label>
            </div>
          </div>
        </div>

        <div className="btnRow w-full flex justify-end mt-[4rem]">
          <button className="bg-theme-red text-white text-[1.5rem] px-[2rem] py-[1rem] flex items-center gap-[0.6rem] rounded-lg">
            <TfiSave />
            <span>Save</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExperienceForm;
