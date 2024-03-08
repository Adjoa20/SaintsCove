"use client";

import { useState, useEffect } from "react";
import Navbar from "../../../components/NavBar";
import { getBlogs, urlFor } from "../../../sanity/sanity-utils";
import { Blog } from "../../../types/Blogs";
import Image from "next/image";
import Link from "next/link";

const ConnectPage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedBlogs = await getBlogs();
      setBlogs(fetchedBlogs);
    };

    fetchData();
  }, []);

  return (
    <div className="bg-connectbg bg-cover bg-fixed w-full h-full flex flex-col items-center justify-center">
      <Navbar />
      <div className="max-w-6xl mx-auto px-5">
        <div className="mt-5 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
          <h2 className="text-5xl text-center font-bold text-black subpixel-antialiased items-center uppercase mt-44">The Saint Cove Blogs and Sermons</h2>
          <p className="text-lg text-black/50 mb-10 text-center uppercase">
            Read With Us 
          </p>
          {blogs.map((blog) => (
            <Link href={`/blog/${blog.slug}`} key={blog?._id}>
              <div className="flex flex-col md:flex-row gap-4 bg-[#ebe5d8] rounded-md hover:shadow-md duration-300">
                <div className="w-full md:w-3/5 group overflow-hidden rounded-tl-md rounded-bl-md relative">
                  {blog.image && (
                    <Image
                      src={urlFor(blog.image)}
                      alt={blog.name}
                      width={400}
                      height={400}
                      className="w-full max-h-[350px] object-cover"
                    />
                  )}
                  <div className="absolute top-0 left-0 w-full h-full group-hover:bg-black/20 duration-200 opacity-0 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <p className="text-lg font-bold uppercase text-white">Read Me</p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-2/5 p-4">
                  <h2 className="text-2xl font-semibold hover:text-orange-300 duration-200 cursor-pointer">
                    {blog?.name}
                  </h2>
                  <p className="text-black/100">{blog?.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConnectPage;