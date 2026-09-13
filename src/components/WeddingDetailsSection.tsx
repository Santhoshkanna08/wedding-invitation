import React from 'react';
import { motion } from 'motion/react';
import { CalendarDays, Clock, MapPin, Sparkles } from 'lucide-react';
import { GoldDivider, TamilKolam, Kuthuvilakku } from './TraditionalElements';
import { WEDDING_DATA } from '../weddingData';

export const WeddingDetailsSection: React.FC = () => {
  const detailCards = [
    {
      id: 'date-card',
      titleTa: 'முகூர்த்த நாள்',
      titleEn: 'Auspicious Date',
      icon: CalendarDays,
      primaryTa: WEDDING_DATA.dateFormattedTa,
      primaryEn: WEDDING_DATA.dateFormattedEn,
      tag: 'சுப முகூர்த்தம்',
    },
    {
      id: 'time-card',
      titleTa: 'முகூர்த்த நேரம்',
      titleEn: 'Muhurtham Time',
      icon: Clock,
      primaryTa: WEDDING_DATA.muhurthamTimeTa,
      primaryEn: WEDDING_DATA.muhurthamTimeEn,
      tag: 'மங்கள வேளை',
    },
    {
      id: 'venue-card',
      titleTa: 'திருமண இடம்',
      titleEn: 'Wedding Venue',
      icon: MapPin,
      primaryTa: WEDDING_DATA.venueNameTa,
      primaryEn: WEDDING_DATA.venueAddressTa,
      tag: 'மண்டபம்',
    },
  ];

  return (
    <section
      id="details"
      className="relative pt-20 pb-28 sm:pt-24 sm:pb-24 px-4 sm:px-6 bg-[#faf7f0] overflow-hidden scroll-mt-6 sm:scroll-mt-8"
    >
      {/* Decorative side accents */}
      <div className="hidden lg:block absolute left-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-80">
        <Kuthuvilakku size="lg" />
      </div>
      <div className="hidden lg:block absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-80">
        <Kuthuvilakku size="lg" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#f3e9d7] text-[#854d0e] text-xs font-semibold uppercase tracking-widest font-serif-eng mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#b45309]" />
            <span>மங்களகரமான சுப நிகழ்வு</span>
          </div>

          <h2 className="font-tamil-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#352516] tracking-wide">
            திருமண விழா
          </h2>

          <div className="max-w-xs mx-auto">
            <GoldDivider subtitle="Wedding Ceremony Details" />
          </div>

          <p className="mt-2 text-sm sm:text-base text-[#5c4a38] font-tamil-serif max-w-lg mx-auto leading-relaxed">
            அனைத்து பெரியோர்களின் அருளாசியுடன், உற்றார் உறவினர் சூழ நடைபெறும் மங்கல முகூர்த்த விழாவின் விவரங்கள்:
          </p>
        </motion.div>

        {/* 3 Temple-Inspired Detail Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {detailCards.map((card, index) => {
            const IconComp = card.icon;
            return (
              <motion.div
                key={card.id}
                id={card.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="group relative p-6 sm:p-7 rounded-3xl bg-[#fffefc] border-2 border-[#e7dac2] shadow-sm hover:shadow-xl hover:border-[#d4af37] transition-all duration-300 flex flex-col items-center justify-between"
              >
                {/* Temple Gopuram ornamental roof crest top */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#854d0e] text-[#fef08a] text-[10px] font-serif-eng font-bold tracking-wider uppercase border border-[#d4af37]/60 shadow-xs">
                  {card.tag}
                </div>

                <div className="flex flex-col items-center w-full mt-2">
                  {/* Icon with traditional brass ring */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#fbf3df] via-[#fffdf9] to-[#fef08a]/40 border border-[#d4af37]/50 flex items-center justify-center text-[#92400e] shadow-xs group-hover:scale-110 transition-transform duration-300">
                    <IconComp className="w-7 h-7" />
                  </div>

                  {/* Heading */}
                  <h3 className="mt-4 font-tamil-serif text-xl sm:text-2xl font-bold text-[#234520] tracking-wide">
                    {card.titleTa}
                  </h3>
                  <span className="text-[11px] font-serif-eng tracking-wider uppercase text-[#854d0e] opacity-80 mb-3">
                    {card.titleEn}
                  </span>

                  {/* Divider line */}
                  <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent my-1" />

                  {/* Content */}
                  <p className="mt-2 font-tamil-serif text-base sm:text-lg font-semibold text-[#382b1d] leading-snug">
                    {card.primaryTa}
                  </p>
                  <p className="mt-1 text-xs text-[#78716c] font-serif-eng italic">
                    {card.primaryEn}
                  </p>
                </div>

                {/* Bottom Kolam / Temple pattern accent */}
                <div className="mt-6 pt-3 border-t border-[#f2e7d3] w-full flex justify-center items-center text-[#d4af37] text-xs">
                  <span>❖ ❖ ❖</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
