import React from 'react'
import { useSelector } from 'react-redux'

const CLTemplate04 = () => {
    const { currentData } = useSelector((state) => state.coverLetter.currentData)
    // console.log(currentData)

    const textArray = currentData.letter.split('\n')
    // console.log(textArray)
    return (
        <div className="h-[842px] bg-white flex justify-center">
            <div className="w-[100%]">
                <div className="flex justify-around">
                    <div className="p-6 text-white shadow-2xl bg-black">
                        <h1 className="text-[3rem] font-bold">EW</h1>
                    </div>
                    <h1 className="font-bold text-[3rem] flex items-center">{`${currentData?.firstName} ${currentData?.lastName}`}</h1>
                </div>
                <div className='leading-8'>
                    <h1 className=" text-[1.2rem] pl-4 pt-8 mb-1">{`${currentData?.address}`}</h1>
                    <h1 className=" text-[1.2rem] pl-4  mb-1">{`${currentData?.phone}`}</h1>
                    <h1 className=" text-[1.2rem] pl-4  mb-1">{`${currentData?.email}`}</h1>

                    <h1 className="font-bold text-[1.2rem] p-4 ">Date</h1>
                    <h1 className=" text-[1.2rem] pl-4  mb-1">{`${currentData?.recipient}`}</h1>
                    <h1 className=" text-[1.2rem] pl-4  mb-1">{`${currentData?.companyName}`}</h1>
                    {/* <h1 className=" text-[1.2rem] pl-4  mb-1">Company Address</h1> */}
                    <h1 className=" text-[1.2rem] pl-4  mb-1">{`${currentData?.streetAddress}`}</h1>

                    <div className="flex p-4">
                        <h1 className="text-[1.2rem] font-bold">Subject:</h1>
                        <h1 className="text-[1.2rem]"> Your Full Name Application for Position*</h1>
                    </div>
                    <h1 className="text-[1.2rem] p-4 font-bold">{`${textArray[0]}`}</h1>
                    {/* <p className="text-[1.2rem] pl-4 pb-2 pr-4">Introduce yourself and explain why you are applying for the job. Tailor
                        this paragraph once you know the specific job. Tell why you are excited about the job and company and
                        how it aligns with your career goals. Mention your referral and mutual contact with the hiring manager,
                        if applicable.</p> */}
                    {
                        textArray.map((item) => (
                            <p className="text-[1.2rem] pl-4 pb-2 pr-4">
                                {item}
                            </p>
                        ))
                    }
                    <h1 className="p-4 text-[1.2rem] font-semibold">Regards/Sincerely/Respectfully,</h1>
                    <h1 className="p-4 text-[1.2rem] font-semibold">{`${currentData?.firstName} ${currentData?.lastName}`}</h1>
                </div>
            </div>
        </div>
    )
}

export default CLTemplate04