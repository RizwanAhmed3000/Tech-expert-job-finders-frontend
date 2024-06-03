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

const resumeTemp03 = ({ themeColor }) => {
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
              WILLIAM
            </span>
          </div>
          <div className=" text-[1.6rem]">VISUAL ARTIST</div>
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
                <FaPhoneAlt color="#444" /> <span>+41 458 2356</span>
              </div>
              <div className="text-[1.3rem] mb-1 flex items-center gap-[0.8rem]">
                <FaEnvelope color="#444" /> <span>smithwill@gmail.com</span>
              </div>
              <div className="text-[1.3rem] mb-1 flex items-center gap-[0.8rem]">
                <FaMapMarkerAlt color="#444" />{" "}
                <span>01 Street, New York, USA</span>
              </div>
              <div className="text-[1.3rem] mb-1 flex items-center gap-[0.8rem]">
                <TbWorld color="#444" /> <a href="#">www.smithwilliam.com</a>
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
                <a href="#">Facebook: facebook/smithwill</a>
              </div>
              <div className="text-[1.2rem] mb-1 flex items-center gap-[0.8rem]">
                <FaTwitter color="#444" />
                <a href="#">Twitter: twitter/smithwill</a>
              </div>
              <div className="text-[1.2rem] mb-1 flex items-center gap-[0.8rem]">
                <FaLinkedinIn color="#444" />
                <a href="#">LinkedIn: linkedin/smithwill</a>
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
              <div className="mb-2 text-[1.3rem] ">Graphic Design</div>
              <div className="mb-2 text-[1.3rem]">Web Design</div>
              <div className="mb-2 text-[1.3rem]">Visual Art</div>
              <div className="mb-2 text-[1.3rem]">Web development</div>
              <div className="mb-2 text-[1.3rem]">User Experience Design</div>
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
              <div className="mb-2 text-[1.3rem]">
                Graphic Design (2023-2024)
              </div>
              <div className="mb-2 text-[1.3rem]">
                Web Design <br /> (2023-2024)
              </div>
              <div className="mb-2 text-[1.3rem]">
                Visual Art <br /> (2023-2024)
              </div>
              <div className="mb-2 text-[1.3rem]">
                Web development <br /> (2023-2024)
              </div>
              <div className="mb-2 text-[1.3rem]">
                User Experience Design <br /> (2023-2024)
              </div>
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
              <p className="text-[1.3rem]">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
                hic, laudantium quod asperiores unde voluptatibus totam
                architecto iusto, ut debitis{" "}
              </p>
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
              <div>
                <div className="text-[1.3rem]">
                  <span>Start Date </span>
                  <span>- End Date</span>
                </div>
                <div className="text-[1.5rem] font-semibold">Job Title</div>
                <div className="text-[1.4rem] font-medium mb-1">Employment</div>
                <span className="text-[1.3rem] font-medium mb-1">
                  City, State
                </span>
                <div className="text-[1.3rem] mb-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero ex quisquam consequatur voluptates, optio ducimus quia
                  eveniet, in earum necessitatibus quaerat porro hic quibusdam
                  a!
                </div>
              </div>
              <div>
                <div className="text-[1.3rem]">
                  <span>Start Date </span>
                  <span>- End Date</span>
                </div>
                <div className="text-[1.5rem] font-semibold">Job Title</div>
                <div className="text-[1.4rem] font-medium mb-1">Employment</div>
                <span className="text-[1.3rem] font-medium mb-1">
                  City, State
                </span>
                <div className="text-[1.3rem] mb-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero ex quisquam consequatur voluptates, optio ducimus quia
                  eveniet, in earum necessitatibus quaerat porro hic quibusdam
                  a!
                </div>
              </div>
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
              <div>
                <div className="text-[1.3rem] mb-1">
                  <span>2020 </span>
                  <span>- 2020</span>
                </div>
                <div className="text-[1.5rem] font-semibold">
                  MASTER'S OF ARTS, MAJOR IN COMMUNICATION
                </div>
                <div className="text-[1.4rem] font-medium mb-1">
                  UNIVERSITY NAME | CITY NAME
                </div>
                <div className="text-[1.3rem] mb-1">
                  Sed ut perspiciatis unde omnis iste natus error sit
                  voluptatem...
                </div>
              </div>
              <div className="mt-5">
                <div className="text-[1.3rem] mb-1">
                  <span>2020 </span>
                  <span>- 2020</span>
                </div>
                <div className="text-[1.5rem] font-semibold">
                  MASTER'S OF ARTS, MAJOR IN COMMUNICATION
                </div>
                <div className="text-[1.4rem] font-medium mb-1">
                  UNIVERSITY NAME | CITY NAME
                </div>
                <div className="text-[1.3rem] mb-1">
                  Sed ut perspiciatis unde omnis iste natus error sit
                  voluptatem...
                </div>
              </div>
              <div className="mt-5">
                <div className="text-[1.3rem] mb-1">
                  <span>2020 </span>
                  <span>- 2020</span>
                </div>
                <div className="text-[1.5rem] font-semibold">
                  MASTER'S OF ARTS, MAJOR IN COMMUNICATION
                </div>
                <div className="text-[1.4rem] font-medium mb-1">
                  UNIVERSITY NAME | CITY NAME
                </div>
                <div className="text-[1.3rem] mb-1">
                  Sed ut perspiciatis unde omnis iste natus error sit
                  voluptatem...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default resumeTemp03;
