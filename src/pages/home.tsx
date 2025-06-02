

import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "axios";

import backgroundVideo from "../assets/hero-section-vdo-bg.mp4";
import box1 from "../assets/box1.png";
import box2 from "../assets/box2.png";
import box3 from "../assets/box3.png";
import box4 from "../assets/box4.png";

import Card from "../components/card";

interface Blog {
  documentId: any;
  id: number;
  title: string;
  content: string;
  image: {
    url: string;
    formats?: {
      medium?: { url: string };
      small?: { url: string };
    };
  }[];
}

const Home: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    axios
      .get(`http://localhost:1338/api/blogs?populate=*`)
      .then((res) => {
        setBlogs(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching blogs:", err);
      });
  }, []);
    console.log(blogs)
  return (
    <>
      
      <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-10 text-center px-4 sm:px-6 md:px-12 lg:px-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white leading-tight">
            Where Words Come to Life <br />
            <span className="block text-blue-300">Inspire. Learn. Share.</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-6 md:mb-8 max-w-3xl mx-auto animate-fadeInUp opacity-0 animate-delay-200">
            Welcome to your source of stories, knowledge, and fresh ideas —
            explore posts on tech, life, creativity, and more. <br />
            Dive in, find your spark, and share your voice with the world.
          </p>
          <a
            href="/category-blog/:category"
            className="inline-block bg-blue-600 text-white text-sm sm:text-base px-6 py-2 sm:px-8 sm:py-3 rounded-lg shadow-md hover:bg-blue-700 transition transform hover:scale-105 animate-fadeInUp delay-300"
          >
            Category
          </a>
        </div>
      </div>

     
      <div className="max-w-6xl mx-auto p-4">
        <div className="mb-10">
          <h2 className="text-xl font-bold mb-4">Popular Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[box1, box2, box3, box4].map((img, idx) => (
              <div
                key={idx}
                className="bg-gray-300 h-24 rounded transform transition duration-500 ease-in-out hover:scale-105 animate-fadeInUp"
              >
                <img
                  src={img}
                  alt="Category"
                  className="w-full h-full object-cover rounded"
                />
              </div>
            ))}
          </div>
        </div>

       
        <div>
         <h2 className="text-xl font-bold mb-4">Recent Blog Posts</h2>
          <div className="grid gap-6 md:grid-rows-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <Link to={`/blogs/${blog.documentId}`} key={blog.id}>
                <Card
                  image={
                   blog.image[0].url
                  }
                  title={blog.title}
                  description={blog.content.substring(0, 150) + "..."}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
