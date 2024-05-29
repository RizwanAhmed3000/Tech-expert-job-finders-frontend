import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import resumeTwo from "../../assets/templates/cv-template-02.png";
import { useDispatch, useSelector } from "react-redux";
import { resumeSuccess } from "../../Redux/Slices/resumeSlices";
const SelectResumeTemplateCard = ({ data, route, key }) => {
  const dispatch = useDispatch()
  // const resumeData = useSelector(resume.)
  // const { name, src } = data;
  // console.log(route);
  console.log(data);
  const {_id} = data

  const { resumeTemplateName, category, price } = data;

  return (
    <Card
      key={key}
      // style={{ width: "180px" }}
      className="w-full group/item overflow-hidden relative justify-center  rounded-lg cursor-pointer bg-white drop-shadow-lg m-[2rem]"
    >
      <div className=" object-contain overflow-hidden">
        <div className="wrapper bg-white p-4 object-cover">
          <Card.Img
            variant="top"
            src={resumeTwo}
            className="object-contain rounded-lg"
          />
        </div>
      </div>
      <div className="relative flex justify-center">
        <div className="relative text-center">
          <p className="text-3xl pt-2 text-yellow-300">{resumeTemplateName}</p>
        </div>
      </div>

      <div className="selectTemplateButton group-hover/item:flex hidden absolute top-0 left-0 w-full h-full border-[0.2rem] border-neutral-700 items-center justify-center">
        <Link to={route}>
          <button 
          onClick={dispatch(resumeSuccess({templateId: _id}))}
          className="selectTemplateButton bg-neutral-700 py-[0.8rem] px-[1.5rem] text-[1.6rem] leading-[1.6rem] text-white rounded-md ">
            Select
          </button>
        </Link>
      </div>
    </Card>
  );
};

export default SelectResumeTemplateCard;
