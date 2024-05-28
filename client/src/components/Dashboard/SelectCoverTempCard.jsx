import React from "react";
import Card from "react-bootstrap/Card";
import img from "../../assets/templates/cv-template-02.png"


const SelectCoverTempCard = ({ data }) => {
  // console.log(data, "===>>>> data")
  const { templateName, category } = data;

  return (
    <Card
      style={{ width: "180px", height: "auto" }}
      className="group/item overflow-hidden relative justify-center  rounded-lg cursor-pointer bg-white drop-shadow-lg m-[2rem]"
    >
      <div className=" object-contain overflow-hidden">
        <div className="wrapper bg-white p-4 object-cover">
          <Card.Img
            variant="top"
            src={img}

            className="object-contain rounded-lg  "
          />
        </div>
      </div>
      <div className="relative flex justify-center">


        <div className="relative text-center">
          <p className="text-3xl pt-2 text-yellow-300">{templateName}</p>
          <p className="text-3xl pt-2 text-theme-black">{`amount`}</p>

        </div>
      </div>
    </Card>
  );
};

export default SelectCoverTempCard;
