import React, { useState } from 'react';
import myLogo from './logo.jpeg'; // Aapka logo file

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Option A: Menu Items
  const navLinks = [
    { name: 'Home', href: '#home'},
    { name: 'About Us', href: '#about-section' },
    { name: 'Services', href: '#services-section' },
    { name: 'Projects', href: '#projects-section'},
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-20 top-0 left-0 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          
          {/* LOGO SECTION */}
          <div className="flex-shrink-0 flex items-center">
            <img 
              src={myLogo} 
              alt="Balaji CAD Solutions Logo" 
              className="h-14 w-auto object-contain" 
            />
            <span className="ml-3 font-bold text-xl text-slate-800 tracking-tight">
              Balaji <span className="text-blue-600">CAD</span> Solutions
            </span>
          </div>

          {/* DESKTOP MENU (Option A) */}
          <div className="hidden md:flex items-center space-x-6">
  {/* Ye aapke purane links (Home, Services, etc.) */}
  {navLinks.map((link) => (
    <a 
      key={link.name}
      href={link.href} 
      className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
    >
      {link.name}
    </a>
  ))}

  {/* 2. WhatsApp Contact Button */}
  <a 
    href="https://wa.me/918851476210?text=Hi%20Balaji%20CAD%20Solutions,%20I%20want%20to%20discuss%20a%20project." 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-4 py-2 rounded-md font-semibold transition-all shadow-sm"
  >
    {/* WhatsApp SVG Icon */}
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
    Contact
  </a>
</div>

          {/* MOBILE BUTTON */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
              <span className="text-3xl">{isOpen ? '✕' : '☰'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="block px-3 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;