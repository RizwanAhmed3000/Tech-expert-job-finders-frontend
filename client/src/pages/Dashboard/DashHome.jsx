import React from "react";
import DashHomeSlider from "../../components/Dashboard/DashHomeSlider";
import DashQuestion from "../../components/Dashboard/DashQuestion";

const DashHome = () => {
  return (

      
    

    <div className="min-w-[80%] pt-[7rem] flex-1 bg-coral-light">
      <DashHomeSlider />
      <DashQuestion/>

    </div>
  );
};

export default DashHome;
