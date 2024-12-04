import React from "react";
import { Link } from "react-router-dom";

const BlogPosts = () => {
  const Blogs = [
    {
      id: 1,
      title: "The Best Design for Your Website",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vestibulum.",
      photo: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "How to Create a Responsive Website",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vestibulum.",
      photo: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "The Importance of Typography in Design",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vestibulum.",
      photo: "https://via.placeholder.com/150",
    },
  ];
  return (
    <div className="w-full px-20 py-24 h-screen bg-white">
      <div className="title flex justify-between items-center px-12">
        <h2 className="text-4xl font-bold">
          Check out our interesting articles
        </h2>
        <Link to="/Blog" className="underline">SEE ALL</Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-16 px-14">
        {Blogs.map((blog) => (
          <div key={blog.id} className="bg-white rounded-lg shadow-md p-4">
            <img
              src={blog.photo}
              alt={blog.title}
              className="w-full h-auto mb-4 rounded-t-lg"
            />
            <div className="px-6 py-4">
              <h3 className="text-2xl font-bold mb-2">{blog.title}</h3>
              <p className="text-gray-600 mb-4">{blog.desc}</p>
              <a
                href="#"
                className="text-blue-500 hover:underline transition duration-300 ease-in-out"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;
