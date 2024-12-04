import React, { useState } from 'react';
import quoteIcon from '../assets/images/HomePage/quote.svg';
import arrowRight from '../assets/arrowRight-page.svg';
import arrowLeft from '../assets/arrowLeft-page.svg';

// Data Testimonial
const testimonialsData = [
  {
    id: 1,
    quote: "This product has been a game-changer for me!",
    name: "John Doe",
    title: "CEO, Example Co.",
    photo: "https://via.placeholder.com/50",
  },
  {
    id: 2,
    quote: "Incredible service and amazing support!",
    name: "Jane Smith",
    title: "CTO, Tech Corp.",
    photo: "https://via.placeholder.com/50",
  },
  {
    id: 3,
    quote: "Highly recommend! It improved our workflow immensely.",
    name: "Alice Johnson",
    title: "Marketing Manager, ABC Inc.",
    photo: "https://via.placeholder.com/50",
  },
  // Add more testimonials here...
];

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const testimonialsPerPage = 2;

  // Calculate the index of the first and last testimonial for the current page
  const indexOfLastTestimonial = currentPage * testimonialsPerPage;
  const indexOfFirstTestimonial = indexOfLastTestimonial - testimonialsPerPage;
  const currentTestimonials = testimonialsData.slice(indexOfFirstTestimonial, indexOfLastTestimonial);

  const totalPages = Math.ceil(testimonialsData.length / testimonialsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-full px-20 py-24 h-screen bg-white">
      <h2 className='text-4xl font-bold'>What our clients say about us</h2>
      <div className="space-y-8 flex flex-col lg:justify-center lg:flex-row lg:space-y-0 lg:gap-12 my-24">
        {currentTestimonials.map((testimonial) => (
          <div key={testimonial.id} className="flex items-start gap-4 p-6">
            <div className="text-6xl text-gray-300">
              <img src={quoteIcon} alt="" className='w-7 h-auto' />
            </div>
            <div className="flex-1">
              <p className="text-lg italic text-gray-700">{testimonial.quote}</p>
              <div className="mt-4 flex items-center gap-3">
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h5 className="font-semibold text-gray-800">{testimonial.name}</h5>
                  <p className="text-sm ">{testimonial.title}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-1 text-white rounded-lg disabled:opacity-50"
        >
          <img src={arrowLeft} alt="" className='w-5' />
        </button>
        <span className="px-4 py-2 mx-1 text-lg">{currentPage} / {totalPages}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 mx-1 rounded-lg disabled:opacity-50"
        >
          <img src={arrowRight} alt="" className='w-5' />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
