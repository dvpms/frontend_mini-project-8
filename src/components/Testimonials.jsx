const Testimonials = () => {
    const testimonials = [
      { id: 1, text: "“This agency is amazing!”", author: "Client 1" },
      { id: 2, text: "“They exceeded our expectations.”", author: "Client 2" },
      { id: 3, text: "“We love their creativity.”", author: "Client 3" },
    ];
  
    return (
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">What our clients say about us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <blockquote key={testimonial.id} className="p-4 bg-white rounded-lg shadow-lg">
                <p>{testimonial.text}</p>
                <footer className="mt-4 text-right">— {testimonial.author}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  