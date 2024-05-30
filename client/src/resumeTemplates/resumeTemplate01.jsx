import React from "react";
import { useSelector } from "react-redux";
// import './App.css'; // Ensure you have your Tailwind CSS setup correctly
// import prfImages from "./images/profileImage.png";

function ResumeTemplate01() {
  const resumeData = useSelector((state) => state.resume.currentData);
  console.log(resumeData);
  const {
    firstName,
    middleName,
    lastName,
    email,
    gender,
    dob,
    endDate,
    startDate,
    marital,
    linkedinUsername,
    city,
    fbUsername,
    mobNum,
    nationality,
    websiteLink,
    twitterLink,
    summary,
    streetAddress,
    passportNo,
    profession,
    responsibilities,
    jobTitle,
    skills,
  } = resumeData;
  // const [skill] = skills
  // console.log(skill);
  // console.log(skill.skill);
  React.useEffect(() => {
    // Replace Feather icons after the component mounts
    if (window.feather) {
      window.feather.replace();
    }
  }, []);

  return (
    <div className="max-w-[1000px] w-[90%] mx-auto grid gap-16 p-20 bg-[#070707] text-white grid-cols-1 md:grid-cols-2">
      <div className="profile md:col-span-2 mb-8">
        <div className="flex gap-8 md:flex-col">
          <div className="max-w-[250px]">
            <img src="/" alt="shaif arfan" />
          </div>
          <div>
            <h1 className="text-white uppercase font-light text-2xl md:text-8xl">
              <span className="block mb-[-0.8rem]">{`${firstName} ${middleName}`}</span>
              <span className="text-[#ff7613] font-bold text-2.5xl md:text-7xl block">
                {lastName}
              </span>
            </h1>
            <p className="uppercase font-light text-xl">Software Developer</p>
            <p className="mt-4 text-xl text-[#727171]">{summary}</p>
            <a
              className="block underline mt-4 text-xl hover:text-[#ff7613]"
              href="./cv.pdf"
              download="Resume.pdf"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>

      <div className="group-1 flex flex-col gap-20">
        <div className="skills">
          <h3 className="text-[#ff7613] font-bold text-2xl uppercase">
            Expertise
          </h3>
          <ul className="mt-4 ml-8 leading-8 text-xl text-[#727171]">
            {/* <li>{skills.skill}</li> */}
            {skills.map((item) => (<li>{item.skill}</li>))}

            {/* <li>HTML CSS</li>
            <li>React JS</li>
            <li>MERN STACK</li> */}
          </ul>
        </div>

        {/* <div className="ref">
          <h3 className="text-[#ff7613] font-bold text-2xl uppercase">
            Reference
          </h3>
          <div className="mt-8">
            <h4 className="text-xl font-bold">Rashid Chy</h4>
            <p className="mt-4 text-xl text-[#727171]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id,
              neque?
            </p>
          </div>
          <div className="mt-8">
            <h4 className="text-xl font-bold">Ayman Rahman</h4>
            <p className="mt-4 text-xl text-[#727171]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </p>
          </div>
        </div> */}

        <div className="edu">
          <h3 className="text-[#ff7613] font-bold text-2xl uppercase">
            Education
          </h3>
          {/* {} */}
          <div className="mt-8">
            <p className="text-xl font-light text-[#727171]">2012-2014</p>
            <h4 className="text-xl font-medium my-2">MSC in CSE</h4>
            <p className="text-xl font-light text-[#727171]">
              Chittagong University
            </p>
          </div>
          {/* <div className="mt-8">
            <p className="text-xl font-light text-[#727171]">2008-2012</p>
            <h4 className="text-xl font-medium my-2">BSC in CSE</h4>
            <p className="text-xl font-light text-[#727171]">
              Chittagong University
            </p>
          </div> */}
        </div>

        <div className="certification">
          <h3 className="text-[#ff7613] font-bold text-2xl uppercase">
            Certification
          </h3>
          <div className="mt-8">
            <p className="text-xl font-light text-[#727171]">2018</p>
            <h4 className="text-xl font-medium my-2">Frontend Developer</h4>
            <p className="mt-4 text-xl text-[#727171]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </p>
          </div>
        </div>
      </div>

      <div className="group-2 flex flex-col gap-20">
        <div className="exp">
          <h3 className="text-[#ff7613] font-bold text-2xl uppercase">
            Experience
          </h3>
          <div className="mt-8">
            <p className="text-xl font-light text-[#727171]">2019 - present</p>
            <h4 className="text-xl font-medium my-2">Rashid Software LTD.</h4>
            <p className="text-xl font-light">Frontend Developer</p>
            <p className="mt-4 text-xl text-[#727171]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </p>
          </div>
          <div className="mt-8">
            <p className="text-xl font-light text-[#727171]">2019 - present</p>
            <h4 className="text-xl font-medium my-2">Rashid Software LTD.</h4>
            <p className="text-xl font-light">Frontend Developer</p>
            <p className="mt-4 text-xl text-[#727171]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </p>
          </div>
        </div>

        {/* <div className="awards">
          <h3 className="text-[#ff7613] font-bold text-2xl uppercase">
            Awards
          </h3>
          <div className="mt-8">
            <p className="text-xl font-light text-[#727171]">2019</p>
            <h4 className="text-xl font-medium my-2">Rashid Software LTD.</h4>
            <p className="mt-4 text-xl text-[#727171]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </p>
          </div>
          <div className="mt-8">
            <p className="text-xl font-light text-[#727171]">2019</p>
            <h4 className="text-xl font-medium my-2">Rashid Software LTD.</h4>
            <p className="mt-4 text-xl text-[#727171]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </p>
          </div>
        </div> */}

        {/* <div className="interest">
          <h3 className="text-[#ff7613] font-bold text-2xl uppercase">
            Interest
          </h3>
          <div className="mt-8 flex flex-wrap items-center gap-8">
            <div className="flex flex-col items-center justify-center gap-2 text-xl text-[#727171]">
              <i data-feather="music"></i>
              <span>Music</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 text-xl text-[#727171]">
              <i data-feather="book"></i>
              <span>Books</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 text-xl text-[#727171]">
              <i data-feather="map"></i>
              <span>Travel</span>
            </div>
          </div>
        </div> */}
      </div>

      <hr className="col-span-2 w-[80%] mx-auto mt-20 mb-4 border-t-2 border-gray-500" />

      <div className="group-3 flex flex-col md:flex-row gap-20 max-w-[700px] mx-auto">
        <div className="contact flex-1">
          <h3 className="text-[#ff7613] font-bold text-2xl uppercase">
            Contact
          </h3>
          <div className="mt-8">
            <p className="mt-4 text-xl text-[#727171]">
              Chittagong, Bangladesh
            </p>
            <p className="mt-4 text-xl text-[#727171]">{mobNum}</p>
            <p className="mt-4 text-xl text-[#727171]">{email}</p>
          </div>
        </div>

        <div className="social flex-1">
          <h3 className="text-[#ff7613] font-bold text-2xl uppercase">
            Socials
          </h3>
          <div className="mt-8">
            <a
              href="#"
              target="_blank"
              className="flex items-center gap-2 mt-6 text-xl text-[#727171] hover:text-[#ff7613]"
            >
              <i data-feather="github"></i>
              <span>{fbUsername}</span>
            </a>
            <a
              href="#"
              target="_blank"
              className="flex items-center gap-2 mt-6 text-xl text-[#727171] hover:text-[#ff7613]"
            >
              <i data-feather="twitter"></i>
              <span>{twitterLink}</span>
            </a>
            <a
              href="#"
              target="_blank"
              className="flex items-center gap-2 mt-6 text-xl text-[#727171] hover:text-[#ff7613]"
            >
              <i data-feather="linkedin"></i>
              <span>{linkedinUsername}</span>
            </a>
            <a
              href="#"
              target="_blank"
              className="flex items-center gap-2 mt-6 text-xl text-[#727171] hover:text-[#ff7613]"
            >
              <i data-feather="linkedin"></i>
              <span>{linkedinUsername}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeTemplate01;
