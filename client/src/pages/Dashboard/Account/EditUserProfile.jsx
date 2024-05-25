import React from "react";

// Import Icons
import { IoCloudUpload } from "react-icons/io5";
import { TfiSave } from "react-icons/tfi";

// Import Image
import UserProfileAvatar from "../../../assets/profile-avatar.jpg";

const EditUserProfile = () => {
  return (
    <div className="p-[3rem]">
      {/* Row First */}
      <div className="rowFirst grid grid-cols-12 gap-[4rem]">
        {/* User Profile Card */}
        <div className="userProfileCard col-span-4 flex flex-col items-center gap-[1.5rem] p-[4rem] max-h-[42rem] bg-white shadow-2xl rounded-2xl">
          <img
            src={UserProfileAvatar}
            alt="UserProfilePic"
            className="w-full h-[25rem] px-[2rem] rounded-lg object-cover shadow-lg border-neutral-300 border-[0.6rem] border-double"
          />

          <button className="bg-theme-red text-[1.6rem] leading-[1.6rem] flex items-center gap-[1rem] text-white px-[2rem] py-[0.9rem] rounded-md">
            <IoCloudUpload className="text-[1.7rem] leading-[1.6rem]" />
            <span className="tracking-[0.05rem]">PROFILE PHOTO</span>
          </button>

          <h4 className="text-[2rem] leading-[2rem] font-normal text-neutral-600 mt-[1rem]">
            Muhammad Nabeel
          </h4>
        </div>

        {/* Edit Profile Form */}
        <div className="userProfileInfo col-span-8 bg-white shadow-2xl rounded-2xl">
          <form action="#" className="w-full">
            {/* Form Header */}
            <header className="w-full px-[3rem] py-[2rem] border-b-[0.1rem] border-neutral-300">
              <span className="text-[2.4rem] leading-[2.4rem] font-normal">
                Edit Profile
              </span>
            </header>

            {/* Form Body */}
            <div className="inputFieldsCont w-full flex flex-col gap-[2rem] px-[3rem] py-[2rem]">
              {/* Profile Name */}
              <div className="profilename flex items-start">
                <label
                  htmlFor="profilename"
                  className="w-[30%] text-[1.5rem] text-theme-red"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="profilename"
                  id="profilename"
                  className="w-[70%] py-[0.6rem] px-[1rem] text-[1.5rem] leading-[1.5rem] text-neutral-700 border-neutral-300 focus:border-theme-red border-[0.2rem] outline-none rounded-md"
                />
              </div>

              {/* Email */}
              <div className="email flex items-start">
                <label
                  htmlFor="email"
                  className="w-[30%] text-[1.5rem] text-theme-red"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-[70%] py-[0.6rem] px-[1rem] text-[1.5rem] leading-[1.5rem] text-neutral-700 border-neutral-300 focus:border-theme-red border-[0.2rem] outline-none rounded-md"
                />
              </div>

              {/* Phone Number */}
              <div className="phonenumber flex items-start">
                <label
                  htmlFor="phonenumber"
                  className="w-[30%] text-[1.5rem] text-theme-red"
                >
                  Phone
                </label>
                <input
                  type="number"
                  name="phonenumber"
                  id="phonenumber"
                  className="w-[70%] py-[0.6rem] px-[1rem] text-[1.5rem] leading-[1.5rem] text-neutral-700 border-neutral-300 focus:border-theme-red border-[0.2rem] outline-none rounded-md"
                />
              </div>

              {/* About Me */}
              <div className="aboutMe flex items-start">
                <label
                  htmlFor="aboutme"
                  className="w-[30%] text-[1.5rem] text-theme-red"
                >
                  About Me
                </label>
                <textarea
                  rows={2}
                  name="aboutme"
                  id="aboutme"
                  className="w-[70%] py-[1rem] px-[1rem] text-[1.5rem] leading-[1.5rem] text-neutral-700 border-neutral-300 focus:border-theme-red border-[0.2rem] outline-none rounded-md"
                ></textarea>
              </div>

              {/* Update Button */}
              <div className="rowFifth flex justify-end">
                <button className="bg-theme-red text-[1.6rem] leading-[1.6rem] flex items-center gap-[1rem] text-white px-[2rem] py-[0.9rem] rounded-md">
                  <TfiSave className="text-[1.7rem] leading-[1.6rem]" />
                  <span className="tracking-[0.05rem]">Update</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditUserProfile;
