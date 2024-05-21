import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BlogCard from '../components/BlogCard'

const Blog = () => {
    return (
        <div className="w-full relative bg-[#FEF6F5]">
            <Navbar />
            <div className='pt-[6%]'>
                <div className='header my-20'>
                    <h1 className=' text-center text-6xl font-bold text-theme-red mb-5'>Blog</h1>
                    <div className="breadCrumbs">
                        <h1 className=' text-center text-xl '>Home &gt; Blogs</h1>
                    </div>
                </div>
                <div className="blogContainer px-16 flex flex-wrap items-center justify-between my-20">
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Blog