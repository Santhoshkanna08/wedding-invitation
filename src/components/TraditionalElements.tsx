import React from 'react';

// Traditional Tamil Thoranam (Mango leaves with flowers)
export const Thoranam: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`w-full overflow-hidden flex justify-center items-start pointer-events-none select-none ${className}`}>
      <svg
        viewBox="0 0 1200 70"
        className="w-full max-w-5xl h-auto drop-shadow-sm"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Sacred Yellow-Red Cord */}
        <path
          d="M0 12 Q 300 24 600 12 Q 900 24 1200 12"
          stroke="#b45309"
          strokeWidth="3"
          strokeDasharray="6 4"
        />
        <path
          d="M0 14 Q 300 26 600 14 Q 900 26 1200 14"
          stroke="#f59e0b"
          strokeWidth="2"
        />

        {/* Mango Leaves (Maavilai) Repeating across the cord */}
        {Array.from({ length: 19 }).map((_, i) => {
          const x = 35 + i * 62;
          const y = 14 + Math.sin(i * 0.35) * 5;
          const rot = (i % 3 - 1) * 4;
          return (
            <g key={i} transform={`translate(${x}, ${y}) rotate(${rot})`}>
              {/* Mango leaf shape */}
              <path
                d="M0 0 C 8 18 16 38 0 54 C -16 38 -8 18 0 0 Z"
                fill="#2e6930"
                stroke="#1e4620"
                strokeWidth="0.75"
              />
              {/* Leaf center vein */}
              <path d="M0 0 L 0 50" stroke="#4ade80" strokeWidth="0.8" opacity="0.6" />
              {/* Jasmine flower knot at top of leaf */}
              <circle cx="0" cy="2" r="3" fill="#ffffff" stroke="#fef08a" strokeWidth="0.8" />
              {i % 2 === 0 && (
                <circle cx="0" cy="53" r="2.5" fill="#f59e0b" />
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
};

// Traditional Kuthuvilakku (Sacred Brass Lamp with warm animated flickering flame)
export const Kuthuvilakku: React.FC<{ size?: 'sm' | 'md' | 'lg'; className?: string }> = ({
  size = 'md',
  className = '',
}) => {
  const heightMap = {
    sm: 'h-24 w-12',
    md: 'h-36 w-16',
    lg: 'h-52 w-24',
  };

  return (
    <div className={`relative flex flex-col items-center justify-end select-none ${heightMap[size]} ${className}`}>
      {/* Animated Glowing Flame at the Top */}
      <div className="absolute top-1 z-10 flex flex-col items-center">
        <div className="animate-lamp-flame">
          {/* Flame outer glow */}
          <div className="w-3.5 h-5 bg-gradient-to-t from-[#f59e0b] via-[#fbbf24] to-[#fef08a] rounded-[50%_50%_20%_20%] blur-[0.5px]" />
          {/* Flame core */}
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-2.5 bg-white rounded-full opacity-90" />
        </div>
      </div>

      {/* Brass Lamp Structure */}
      <svg
        viewBox="0 0 100 220"
        className="w-full h-full drop-shadow-md"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="brassGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#92400e" />
            <stop offset="30%" stopColor="#d97706" />
            <stop offset="50%" stopColor="#fbbf24" />
            <stop offset="70%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#78350f" />
          </linearGradient>
          <radialGradient id="lampBowlGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fef3c7" />
            <stop offset="100%" stopColor="#b45309" />
          </radialGradient>
        </defs>

        {/* Lamp Crown (Annam bird / Kalasam finial) */}
        <path d="M50 22 L 53 30 L 47 30 Z" fill="url(#brassGrad)" />
        <circle cx="50" cy="20" r="3.5" fill="url(#brassGrad)" />

        {/* Top Oil Bowl (Agal) */}
        <path
          d="M26 32 C 26 44 74 44 74 32 L 70 30 C 65 34 35 34 30 30 Z"
          fill="url(#brassGrad)"
          stroke="#78350f"
          strokeWidth="1"
        />

        {/* Decorative central bells/spindles */}
        <path d="M46 44 L 54 44 L 52 75 L 48 75 Z" fill="url(#brassGrad)" />
        <ellipse cx="50" cy="76" rx="14" ry="4" fill="url(#brassGrad)" />
        <ellipse cx="50" cy="80" rx="10" ry="3" fill="url(#brassGrad)" />

        {/* Mid Pillar */}
        <path d="M47 83 L 53 83 L 52 135 L 48 135 Z" fill="url(#brassGrad)" />
        <circle cx="50" cy="110" r="9" fill="url(#brassGrad)" />

        {/* Secondary decorative ring */}
        <ellipse cx="50" cy="138" rx="18" ry="5" fill="url(#brassGrad)" />

        {/* Lower stem */}
        <path d="M46 143 L 54 143 L 55 180 L 45 180 Z" fill="url(#brassGrad)" />

        {/* Stepped Pedestal Base (Peetam) */}
        <path
          d="M32 180 C 35 185 65 185 68 180 L 76 195 C 78 202 22 202 24 195 Z"
          fill="url(#brassGrad)"
          stroke="#78350f"
          strokeWidth="1"
        />
        <rect x="18" y="200" width="64" height="8" rx="2" fill="url(#brassGrad)" />
        <rect x="12" y="208" width="76" height="6" rx="2" fill="#78350f" />
      </svg>
    </div>
  );
};

// Traditional Tamil Kolam / Rangoli Motif
export const TamilKolam: React.FC<{ className?: string; color?: string }> = ({
  className = '',
  color = '#d4af37',
}) => {
  return (
    <div className={`flex items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 100 100"
        className="w-14 h-14 opacity-85"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="50" r="4" fill={color} />
        <circle cx="50" cy="30" r="2.5" fill={color} />
        <circle cx="50" cy="70" r="2.5" fill={color} />
        <circle cx="30" cy="50" r="2.5" fill={color} />
        <circle cx="70" cy="50" r="2.5" fill={color} />

        {/* Kolam loops */}
        <path
          d="M50 20 C 65 20 80 35 80 50 C 80 65 65 80 50 80 C 35 80 20 65 20 50 C 20 35 35 20 50 20 Z"
          stroke={color}
          strokeWidth="1.5"
          strokeDasharray="4 2"
        />
        <path
          d="M30 30 C 50 10 50 10 70 30 C 90 50 90 50 70 70 C 50 90 50 90 30 70 C 10 50 10 50 30 30 Z"
          stroke={color}
          strokeWidth="1.2"
        />
        <circle cx="50" cy="50" r="22" stroke={color} strokeWidth="1" strokeDasharray="1 3" />
      </svg>
    </div>
  );
};

// Traditional Gold Ornamental Divider
export const GoldDivider: React.FC<{ className?: string; subtitle?: string }> = ({
  className = '',
  subtitle,
}) => {
  return (
    <div className={`flex flex-col items-center justify-center my-4 select-none ${className}`}>
      <div className="flex items-center gap-3 w-full max-w-xs sm:max-w-sm">
        {/* Left flourish line */}
        <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-[#b45309]" />

        {/* Center icon / Kalasam & Jasmine symbol */}
        <div className="flex items-center gap-1.5 text-[#b45309]">
          <span className="text-xs text-[#d4af37]">❖</span>
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#b45309]">
            <path d="M12 2 C 11 5 8 7 8 10 C 8 13.5 10 16 12 18 C 14 16 16 13.5 16 10 C 16 7 13 5 12 2 Z" />
            <circle cx="12" cy="10" r="1.5" fill="#fef08a" />
          </svg>
          <span className="text-xs text-[#d4af37]">❖</span>
        </div>

        {/* Right flourish line */}
        <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-[#d4af37] to-[#b45309]" />
      </div>
      {subtitle && (
        <span className="mt-1.5 text-[11px] sm:text-xs text-[#854d0e] font-serif-eng italic tracking-wider">
          {subtitle}
        </span>
      )}
    </div>
  );
};

// Temple Bell (Mani)
export const TempleBell: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <svg
        viewBox="0 0 40 60"
        className="w-7 h-10 drop-shadow animate-subtle-float"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20 0 L 20 12" stroke="#b45309" strokeWidth="2" />
        <circle cx="20" cy="13" r="3" fill="#d97706" />
        <path
          d="M10 38 C 10 22 14 16 20 16 C 26 16 30 22 30 38 C 34 44 36 46 36 48 L 4 48 C 4 46 6 44 10 38 Z"
          fill="url(#bellGrad)"
          stroke="#92400e"
          strokeWidth="1"
        />
        <circle cx="20" cy="51" r="2.5" fill="#78350f" />
        <defs>
          <linearGradient id="bellGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#b45309" />
            <stop offset="50%" stopColor="#fde047" />
            <stop offset="100%" stopColor="#b45309" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

// Banana Leaf decorative corner SVG for framing
export const BananaLeafDecor: React.FC<{ side: 'left' | 'right'; className?: string }> = ({
  side,
  className = '',
}) => {
  const isLeft = side === 'left';
  return (
    <div
      className={`pointer-events-none select-none z-10 ${
        isLeft ? 'animate-sway-left' : 'animate-sway-right'
      } ${className}`}
    >
      <svg
        viewBox="0 0 200 400"
        className={`w-36 sm:w-56 md:w-72 lg:w-84 h-auto drop-shadow-xl ${isLeft ? '' : '-scale-x-100'}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4ade80" />
            <stop offset="35%" stopColor="#22c55e" />
            <stop offset="70%" stopColor="#15803d" />
            <stop offset="100%" stopColor="#14532d" />
          </linearGradient>
          <linearGradient id="leafGlow" x1="30%" y1="0%" x2="70%" y2="100%">
            <stop offset="0%" stopColor="#86efac" />
            <stop offset="100%" stopColor="#166534" />
          </linearGradient>
        </defs>

        {/* Large graceful curved banana leaf blade */}
        <path
          d="M 10 390 C 20 280 60 140 180 15 C 150 90 120 180 140 270 C 150 320 100 370 10 390 Z"
          fill="url(#leafGrad)"
        />
        <path
          d="M 10 390 C 5 270 30 150 180 15 C 110 50 40 140 30 250 C 25 310 15 360 10 390 Z"
          fill="url(#leafGlow)"
          opacity="0.85"
        />

        {/* Primary spine / midrib */}
        <path
          d="M 10 390 Q 70 230 180 15"
          stroke="#fef08a"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Parallel venation lines */}
        {[
          'M 40 330 Q 70 340 100 365',
          'M 55 285 Q 90 300 135 320',
          'M 75 235 Q 115 250 155 265',
          'M 95 190 Q 130 195 170 205',
          'M 120 140 Q 145 140 185 145',
          'M 140 90 Q 160 85 190 85',
          // Left side venation
          'M 40 330 Q 25 310 15 300',
          'M 55 285 Q 35 260 20 250',
          'M 75 235 Q 50 200 30 190',
          'M 95 190 Q 70 150 50 140',
          'M 120 140 Q 95 100 70 90',
        ].map((d, idx) => (
          <path
            key={idx}
            d={d}
            stroke="#a7f3d0"
            strokeWidth="1.2"
            opacity="0.45"
            strokeLinecap="round"
          />
        ))}
      </svg>
    </div>
  );
};
