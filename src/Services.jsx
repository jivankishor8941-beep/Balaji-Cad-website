import React from 'react';

const Services = () => {
  // Humne ek array banaya hai services ka data store karne ke liye
  const serviceData = [
    {
      id: 1,
      title: "2D Drafting & Detailing",
      desc: "High-precision 2D technical drawings and blueprints for manufacturing and construction.",
      icon: "📐"
    },
    {
      id: 2,
      title: "3D Product Design",
      desc: "Advanced 3D modeling and rendering to bring your product concepts to life.",
      icon: "🏗️"
    },
    {
      id: 3,
      title: "Mechanical Engineering Solutions",
      desc: "Complete end-to-end engineering support, from design analysis to final production.",
      icon: "⚙️"
    }
  ];

  return (
    <section id="services-section" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Professional Services</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          We provide specialized CAD and engineering solutions to streamline your design process.
        </p>

        {/* Option A: Hover Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceData.map(({ id, title, desc, icon }) => (
            <div 
              key={id} 
              className="bg-white p-8 rounded-xl shadow-md border-b-4 border-transparent hover:border-blue-600 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer group"
            >
              <div className="text-5xl mb-6">{icon}</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-blue-600">
                {title}
              </h3>
              <p className="text-gray-600 mb-6">
                {desc}
              </p>
              {/* Read More Link */}
              <a href="#" className="text-blue-600 font-semibold flex items-center justify-center hover:underline">
                Read More <span className="ml-2">→</span>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;