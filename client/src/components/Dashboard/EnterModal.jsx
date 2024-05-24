// import React, { useState } from "react";
// import { FiX } from "react-icons/fi";

// const EnterModal = ({ isModalOpen, setIsModalOpen }) => {
//   const [isSelectTemplateOpen , setisSelectTemplateOpen] = useState(false)
//   return (

//     <div
//       className={`w-full fixed z-50 top-0 left-0 h-dvh flex justify-center ${
//         isModalOpen ? "block" : "hidden"
//       }`}
//     >
//       {/* Overlay */}
//       <div
//         onClick={() => setIsModalOpen(false)}
//         className={`overlay absolute z-50 top-0 left-0  w-full h-full bg-[#222222a0]`}
//       ></div>

//       {/* Modal */}
//       <div
//         className={`w-[50rem] p-[2rem] absolute z-[100] top-[8rem] bg-white modal flex flex-col items-center gap-[2rem] self-center text-black rounded-md`}
//       >
//         <h2 className="text-[2rem] leading-[2rem] font-medium">
//           Enter Resume Title
//         </h2>
//         <p className="text-[1.5rem] leading-[1.5rem] font-normal">
//           This name will be use to save your resume.
//         </p>

//         <input
//           type="text"
//           name="ResumeTitle"
//           id="ResumeTitle"
//           placeholder="Enter Resume Title"
//           className="w-full px-[1rem] py-[0.5rem] text-[1.5rem] outline-none border-[0.2rem] border-neutral-300"
//         />

//         <div className="buttons w-full flex justify-end items-center gap-[1rem]">
//           <button
//             className="text-[1.5rem] leading-[1.5rem] py-[0.8rem] px-[1rem] bg-theme-red text-white rounded-sm"
//             onClick={() => setIsModalOpen(false)}
//           >
//             Close
//           </button>
//           <button   onClick={() => setisSelectTemplateOpen(true)  } className="text-[1.5rem] leading-[1.5rem] py-[0.8rem] px-[1rem] bg-theme-yellow text-white rounded-sm">
//             Create
//           </button>
//         </div>
//       </div>
//       {isSelectTemplateOpen && (
//           <div className="fixed z-[100] inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//             <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-[600px] relative">
//               <button className="absolute top-4 right-4" onClick={() => setisSelectTemplateOpen(false) }>
//                 <FiX className="text-theme-red" size={24} />
//               </button>
//               <h2 className="text-center text-2xl font-semibold mb-4 text-theme-red">
//                 Ask Question?
//               </h2>
//               <textarea
//                 className="w-full text-2xl p-4 border border-gray-300 rounded-lg mb-4"
//                 placeholder="Type your question here..."
//                 rows="6"
//               ></textarea>
             
              
//             </div>
//           </div>
//         )}
//     </div>
    
//   );
// };

// export default EnterModal;

import React, { useState, useEffect } from "react";

import SelectTemplateModal from "./SelectTemplateModal";
import { FiX } from "react-icons/fi";

const EnterModal = ({ isModalOpen, setIsModalOpen }) => {
  const [isSelectTemplateOpen, setIsSelectTemplateOpen] = useState(false);

  useEffect(() => {
    if (isSelectTemplateOpen) {
      // Set the initial state for the second modal if the first one is closed
      setIsModalOpen(false);
    }
  }, [isSelectTemplateOpen, setIsModalOpen]);

  const handleCreateClick = () => {
    // First close the main modal
    setIsModalOpen(false);
    // Then, after a short delay, open the second modal
    setTimeout(() => {
      setIsSelectTemplateOpen(true);
    }, 300); // Adjust the delay as needed
  };

  return (
    <div>
      <div
        className={`w-full fixed z-50 top-0 left-0 h-dvh flex justify-center ${
          isModalOpen ? "block" : "hidden"
        }`}
      >
        {/* Overlay */}
        <div
          onClick={() => setIsModalOpen(false)}
          className={`overlay absolute z-50 top-0 left-0 w-full h-full bg-[#222222a0]`}
        ></div>

        {/* Modal */}
        <div
          className={`w-[50rem] p-[2rem] absolute z-[100] top-[8rem] bg-white modal flex flex-col items-center gap-[2rem] self-center text-black rounded-md`}
        >
          <h2 className="text-[2rem] leading-[2rem] font-medium">
            Enter Resume Title
          </h2>
          <p className="text-[1.5rem] leading-[1.5rem] font-normal">
            This name will be used to save your resume.
          </p>

          <input
            type="text"
            name="ResumeTitle"
            id="ResumeTitle"
            placeholder="Enter Resume Title"
            className="w-full px-[1rem] py-[0.5rem] text-[1.5rem] outline-none border-[0.2rem] border-neutral-300"
          />

          <div className="buttons w-full flex justify-end items-center gap-[1rem]">
            <button
              className="text-[1.5rem] leading-[1.5rem] py-[0.8rem] px-[1rem] bg-theme-red text-white rounded-sm"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
            <button
              onClick={handleCreateClick}
              className="text-[1.5rem] leading-[1.5rem] py-[0.8rem] px-[1rem] bg-theme-yellow text-white rounded-sm"
            >
              Create
            </button>
          </div>
        </div>
      </div>

      {isSelectTemplateOpen && (<div>
        
       <SelectTemplateModal setIsSelectTemplateOpen={setIsSelectTemplateOpen}/>
       </div>
      )}
    </div>
  );
};

export default EnterModal;





