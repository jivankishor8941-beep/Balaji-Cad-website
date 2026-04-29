import React from 'react';

const About = () => {
  const features = [
    "10+ Years of Industry Experience",
    "100% Precision & Accuracy in Designs",
    "Commitment to On-time Delivery",
    "Cost-Effective & Innovative Solutions"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Left Side: NX Software Image */}
          <div className="w-full md:w-1/2">
            <div className="relative">
              {/* Siemens NX typical interface/model image */}
              <img 
                src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=1000" 
                alt="NX Software Design" 
                className="rounded-2xl shadow-2xl border-8 border-gray-100 object-cover w-full h-[400px]"
              />
              {/* Experience Badge */}
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl hidden md:block">
                <p className="text-3xl font-bold">10+</p>
                <p className="text-sm">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Leading the Way in <span className="text-blue-600">CAD Innovation</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              At Balaji CAD Solutions, we specialize in high-end engineering design. Using industry-leading software like **Siemens NX**, we transform complex ideas into precise 3D models and production-ready drawings.
            </p>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <button className="mt-10 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-bold transition-all">
              Learn More About Us
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;