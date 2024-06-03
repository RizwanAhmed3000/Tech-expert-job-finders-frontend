import React, { useEffect, useState } from "react";
import CreateButton from "../../components/Dashboard/CreateButton";
import DashWebsiteDataCard from "../../components/Dashboard/DashWebsiteDataCard";
import CreateWebsiteModal from "../../components/Dashboard/CreateWebsiteModal";
import WebsiteStartedModal from "../../components/Dashboard/WebsiteStartedModal";
import SelectWebsiteTemplateModal from "../../components/Dashboard/SelectWebsiteTemplateModal";
import EnterWebsiteResumeTitleModal from "../../components/Dashboard/EnterWebsiteResumeTitleModal";

const DashWebsite = () => {
  // Use states
  const [isStartedModalOpen, setIsStartedModalOpen] = useState(false);
  const [isChooseTempModalOpen, setIsChooseTempModalOpen] = useState(false);
  const [isSelectResumeModalOpen, setIsSelectResumeModalOpen] = useState(false);
  const [isCreateWebUrlModalOpen, setIsCreateWebUrlModalOpen] = useState(false);

  // Functions Handlers

  // / const handleCreateClick = () => {
  //     // dispatch(resumeSuccess(resumeTitle))
  //     setIsTitleModalOpen(false);
  //     setTimeout(() => {
  //       setIsWebsiteStartedModalOpen(true);
  //     }, 300);
  //   };

  // const dispatch = useDispatch();
  // const WebsiteResumeStateSaveHandler = (e) => {
  //   e.preventDefault();
  //   const payload = {

  //       ...websiteData,
  //       setIsWebsiteResumeTitleModal: setIsWebsiteResumeTitleModal,

  //   };
  //   dispatch(websiteSuccess(payload));
  // };

  return (
    <>
      {/* Main Div */}
      <div className="bg-coral-light m-10">
        {/* Upper div */}
        <div className="flex pr-8 items-center h-[10rem]  mb-5">
          {/* upper left div */}
          <div className="bg-theme-red w-2/6 p-8 h-full rounded-lg">
            <p className="text-xl text-white">
              <span className="text-2xl font-bold me-2">Pro Tip: </span>{" "}
              Transform your resume into a mobile-friendly website that you can
              share with recruiters!
            </p>
          </div>
          {/* Upper right Div */}

          <CreateButton
            btnText="Create New Website"
            setIsStartedModalOpen={setIsStartedModalOpen}
          />
        </div>
        {/* Second Line Div */}
        <DashWebsiteDataCard cardName="Name" />
      </div>

      {/* All Modal  */}

      {/* StartedModalOpen */}
      {isStartedModalOpen && (
        <WebsiteStartedModal
          setIsStartedModalOpen={setIsStartedModalOpen}
          setIsChooseTempModalOpen={setIsChooseTempModalOpen}
        />
      )}
      {/* ChooseTempModalOpen  */}
      {isChooseTempModalOpen && (
        <div>
          <SelectWebsiteTemplateModal 
          setIsStartedModalOpen={setIsStartedModalOpen}
          setIsChooseTempModalOpen={setIsChooseTempModalOpen}
          setIsSelectResumeModalOpen={setIsSelectResumeModalOpen}
          />
        </div>
      )}
      {/* isSelectResumeModalOpen */}
      {isSelectResumeModalOpen && <EnterWebsiteResumeTitleModal
       setIsChooseTempModalOpen={setIsChooseTempModalOpen}
       setIsSelectResumeModalOpen={setIsSelectResumeModalOpen}
       setIsCreateWebUrlModalOpen={setIsCreateWebUrlModalOpen} />}
      {/*  */}
      {/* CreateWebUrlModalOpen */}
      {isCreateWebUrlModalOpen && <CreateWebsiteModal
      setIsSelectResumeModalOpen={setIsSelectResumeModalOpen}
      setIsCreateWebUrlModalOpen={setIsCreateWebUrlModalOpen} />}
    </>
  );
};

export default DashWebsite;

// <div
//           className={`w-[35rem]  absolute z-[100] top-[8rem] bg-white modal flex flex-col items-center gap-[2rem] self-center text-black rounded-md`}
//         >
//           {/* Upper div */}
//           <div className="h-[50%]">
//             <img
//               src={cardImg}
//               alt=""
//               style={{ width: "100%", height: "100%" }}
//             />
//           </div>
//           {/* Body Div */}
//           <div className="p-3">
//             <h2 className="text-[2rem] leading-[2rem] font-medium text-center">
//               Take your resume online in just one click!
//             </h2>
//             <p className="text-[1.5rem] leading-[1.5rem] font-normal">
//               Make your own personal website from one of your resumes. Your site
//               will remain private until you decide to make it public.
//             </p>

//             <div className="buttons w-full flex flex-col justify-center items-center gap-[1rem]">
//               <button
//                 className="text-[1.5rem] leading-[1.5rem] py-[0.8rem] px-[1rem] bg-theme-red text-white rounded-sm"
//                 onClick={() => setIsTitleModalOpen(false)}
//               >
//                 Close
//               </button>
//               <button
//                 onClick={handleCreateClick}
//                 className="text-[1.5rem] leading-[1.5rem] py-[0.8rem] px-[1rem] bg-theme-yellow text-white rounded-sm"
//               >
//                 Create
//               </button>
//             </div>
//           </div>
//         </div>
