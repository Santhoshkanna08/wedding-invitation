import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize and handle playback
  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (err) {
        console.warn('Audio play was prevented by browser policy:', err);
        setIsPlaying(false);
      }
    }
  };

  // Listen to custom event when guest clicks "Open Invitation"
  useEffect(() => {
    const handleStartMusicEvent = () => {
      const audio = audioRef.current;
      if (audio && !isPlaying) {
        audio.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    };

    window.addEventListener('wedding:play-music', handleStartMusicEvent);
    return () => {
      window.removeEventListener('wedding:play-music', handleStartMusicEvent);
    };
  }, [isPlaying]);

  return (
    <>
      {/* Hidden HTML5 Audio Element streaming the requested A.R. Rahman song */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      >
        <source src="/audio/ae_maanpuru_mangaiyae.mp3" type="audio/mpeg" />
        <source src="/audio/ae_maanpuru_mangaiyae.m4a" type="audio/mp4" />
      </audio>

      {/* Small, non-intrusive floating toggle button */}
      <div className="fixed top-2.5 right-2.5 sm:top-3 sm:right-4 z-50">
        <button
          id="wedding-music-toggle-btn"
          onClick={toggleMusic}
          title={
            isPlaying
              ? 'பாடலை நிறுத்த (Click to pause): ஏ மாண்புறு மங்கையே - A.R. Rahman'
              : 'பாடலை இசைக்க (Click to play): ஏ மாண்புறு மங்கையே - A.R. Rahman'
          }
          aria-label={
            isPlaying
              ? 'திருமண பாடலை நிறுத்துக (Music OFF)'
              : 'திருமண பாடலை இசைக்க (Music ON)'
          }
          className={`group inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1 rounded-full border shadow-sm backdrop-blur-md transition-all duration-200 cursor-pointer ${
            isPlaying
              ? 'bg-[#2b4c2b]/95 text-[#fef9c3] border-[#d4af37]/60 ring-1 ring-[#d4af37]/40'
              : 'bg-[#fffdf9]/95 text-[#5a4837] border-[#ded1be] hover:border-[#d4af37]/60 hover:text-[#2b4c2b]'
          }`}
        >
          <div className="flex items-center justify-center shrink-0">
            {isPlaying ? (
              <Volume2 className="w-3.5 h-3.5 text-[#fbbf24] animate-pulse" />
            ) : (
              <VolumeX className="w-3.5 h-3.5 text-[#8a7259] group-hover:text-[#2d5a27]" />
            )}
          </div>

          <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider font-serif-eng uppercase whitespace-nowrap">
            {isPlaying ? 'Music ON' : 'Music OFF'}
          </span>

          {isPlaying && (
            <span className="flex items-end gap-0.5 h-2.5">
              <span className="w-0.5 bg-[#fbbf24] rounded-full animate-pulse h-1.5" />
              <span
                className="w-0.5 bg-[#fbbf24] rounded-full animate-pulse h-2.5"
                style={{ animationDelay: '150ms' }}
              />
            </span>
          )}
        </button>
      </div>
    </>
  );
};
