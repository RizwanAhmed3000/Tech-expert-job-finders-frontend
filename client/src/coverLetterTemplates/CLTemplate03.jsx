import React from 'react'
import { useSelector } from "react-redux";

const CLTemplate03 = () => {

    const { currentData } = useSelector((state) => state.coverLetter.currentData)
    console.log(currentData)

    const textArray = currentData.letter.split('\n')

    return (
        <div className=" h-[842px] bg-white flex justify-center">
            <div className="w-fit">
                <div className="p-4 justify-around bg-gray-600 flex">
                    <div className="flex gap-2   items-center">
                        <h1 className="font-bold text-white text-[3rem]">{currentData?.firstName}
                        </h1>
                        <h1 className="font-bold text-orange-600  text-[3rem]">{currentData?.lastName}
                        </h1>
                    </div>
                    <div className="mb-4">
                        <div className="text-s mb-1 text-white"><i className="fa fa-map-marker  bg-orange-600 p-2 rounded-full"
                            aria-hidden="true"></i>&nbsp; {currentData?.address}</div>
                        <div className="text-s text-white mb-1"><i className="fa fa-phone bg-orange-600 p-2 rounded-full"
                            aria-hidden="true"></i>&nbsp; {currentData?.phone}
                        </div>
                        <div className="text-s mb-1 text-white"><i className="fa fa-envelope bg-orange-600 p-2 rounded-full"
                            aria-hidden="true"></i>&nbsp;
                            {currentData?.email}
                        </div>
                    </div>
                </div>
                <h1 className="p-6 font-bold text-[1.2rem]">[Today's Date]</h1>
                <h1 className="pl-6  text-[1.1rem]">{currentData?.recipient}</h1>
                <h1 className="pl-6  text-[1.1rem]">{currentData?.streetAddress}</h1>
                <h1 className="pl-6  text-[1.1rem]">{currentData?.companyName}</h1>
                {/* <h1 className="pl-6  text-[1.1rem]">hiring.manager@gmail.com</h1> */}
                <h1 className="p-6 font-bold text-[1.2rem] ">{textArray[0]}</h1>
                {
                    textArray.map((item) => (
                        <p className="text-[1.2rem] pl-6 pr-6 leading-10">
                            {item}
                        </p>
                    ))
                }
                <h1 className="text-[1.2rem]  p-4 pl-6"> Sincerely,</h1>
                <h1 className="text-[1.2rem] font-semibold text-orange-600 pl-6">{`${currentData?.firstName} ${currentData?.lastName}`}</h1>
            </div>
        </div>

    )
}

export default CLTemplate03