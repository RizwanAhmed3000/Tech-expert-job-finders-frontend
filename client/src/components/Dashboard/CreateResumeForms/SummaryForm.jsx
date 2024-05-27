import { Editor } from "@tinymce/tinymce-react";
import React, { useEffect, useRef, useState } from "react";

// Import React Icons
import { GiIciclesFence } from "react-icons/gi";
import { TfiSave } from "react-icons/tfi";
import { FaPlus } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { ImBackward2, ImForward3 } from "react-icons/im";

const SummaryForm = () => {
  const [isCheckCurrentWork, setIsCheckCurrentWork] = useState(false);
  const [selectSummaryText, setSelectSummaryText] = useState([]);

  const editorRef = useRef(null);

  // Function to generate unordered list HTML from the array
  const generateListHTML = (items) => {
    return `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
  };

  // Use effect to set the initial content of the editor
  useEffect(() => {
    if (editorRef.current) {
      const listHTML = generateListHTML(selectSummaryText);
      editorRef.current.setContent(listHTML);
    }
  }, [selectSummaryText]);

  return (
    <div className="w-full">
      {/* Summary Form */}
      <form action="#" className="w-full flex flex-col gap-[2rem]">
        {/* Summary About Textarea */}
        <div className="w-full flex justify-between">
          {/* Textarea Side */}
          <div className="w-[53%] flex flex-col gap-[1.2rem]">
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

          {/* Select Summary Side */}
          <div className="w-[42%] max-h-[50rem] shadow-xl rounded-md overflow-hidden">
            {/* Summary List Header */}
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

            {/* Summary List */}
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
                      setSelectSummaryText(
                        !selectSummaryText.includes(listText)
                          ? [...selectSummaryText, listText]
                          : selectSummaryText.filter(
                              (texts) => texts !== listText
                            )
                      )
                    }
                    className="w-full flex items-start gap-[1.5rem] border-t-[0.1rem] border-neutral-400 px-[1.5rem] pt-[1.5rem] pb-[3rem] cursor-pointer"
                  >
                    <span className="listIcon text-[2.4rem] p-[0.5rem] bg-neutral-800 text-white rounded-full">
                      {!selectSummaryText.includes(listText) ? (
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

export default SummaryForm;
