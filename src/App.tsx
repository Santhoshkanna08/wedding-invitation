import React from 'react';
import { HeroSection } from './components/HeroSection';
import { CoupleSection } from './components/CoupleSection';
import { CountdownSection } from './components/CountdownSection';
import { WeddingDetailsSection } from './components/WeddingDetailsSection';
import { TimelineSection } from './components/TimelineSection';
import { VenueSection } from './components/VenueSection';
import { BlessingsSection } from './components/BlessingsSection';
import { FinalSection } from './components/FinalSection';
import { Navbar } from './components/Navbar';
import { AudioPlayer } from './components/AudioPlayer';
import { PetalParticles } from './components/PetalParticles';

export default function App() {
  const handleOpenInvitation = () => {
    const coupleSection = document.getElementById('couple');
    if (coupleSection) {
      coupleSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#faf7f2] font-tamil-sans text-[#2e261f] overflow-x-hidden selection:bg-[#d4af37]/30 selection:text-[#3d270c]">
      {/* Interactive Floating Jasmine Petals & Golden Pollen Canvas */}
      <PetalParticles />

      {/* Traditional Nadaswaram Background Music Toggle (Music ON / OFF) */}
      <AudioPlayer />

      {/* Minimal Floating Navigation (Desktop & Mobile Dock) */}
      <Navbar />

      <main className="relative z-10">
        {/* Full-screen Hero Section with Temple Garden & Layered Banana Leaves */}
        <HeroSection onOpenInvitation={handleOpenInvitation} />

        {/* Couple Section: இரு மனங்கள் ஒரு வாழ்க்கை */}
        <CoupleSection />

        {/* Functional Wedding Countdown */}
        <CountdownSection />

        {/* Wedding Details: திருமண விழா Cards */}
        <WeddingDetailsSection />

        {/* Event Timeline: திருமண நிகழ்வுகள் */}
        <TimelineSection />

        {/* Venue Section: திருமண மண்டபம் with Route Directions */}
        <VenueSection />

        {/* Sacred Blessings & Guest Wishes Message */}
        <BlessingsSection />

        {/* Final Floral Composition & WhatsApp Share */}
        <FinalSection />
      </main>
    </div>
  );
}
