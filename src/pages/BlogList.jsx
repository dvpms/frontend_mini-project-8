import React, { useState } from "react";
import { FixedSizeList as List } from "react-window";
import Hero from "../assets/images/BlogList/Hero.png";

const blogPosts = [
  {
    id: 1,
    title: "Building a stronger brand with no-code tools",
    category: "Design",
    date: "Jan 25, 2023",
    image: "https://example.com/blog-image-1.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    title: "Copywriters and designers: How to work better together",
    category: "Design",
    date: "Mar 14, 2023",
    image: "https://example.com/blog-image-2.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    title: "The best online tools for web development",
    category: "Development",
    date: "Apr 12, 2023",
    image: "https://example.com/blog-image-3.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 4,
    title: "The importance of typography in design",
    category: "Design",
    date: "May 10, 2023",
    image: "https://example.com/blog-image-4.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 5,
    title: "The role of a UX designer in a development team",
    category: "UX Design",
    date: "Jun 11, 2023",
    image: "https://example.com/blog-image-5.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 6,
    title: "The best ways to learn web development online",
    category: "Development",
    date: "Jul 09, 2023",
    image: "https://example.com/blog-image-6.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 7,
    title: "The benefits of using a design system",
    category: "Design",
    date: "Aug 20, 2023",
    image: "https://example.com/blog-image-7.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 8,
    title: "The best practices for designing a website",
    category: "Design",
    date: "Sep 15, 2023",
    image: "https://example.com/blog-image-8.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 9,
    title: "The best tools for web development",
    category: "Development",
    date: "Oct 12, 2023",
    image: "https://example.com/blog-image-9.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 10,
    title: "The best resources for learning UX design",
    category: "UX Design",
    date: "Nov 15, 2023",
    image: "https://example.com/blog-image-10.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 11,
    title: "The best ways to optimize a website for search engines",
    category: "SEO",
    date: "Dec 17, 2023",
    image: "https://example.com/blog-image-11.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 12,
    title: "The best practices for designing a website for mobile devices",
    category: "Design",
    date: "Jan 10, 2024",
    image: "https://example.com/blog-image-12.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];


const BlogList = () => {
  const [showAllPosts, setShowAllPosts] = useState(false);

  const handleLoadMore = () => {
    setShowAllPosts(true);
  };

  return (
    <div>
      <div
        className="relative w-full h-screen bg-cover bg-[#FDCA09] bg-cen ter"
        style={{
          backgroundImage: `url(${Hero})`,
        }}
      ></div>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Check out our interesting articles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {!showAllPosts
            ? blogPosts.slice(0, 6).map((post) => (
                <div
                  key={post.id}
                  className="p-4 bg-white rounded-md shadow-md"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-lg font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.description}</p>
                  <a
                    href={`/blog/${post.id}`}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Read More &rarr;
                  </a>
                </div>
              ))
            : blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="p-4 bg-white rounded-md shadow-md"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-lg font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.description}</p>
                  <a
                    href={`/blog/${post.id}`}
                    className="hover:text-gray-700"
                  >
                    Read More &rarr;
                  </a>
                </div>
              ))}
        </div>
        {!showAllPosts && (
          <div className="mt-8 text-center">
            <button
              onClick={handleLoadMore}
              className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogList;
