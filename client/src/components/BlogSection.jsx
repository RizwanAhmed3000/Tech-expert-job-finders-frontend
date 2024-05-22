import React from "react";
import blogCardData from "../dummyData";
import BlogCard from "./BlogCard";

const BlogSection = () => {
  return (
    <div className="blogCardCont p-16 flex flex-wrap items-center justify-between my-20 bg-[#FEF6F5] ">
      {blogCardData.map(({ name, desc, imgUrl }) => (
        <BlogCard name={name} desc={desc} imgUrl={imgUrl} />
      ))}
    </div>
  );
};

export default BlogSection;
