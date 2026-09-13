import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Sparkles, Heart } from 'lucide-react';
import { GoldDivider, Kuthuvilakku } from './TraditionalElements';
import { INITIAL_BLESSINGS } from '../weddingData';
import { GuestBlessing } from '../types';

export const BlessingsSection: React.FC = () => {
  const [blessings, setBlessings] = useState<GuestBlessing[]>(INITIAL_BLESSINGS);
  const [authorName, setAuthorName] = useState('');
  const [relation, setRelation] = useState('');
  const [message, setMessage] = useState('');
  const [showFlowerShower, setShowFlowerShower] = useState(false);

  const handleSubmitBlessing = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !message.trim()) return;

    const newBlessing: GuestBlessing = {
      id: Date.now().toString(),
      name: authorName.trim(),
      relation: relation.trim() || 'நண்பர் / உறவினர்',
      message: message.trim(),
      timestamp: 'இப்போது',
    };

    setBlessings([newBlessing, ...blessings]);
    setAuthorName('');
    setRelation('');
    setMessage('');

    // Trigger joyous celebratory flower shower
    setShowFlowerShower(true);
    setTimeout(() => setShowFlowerShower(false), 3500);
  };

  return (
    <section
      id="blessings"
      className="relative pt-20 pb-28 sm:pt-24 sm:pb-24 px-4 sm:px-6 bg-gradient-to-b from-[#fbf8f2] via-[#faf4e8] to-[#f6f0e2] overflow-hidden scroll-mt-6 sm:scroll-mt-8"
    >
      {/* Visual Celebration Flower Shower when sending blessing */}
      <AnimatePresence>
        {showFlowerShower && (
          <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="px-6 py-4 rounded-3xl bg-[#fffefb]/95 border-2 border-[#d4af37] shadow-2xl text-center backdrop-blur-md"
            >
              <span className="text-4xl">🌸 🌼 🪔</span>
              <p className="mt-2 font-tamil-serif text-lg font-bold text-[#1f421c]">
                உங்கள் அன்பு வாழ்த்துகளுக்கு மனமார்ந்த நன்றிகள்!
              </p>
              <p className="text-xs text-[#854d0e] font-serif-eng italic">
                Thank you for your heartfelt wedding blessings!
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        {/* Sacred Traditional Invitation Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#fffefc] to-[#fbf7ee] border-2 border-[#e7d8bc] shadow-lg overflow-hidden"
        >
          {/* Subtle Corner Lamps */}
          <div className="absolute top-4 left-4 opacity-70">
            <Kuthuvilakku size="sm" />
          </div>
          <div className="absolute top-4 right-4 opacity-70">
            <Kuthuvilakku size="sm" />
          </div>

          <div className="relative z-10 max-w-lg mx-auto">
            <span className="text-xs font-serif-eng font-bold tracking-widest text-[#b45309] uppercase">
              அன்பான அழைப்பு &bull; Invitation of Love
            </span>

            <GoldDivider />

            {/* 
              Exact user requested text:
              "உங்கள் வருகையும்,
              அன்பான வாழ்த்துகளும்
              எங்கள் இல்லற வாழ்வின்
              முதல் பரிசாக அமையட்டும்."
            */}
            <blockquote className="my-6 font-tamil-serif text-xl sm:text-2xl md:text-3xl text-[#2a4425] font-bold leading-relaxed tracking-wide drop-shadow-xs">
              &ldquo;உங்கள் வருகையும்,
              <br />
              அன்பான வாழ்த்துகளும்
              <br />
              எங்கள் இல்லற வாழ்வின்
              <br />
              முதல் பரிசாக அமையட்டும்.&rdquo;
            </blockquote>

            <div className="w-24 h-[1px] bg-[#d4af37] mx-auto my-4" />

            {/* 
              Then:
              "தங்களை அன்புடன் அழைக்கிறோம்"
            */}
            <p className="font-tamil-serif text-lg sm:text-xl font-bold text-[#854d0e] tracking-wider">
              தங்களை அன்புடன் அழைக்கிறோம்
            </p>
            <p className="text-xs font-serif-eng text-[#78716c] uppercase tracking-widest mt-1">
              With Warm Greetings from Balaji &amp; Swetha Families
            </p>
          </div>
        </motion.div>

        {/* Guest Blessings & Wishes Box */}
        <div className="mt-14 text-left">
          <div className="text-center mb-6">
            <h3 className="font-tamil-serif text-2xl font-bold text-[#352516]">
              மணமக்களுக்கு வாழ்த்துரை வழங்க
            </h3>
            <p className="text-xs text-[#78716c] font-serif-eng italic">
              Share your warm blessings and wishes with the couple
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmitBlessing}
            className="p-6 sm:p-7 rounded-2xl bg-[#fffefb] border border-[#e6d7bc] shadow-sm space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-tamil-serif font-bold text-[#4a3a2a] mb-1">
                  உங்கள் பெயர் (Your Name) *
                </label>
                <input
                  type="text"
                  required
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  placeholder="உதாரணம்: ரமேஷ்"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#ded1be] bg-[#fbf9f4] focus:bg-white focus:outline-none focus:border-[#d4af37] text-sm font-tamil-serif"
                />
              </div>

              <div>
                <label className="block text-xs font-tamil-serif font-bold text-[#4a3a2a] mb-1">
                  உறவுமுறை / நட்பு (Relation / City)
                </label>
                <input
                  type="text"
                  value={relation}
                  onChange={(e) => setRelation(e.target.value)}
                  placeholder="உதாரணம்: நண்பர், சென்னை"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#ded1be] bg-[#fbf9f4] focus:bg-white focus:outline-none focus:border-[#d4af37] text-sm font-tamil-serif"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-tamil-serif font-bold text-[#4a3a2a] mb-1">
                வாழ்த்து செய்தி (Blessing Message) *
              </label>
              <textarea
                required
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="மணமக்கள் பல்லாண்டு இன்புற்று வாழ இறைவனை வேண்டுகிறோம்..."
                className="w-full px-4 py-2.5 rounded-xl border border-[#ded1be] bg-[#fbf9f4] focus:bg-white focus:outline-none focus:border-[#d4af37] text-sm font-tamil-serif"
              />
            </div>

            <button
              id="submit-blessing-btn"
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-[#2e5927] to-[#1c3f18] text-[#fef9c3] font-tamil-serif font-semibold text-sm shadow hover:shadow-md hover:scale-102 active:scale-98 transition-all border border-[#d4af37]/40 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>வாழ்த்துகளை அனுப்ப (Send Blessings)</span>
            </button>
          </form>

          {/* List of recent blessings */}
          <div className="mt-8 space-y-3">
            <h4 className="text-xs font-serif-eng font-bold tracking-wider text-[#854d0e] uppercase flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>பெறப்பட்ட நல்வாழ்த்துகள் ({blessings.length})</span>
            </h4>

            {blessings.map((b) => (
              <div
                key={b.id}
                className="p-4 rounded-xl bg-[#fffefb] border border-[#f0e4d0] shadow-xs flex items-start gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-[#f6ede0] text-[#92400e] flex items-center justify-center shrink-0 mt-0.5">
                  <Heart className="w-4 h-4 fill-[#d97706]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="font-tamil-serif font-bold text-sm text-[#244220]">
                      {b.name}
                    </span>
                    <span className="text-[11px] text-[#a8a29e] font-serif-eng">
                      {b.relation} &bull; {b.timestamp}
                    </span>
                  </div>
                  <p className="mt-1 font-tamil-serif text-xs sm:text-sm text-[#4a3b2c] leading-relaxed">
                    {b.message}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
