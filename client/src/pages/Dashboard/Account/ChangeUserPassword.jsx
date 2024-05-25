import React from "react";

// Import Icons
import { TfiSave } from "react-icons/tfi";

const EditUserProfile = () => {
  return (
    <div className="p-[3rem]">
      {/* Row First */}
      <div className="rowFirst grid grid-cols-12 gap-[4rem]">
        {/* Edit Profile Form */}
        <div className="userProfileInfo col-span-8 bg-white shadow-2xl rounded-2xl">
          <form action="#" className="w-full">
            {/* Form Header */}
            <header className="w-full px-[3rem] py-[2.5rem] border-b-[0.1rem] border-neutral-300">
              <span className="text-[2.4rem] leading-[2.4rem] font-normal">
                Change Password
              </span>
            </header>

            {/* Form Body */}
            <div className="inputFieldsCont w-full flex flex-col gap-[2rem] px-[3rem] py-[2rem]">
              {/* Current Password */}
              <div className="currentPassword flex items-start">
                <label
                  htmlFor="currentPassword"
                  className="w-[30%] text-[1.5rem] text-theme-red"
                >
                  Current Password
                </label>
                <input
                  type="password"
                  name="currentPassword"
                  id="currentPassword"
                  className="w-[70%] py-[0.6rem] px-[1rem] text-[1.5rem] leading-[1.5rem] text-neutral-700 border-neutral-300 focus:border-theme-red border-[0.1rem] outline-none rounded-md"
                />
              </div>

              {/* New Password */}
              <div className="newPassword flex items-start">
                <label
                  htmlFor="newPassword"
                  className="w-[30%] text-[1.5rem] text-theme-red"
                >
                  New Password
                </label>
                <input
                  type="newPassword"
                  name="newPassword"
                  id="newPassword"
                  className="w-[70%] py-[0.6rem] px-[1rem] text-[1.5rem] leading-[1.5rem] text-neutral-700 border-neutral-300 focus:border-theme-red border-[0.1rem] outline-none rounded-md"
                />
              </div>

              {/* Confirm Password */}
              <div className="confirmPassword flex items-start">
                <label
                  htmlFor="confirmPassword"
                  className="w-[30%] text-[1.5rem] text-theme-red"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  className="w-[70%] py-[0.6rem] px-[1rem] text-[1.5rem] leading-[1.5rem] text-neutral-700 border-neutral-300 focus:border-theme-red border-[0.1rem] outline-none rounded-md"
                />
              </div>

              <div className="rowFifth flex justify-end">
                <button className="bg-theme-red text-[1.6rem] leading-[1.6rem] flex items-center gap-[1rem] text-white px-[2rem] py-[1rem] rounded-md">
                  <TfiSave className="text-[1.7rem] leading-[1.6rem]" />
                  <span className="tracking-[0.05rem]">Change password</span>
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
