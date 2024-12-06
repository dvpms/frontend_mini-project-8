import React from "react";
import Hero from "../assets/images/BlogDetail/Hero.png";

const blogPost = {
  id: 1,
  title: "Building a stronger brand with no-code tools",
  category: "Design",
  date: "Jan 25, 2023",
  image: "https://example.com/blog-image-1.jpg",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  content: [
    {
      type: "paragraph",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec lobortis lorem.",
    },
    {
      type: "heading",
      text: "Why do we use it?",
    },
    {
      type: "paragraph",
      text: "It is a long established fact that a reader will be distracted by the readable content.",
    },
  ],
};

const BlogDetail = () => {
  return (
    <div>
      <div
        className="relative w-full h-screen bg-cover bg-[#FDCA09] bg-cen ter"
        style={{
          backgroundImage: `url(${Hero})`,
        }}
      ></div>
      <div className="max-w-4xl mx-auto py-12 px-4">
        <img
          src={blogPost.image}
          alt={blogPost.title}
          className="w-full h-96 object-cover rounded-lg shadow-md mb-8"
        />
        <p className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-2">
          {blogPost.category}
        </p>
        <h1 className="text-4xl font-bold mb-2">{blogPost.title}</h1>
        <p className="text-gray-500 mb-8">{blogPost.date}</p>
        <p className="text-lg text-gray-700 mb-8">{blogPost.description}</p>
        {blogPost.content.map((item, index) => (
          <div key={index} className="mb-8">
            {item.type === "paragraph" && (
              <p className="text-gray-700">{item.text}</p>
            )}
            {item.type === "heading" && (
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                {item.text}
              </h2>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogDetail;
  