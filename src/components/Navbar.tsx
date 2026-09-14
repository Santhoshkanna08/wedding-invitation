import React, { useState, useEffect } from 'react';
import { Home, Users, Sparkles, Calendar, MapPin } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', labelTa: 'முகப்பு', labelEn: 'Home', icon: Home },
    { id: 'couple', labelTa: 'மணமக்கள்', labelEn: 'Couple', icon: Users },
    { id: 'details', labelTa: 'திருமணம்', labelEn: 'Wedding', icon: Sparkles },
    { id: 'timeline', labelTa: 'நிகழ்வுகள்', labelEn: 'Events', icon: Calendar },
    { id: 'venue', labelTa: 'இடம்', labelEn: 'Venue', icon: MapPin },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* 
        DESKTOP FLOATING NAVBAR (Top Center)
      */}
      <nav className="hidden md:flex fixed top-4 left-1/2 -translate-x-1/2 z-40 items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#fffefb]/90 border border-[#d4af37]/40 shadow-lg backdrop-blur-md">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          const IconComp = item.icon;
          return (
            <button
              key={item.id}
              id={`nav-btn-${item.id}`}
              onClick={() => scrollToSection(item.id)}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold font-tamil-serif transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-r from-[#2e5927] to-[#1e3f19] text-[#fef9c3] shadow-xs'
                  : 'text-[#5a4837] hover:text-[#2e5927] hover:bg-[#f6efe2]'
              }`}
            >
              <IconComp className="w-3.5 h-3.5" />
              <span>{item.labelTa}</span>
            </button>
          );
        })}
      </nav>

      {/* 
        MOBILE FLOATING BOTTOM DOCK
        Optimized for WhatsApp mobile viewers & all mobile screen widths
      */}
      <div className="md:hidden fixed bottom-2.5 inset-x-0 z-40 flex justify-center px-2 pointer-events-none">
        <nav className="pointer-events-auto flex items-center justify-between w-full max-w-sm px-1.5 py-1 rounded-full bg-[#fffefc]/95 border border-[#d4af37]/50 shadow-xl backdrop-blur-lg">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            const IconComp = item.icon;
            return (
              <button
                key={item.id}
                id={`mobile-nav-btn-${item.id}`}
                onClick={() => scrollToSection(item.id)}
                className={`flex-1 min-w-0 flex flex-col items-center justify-center py-1 px-1 rounded-full text-center transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#2b5927] text-[#fef9c3] font-bold shadow-xs'
                    : 'text-[#6e5844] hover:text-[#2b5927]'
                }`}
              >
                <IconComp className={`w-3.5 h-3.5 ${isActive ? 'text-[#fde047]' : 'text-[#854d0e]'}`} />
                <span className="text-[9px] xs:text-[10px] leading-tight mt-0.5 whitespace-nowrap truncate w-full text-center">
                  {item.labelTa}
                </span>
              </button>
            );
          })}
        </nav>
      </div>
    </>
  );
};
