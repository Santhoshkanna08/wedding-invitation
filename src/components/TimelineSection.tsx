import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { GoldDivider, Thoranam } from './TraditionalElements';
import { TIMELINE_EVENTS } from '../weddingData';

export const TimelineSection: React.FC = () => {
  const getIconSymbol = (type: string) => {
    switch (type) {
      case 'flower':
        return '🌸';
      case 'leaf':
        return '🌿';
      case 'lamp':
        return '🪔';
      case 'feast':
        return '🍃';
      default:
        return '✨';
    }
  };

  return (
    <section
      id="timeline"
      className="relative pt-20 pb-28 sm:pt-24 sm:pb-24 px-4 sm:px-6 bg-gradient-to-b from-[#fbf8f2] via-[#faf5eb] to-[#f7f2e7] overflow-hidden scroll-mt-6 sm:scroll-mt-8"
    >
      <Thoranam className="absolute top-0 left-0" />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#f4ece0] text-[#854d0e] text-xs font-semibold uppercase tracking-widest font-serif-eng mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#b45309]" />
            <span>நிகழ்ச்சி நிரல்</span>
          </div>

          <h2 className="font-tamil-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#352516] tracking-wide">
            திருமண நிகழ்வுகள்
          </h2>

          <div className="max-w-xs mx-auto">
            <GoldDivider subtitle="Wedding Day Timeline & Auspicious Events" />
          </div>
        </motion.div>

        {/* Timeline Path Container */}
        <div className="relative mt-12 sm:mt-16 pl-4 sm:pl-0">
          {/* Central Connecting Vine Line */}
          <div className="absolute left-7 sm:left-1/2 top-4 bottom-8 w-1 -translate-x-1/2 bg-gradient-to-b from-[#d4af37] via-[#22c55e]/60 to-[#d4af37] rounded-full" />

          <div className="space-y-10 sm:space-y-12">
            {TIMELINE_EVENTS.map((event, idx) => {
              const isEven = idx % 2 === 0;
              const isMuhurtham = event.iconType === 'lamp';

              return (
                <motion.div
                  key={event.id}
                  id={`timeline-item-${event.id}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.7, delay: idx * 0.15 }}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Event Marker Node */}
                  <div className="absolute left-7 sm:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#fffefb] border-2 border-[#d4af37] shadow-md group-hover:scale-110 transition-transform">
                    <span className="text-xl sm:text-2xl select-none">
                      {getIconSymbol(event.iconType)}
                    </span>
                  </div>

                  {/* Empty Spacer on opposite side for desktop layout */}
                  <div className="hidden sm:block w-1/2" />

                  {/* Event Content Card */}
                  <div className={`w-full sm:w-1/2 pl-16 sm:pl-0 ${isEven ? 'sm:pr-10' : 'sm:pl-10'}`}>
                    <div
                      className={`p-5 sm:p-6 rounded-2xl border transition-all duration-300 shadow-xs hover:shadow-lg ${
                        isMuhurtham
                          ? 'bg-gradient-to-br from-[#fffdf8] to-[#fef8e7] border-2 border-[#d4af37] shadow-amber-900/5 ring-2 ring-[#d4af37]/20'
                          : 'bg-[#fffdfb] border-[#e7dac2] hover:border-[#d4af37]'
                      }`}
                    >
                      {/* Auspicious Badge */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-serif-eng font-bold tracking-widest text-[#b45309] uppercase">
                          {event.titleEn}
                        </span>
                        {isMuhurtham && (
                          <span className="px-2 py-0.5 rounded-full bg-[#b45309] text-[#fef9c3] text-[10px] font-bold font-tamil-serif">
                            முக்கிய முகூர்த்தம்
                          </span>
                        )}
                      </div>

                      {/* Event Title */}
                      <h3 className="font-tamil-serif text-xl sm:text-2xl font-bold text-[#234520]">
                        {event.titleTa}
                      </h3>

                      {/* Date & Time pills */}
                      <div className="mt-2.5 flex flex-wrap gap-2 text-xs sm:text-sm font-semibold">
                        <span className="px-3 py-1 rounded-full bg-[#f4ecd9] text-[#78350f] font-tamil-serif">
                          📅 {event.dateTa}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-[#e8f3e5] text-[#1c4d18] font-tamil-serif">
                          ⏰ {event.timeTa}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="mt-3 text-xs sm:text-sm text-[#524132] font-tamil-serif leading-relaxed">
                        {event.descriptionTa}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
