import React from "react";
import JobCard from "./JobCard";
import { jobCardData } from "../dummyData";
const JobListingCmp = () => {
  return (
    <div>
      <div className="py-[6rem] mb-5">
        <h1 className="text-[3rem] text-theme-red text-center font-bold">
          Job Listing
        </h1>
      </div>

      <div className="flex justify-evenly flex-wrap py-[2rem]">
        {jobCardData.map((data) => (
          <JobCard data={data} key={Date.now()} />
        ))}
      </div>
    </div>
  );
};

export default JobListingCmp;
