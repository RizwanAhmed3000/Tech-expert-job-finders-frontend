import React from "react";
import { blogCardData } from "../dummyData";
import BlogCard from "./BlogCard";

const BlogSection = () => {
  return (
    <div className="bg-[#FEF6F5] my-20">
      <div className="text-center py-[5rem]">
        <p className="text-theme-yellow text-[2.3rem]">LATEST NEWS</p>
        <p className="text-theme-red text-[3.5rem] font-semibold">
          Our Latest Articles
        </p>
      </div>
      <div className="blogCardCont p-16 flex flex-wrap items-center justify-between ">
        {blogCardData.map(({ name, desc, imgUrl }, index) => (
          <div
            key={index}
            style={{ width: "307px", height: "381px" }}
            className="bg-[#ffffff] group/item overflow-hidden mb-10 cursor-pointer"
          >
            <BlogCard name={name} desc={desc} imgUrl={imgUrl} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
