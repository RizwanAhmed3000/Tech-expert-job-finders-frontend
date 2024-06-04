import React from "react";

const FeatureAsistanceContent = ({ key, img, head, para }) => {
  return (
    <>
      <div className="flex items-center">
        <img src={img} alt="" className="h-16" />
        <span className="text-xl font-bold ml-2">{head}</span>
      </div>
      <div className="text-lg mt-2">{para}</div>
    </>
  );
};

export default FeatureAsistanceContent;
