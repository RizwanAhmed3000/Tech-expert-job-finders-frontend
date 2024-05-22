import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BlogCard from '../components/BlogCard'
import PageHeader from '../components/PageHeader'
import blogCardData from "../dummyData";

const Blog = () => {
    return (
        <div className="w-full relative bg-[#FEF6F5]">
            <Navbar />
            <div className='pt-[6%]'>
                <PageHeader title={"Blog"} />
                <div className="blogContainer px-16 flex flex-wrap items-center justify-between my-20">
                    {
                        blogCardData.map(({ name, desc, imgUrl })=> (
                            <BlogCard name={name} desc={desc} imgUrl={imgUrl} />
                        ))
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Blog


    