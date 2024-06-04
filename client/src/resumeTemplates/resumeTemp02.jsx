import React from "react";
import { useSelector } from "react-redux";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

const ResumeTemp02 = ({ themeColor }) => {
  // console.log(themeColor);

  const resumeData = useSelector((state) => state.resume.resumeAllData);
  console.log(resumeData);

  const {
    profileData,
    experienceData,
    educationData,
    summary,
    certificates,
    languages,
    skills,
    fbUserName,
    twitterUserName,
    linkedinUserName,
    websiteLink,
  } = resumeData;

  console.log(profileData);
  console.log(experienceData);
  console.log(educationData);
  console.log(summary);
  console.log(certificates);
  console.log(languages);
  console.log(skills);

  return (
    <div
      className={`w-[95%] max-w-[750px] bg-white shadow-xl border-[0.2rem] border-[#${themeColor}] flex justify-center`}
    >
      <div className="cvCont w-[full] flex">
        <div
          // ${themeColor}
          className={`bg-[#000] ${
            themeColor !== "ffffff" ? "text-neutral-100" : "text-neutral-800"
          } w-[35%] p-8`}
        >
          <h1 className="text-[3.3rem] leading-[3.3rem] font-light ">
            {profileData?.firstName}
          </h1>
          <h2 className="text-[2.2rem] font-semibold ">
            {profileData?.middle}
          </h2>
          <h3 className=" text-[1.6rem]">{profileData?.lastName}</h3>
          <div
            className={`h-[2px] w-[100%] ${
              themeColor !== "ffffff" ? "bg-neutral-100" : "bg-neutral-800"
            } mt-5`}
          ></div>
          <div className="mb-4">
            <div className="font-bold mb-2 text-[1.8rem] tracking-widest mt-10">
              CONTACT
            </div>
            <div className="text-[1.4rem] mb-1 flex items-center gap-[0.8rem] ">
              <FaPhoneAlt /> <span>{profileData?.mobNum}</span>
            </div>
            <div className="text-[1.4rem] mb-1 flex items-center gap-[0.8rem]">
              <FaEnvelope /> <span>{profileData?.email}</span>
            </div>
            <div className="text-[1.4rem] mb-1 flex items-center gap-[0.8rem]">
              <FaMapMarkerAlt /> <span>{profileData?.streetAddress}</span>
            </div>
            <div className="text-[1.4rem] mb-1 flex items-center gap-[0.8rem]">
              <TbWorld /> <span>{websiteLink}</span>
            </div>
          </div>
          <div className="mb-4 mt-6">
            <div className="  font-bold mb-2 text-[1.8rem] tracking-widest">
              SOCIAL
            </div>
            <div className=" text-[1.4rem] mb-1">Facebook: {fbUserName}</div>
            <div className="text-[1.4rem] mb-1 ">
              Twitter: {twitterUserName}
            </div>
            <div className="text-[1.4rem] mb-1 ">
              LinkedIn: {linkedinUserName}
            </div>
          </div>
          <div className="mt-6">
            <div className="font-bold mb-2 text-[1.8rem] tracking-widest">
              SKILLS
            </div>
            {skills.map((item) => (
              <div className="mb-2 text-[1.4rem] ">{item.skill}</div>
            ))}
          </div>
          <div className="mt-6">
            <div className="font-bold mb-2 text-[1.8rem] tracking-widest">
              CERTIFICATE
            </div>
            {certificates.map((item) => (
              <div className="mb-2 text-[1.4rem]">
                {item.certificate} <br /> {item.year}
              </div>
            ))}
          </div>
        </div>

        <div className="w-[65%] py-8 px-6">
          <div className="flex flex-col items-start w-full">
            <div className="flex">
              <h2 className=" text-[3rem] leading-[3rem] font-bold tracking-widest">
                ABOUT
              </h2>
            </div>
            <p className="text-[1.4rem] mt-3">{summary}</p>
            <div className="h-[2px] w-[100%] bg-neutral-800 mt-6"></div>
          </div>
          <div className="p-6">
            <h1 className="text-[2rem] font-bold tracking-widest mb-2">
              EXPERIENCE
            </h1>
            {experienceData.map((item, index) => (
              <div key={index} className="mt-6">
                <div className="text-[1.3rem]">
                  <span>{item?.startDate}</span>
                  <span>- {item?.endDate}</span>
                </div>
                <div className="text-[1.5rem] font-semibold">
                  {item?.jobTitle}
                </div>
                <div className="text-[1.4rem] font-medium mb-1">
                  {item?.employer}
                </div>
                <span className="text-[1.3rem] font-medium mb-1">
                  {`${item?.expCity}, ${item?.expState}`}
                </span>
                <div className="text-[1.3rem] mb-1">
                  {item?.responsibilities}
                </div>
              </div>
            ))}
          </div>
          <div className="px-6 py-0">
            <h1 className="text-[2rem] font-bold tracking-widest mb-2">
              EDUCATION
            </h1>
            {educationData?.map((item, index) => (
              <div className="mb-4">
                <div className="text-[1.3rem] mb-1">
                  <span>{item?.educationStartDate} </span>
                  <span>- {item?.endEducationDate}</span>
                </div>
                <div className="text-[1.5rem] font-semibold mb-2">
                  {item?.fieldOfStudy}
                </div>
                <div className="text-[1.4rem] font-medium mb-1">
                  {`${item?.schoolName} | ${item?.schoolCity}`}
                </div>
                {/* <div className="text-[1.3rem] mb-1">
                  {item?.fieldOfStudy}
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeTemp02;
