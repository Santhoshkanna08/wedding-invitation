import React from 'react';
import { motion } from 'motion/react';
import { Heart, Share2, Sparkles, ArrowUp } from 'lucide-react';
import { GoldDivider, BananaLeafDecor, Kuthuvilakku, TamilKolam } from './TraditionalElements';
import { WEDDING_DATA } from '../weddingData';
import heroBgImg from '../assets/images/tamil_wedding_hero_1789313217326.jpg';

export const FinalSection: React.FC = () => {
  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      `🙏 திருமண அழைப்பிதழ் 🙏\n\nபாலாஜி ♥ ஸ்வேதா\n(Balaji & Swetha Wedding Invitation)\n\nமுகூர்த்த நாள்: ${WEDDING_DATA.dateFormattedTa}\nநேரம்: ${WEDDING_DATA.muhurthamTimeTa}\nஇடம்: ${WEDDING_DATA.venueNameTa}\n\nஅழைப்பிதழை காண: ${window.location.href}\n\nதங்கள் வருகையை அன்புடன் எதிர்நோக்குகிறோம்!`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative min-h-[90vh] w-full flex flex-col justify-between items-center overflow-hidden bg-[#faf7f2] select-none pt-16 pb-32 sm:pb-20 text-center">
      {/* Background Temple & Flora ambiance from the hero visual language */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-30">
        <img
          src={heroBgImg}
          alt="Tamil Temple Backdrop"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#faf7f2] via-[#faf7f2]/80 to-transparent" />
      </div>

      {/* Decorative Banana Leaves Framing Bottom */}
      <div className="absolute -bottom-10 -left-10 z-10 pointer-events-none opacity-85">
        <BananaLeafDecor side="left" className="w-48 sm:w-64" />
      </div>
      <div className="absolute -bottom-10 -right-10 z-10 pointer-events-none opacity-85">
        <BananaLeafDecor side="right" className="w-48 sm:w-64" />
      </div>

      <div className="relative z-20 max-w-xl mx-auto px-4 my-auto flex flex-col items-center">
        {/* Sacred Kolam header */}
        <TamilKolam className="w-16 h-16 mb-4 text-[#d4af37]" />

        {/* 
          Display:
          "பாலாஜி ♥ ஸ்வேதா"
        */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-3 sm:gap-4 font-tamil-serif font-bold text-3xl sm:text-4xl text-[#234520]"
        >
          <span>{WEDDING_DATA.groom.nameTa}</span>
          <Heart className="w-6 h-6 text-[#dc2626] fill-[#dc2626] animate-pulse" />
          <span>{WEDDING_DATA.bride.nameTa}</span>
        </motion.div>

        <p className="mt-1 font-display tracking-[0.2em] text-[#854d0e] uppercase text-xs sm:text-sm font-semibold">
          Balaji &amp; Swetha
        </p>

        <GoldDivider />

        {/* 
          "என்றென்றும் இணைந்து..."
        */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-tamil-serif text-lg sm:text-xl font-bold text-[#b45309] italic my-2 tracking-wide"
        >
          &ldquo;என்றென்றும் இணைந்து...&rdquo;
        </motion.p>

        {/* 
          Then:
          "உங்கள் அன்பும்
          ஆசியும் என்றும் வேண்டுகிறோம்"
        */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="my-4 px-6 py-4 rounded-2xl bg-[#fffefc]/80 border border-[#e8dac2] shadow-xs backdrop-blur-xs"
        >
          <p className="font-tamil-serif text-base sm:text-lg text-[#3f2e1e] font-semibold leading-relaxed">
            உங்கள் அன்பும்
            <br />
            ஆசியும் என்றும் வேண்டுகிறோம்
          </p>
          <p className="mt-1 text-xs text-[#78716c] font-serif-eng italic">
            Seeking your blessings, love and presence always
          </p>
        </motion.div>

        {/* WhatsApp Share Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 flex flex-col sm:flex-row items-center gap-3"
        >
          <button
            id="share-whatsapp-btn"
            onClick={handleShareWhatsApp}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-tamil-serif font-semibold text-sm shadow-md hover:scale-102 active:scale-98 transition-all cursor-pointer"
          >
            <Share2 className="w-4 h-4" />
            <span>வாட்ஸ்அப்பில் பகிர்க (Share on WhatsApp)</span>
          </button>

          <button
            id="scroll-top-btn"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-[#f4ebe0] hover:bg-[#ebdcc8] text-[#713f12] text-xs font-semibold transition-all border border-[#d9c7ab]"
          >
            <ArrowUp className="w-4 h-4" />
            <span>மேலே செல்க</span>
          </button>
        </motion.div>
      </div>

      {/* Bottom Jasmine Garland and Lamp strip */}
      <div className="relative z-15 w-full flex justify-center items-center gap-8 pointer-events-none mt-auto pt-6">
        <Kuthuvilakku size="sm" />
        <div className="text-center font-tamil-serif text-xs text-[#854d0e] opacity-85">
          மங்களகரமான சுப முகூர்த்த அழைப்பிதழ் &bull; Balaji &amp; Swetha
        </div>
        <Kuthuvilakku size="sm" />
      </div>
    </footer>
  );
};
