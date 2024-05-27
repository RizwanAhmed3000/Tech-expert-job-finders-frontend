import React, { useState } from "react";

// Import Icons
import { IoCloudUpload } from "react-icons/io5";
import { TfiSave } from "react-icons/tfi";

// Import Image
import UserProfileAvatar from "../../../assets/profile-avatar.jpg";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_USER } from "../../../constants/apis.js";
import Swal from "sweetalert2";
import axios from "axios";
import { updateSuccess } from "../../../Redux/Slices/userSlices";

const EditUserProfile = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state?.user?.currentUser);
  // console.log(user);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [about, setAbout] = useState("");

  // console.log(name);
  // console.log(email);
  // console.log(phone);
  // console.log(about);

  const editIntgerationHandler = async (e) => {
    e.preventDefault();

    if (phone === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Phone is Empty!",
      });
    } else if (about === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "About is Empty!",
      });
    } else {
      // console.log("signup handler is working");
      const updateUser = {
        username: name,
        email,
        phoneNumber: phone,
        aboutMe: about,
        userId: user._id,
      };
      try {
        const res = await axios.put(
          `/api/${UPDATE_USER}/${user._id} `,
          updateUser
        );
        console.log(res);
        dispatch(updateSuccess(res.data.data));
        if (res.statusText === "OK") {
          Swal.fire({
            title: "Good job!",
            text: "user Updated successfully!",
            icon: "success",
          });
        } else {
          console.error("Error Araha hai ");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
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

          <label
            htmlFor="selectProfilePic"
            className="bg-theme-red text-[1.6rem] leading-[1.6rem] flex items-center gap-[1rem] text-white px-[2rem] py-[0.9rem] rounded-md cursor-pointer"
          >
            <IoCloudUpload className="text-[1.7rem] leading-[1.6rem]" />
            <span className="tracking-[0.05rem]">PROFILE PHOTO</span>
          </label>

          <input
            type="file"
            name="selectProfilePic"
            accept=".jpg, .png, .jpeg"
            id="selectProfilePic"
            className="hidden"
          />

          <h4 className="text-[2rem] leading-[2rem] font-normal text-neutral-600 mt-[1rem]">
            {user.username}
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
                  placeholder={user.username}
                  onChange={(newValue) => setName(newValue.target.value)}
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
                  placeholder={user.email}
                  onChange={(newValue) => setEmail(newValue.target.value)}
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
                  onChange={(newValue) => setPhone(newValue.target.value)}
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
                  onChange={(newValue) => setAbout(newValue.target.value)}
                  className="w-[70%] py-[1rem] px-[1rem] text-[1.5rem] leading-[1.5rem] text-neutral-700 border-neutral-300 focus:border-theme-red border-[0.2rem] outline-none rounded-md"
                ></textarea>
              </div>

              {/* Update Button */}
              <div className="rowFifth flex justify-end">
                <button
                  onClick={editIntgerationHandler}
                  className="bg-theme-red text-[1.6rem] leading-[1.6rem] flex items-center gap-[1rem] text-white px-[2rem] py-[0.9rem] rounded-md"
                >
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
