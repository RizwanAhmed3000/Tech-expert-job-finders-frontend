import React from 'react'
import { useSelector } from 'react-redux'

const CLTemplate06 = () => {
    const { currentData } = useSelector((state) => state.coverLetter?.currentData)
    // console.log(currentData)

    const textArray = currentData.letter.split('\n')
    // console.log(textArray)
    return (
        <div className="h-[842px] bg-white flex justify-center">
            <div className="w-[100%] leading-10">
                <div className="p-4 pt-6">
                    <div className="h-[20px] w-[100%]  bg-purple-600"></div>
                </div>
                <h1 className="text-[3rem] font-bold text-black flex justify-center">{`${currentData?.firstName} ${currentData?.lastName}`}</h1>
                <h1 className="text-[1.2rem]  text-black flex justify-center">{currentData?.address}</h1>
                <h1 className="text-[1.2rem]  text-black flex justify-center">{`${currentData?.phone} | ${currentData?.email}M`}</h1>

                <h1 className="text-[1.2rem] pl-4 pt-6 pb-2">April 12, 2021</h1>
                <h1 className="text-[1.2rem] pl-4">{currentData?.recipient}</h1>
                <h1 className="text-[1.2rem] pl-4 pt-1">{currentData?.companyName}</h1>
                <h1 className="text-[1.2rem] pl-4 pt-1">{currentData?.streetAddress}.</h1>
                <h1 className="text-[1.2rem] p-4 font-bold">{`${textArray[0]}`}</h1>
                <p className="text-[1.2rem] pl-4 pt-2 pr-4">As an adept Legal Assistant Intern, the advertisement for Legal
                    Assistant with SalesFuel Inc. is a
                    step-up in my career; thus, it sparked my interest. When reviewing the position requirements and
                    responsibilities, I was delighted to find that my studies and qualities align with your company's needs
                    and culture.</p>

                {
                    textArray.map((item) => (
                        <p className="text-[1.2rem] pl-4 pt-2 pr-4 leading-8" >
                            {item}
                        </p>
                    ))
                }


                <h1 className="font-bold text-[1.2rem] pl-4 pt-6">Best regards,</h1>
                <h1 className="text-[1.2rem] pl-4 ">{`${currentData?.firstName} ${currentData?.lastName}`}</h1>


            </div>
        </div>
    )
}

export default CLTemplate06