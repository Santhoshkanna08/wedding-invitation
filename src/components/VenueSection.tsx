import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, Copy, Check, ExternalLink } from 'lucide-react';
import { GoldDivider, TamilKolam } from './TraditionalElements';
import { WEDDING_DATA } from '../weddingData';
import mandapamBg from '../assets/images/mandapam_venue_bg_1789313231795.jpg';

export const VenueSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    const textToCopy = `${WEDDING_DATA.venueNameTa}, ${WEDDING_DATA.venueAddressTa}`;
    navigator.clipboard?.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="venue"
      className="relative pt-20 pb-36 sm:pt-24 sm:pb-24 px-4 sm:px-6 bg-[#faf7f2] overflow-hidden scroll-mt-6 sm:scroll-mt-8"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#f4ece0] text-[#854d0e] text-xs font-semibold uppercase tracking-widest font-serif-eng mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#b45309]" />
            <span>சுப முகூர்த்த இடம்</span>
          </div>

          <h2 className="font-tamil-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#352516] tracking-wide">
            திருமண மண்டபம்
          </h2>

          <div className="max-w-xs mx-auto">
            <GoldDivider subtitle="Wedding Venue & Location Details" />
          </div>
        </motion.div>

        {/* Venue Card with Illustrated Mandapam Background */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-10 sm:mt-12 rounded-3xl overflow-hidden border-2 border-[#e3d3b7] shadow-xl bg-[#fffefc]"
        >
          {/* Top Banner with Illustrated Mandapam Scene */}
          <div className="relative h-56 sm:h-72 md:h-80 w-full overflow-hidden">
            <img
              src={mandapamBg}
              alt="Traditional South Indian Wedding Mandapam"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1f150c]/90 via-[#1f150c]/40 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
              <span className="px-3 py-1 rounded-full bg-[#d4af37]/80 text-[#3b270c] text-xs font-bold font-serif-eng w-fit mb-2 uppercase tracking-wider">
                திருமண நல்மண்டபம்
              </span>
              <h3 className="font-tamil-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#fef9c3]">
                {WEDDING_DATA.venueNameTa}
              </h3>
              <p className="text-sm font-serif-eng tracking-wider text-[#e6d5be] uppercase">
                {WEDDING_DATA.venueNameEn}
              </p>
            </div>
          </div>

          {/* Bottom Address Details & Directions Buttons */}
          <div className="p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 bg-[#fffcf7]">
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-2 text-[#854d0e] text-xs font-semibold uppercase tracking-wider font-serif-eng">
                <MapPin className="w-4 h-4 text-[#b45309]" />
                <span>முகவரி விவரம் (Venue Address)</span>
              </div>
              <p className="font-tamil-serif text-lg sm:text-xl font-bold text-[#2d2319] leading-snug">
                {WEDDING_DATA.venueNameTa}
              </p>
              <p className="font-tamil-serif text-sm sm:text-base text-[#594634] leading-relaxed">
                {WEDDING_DATA.venueAddressTa}
              </p>
              <p className="text-xs text-[#78716c] font-serif-eng italic">
                {WEDDING_DATA.venueAddressEn}
              </p>
            </div>

            {/* Actions: "வழியை காண" (Directions) & Copy */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
              <a
                id="venue-directions-btn"
                href={WEDDING_DATA.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#2e5927] to-[#1c3f18] text-[#fef9c3] font-tamil-serif font-semibold text-sm sm:text-base shadow-md hover:shadow-lg hover:scale-102 active:scale-98 transition-all border border-[#d4af37]/50"
              >
                <Navigation className="w-4 h-4 text-[#fde047]" />
                <span>வழியை காண (View Route)</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>

              <button
                id="venue-copy-address-btn"
                onClick={handleCopyAddress}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#f6eee0] hover:bg-[#ede2d0] text-[#713f12] text-xs sm:text-sm font-semibold transition-all border border-[#dec9ab]"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>முகவரி நகலெடுக்கப்பட்டது!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#854d0e]" />
                    <span>முகவரியை நகலெடுக்க (Copy)</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
