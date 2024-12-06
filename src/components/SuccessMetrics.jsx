import React from 'react';

const SuccessMetrics = () => {
  const metrics = [
    {
      value: '350 +',
      label: 'Clients Worldwide',
    },
    {
      value: '20 +',
      label: 'Team Members',
    },
    {
      value: '100 +',
      label: 'Projects Completed',
    },
    {
      value: '85M +',
      label: 'Revenue Generated',
    },
  ];

  return (
    <section className="bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <h3 className="text-4xl font-bold text-yellow-400 mb-2">{metric.value}</h3>
              <p className="text-xl text-white">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessMetrics;