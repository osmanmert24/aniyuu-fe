import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../components/Logo';

// Background resimlerini import edelim
import bg1 from '../assets/bg/background1.jpg';
import bg2 from '../assets/bg/background2.jpg';
import bg3 from '../assets/bg/background3.jpg';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Picsum URLs yerine local resimleri kullanalım
  const slides = [bg1, bg2, bg3];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-screen w-full relative overflow-hidden">
      {/* Slider Container with enhanced overlay */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{ zIndex: currentSlide === index ? 1 : 0 }}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
              ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="h-full w-full object-cover"
            />
            {/* Enhanced gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/60" />
          </div>
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* Transparent Navbar */}
        <nav className="relative z-50 backdrop-blur-sm bg-black/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between py-6">
              {/* Logo - Sol Köşede */}
              <div className="flex items-center">
                <Logo className="h-12 w-auto transition-transform duration-300 hover:scale-110" />
              </div>

              {/* Desktop Navigation - Ortalanmış */}
              <div className="hidden md:flex items-center justify-center space-x-12 flex-1 px-8">
                {['Animeler', 'Kategoriler', 'Haberler', 'İletişim'].map((item, index) => (
                  <Link
                    key={index}
                    to={`/${item.toLowerCase()}`}
                    className="text-white text-lg font-medium hover:text-purple-400 transition-colors duration-300 relative group"
                  >
                    {item}
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </Link>
                ))}
              </div>

              {/* Giriş Yap - Sağ Köşede */}
              <Link
                to="/login"
                className="text-white px-6 py-2 rounded-lg border border-white/20 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                Giriş Yap
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden absolute right-6 text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  />
                </svg>
              </button>
            </div>

            {/* Mobile Menu with enhanced blur */}
            {isMenuOpen && (
              <div className="md:hidden absolute inset-x-0 px-6 py-4 bg-black/40 backdrop-blur-md">
                {['Animeler', 'Kategoriler', 'Haberler', 'İletişim'].map((item, index) => (
                  <Link
                    key={index}
                    to={`/${item.toLowerCase()}`}
                    className="block py-3 text-white text-lg hover:text-purple-400 transition-colors duration-300"
                  >
                    {item}
                  </Link>
                ))}
                <Link
                  to="/login"
                  className="block py-3 text-white text-lg hover:text-purple-400 transition-colors duration-300 border-t border-white/10 mt-2 pt-4"
                >
                  Giriş Yap
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* Page Content Container */}
        <div className="relative z-10 container mx-auto px-6 pt-32">
          {/* Buraya sayfa içeriği gelecek */}
        </div>
      </div>
    </div>
  );
};

export default Home;