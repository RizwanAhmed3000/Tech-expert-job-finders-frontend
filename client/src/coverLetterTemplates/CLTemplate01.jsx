import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CLTemplate01 = () => {
  const templateId = "6655085ce595b205733d8e95";
  const [data, setData] = useState({});
  const {
    title,
    firstName,
    lastName,
    middleName,
    profession,
    address,
    phone,
    email,
    recipient,
    companyName,
    streetAdress,
    city,
    state,
  } = data;
  // const getCoverLetter = async () => {
  //   try {
  //     const response = await axios.get(
  //       `/api/coverLetter/getletter/6654d3dd359cd9a456e5bd2d`
  //     );
  //     console.log(response?.data?.data);
  //     setData(response?.data?.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   getCoverLetter();
  // }, []);

  const { currentData } = useSelector((state) => state.coverLetter.currentData)
  // console.log(currentData)

  const textArray = currentData.letter.split('\n')
  // console.log(textArray)

  return (
    <div className="bg-slate-300 p-8 rounded-lg shadow-lg w-[100%] ">
      <div className=" bg-white flex flex-row px-2 py-2 font-serif template">
        <div>
          <div className="text-white bg-blue-500 w-80">
            <div>
              <img
                className="w-80"
                src="https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352010-stock-illustration-default-placeholder-man-and-woman.jpg"
                alt=""
              />
              <h1 className="text-3xl text-center font-medium">{`${currentData.firstName} ${currentData.lastName}`}</h1>
              <h3 className="text-2xl text-center mt-2">{currentData.profession}</h3>
              <h4 className="text-2xl ml-2 mt-8">TO</h4>
              <hr className=" w-72 ml-4 mt-2" />
              <p className="text-xl font-medium ml-2 mt-2">{currentData.recipient}</p>
              <p className="text-xl font-medium ml-2">{currentData.companyName}</p>
              <p className="text-lg ml-2">
                {currentData.streetAddress} <br /> {currentData.city}, {currentData.state}.
              </p>
            </div>
            <div>
              <h4 className="text-2xl ml-2 mt-8">CONTACT</h4>
              <hr className=" w-72 ml-4 mt-2" />
              <p className="text-gl ml-2  mt-2">
                <i class="ri-phone-line mr-2"></i>
                {currentData.phone}
              </p>
              <p className="text-lg ml-2">
                <i class="ri-mail-line  mr-2"></i>
                {currentData.email}
              </p>
              <p className="text-lg ml-2">
                <i class="ri-map-pin-line  mr-2"></i>
                {currentData.address}
              </p>
            </div>
            <div>
              <h4 className="text-2xl ml-2 mt-8">SOCIAL LINKS</h4>
              <hr className=" w-72 ml-4 mt-2" />
              <p className="text-lg ml-2  mt-2">
                <i class="ri-facebook-circle-line  mr-2"></i>{" "}
                https://www.facebook.com/
              </p>
              <p className="text-lg ml-2">
                <i class="ri-twitter-line  mr-2"></i>https://www.twitter.com/
              </p>
              <p className="text-lg ml-2 ">
                <i class="ri-linkedin-box-line  mr-2 "></i>
                https://www.linkedIn.com/
              </p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="text-slate-700">
              <h3 className="text-2xl text-end mt-14">22 January 2021</h3>
              <div className="ml-6 mt-10 text-xl">
                {
                  textArray.map((item)=> (
                    <p className="">
                      {item}
                    </p>
                  ))
                }
                {/* <p>Dear Mr,</p>
                <p className="mt-6">
                  I am writing today in application to the Target Job Title
                  position with Target Company Name. I am confident that my
                  Skill 1 and Skill 2, as well as my experience in Industry make
                  me an excellent fit for this position.
                </p>
                <p className="mt-6">
                  As my attached resume outlines, I have Number years of
                  experience working in the Industry field. I have achieved
                  accomplishment, with describe results, and I am confident I
                  can achieve similar results for Target Company Name. I am
                  Quality 1 and Quality 2, attributes I know are important to
                  your organization. I am looking for an opportunity to outline
                  goal, and develop Skill 3 and Skill 4, while offering
                  expertise in Skill 5.
                </p>
                <p className="mt-6">
                  {" "}
                  I greatly appreciate you taking the time to consider my
                  application. I look forward to the opportunity to speak with
                  you further regarding how I can contribute to the continued
                  success of Target Company Name. Thank you again.
                </p> */}
                <p className="mt-4">Regards,</p>
                <p className="mt-1">{firstName}</p>
                <p className="mt-1">{phone}</p>
                <p className="mt-1">{email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CLTemplate01;
