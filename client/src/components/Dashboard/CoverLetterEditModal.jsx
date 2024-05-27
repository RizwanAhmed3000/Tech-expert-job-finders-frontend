import React, { useState } from "react";
import { FiX } from "react-icons/fi";
import Card from "react-bootstrap/Card";
import cvImg3 from "../../assets/templates/cv-template-03.png";
import SelectTemplateListing from "./SelectTemplateListing";
import { TfiSave } from "react-icons/tfi";
import { FaFloppyDisk } from "react-icons/fa6";
function CoverLetterEditModal({ setIsSelectTemplateOpen, handleCreateClick }) {

  return (
    <div className="fixed z-[100] inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-[600px] relative">
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsSelectTemplateOpen(false)}
        >
          <FiX className="text-theme-red" size={24} />
        </button>

        <h2 className=" text-2xl font-semibold mb-4 text-black">
          Personal Information
        </h2>
        <hr />
        <div className="w-full mt-3">
          <form action="#" className="w-full flex flex-col gap-[2rem]">
            {/* Row First */}
            <div className="rowFirst grid grid-cols-2 gap-[2rem]">
              {/* First Name */}
              <div className="jobTitleInput flex flex-col gap-[.5rem]">
                <label
                  htmlFor="firstName"
                  className="text-[1.2rem] leading-[1.5rem] text-theme-red"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="outline-none px-[1rem] py-[0.4rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
                />
              </div>

              {/* Middle Name */}
              <div className="employerInput flex flex-col gap-[.5rem]">
                <label
                  htmlFor="middleName"
                  className="text-[1.2rem] leading-[1.5rem] text-theme-red"
                >
                  Middle Name (Optional)
                </label>
                <input
                  type="text"
                  name="middleName"
                  id="middleName"
                  className="outline-none px-[1rem] py-[0.4rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
                />
              </div>
            </div>

            {/* Row Second */}
            <div className="rowSecond grid grid-cols-2 gap-[2rem]">
              {/* Last Name */}
              <div className="firstNameInput flex flex-col gap-[0.5rem]">
                <label
                  htmlFor="lastName"
                  className="text-[1.2rem] leading-[1.5rem] text-theme-red"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="outline-none px-[1rem] py-[0.4rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
                />
              </div>

              {/* Middle Name */}
              <div className="middleNameInput flex flex-col gap-[0.5rem]">
                <label
                  htmlFor="Profession"
                  className="text-[1.2rem] leading-[1.5rem] text-theme-red"
                >
                  Profession
                </label>
                <input
                  type="text"
                  name="Profession"
                  id="Profession"
                  placeholder="eg. Sr. Manager"
                  className="outline-none px-[1rem] py-[0.4rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
                />
              </div>
            </div>

            {/* Row Third */}
            <div className="rowThird grid grid-cols-2 gap-[2rem]">
              {/* First Name */}
              <div className="firstNameInput flex flex-col gap-[0.5rem]">
                <label
                  htmlFor="streetAdress"
                  className="text-[1.2rem] leading-[1.5rem] text-theme-red"
                >
                  Street Address
                </label>
                <input
                  type="text"
                  name="streetAdress"
                  id="streetAdress"
                  className="outline-none px-[1rem] py-[0.4rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
                />
              </div>

              {/* Middle Name */}
              <div className="middleNameInput flex flex-col gap-[0.5rem]">
                <label
                  htmlFor="phone"
                  className="text-[1.2rem] leading-[1.5rem] text-theme-red"
                >
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="outline-none px-[1rem] py-[0.4rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
                />
              </div>
              {/* Middle Name */}
              <div className="middleNameInput flex flex-col gap-[0.5rem]">
                <label
                  htmlFor="email"
                  className="text-[1.2rem] leading-[1.5rem] text-theme-red"
                >
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="outline-none px-[1rem] py-[0.4rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
                />
              </div>
            </div>

            <div className="btnRow w-full flex justify-end">
              <button className="flex gap-1 items-center m-5 bg-[#18da35] px-3 py-2 rounded-lg opacity-80 text-lg text-white hover:opacity-100 hover:cursor-pointer">
                <FaFloppyDisk />
                <span onClick={()=>handleCreateClick()}>Save & Continue</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CoverLetterEditModal;

export const CoverLetterSecondEditor = ({setIsSecondModalOpen}) => {


  return (
    <div className="fixed z-[100] inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-[600px] relative">
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsSecondModalOpen(false)}
        >
          <FiX className="text-theme-red" size={24} />
        </button>

        <h2 className=" text-2xl font-semibold mb-4 text-black">
          Employer Information
        </h2>
        <hr />
        <div className="w-full mt-3">
          <form action="#" className="w-full flex flex-col gap-[2rem]">
            {/* Row First */}
            <div className="rowFirst grid grid-cols-2 gap-[2rem]">
              {/* Recipient */}
              <div className="jobTitleInput flex flex-col gap-[.5rem]">
                <label
                  htmlFor="recipient"
                  className="text-[1.2rem] leading-[1.5rem] text-theme-red"
                >
                 Recipient
                </label>
                <input
                  type="text"
                  name="recipient"
                  id="recipient"
                  placeholder="eg. Director"
                  className="outline-none px-[1rem] py-[0.4rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
                />
              </div>

              {/* Company Name */}
              <div className="employerInput flex flex-col gap-[.5rem]">
                <label
                  htmlFor="companyName"
                  className="text-[1.2rem] leading-[1.5rem] text-theme-red"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  name="companyName"
                  id="companyName"
                  className="outline-none px-[1rem] py-[0.4rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
                />
              </div>
            </div>

            {/* Row Second */}
            <div className="rowSecond grid grid-cols-2 gap-[2rem]">
              {/* Street Address */}
              <div className="firstNameInput flex flex-col gap-[0.5rem]">
                <label
                  htmlFor="streetAddress"
                  className="text-[1.2rem] leading-[1.5rem] text-theme-red"
                >
                  Street Address
                </label>
                <input
                  type="text"
                  name="streetAddress"
                  id="streetAddress"
                  className="outline-none px-[1rem] py-[0.4rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
                />
              </div>

              {/* City */}
              <div className="middleNameInput flex flex-col gap-[0.5rem]">
                <label
                  htmlFor="city"
                  className="text-[1.2rem] leading-[1.5rem] text-theme-red"
                >
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="eg. Sr. Manager"
                  className="outline-none px-[1rem] py-[0.4rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
                />
              </div>
            </div>

            {/* Row Third */}
            <div className="rowThird grid grid-cols-2 gap-[2rem]">
              {/* State */}
              <div className="firstNameInput flex flex-col gap-[0.5rem]">
                <label
                  htmlFor="state"
                  className="text-[1.2rem] leading-[1.5rem] text-theme-red"
                >
                  State
                </label>
                <input
                  type="text"
                  name="state"
                  id="state"
                  className="outline-none px-[1rem] py-[0.4rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
                />
              </div>

              
            </div>

            <div className="btnRow w-full flex justify-end">
              <button className="flex gap-1 items-center m-5 bg-[#18da35] px-3 py-2 rounded-lg opacity-80 text-lg text-white hover:opacity-100 hover:cursor-pointer">
                <FaFloppyDisk />
                <span>Save & Continue</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
