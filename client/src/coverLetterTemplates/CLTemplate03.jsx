import React from 'react'
import { useSelector } from "react-redux";

const CLTemplate03 = () => {

    const { currentData } = useSelector((state) => state.coverLetter.currentData)

    return (
        <div className=" h-[842px] bg-white flex justify-center">
            <div className="w-fit">
                <div className="p-4 justify-around bg-gray-600 flex">
                    <div className="flex gap-2   items-center">
                        <h1 className="font-bold text-white text-[3rem]">DAVID
                        </h1>
                        <h1 className="font-bold text-orange-600  text-[3rem]">PEREZ
                        </h1>
                    </div>
                    <div className="mb-4">
                        <div className="text-s mb-1 text-white"><i className="fa fa-map-marker  bg-orange-600 p-2 rounded-full"
                            aria-hidden="true"></i>&nbsp; 01 Street,
                            New York,
                            USA</div>
                        <div className="text-s text-white mb-1"><i className="fa fa-phone bg-orange-600 p-2 rounded-full"
                            aria-hidden="true"></i>&nbsp; +41 458 2356
                        </div>
                        <div className="text-s mb-1 text-white"><i className="fa fa-envelope bg-orange-600 p-2 rounded-full"
                            aria-hidden="true"></i>&nbsp;
                            smithwill@gmail.com
                        </div>
                    </div>
                </div>
                <h1 className="p-6 font-bold text-[1.2rem]">[Today's Date]</h1>
                <h1 className="pl-6  text-[1.1rem]">[Hiring Manager's Name]</h1>
                <h1 className="pl-6  text-[1.1rem]">123 Company Address</h1>
                <h1 className="pl-6  text-[1.1rem]">Company's City, State, Zip Code</h1>
                <h1 className="pl-6  text-[1.1rem]">(xxx) XXX-XXXX</h1>
                <h1 className="pl-6  text-[1.1rem]">hiring.manager@gmail.com</h1>
                <h1 className="p-6 font-bold text-[1.2rem] ">Dear [Mr./Ms./Mx.] [Hiring Manager's Last Name],</h1>
                <p className="text-[1.2rem]  pl-6 pr-6">The first paragraph should contain a self-introduction.
                    Write who you are, where your expertise lies, where you found the job posting (or who referred you), and
                    why you want to apply.</p>
                <p className="text-[1.2rem]  p-6">The second paragraph should respond directly to the job
                    description. Describe how your relevant experiences, skills, and abilities help you meet the company's
                    needs. To make that easier, you can (and should) literally include words and phrases from the job
                    description here.</p>
                <ul className="list-disc pl-14 ">
                    <li className="text-[1.2rem]  ">You can also include a bulleted list of your accomplishments
                    </li>
                </ul>
                <ul className="list-disc pl-14 ">
                    <li className="text-[1.2rem]  ">Make sure you quantify (add numbers to) these bullet points
                    </li>
                </ul>
                <ul className="list-disc pl-14 ">
                    <li className="text-[1.2rem]  ">A cover letter with numbers is 100% better than one without
                    </li>
                </ul>
                <p className="text-[1.2rem]  p-6">The second paragraph should respond directly to the job
                    description. Describe how your relevant experiences, skills, and abilities help you meet the company's
                    needs. To make that easier, you can (and should) literally include words and phrases from the job
                    description here.</p>
                <p className="text-[1.2rem]  pl-6 pr-6">The first paragraph should contain a self-introduction.
                    Write who you are, where your expertise lies, where you found the job posting (or who referred you), and
                    why you want to apply.</p>
                <h1 className="text-[1.2rem]  p-4 pl-6"> Sincerely,</h1>
                <h1 className="text-[1.2rem] font-semibold text-orange-600 pl-6">David Pérez</h1>
            </div>
        </div>

    )
}

export default CLTemplate03