import { Editor } from "@tinymce/tinymce-react";
import React, { useEffect, useRef, useState } from "react";

// Import React Icons
import { GiIciclesFence } from "react-icons/gi";
import { TfiSave } from "react-icons/tfi";
import { FaPlus } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { ImBackward2 } from "react-icons/im";

const ExperienceForm = () => {
  const [isCheckCurrentWork, setIsCheckCurrentWork] = useState(false);
  const [selectExperienceText, setSelectExperienceText] = useState([]);
  console.log(selectExperienceText);

  const editorRef = useRef(null);

  // Function to generate unordered list HTML from the array
  const generateListHTML = (items) => {
    return `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
  };

  // Use effect to set the initial content of the editor
  useEffect(() => {
    if (editorRef.current) {
      const listHTML = generateListHTML(selectExperienceText);
      editorRef.current.setContent(listHTML);
    }
  }, [selectExperienceText]);

  return (
    <div className="w-full">
      {/* Experience Form FIelds */}
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
        <div className="rowThird grid grid-cols-2 gap-[2rem] mb-[5rem]">
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

        {/* Experience About Textarea */}
        <div className="w-full flex justify-between">
          {/* Textarea Side */}
          <div className="w-[50%] flex flex-col gap-[1.2rem]">
            <div className="w-full">
              <button className="text-[1.7rem] leading-[1.7rem] px-[1.2rem] py-[1rem] flex items-center gap-[0.6rem] bg-theme-red text-white shadow-md rounded-md whitespace-nowrap">
                <GiIciclesFence />
                <span>AI Assistance</span>
              </button>

              <span className="text-[1.5rem] leading-[2.5rem]">
                <b>PRO TIP:</b> Ask AI any question about your job duties
              </span>
            </div>

            <h6 className="text-[1.5rem] text-theme-red">
              Job Duties / Responsibilities
            </h6>

            <Editor
              apiKey="ar9rz3ek138ri8zqmmjy1ver1c4xksfbzi3illv7sk37tojq"
              onInit={(evt, editor) => (editorRef.current = editor)}
              init={{
                plugins:
                  "anchor autolink charmap codesample image link advlist lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown preview",
                toolbar:
                  " bold italic underline remove razer alignleft aligncenter alignright alignjustify outdent indent unorderlist  numlist bullist unordered",
                menubar: false,
                tinycomments_mode: "embedded",
                tinycomments_author: "Author name",
                mergetags_list: [
                  { value: "First.Name", title: "First Name" },
                  { value: "Email", title: "Email" },
                ],
                ai_request: (request, respondWith) =>
                  respondWith.string(() =>
                    Promise.reject("See docs to implement AI Assistant")
                  ),
                content_style:
                  ".tox-tinymce { border: 1px solid #ddd; padding: 10px; border-radius: 0px; }",
              }}
              initialValue="Insert FeedBack"
            />
          </div>

          {/* Select Experience Side */}
          <div className="w-[47%] max-h-[50rem] shadow-lg rounded-md overflow-hidden">
            {/* Experience List Header */}
            <div className="w-full flex flex-col gap-[1.2rem] bg-theme-yellow p-[1.5rem]">
              <span className="text-[2rem] leading-[2rem] text-white font-medium">
                Showing examples for:
              </span>
              <input
                type="search"
                name="searchExp"
                id="searchExp"
                placeholder="Ex: Cashier.."
                className="py-[0.7rem] px-[1rem] text-[1.5rem] leading-[1.5rem] text-neutral-700 outline-none rounded-md"
              />
            </div>

            {/* Experience List */}
            <div className="w-full">
              <ul className="w-full flex flex-col h-[40rem] overflow-auto scrollbar-light">
                {[
                  "Manage and archive quality documentation and participate in internal and external quality audits",
                  "Resolved conflicts and negotiated agreements between parties in order to reach win-win solutions to disagreements and clarify misunderstandings",
                  "Presented metric reporting and [Timeframe] account reviews to [Type] team and clients",
                  "Developed, updated and maintained database of existing and potential customers in [Software]",
                  "Tracked customer shipment requirements to improve customer satisfaction while increasing service efficiencies",
                  "Tracked customer shipment requirements to improve customer satisfaction while increasing service efficiencies",
                  "Developed and executed plans to monitor standard process adherence",
                  "Initiated outbound administrative requests by phone and in writing to accomplish [Result]",
                  "Identified and resolved process issues to encourage smoother procedures, more efficient workflow and overall business growth",
                  "Evaluated quality problems and performed [Action] to identify and resolve issues",
                ].map((listText, index) => (
                  <li
                    key={index}
                    onClick={() =>
                      setSelectExperienceText(
                        !selectExperienceText.includes(listText)
                          ? [...selectExperienceText, listText]
                          : selectExperienceText.filter(
                              (texts) => texts !== listText
                            )
                      )
                    }
                    className="w-full flex items-start gap-[1.5rem] border-t-[0.1rem] border-neutral-400 px-[1.5rem] pt-[1.5rem] pb-[3rem] cursor-pointer"
                  >
                    <span className="listIcon text-[2.4rem] p-[0.5rem] bg-neutral-800 text-white rounded-full">
                      {!selectExperienceText.includes(listText) ? (
                        <FaPlus />
                      ) : (
                        <FaCheck />
                      )}
                    </span>
                    <span className="listText text-[1.5rem] text-neutral-700">
                      {listText}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Buttons Row */}
        <div className="btnRow w-full flex justify-end">
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
