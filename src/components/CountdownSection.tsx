import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calendar, Bell, Clock } from 'lucide-react';
import { WEDDING_DATE, WEDDING_DATA } from '../weddingData';
import { GoldDivider } from './TraditionalElements';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

export const CountdownSection: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +WEDDING_DATE - +new Date();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isPast: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Google Calendar URL generator
  const getGoogleCalendarUrl = () => {
    const startTime = WEDDING_DATE.toISOString().replace(/-|:|\.\d\d\d/g, '');
    const endTimeDate = new Date(WEDDING_DATE.getTime() + 4 * 60 * 60 * 1000); // 4 hours duration
    const endTime = endTimeDate.toISOString().replace(/-|:|\.\d\d\d/g, '');
    const title = encodeURIComponent(`${WEDDING_DATA.groom.nameEn} & ${WEDDING_DATA.bride.nameEn} Wedding (திருமணம்)`);
    const details = encodeURIComponent(
      `Balaji & Swetha Subha Muhurtham Wedding Invitation.\nநேரம்: ${WEDDING_DATA.muhurthamTimeTa}\nஇடம்: ${WEDDING_DATA.venueNameTa}, ${WEDDING_DATA.venueAddressTa}`
    );
    const location = encodeURIComponent(`${WEDDING_DATA.venueNameEn}, ${WEDDING_DATA.venueAddressEn}`);

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startTime}/${endTime}&details=${details}&location=${location}`;
  };

  const timeBlocks = [
    { labelTa: 'நாட்கள்', labelEn: 'Days', value: timeLeft.days },
    { labelTa: 'மணிகள்', labelEn: 'Hours', value: timeLeft.hours },
    { labelTa: 'நிமிடங்கள்', labelEn: 'Minutes', value: timeLeft.minutes },
    { labelTa: 'நொடிகள்', labelEn: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section className="relative pt-16 pb-28 sm:pt-20 sm:pb-20 px-4 sm:px-6 bg-[#f7f2e6] border-y border-[#ebdcc1]/80 scroll-mt-6 sm:scroll-mt-8">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#eee3ce] text-[#854d0e] text-xs font-semibold uppercase tracking-wider mb-2 font-serif-eng">
            <Clock className="w-3.5 h-3.5 text-[#b45309]" />
            <span>சுப முகூர்த்த கால கணிப்பு</span>
          </div>

          <h2 className="font-tamil-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#352516] tracking-wide">
            திருமண நாளை எதிர்நோக்கி...
          </h2>

          <div className="max-w-xs mx-auto">
            <GoldDivider subtitle="Counting Down to the Auspicious Hour" />
          </div>
        </motion.div>

        {/* Countdown Grid */}
        <div className="mt-8 grid grid-cols-4 gap-2.5 sm:gap-4 max-w-xl mx-auto">
          {timeBlocks.map((block, idx) => (
            <motion.div
              key={block.labelEn}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative p-3 sm:p-5 rounded-2xl bg-[#fffefc] border-2 border-[#e6d8be] shadow-sm hover:border-[#d4af37] transition-all flex flex-col items-center justify-center overflow-hidden"
            >
              {/* Subtle gold corner accent */}
              <div className="absolute top-1.5 right-1.5 text-[8px] text-[#d4af37] opacity-60">❖</div>

              <span className="font-serif-eng text-2xl sm:text-4xl md:text-5xl font-bold text-[#234520] tracking-tight tabular-nums">
                {String(block.value).padStart(2, '0')}
              </span>

              <span className="mt-1 font-tamil-serif font-semibold text-xs sm:text-sm text-[#4a3b2c]">
                {block.labelTa}
              </span>

              <span className="text-[10px] sm:text-xs text-[#854d0e] font-serif-eng uppercase tracking-wider opacity-75">
                {block.labelEn}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Add to Calendar Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            id="add-to-calendar-btn"
            href={getGoogleCalendarUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-[#fffcf5] border border-[#d4af37] text-[#78350f] text-xs sm:text-sm font-semibold shadow-xs hover:bg-[#faf4e4] hover:shadow-md hover:scale-102 transition-all font-tamil-serif"
          >
            <Calendar className="w-4 h-4 text-[#b45309]" />
            <span>காலண்டரில் சேர்க்க (Add to Calendar)</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
