import React from "react";
import { useSelector } from "react-redux";

const ResumeTemp01 = ({ themeColor }) => {
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
    <div className="w-[95%] max-w-[750px] bg-white shadow-md flex justify-center">
      <div className="cvCont w-[full] flex">
        <div
          className={`w-[32%] bg-[#${themeColor}] ${
            themeColor === "ffffff" ? "text-neutral-800" : "text-neutral-50"
          } px-6 py-2`}
        >
          <img
            src="images.jpg"
            alt=""
            className="rounded-full mb-6  w-[100%]"
          />
          <div>
            <div className="text-[1.8rem] font-bold mb-2 tracking-widest">
              CONTACT
            </div>

            <div className="text-[1.2rem] mb-1">{profileData?.mobNum}</div>
            <div className="text-[1.2rem] mb-1">{profileData?.email}</div>
            <div className="text-[1.2rem] mb-1">
              {profileData?.streetAddress}
            </div>
            <div className="text-[1.2rem] mb-1">{websiteLink}</div>

          </div>
          <div className="mt-10">
            <div className="text-[1.8rem] font-bold mb-2 tracking-widest">
              SOCIAL
            </div>


            <div className=" text-[1.2rem] mb-1">{fbUserName}</div>
            <div className="text-[1.2rem] mb-1 ">{twitterUserName}</div>
            <div className="text-[1.2rem] mb-1 ">{linkedinUserName}</div>

       

          </div>
          <div className="mt-10">
            <div className="text-[1.8rem] font-bold mb-2 tracking-widest">
              SKILLS
            </div>

            {skills?.map((item) => (

              <div className="mb-2 text-[1.2rem] ">{item?.skill}</div>
            ))}
          </div>
          <div className="mt-10">
            <div className="text-[1.8rem] font-bold mb-2 tracking-widest">
              CERTIFICATE
            </div>

            {certificates?.map((item, index) => (

              <div key={index} className="mb-2 text-[1.2rem]">
                {item?.certificate}
                <br /> {item?.year}
              </div>
            ))}
          </div>
        </div>

        <div className={`w-[68%] pb-10 text-[#${themeColor}]`}>
          <div className="flex flex-col items-start w-full bg-gray-200 text-gray-800 p-6">
            <div className="flex items-center gap-[1rem]">
              <h2 className=" text-[3rem] leading-[3rem] font-bold tracking-widest">
                {` ${profileData?.firstName} ${profileData?.middleName}`}
              </h2>
              <h2 className="text-[3rem] leading-[3rem] font-normal tracking-widest">
                {profileData?.lastName}
              </h2>
            </div>
            <h3 className="mb-1.5 text-[2rem]">{profileData?.profession}</h3>
            <p className="text-[1.2rem]">{summary}</p>
          </div>
          <div className="p-6">
            <h1 className="text-[2rem] text-gray-800 font-bold tracking-widest mb-2">
              EXPERIENCE
            </h1>
            {experienceData?.map((item, index) => (
              <div>
                <div className="text-[1.2rem] mb-1">
                  <span>{item?.startDate}</span>
                  <span>- {item?.startDate}</span>
                </div>
                <div className="text-[1.4rem] font-semibold">
                  {item?.jobTitle}
                </div>
                <div className="text-[1.3rem] font-medium mb-1">
                  {item?.employer}
                </div>
                <span className="text-[1.1rem] font-medium mb-1">
                  {`${item?.expCity}, ${item?.expState}`}
                </span>
              </div>
            ))}
          </div>
          <div className="px-6 py-0">
            <h1 className="text-[2rem] text-gray-800 font-bold tracking-widest mb-2">
              EDUCATION
            </h1>
            {educationData.map((item, index) => (
              <div>
                <div className="text-[1.2rem] mb-1">
                  <span>{item?.educationStartDate} </span>
                  <span>- {item?.endEducationDate}</span>
                </div>
                <div className="text-[1.4rem] font-semibold mb-2">
                  {item?.fieldOfStudy}
                </div>
                <div className="text-[1.3rem] font-medium mb-1">
                  {`${item?.schoolName} | ${item?.schoolCity}`}

                </div>
                <div className="text-[1.2rem] mb-1">
                  {item?.responsibilities}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeTemp01;
