import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, Camera, Sparkles } from 'lucide-react';
import { GoldDivider, TamilKolam, Thoranam } from './TraditionalElements';
import { WEDDING_DATA } from '../weddingData';
import coupleImg from '../assets/images/couple_traditional_1789313247077.jpg';

export const CoupleSection: React.FC = () => {
  const [customPhoto, setCustomPhoto] = useState<string | null>(null);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCustomPhoto(url);
    }
  };

  return (
    <section
      id="couple"
      className="relative pt-24 pb-28 sm:pt-24 sm:pb-24 px-4 sm:px-6 bg-gradient-to-b from-[#faf5eb] via-[#fffef9] to-[#f7f2e7] overflow-hidden scroll-mt-6 sm:scroll-mt-8"
    >
      {/* Top Thoranam Mango Leaves garland */}
      <Thoranam className="absolute top-0 left-0" />

      {/* Decorative Kolam backgrounds */}
      <div className="absolute top-12 left-4 opacity-15 pointer-events-none">
        <TamilKolam className="w-24 h-24" />
      </div>
      <div className="absolute top-12 right-4 opacity-15 pointer-events-none">
        <TamilKolam className="w-24 h-24" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#f4ece0] text-[#854d0e] text-xs font-semibold uppercase tracking-widest font-serif-eng mb-3">
            <span>மணமக்கள் அறிமுகம்</span>
          </div>

          <h2 className="font-tamil-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#352516] tracking-wide leading-tight">
            இரு மனங்கள்
            <br />
            <span className="text-[#2b5927]">ஒரு வாழ்க்கை</span>
          </h2>

          <div className="max-w-xs mx-auto">
            <GoldDivider subtitle="Two Hearts, One Journey" />
          </div>
        </motion.div>

        {/* Center Display: பாலாஜி ♥ ஸ்வேதா */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-6 mb-10 w-full max-w-full px-2 flex flex-wrap items-center justify-center gap-2 sm:gap-4 font-tamil-serif text-2xl xs:text-3xl sm:text-4xl font-bold text-[#234520] text-center"
        >
          <span className="tracking-wide whitespace-nowrap">{WEDDING_DATA.groom.nameTa}</span>
          <span className="flex items-center justify-center w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-[#fae8e8] text-[#dc2626] shadow-inner border border-[#fecaca] animate-pulse shrink-0 mx-0.5">
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-[#dc2626]" />
          </span>
          <span className="tracking-wide whitespace-nowrap">{WEDDING_DATA.bride.nameTa}</span>
        </motion.div>

        {/* Traditional Ornamental Frame for Couple Portrait */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="relative max-w-sm sm:max-w-md mx-auto my-8"
        >
          {/* Outer Gold Ornamental Ring */}
          <div className="relative p-3.5 sm:p-4 rounded-3xl bg-gradient-to-tr from-[#d4af37]/30 via-[#fef08a]/60 to-[#d4af37]/30 shadow-2xl border-2 border-[#d4af37]/50">
            {/* Inner frame */}
            <div className="relative rounded-2xl overflow-hidden bg-[#fffbf2] shadow-inner aspect-[4/4.2]">
              <img
                src={customPhoto || coupleImg}
                alt="Balaji & Swetha Wedding Portrait"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
              />

              {/* Decorative corner flourishes */}
              <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-[#d4af37]" />
              <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-[#d4af37]" />
              <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-[#d4af37]" />
              <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-[#d4af37]" />

              {/* Soft overlay gradient at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#20150d]/85 via-[#20150d]/40 to-transparent flex flex-col justify-end p-4 text-white">
                <p className="font-tamil-serif font-bold text-lg text-[#fef9c3]">
                  {WEDDING_DATA.groom.nameTa} &amp; {WEDDING_DATA.bride.nameTa}
                </p>
                <p className="text-xs font-serif-eng tracking-widest text-[#fde047] uppercase opacity-90">
                  Balaji &amp; Swetha
                </p>
              </div>

              {/* Photo Upload / Change Option for user testing */}
              <label
                htmlFor="couple-photo-upload"
                className="absolute top-3 right-3 p-2 rounded-full bg-white/85 hover:bg-white text-[#78350f] shadow-md cursor-pointer transition-all hover:scale-110 active:scale-95"
                title="புகைப்படத்தை மாற்ற (Upload Couple Photo)"
              >
                <Camera className="w-4 h-4" />
                <input
                  id="couple-photo-upload"
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="hidden"
                />
              </label>
            </div>
          </div>
        </motion.div>

        {/* Groom and Bride Details Cards in Two Columns */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto text-left">
          {/* Groom Card */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-6 rounded-2xl bg-[#fffdf9] border border-[#e8ddc7] shadow-sm relative overflow-hidden group hover:border-[#d4af37] transition-all"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#fbf5e6] rounded-bl-full -z-0 opacity-50" />
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-serif-eng font-bold tracking-widest text-[#b45309] uppercase">
                  மணமகன் &bull; The Groom
                </span>
                <span className="text-sm text-[#d4af37]">❖</span>
              </div>
              <h3 className="font-tamil-serif text-2xl font-bold text-[#1f421c]">
                {WEDDING_DATA.groom.nameTa}
              </h3>
              <p className="text-xs font-display tracking-widest text-[#854d0e] uppercase mb-4">
                {WEDDING_DATA.groom.nameEn}
              </p>
              <div className="pt-3 border-t border-[#f0e6d2] space-y-1 text-sm text-[#4a3b2c] font-tamil-serif">
                <p className="text-xs text-[#854d0e]">{WEDDING_DATA.groom.relationTa}</p>
                <p className="font-medium text-[#2d251e]">{WEDDING_DATA.groom.parentsTa}</p>
                <p className="text-xs text-[#78716c] font-serif-eng italic">{WEDDING_DATA.groom.parentsEn}</p>
              </div>
            </div>
          </motion.div>

          {/* Bride Card */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-6 rounded-2xl bg-[#fffdf9] border border-[#e8ddc7] shadow-sm relative overflow-hidden group hover:border-[#d4af37] transition-all"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#fbf5e6] rounded-bl-full -z-0 opacity-50" />
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-serif-eng font-bold tracking-widest text-[#b45309] uppercase">
                  மணமகள் &bull; The Bride
                </span>
                <span className="text-sm text-[#d4af37]">❖</span>
              </div>
              <h3 className="font-tamil-serif text-2xl font-bold text-[#1f421c]">
                {WEDDING_DATA.bride.nameTa}
              </h3>
              <p className="text-xs font-display tracking-widest text-[#854d0e] uppercase mb-4">
                {WEDDING_DATA.bride.nameEn}
              </p>
              <div className="pt-3 border-t border-[#f0e6d2] space-y-1 text-sm text-[#4a3b2c] font-tamil-serif">
                <p className="text-xs text-[#854d0e]">{WEDDING_DATA.bride.relationTa}</p>
                <p className="font-medium text-[#2d251e]">{WEDDING_DATA.bride.parentsTa}</p>
                <p className="text-xs text-[#78716c] font-serif-eng italic">{WEDDING_DATA.bride.parentsEn}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Traditional Blessing Note */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#fefbf3] border border-[#eadbc1] text-[#713f12] text-xs sm:text-sm font-tamil-serif shadow-xs"
        >
          <Sparkles className="w-4 h-4 text-[#d4af37]" />
          <span>பெரியோர்களின் நல்லாசியுடன் இல்லற நெறியில் இணைந்திடும் மங்கல நாள்</span>
        </motion.div>
      </div>
    </section>
  );
};
