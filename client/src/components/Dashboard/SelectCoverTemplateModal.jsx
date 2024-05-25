// import React, { useState } from 'react'
// import { FiX } from "react-icons/fi";

// import SelectCoverTemplateListing from './SelectCoverTemplateListing';
// function SelectCoverTemplateModal({setIsSelectTemplateOpen
    
// }) {
//     const [activeTab, setActiveTab] = useState('free');

//     const handleTabClick = (tabName) => {
//       setActiveTab(tabName);
//     };
    
    
//   const getTabClassNames = (tabName) => {
//     return activeTab === tabName ? 'bg-red-500 text-white rounded-full' : '';
//   };

//   return (
//     <div className="fixed z-[100] py-[4rem] overflow-auto inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white overflow-auto p-6 rounded-lg shadow-lg w-[90%] max-w-[600px] relative">
//             <button
//               className="absolute top-4 right-4"
//               onClick={() => setIsSelectTemplateOpen(false)}
//             >
//               <FiX className="text-theme-red" size={24} />
//             </button>
//             <h2 className="text-center text-5xl font-semibold mb-4 text-theme-red">
//             Choose a Cover Letter Template
//             </h2>
//             <h2 className="text-center text-2xl font-semibold mb-4 text-black">
//            The Template will be use for your Cover Letter
//             </h2>
//             <hr />
//             <div className='px-[6.5rem] py-[2rem]'>
//             <span
//         className={`text-2xl p-4 cursor-pointer ${getTabClassNames('free')}`}
//         onClick={() => handleTabClick('free')}
//       >
//         Free Template
//       </span>
//       <span
//         className={`text-2xl p-4 cursor-pointer ${getTabClassNames('premium')}`}
//         onClick={() => handleTabClick('premium')}
//       >
//         Premium Template
//       </span>
//       <span
//         className={`text-2xl p-4 cursor-pointer ${getTabClassNames('my')}`}
//         onClick={() => handleTabClick('my')}
//       >
//         My Template
//       </span>

//     </div>
//             <div className=" w-full px-[6.5rem] "><input type="search" placeholder="Search"  className="border w-full p-4 rounded-lg" name="" id="" /></div>
//             <SelectCoverTemplateListing activeTab={activeTab}/>
//           </div>
         

//         </div>
//   )
// }

// export default SelectCoverTemplateModal

import React, { useState } from 'react';
import { FiX } from "react-icons/fi";

import SelectCoverTemplateListing from './SelectCoverTemplateListing';

function SelectCoverTemplateModal({ setIsSelectTemplateOpen }) {
    const [activeTab, setActiveTab] = useState('free');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    const getTabClassNames = (tabName) => {
        return activeTab === tabName ? 'bg-red-500 text-white rounded-full' : '';
    };

    return (
        <div className="fixed z-[100] py-[4rem] inset-0 bg-black bg-opacity-50 flex  justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-[600px] relative scrollbar-light overflow-y-auto max-h-[90%]">
                <button
                    className="absolute top-4 right-4"
                    onClick={() => setIsSelectTemplateOpen(false)}
                >
                    <FiX className="text-theme-red" size={24} />
                </button>
                <h2 className="text-center text-5xl font-semibold mb-4 text-theme-red">
                    Choose a Cover Letter Template
                </h2>
                <h2 className="text-center text-2xl font-semibold mb-4 text-black">
                    The Template will be used for your Cover Letter
                </h2>
                <hr />
                <div className='flex justify-center space-x-4 py-4'>
                    <span
                        className={`text-2xl p-4 cursor-pointer ${getTabClassNames('free')}`}
                        onClick={() => handleTabClick('free')}
                    >
                        Free Template
                    </span>
                    <span
                        className={`text-2xl p-4 cursor-pointer ${getTabClassNames('premium')}`}
                        onClick={() => handleTabClick('premium')}
                    >
                        Premium Template
                    </span>
                    <span
                        className={`text-2xl p-4 cursor-pointer ${getTabClassNames('my')}`}
                        onClick={() => handleTabClick('my')}
                    >
                        My Template
                    </span>
                </div>
                <div className="w-full px-4 py-2">
                    <input type="search" placeholder="Search" className="border w-full p-4 rounded-lg" />
                </div>
                <SelectCoverTemplateListing activeTab={activeTab} />
            </div>
        </div>
    );
}

export default SelectCoverTemplateModal;
