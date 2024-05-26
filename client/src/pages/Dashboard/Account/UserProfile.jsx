import React from "react";

// Import Icons
import { MdOutlineStarPurple500 } from "react-icons/md";
import { HiOutlineUpload } from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";
import { FaBriefcase } from "react-icons/fa";
import { IoCloudUpload, IoTimeOutline } from "react-icons/io5";
import { PiArrowBendUpRightBold } from "react-icons/pi";
import { FaEarthAmericas } from "react-icons/fa6";

// Import Image
import UserProfileAvatar from "../../../assets/profile-avatar.jpg";

const UserProfile = () => {
  return (
    <div className="px-[4rem] py-[4rem]">
      {/* Row First */}
      <div className="rowFirst grid grid-cols-12 gap-[4rem]">
        {/* User Profile Card */}
        <div className="userProfileCard col-span-4 flex flex-col items-center justify-center gap-[1.2rem] py-[3rem] px-[1rem] bg-white shadow-2xl rounded-2xl">
          <img
            src={UserProfileAvatar}
            alt="UserProfilePic"
            className="w-[10rem] h-[10rem] rounded-full object-cover shadow-lg"
          />

          <h4 className="text-[2rem] leading-[2rem] font-normal">
            Muhammad Nabeel
          </h4>

          <span className="text-[2rem] leading-[2rem] text-theme-yellow flex">
            {[1, 2, 3, 4, 5].map((e, index) => (
              <MdOutlineStarPurple500 key={index} />
            ))}
          </span>

          <button className="bg-theme-red text-[1.6rem] leading-[1.6rem] flex items-center gap-[1rem] text-white px-[2rem] py-[0.9rem] rounded-md">
            <HiOutlineUpload className="text-[1.7rem] leading-[1.6rem]" />
            <span>Edit Photo</span>
          </button>
        </div>

        {/* User Profile Info */}
        <div className="userProfileInfo col-span-8 bg-white shadow-2xl rounded-2xl p-[2rem]">
          <div className="subCont flex justify-between pb-[1.5rem] border-b-[0.1rem] border-neutral-300">
            <div className="LeftSide flex gap-[3rem] text-neutral-800">
              {/* Followers */}
              <div className="followers flex flex-col gap-[0.6rem]">
                <span className="text-[2.2rem] leading-[2.2rem] font-medium">
                  0
                </span>
                <span className="text-[1.3rem] leading-[1.3rem] font-normal text-neutral-500">
                  Followers
                </span>
              </div>

              {/* Following */}
              <div className="following flex flex-col gap-[0.6rem]">
                <span className="text-[2.2rem] leading-[2.2rem] font-medium">
                  0
                </span>
                <span className="text-[1.3rem] leading-[1.3rem] font-normal text-neutral-500">
                  Following
                </span>
              </div>

              {/* Questions */}
              <div className="question flex flex-col gap-[0.6rem]">
                <span className="text-[2.2rem] leading-[2.2rem] font-medium">
                  0
                </span>
                <span className="text-[1.3rem] leading-[1.3rem] font-normal text-neutral-500">
                  Question
                </span>
              </div>
            </div>

            <div className="rightSide">
              <button className="bg-theme-red text-[1.6rem] leading-[1.6rem] flex items-center gap-[1rem] text-white px-[2rem] py-[0.9rem] rounded-md">
                <IoMdSettings className="text-[1.7rem] leading-[1.6rem]" />
                <span>Settins</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Row Second */}
      <div className="rowSecond grid grid-cols-12 gap-[4rem] mt-[4rem]">
        {/* User Question Feeds */}
        <div className="userQuestionFeeds col-span-7 flex flex-col items-center gap-[2rem]">
          {/* Alert Feeds Box */}
          <div className="alertFeedsBox w-full bg-theme-red text-white p-[2rem] rounded-lg">
            <p className="text-[1.5rem] leading-[1.5rem] ">
              No question feeds at this time
            </p>
          </div>

          {/* Feeds */}
          <div className="feeds w-full flex flex-col gap-[2rem]"></div>

          {/* Load More Btn */}
          <div className="loadMoreBtnCont w-full flex justify-center">
            <button className="bg-theme-red text-[1.6rem] leading-[1.6rem] flex items-center gap-[1rem] text-white px-[2rem] py-[1rem] rounded-md">
              Load more..
            </button>
          </div>
        </div>

        {/* Jobs Trending */}
        <div className="jobsTrending col-span-5 flex flex-col gap-[1rem]">
          <h4 className="ml-[1rem] text-[2rem] text-theme-red font-semibold">
            Job / <span className="opacity-[0.8]">Trending</span>
          </h4>

          {/* Jobs Trending Cards */}
          <div className="jobCardsCont flex flex-col gap-[3rem]">
            {[1, 2, 3, 4].map((data, index) => (
              <div
                key={index}
                className="profileJobsCard w-full bg-white p-[2rem] rounded-lg"
              >
                {/* Card Top */}
                <div className="cardTop relative w-full flex items-center gap-[1rem] px-[1rem] py-[1rem] border-b-[0.1rem] border-neutral-300">
                  {/* Job Icon */}
                  <div className="icon text-[1.8rem] leading-[1.8rem] bg-theme-red text-white p-[0.8rem] rounded-full">
                    <FaBriefcase />
                  </div>

                  {/* Job Company */}
                  <h5 className="w-full pr-[3rem] text-[1.8rem] leading-[2rem] text-neutral-800 font-medium">
                    Energy Department Punjab
                  </h5>

                  <div className="time absolute right-0 flex items-center gap-[0.2rem] text-[1.2rem] leading-[1.2rem]">
                    <IoTimeOutline />
                    <span>3 min</span>
                  </div>
                </div>

                {/* Card Bottom */}
                <div className="cardBottom w-full flex flex-col gap-[1rem] px-[1rem] py-[1rem]">
                  <p className="text-[2rem] leading-[2.4rem] font-medium">
                    Archaeology Department Latest Jobs
                  </p>

                  <div className="text-[1.4rem] leading-[1.4rem] flex items-center gap-[0.2rem] text-neutral-500">
                    <FaEarthAmericas />
                    <span>Pakistan</span>
                  </div>

                  <button className="bg-theme-red text-[1.6rem] leading-[1.6rem] flex justify-center gap-[1rem] text-white px-[2rem] py-[1.2rem] rounded-md  font-medium mt-[1rem] shadow-lg">
                    <PiArrowBendUpRightBold className="text-[1.7rem] leading-[1.6rem]" />
                    <span className="tracking-[0.05rem]">Apply Now</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
