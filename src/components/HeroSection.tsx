import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Sparkles } from 'lucide-react';
import { GoldDivider, BananaLeafDecor, Kuthuvilakku } from './TraditionalElements';
import heroBgImg from '../assets/images/tamil_wedding_hero_1789313217326.jpg';

interface HeroSectionProps {
  onOpenInvitation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenInvitation }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  useEffect(() => {
    // Trigger opening sequence smoothly after mount
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenInvitationClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isOpening) return;
    setIsOpening(true);

    // 1. Trigger wedding background music
    window.dispatchEvent(new CustomEvent('wedding:play-music'));

    // 2. Exact button coordinates for magical petal bloom
    const rect = e.currentTarget.getBoundingClientRect();
    const btnCenterX = rect.left + rect.width / 2;
    const btnCenterY = rect.top + rect.height / 2;

    // Release initial golden petal burst from the button
    window.dispatchEvent(
      new CustomEvent('wedding:burst-petals', {
        detail: { x: btnCenterX, y: btnCenterY, count: 28, isSpecial: true },
      })
    );

    // 3. Secondary celestial bloom from center as leaves part
    setTimeout(() => {
      window.dispatchEvent(
        new CustomEvent('wedding:burst-petals', {
          detail: {
            x: window.innerWidth / 2,
            y: window.innerHeight * 0.42,
            count: 20,
            isSpecial: false,
          },
        })
      );
    }, 320);

    // 4. Smoothly scroll into the invitation after leaves part and light radiates
    setTimeout(() => {
      onOpenInvitation();
    }, 850);
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] w-full flex flex-col justify-between items-center overflow-hidden bg-[#faf7f2] select-none"
    >
      {/* 
        LAYER 1: BACKGROUND TEMPLE SCENE
        Starts softly blurred, comes into focus, and clarifies further upon opening
      */}
      <motion.div
        initial={{ filter: 'blur(16px)', scale: 1.08, opacity: 0.6 }}
        animate={
          isOpening
            ? { filter: 'blur(0px) brightness(1.08)', scale: 1.05, opacity: 1 }
            : isLoaded
            ? { filter: 'blur(0px)', scale: 1, opacity: 1 }
            : {}
        }
        transition={{ duration: isOpening ? 1.4 : 2.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <img
          src={heroBgImg}
          alt="Traditional South Indian Temple Garden with Banana Leaves and Jasmine"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center pointer-events-none"
        />

        {/* Soft sunlight atmospheric radiance overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#faf6ee]/60 via-[#fffbf2]/20 to-[#faf5eb]/85 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,253,245,0.75)_0%,rgba(250,245,235,0.45)_50%,rgba(245,238,225,0.85)_100%)] pointer-events-none" />

        {/* Subtle animated sunbeam flare */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[160%] h-96 bg-gradient-to-b from-amber-100/40 via-yellow-50/10 to-transparent blur-3xl pointer-events-none animate-sunbeam" />
      </motion.div>

      {/* 
        SPECIAL OPENING RADIANCE: Soft golden light traveling toward center when opening
      */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={
          isOpening
            ? {
                opacity: [0, 0.75, 0.2],
                scale: [0.6, 1.3, 1.8],
              }
            : {}
        }
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(254,240,138,0.55)_0%,rgba(212,175,55,0.22)_40%,transparent_75%)] z-15"
      />

      {/* 
        LAYER 2: INDEPENDENT BANANA LEAVES FRAMING
        Breeze swaying animation on sides, gently parting outward on opening
      */}
      <motion.div
        initial={{ opacity: 0, x: -60, rotate: -6 }}
        animate={
          isOpening
            ? { opacity: 0.85, x: -95, rotate: -12 }
            : isLoaded
            ? { opacity: 1, x: 0, rotate: 0 }
            : {}
        }
        transition={
          isOpening
            ? { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
            : { duration: 1.8, delay: 0.3, ease: 'easeOut' }
        }
        className="absolute -top-6 -left-8 sm:-top-2 sm:-left-4 z-10 pointer-events-none"
      >
        <BananaLeafDecor side="left" className="w-48 sm:w-64 md:w-80 lg:w-96" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 60, rotate: 6 }}
        animate={
          isOpening
            ? { opacity: 0.85, x: 95, rotate: 12 }
            : isLoaded
            ? { opacity: 1, x: 0, rotate: 0 }
            : {}
        }
        transition={
          isOpening
            ? { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
            : { duration: 1.8, delay: 0.4, ease: 'easeOut' }
        }
        className="absolute -top-6 -right-8 sm:-top-2 sm:-right-4 z-10 pointer-events-none"
      >
        <BananaLeafDecor side="right" className="w-48 sm:w-64 md:w-80 lg:w-96" />
      </motion.div>

      {/* Top Auspicious Invocation: ஓம் ஸ்ரீ கணேசாய நமஹ */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, delay: 0.8 }}
        className="relative z-20 pt-16 sm:pt-12 px-4 flex flex-col items-center"
      >
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fdfcf9]/85 border border-[#e6d7b8]/80 shadow-xs backdrop-blur-xs max-w-[calc(100vw-115px)] sm:max-w-none text-center">
          <span className="text-[#b45309] text-xs shrink-0">ॐ</span>
          <span className="font-tamil-serif text-[#78350f] text-[11px] sm:text-sm font-semibold tracking-wider truncate sm:whitespace-normal">
            ஸ்ரீ குலதெய்வம் துணை &bull; ஸ்ரீ விநாயகர் துணை
          </span>
          <span className="text-[#b45309] text-xs shrink-0">ॐ</span>
        </div>
      </motion.div>

      {/* 
        LAYER 3: CENTER HERO CONTENT
        Names, Tamil Invitation Verse, Ornamental Divider, CTA
      */}
      <div className="relative z-20 max-w-xl mx-auto px-4 sm:px-6 my-auto text-center flex flex-col items-center py-4 sm:py-6">
        {/* Subtle decorative temple badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.9 }}
          className="mb-2"
        >
          <div className="inline-flex items-center gap-2 text-[#92400e] text-xs sm:text-sm font-medium tracking-widest uppercase font-serif-eng">
            <span className="w-6 h-[1px] bg-[#d4af37]" />
            <span>சுப முகூர்த்த அழைப்பிதழ்</span>
            <span className="w-6 h-[1px] bg-[#d4af37]" />
          </div>
        </motion.div>

        {/* 6. "திருமண அழைப்பிதழ்" fades in */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 1.1 }}
          className="font-tamil-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#3f2e1e] tracking-wide mb-3 drop-shadow-xs"
        >
          திருமண அழைப்பிதழ்
        </motion.h1>

        {/* Ornamental Flourish */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isLoaded ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.3 }}
          className="w-48 sm:w-64"
        >
          <GoldDivider />
        </motion.div>

        {/* 
          7. "Balaji & Swetha" elegantly reveals
          Visual focus with pristine typography
        */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.4, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="my-3 sm:my-5 flex flex-col items-center"
        >
          {/* Tamil Names Display */}
          <div className="w-full max-w-full px-2 flex flex-wrap items-center justify-center gap-2 sm:gap-4 font-tamil-serif font-bold text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-[#2b4c2b] tracking-wide drop-shadow-xs text-center">
            <span className="hover:text-[#1b381b] transition-colors whitespace-nowrap">பாலாஜி</span>
            <span className="text-lg sm:text-2xl md:text-3xl text-[#b45309] font-serif font-normal italic px-1 shrink-0">
              &amp;
            </span>
            <span className="hover:text-[#1b381b] transition-colors whitespace-nowrap">ஸ்வேதா</span>
          </div>

          {/* English Sub-line */}
          <p className="font-serif-eng text-xs sm:text-sm tracking-[0.2em] text-[#785b3f] uppercase font-medium mt-1">
            Balaji &amp; Swetha
          </p>
        </motion.div>

        {/* Tamil Invitation Verse */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 1.8 }}
          className="max-w-md mx-auto my-2"
        >
          <p className="font-tamil-sans text-xs sm:text-sm text-[#5c4a38] leading-relaxed font-normal">
            பெரியோர்களின் நல்லாசியுடன் நடைபெறும் எங்கள் திருமண நன்னாளுக்கு
            <br />
            தங்களை அன்புடன் அழைக்கிறோம்
          </p>
        </motion.div>

        {/* 
          8. CTA button appears with a subtle pulse:
          "அழைப்பிதழை திறக்க"
          With opening golden glow and leaves parting animation
        */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 15 }}
          animate={isLoaded ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 2.1 }}
          className="mt-4 sm:mt-5 mb-3"
        >
          <button
            id="hero-open-invitation-btn"
            onClick={handleOpenInvitationClick}
            disabled={isOpening}
            className={`group relative inline-flex items-center gap-3 px-7 sm:px-9 py-3.5 sm:py-4 rounded-full font-tamil-serif font-semibold text-base sm:text-lg transition-all duration-300 border cursor-pointer ${
              isOpening
                ? 'bg-gradient-to-r from-[#244b20] via-[#2d5e2e] to-[#244b20] text-[#fef9c3] border-[#fef08a] shadow-[0_0_35px_rgba(212,175,55,0.65)] scale-105 ring-2 ring-[#fbbf24]'
                : 'bg-gradient-to-r from-[#2e5927] via-[#244b20] to-[#1b3d17] text-[#fef9c3] border-[#d4af37]/60 shadow-lg hover:shadow-xl hover:scale-105 active:scale-98'
            }`}
          >
            <Sparkles className="w-4 h-4 text-[#fef08a] animate-pulse" />
            <span className="tracking-wide">அழைப்பிதழை திறக்க</span>
            <ChevronDown className="w-5 h-5 text-[#fef08a] group-hover:translate-y-1 transition-transform" />

            {/* Glowing subtle ring */}
            <span
              className={`absolute -inset-1 rounded-full bg-[#d4af37]/20 blur-sm group-hover:bg-[#d4af37]/35 -z-10 transition-all ${
                isOpening ? 'scale-125 bg-[#fbbf24]/50' : ''
              }`}
            />
          </button>
        </motion.div>
      </div>

      {/* 
        LAYER 4: FOREGROUND JASMINE (MALLI POO) & KUTHUVILAKKU ACCENTS
        Warm traditional Tamil temple garden atmosphere
      */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.6, delay: 0.7, ease: 'easeOut' }}
        className="relative z-15 w-full pointer-events-none pb-20 md:pb-4"
      >
        {/* Left and Right Kuthuvilakku lamps with warm glow */}
        <div className="absolute bottom-2 left-3 sm:left-10 z-20">
          <Kuthuvilakku size="md" className="drop-shadow-lg" />
        </div>
        <div className="absolute bottom-2 right-3 sm:right-10 z-20">
          <Kuthuvilakku size="md" className="drop-shadow-lg" />
        </div>

        {/* Foreground Jasmine Flower Garland (Malli poo malai) strip */}
        <div className="w-full flex justify-center items-end overflow-hidden px-2">
          <svg
            viewBox="0 0 1000 70"
            className="w-full max-w-4xl h-12 sm:h-16 drop-shadow-md"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Soft green grass base */}
            <path d="M0 65 Q 500 55 1000 65 L 1000 70 L 0 70 Z" fill="#2d5e2e" opacity="0.8" />
            {/* Clustered blooming jasmine flowers */}
            {Array.from({ length: 42 }).map((_, i) => {
              const cx = 20 + i * 23 + ((i * 7) % 11);
              const cy = 40 + ((i * 13) % 22);
              const r = 5 + (i % 3);
              return (
                <g key={i}>
                  {/* 5 petals jasmine */}
                  <circle cx={cx - 3} cy={cy - 2} r={r * 0.8} fill="#ffffff" opacity="0.95" />
                  <circle cx={cx + 3} cy={cy - 2} r={r * 0.8} fill="#ffffff" opacity="0.95" />
                  <circle cx={cx} cy={cy + 3} r={r * 0.8} fill="#ffffff" opacity="0.95" />
                  <circle cx={cx - 2} cy={cy + 3} r={r * 0.7} fill="#ffffff" opacity="0.9" />
                  <circle cx={cx + 2} cy={cy + 3} r={r * 0.7} fill="#ffffff" opacity="0.9" />
                  {/* Yellow center pollen */}
                  <circle cx={cx} cy={cy} r={r * 0.35} fill="#f59e0b" />
                </g>
              );
            })}
          </svg>
        </div>
      </motion.div>
    </section>
  );
};
