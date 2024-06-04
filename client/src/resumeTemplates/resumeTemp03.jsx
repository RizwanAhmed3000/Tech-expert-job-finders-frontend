import React from "react";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { useSelector } from "react-redux";

const resumeTemp03 = ({ themeColor }) => {
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
    <div className="w-[95%] max-w-[750px] bg-white shadow-xl flex justify-center">
      <div className="cvCont w-[full]">
        <div className="tex-center p-4">
          <div className="flex gap-[0.6rem]">
            <span className="text-[3rem] font-light">SMITH</span>
            <span
              className={`text-[3rem] font-bold`}
              style={
                themeColor === "ffffff"
                  ? { color: `#222222` }
                  : { color: `#${themeColor}` }
              }
            >
              {profileData?.firstName}
            </span>
          </div>
          <div className=" text-[1.6rem]">{profileData?.profession}</div>
        </div>
        <div
          className={`h-[2px] w-[100%] mt-5`}
          style={
            themeColor === "ffffff"
              ? { backgroundColor: `#222222` }
              : { backgroundColor: `#${themeColor}` }
          }
        ></div>

        <div className="flex">
          <div className=" w-[35%] text-neutral-800 p-4">
            <div className="mb-4">
              <div
                style={
                  themeColor === "ffffff"
                    ? { color: `#222222` }
                    : { color: `#${themeColor}` }
                }
                className={`font-bold mb-2 text-[1.8rem] tracking-widest mt-[8px]`}
              >
                CONTACT
              </div>

              <div className="text-[1.3rem] mb-1 flex items-center gap-[0.8rem]">
                <FaPhoneAlt color="#444" /> <span>{profileData?.mobNum}</span>
              </div>
              <div className="text-[1.3rem] mb-1 flex items-center gap-[0.8rem]">
                <FaEnvelope color="#444" /> <span>{profileData?.email}</span>
              </div>
              <div className="text-[1.3rem] mb-1 flex items-center gap-[0.8rem]">
                <FaMapMarkerAlt color="#444" />{" "}
                <span>{profileData?.streetAddress}</span>
              </div>
              <div className="text-[1.3rem] mb-1 flex items-center gap-[0.8rem]">
                <TbWorld color="#444" /> <a href="#">{websiteLink}</a>
              </div>
              <div
                className={`h-[2px] w-[100%] mt-5`}
                style={
                  themeColor === "ffffff"
                    ? { backgroundColor: `#222222` }
                    : { backgroundColor: `#${themeColor}` }
                }
              ></div>
            </div>
            <div className="mb-4 mt-6">
              <div
                style={
                  themeColor === "ffffff"
                    ? { color: `#222222` }
                    : { color: `#${themeColor}` }
                }
                className={`font-bold mb-2 text-[1.8rem] tracking-widest`}
              >
                SOCIAL
              </div>
              <div className=" text-[1.2rem] mb-1 flex items-center gap-[0.8rem]">
                <FaFacebookF color="#444" />
                <a href="#"> {fbUserName}</a>
              </div>
              <div className="text-[1.2rem] mb-1 flex items-center gap-[0.8rem]">
                <FaTwitter color="#444" />
                <a href="#">{twitterUserName}</a>
              </div>
              <div className="text-[1.2rem] mb-1 flex items-center gap-[0.8rem]">
                <FaLinkedinIn color="#444" />
                <a href="#">{linkedinUserName}</a>
              </div>
              <div
                className={`h-[2px] w-[100%] mt-5`}
                style={
                  themeColor === "ffffff"
                    ? { backgroundColor: `#222222` }
                    : { backgroundColor: `#${themeColor}` }
                }
              ></div>
            </div>
            <div className="mt-6">
              <div
                style={
                  themeColor === "ffffff"
                    ? { color: `#222222` }
                    : { color: `#${themeColor}` }
                }
                className={`font-bold mb-2 text-[1.8rem] tracking-widest`}
              >
                SKILLS
              </div>
              {skills.map((item, index) => (
                <div key={index} className="mb-2 text-[1.3rem] ">
                  {item.skill}
                </div>
              ))}

              <div
                className={`h-[2px] w-[100%] mt-5`}
                style={
                  themeColor === "ffffff"
                    ? { backgroundColor: `#222222` }
                    : { backgroundColor: `#${themeColor}` }
                }
              ></div>
            </div>
            <div className="mt-6">
              <div
                style={
                  themeColor === "ffffff"
                    ? { color: `#222222` }
                    : { color: `#${themeColor}` }
                }
                className={`font-bold mb-2 text-[1.8rem] tracking-widest`}
              >
                CERTIFICATE
              </div>
              {certificates.map((item) => (
                <div className="mb-2 text-[1.3rem]">
                  {item?.certificate} <br /> {item?.year}
                </div>
              ))}
            </div>
          </div>

          <div className=" w-[65%] ">
            <div className="flex flex-col items-start w-full p-6  ">
              <div className="flex">
                <h2
                  style={
                    themeColor === "ffffff"
                      ? { color: `#222222` }
                      : { color: `#${themeColor}` }
                  }
                  className={`font-bold text-[1.8rem] tracking-widest`}
                >
                  ABOUT
                </h2>
              </div>
              <p className="text-[1.3rem]">{summary}</p>
              <div
                className={`h-[2px] w-[100%] mt-2`}
                style={
                  themeColor === "ffffff"
                    ? { backgroundColor: `#222222` }
                    : { backgroundColor: `#${themeColor}` }
                }
              ></div>
            </div>
            <div className="px-6 py-8">
              <h1
                style={
                  themeColor === "ffffff"
                    ? { color: `#222222` }
                    : { color: `#${themeColor}` }
                }
                className={`font-bold text-[1.8rem] tracking-widest mb-2 mt-[-25px]"`}
              >
                EXPERIENCE
              </h1>
              {experienceData.map((item, index) => (
                <div className="mt-6" key={index}>
                <div className="text-[1.3rem]">
                  <span>{item?.startDate} </span>
                  <span>- {item?.endDate}</span>
                </div>
                <div className="text-[1.5rem] font-semibold">{item?.jobTitle}</div>
                <div className="text-[1.4rem] font-medium mb-1">{item?.employer}</div>
                <span className="text-[1.3rem] font-medium mb-1">
                {`${item?.expCity}, ${item?.expState}`}
                </span>
                <div className="text-[1.3rem] mb-1">
                {item?.responsibilities}
                </div>
              </div>
              ))}
              

              <div
                className={`h-[2px] w-[100%] mt-4`}
                style={
                  themeColor === "ffffff"
                    ? { backgroundColor: `#222222` }
                    : { backgroundColor: `#${themeColor}` }
                }
              ></div>
            </div>
            <div className="px-6 pb-10">
              <h1
                style={
                  themeColor === "ffffff"
                    ? { color: "#222222" }
                    : { color: `#${themeColor}` }
                }
                className={`text-[1.8rem] font-bold tracking-widest mb-4`}
              >
                EDUCATION
              </h1>
              
              {educationData.map((item,index) => (<div className="mt-5">
                <div className="text-[1.3rem] mb-1">
                  <span>{item?.educationStartDate} </span>
                  <span>- {item?.endEducationDate}</span>
                </div>
                <div className="text-[1.5rem] font-semibold">
                {item?.fieldOfStudy}
                </div>
                <div className="text-[1.4rem] font-medium mb-1">
                {`${item?.schoolName} | ${item?.schoolCity}`}
                </div>
                {/* <div className="text-[1.3rem] mb-1">
                {item?.fieldOfStudy}
                </div> */}
              </div>))}
              



            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default resumeTemp03;
