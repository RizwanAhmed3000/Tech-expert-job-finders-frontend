import React from 'react'
import { useSelector } from 'react-redux'
import { MdAlternateEmail } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { CiPhone } from "react-icons/ci";

const CLTemplate05 = () => {
    const { currentData } = useSelector((state) => state.coverLetter.currentData)
    // console.log(currentData)

    const textArray = currentData.letter.split('\n')
    // console.log(textArray)
    return (
        <div className="h-[842px] bg-white flex justify-center">
            <div className="w-[100%]">

                <div className="flex justify-around">
                    <div className='leading-[40px]'>
                        <h1 className="font-bold text-[3rem] flex items-center">{`${currentData?.firstName}`}</h1>
                        <h1 className="font-bold text-[3rem] flex items-center">{`${currentData?.lastName}`}</h1>
                    </div>
                    <div className="p-6 text-white shadow-2xl bg-black">
                        <h1 className="text-[3rem] font-bold"></h1>
                    </div>

                </div>
                <div className="flex justify-evenly mt-8 ">
                    <h1 className="text-[1.2rem] flex items-center gap-4"><MdAlternateEmail /> {`${currentData?.email}`}
                    </h1>
                    <h1 className="text-[1.2rem] flex items-center gap-4"><IoHomeOutline /> {`${currentData?.address}`}</h1>
                    <h1 className="text-[1.2rem] flex items-center gap-4"><CiPhone /> {`${currentData?.phone}`}</h1>
                </div>
                <div className=" flex justify-center items-center self-center">
                    <div className="h-[2px] w-[70%]  bg-black mt-4"></div>
                </div>

                <div className='leading-8'>
                    <h1 className="pl-7 pt-6 text-[1.2rem] font-bold">April 27, 2023</h1>
                    <h1 className="pl-6 pt-2 text-[1.5rem] font-bold">{`${currentData?.recipient}`}</h1>
                    <h1 className="pl-6 pt-1 text-[1.2rem]">{`${currentData?.companyName}`}</h1>
                    <h1 className="pl-6  text-[1.2rem]">{`${currentData?.streetAddress}`},</h1>
                    <h1 className="pl-6  text-[1.2rem]">ST 12345</h1>
                </div>
                <h1 className="text-[1.2rem] p-6 font-bold">{textArray[0]}</h1>
                {/* <p className="pl-6 pr-6 pt-2 text-[1.2rem] leading-8">A cover letter allows you to professionally introduce yourself to a
                    prospective employer. Your goal in writing your cover letter should be to encourage the employer to read
                    your resume and consider you for a specific position.</p> */}
                {
                    textArray.map((item) => (
                        <p className="pl-6 pr-6 pt-2 text-[1.2rem] leading-8">
                            {item}
                        </p>
                    ))
                }
                <h1 className="text-[1.2rem] p-6 ">Best Regards,</h1>
                <h1 className="text-[1.2rem] p-6 ">{`${currentData?.firstName} ${currentData?.lastName}`}</h1>
            </div>
        </div>

    )
}

export default CLTemplate05