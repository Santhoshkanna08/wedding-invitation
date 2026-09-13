import { WeddingInfo, TimelineEvent } from './types';

// =======================================================================
// CONFIGURABLE WEDDING DATE & TIME
// Change this single variable to update the entire countdown & event dates!
// =======================================================================
export const WEDDING_DATE = new Date('2026-11-15T09:30:00');

export const WEDDING_DATA: WeddingInfo = {
  groom: {
    nameEn: 'Balaji',
    nameTa: 'பாலாஜி',
    parentsTa: 'திரு. [தந்தை பெயர்] & திருமதி. [தாய் பெயர்]',
    parentsEn: 'Mr. [Father Name] & Mrs. [Mother Name]',
    relationTa: 'அவர்களின் அன்புமகன்',
  },
  bride: {
    nameEn: 'Swetha',
    nameTa: 'ஸ்வேதா',
    parentsTa: 'திரு. [தந்தை பெயர்] & திருமதி. [தாய் பெயர்]',
    parentsEn: 'Mr. [Father Name] & Mrs. [Mother Name]',
    relationTa: 'அவர்களின் அன்புச்செல்வி',
  },
  muhurthamDate: WEDDING_DATE,
  dateFormattedTa: '2026 நவம்பர் 15, ஞாயிற்றுக்கிழமை',
  dateFormattedEn: 'Sunday, 15th November 2026',
  muhurthamTimeTa: 'காலை 9:00 மணி முதல் 10:30 மணிக்குள் (சுப முகூர்த்தம்)',
  muhurthamTimeEn: '9:00 AM - 10:30 AM (Subha Muhurtham)',
  venueNameTa: '[திருமண மண்டப பெயர்]',
  venueNameEn: '[Wedding Hall / Mandapam Name]',
  venueAddressTa: '[முகவரி, தெரு பெயர், ஊர், மாவட்டம் - அஞ்சல் குறியீடு]',
  venueAddressEn: '[Address, Street, City, State - PIN Code]',
  // User can paste their actual Google Maps share link here
  googleMapsUrl: 'https://maps.google.com/?q=Meenakshi+Amman+Temple+Madurai',
};

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: 'nichayathartham',
    titleTa: 'நிச்சயதார்த்தம்',
    titleEn: 'Nichayathartham (Engagement)',
    iconType: 'flower',
    dateTa: '[தேதி / DATE]',
    dateEn: '[Date]',
    timeTa: '[மாலை 6:00 மணி முதல்]',
    timeEn: '[From 6:00 PM onwards]',
    descriptionTa: 'இரு குடும்பத்தினரும் கூடி மணமக்களை வாழ்த்தி தாம்பூலம் மாற்றும் புனித நிகழ்வு.',
    descriptionEn: 'The auspicious formal engagement and exchange of thamboolam between families.',
  },
  {
    id: 'reception',
    titleTa: 'திருமண வரவேற்பு',
    titleEn: 'Wedding Reception',
    iconType: 'leaf',
    dateTa: '[தேதி / DATE]',
    dateEn: '[Date]',
    timeTa: '[மாலை 7:00 மணி முதல்]',
    timeEn: '[From 7:00 PM onwards]',
    descriptionTa: 'உற்றார், உறவினர், நண்பர்கள் புடைசூழ மணமக்களை வாழ்த்தும் இனிய மாலை விழா.',
    descriptionEn: 'An evening of celebration, blessings, music and joy with friends and family.',
  },
  {
    id: 'muhurtham',
    titleTa: 'முகூர்த்தம்',
    titleEn: 'Subha Muhurtham',
    iconType: 'lamp',
    dateTa: '2026 நவம்பர் 15, ஞாயிற்றுக்கிழமை',
    dateEn: 'Sunday, 15th November 2026',
    timeTa: 'காலை 9:00 - 10:30 மணிக்குள்',
    timeEn: '9:00 AM - 10:30 AM',
    descriptionTa: 'மங்கள வாத்தியங்கள் முழங்க, பெரியோர்களின் ஆசியுடன் மங்கலநாண் பூட்டும் மங்களகரமான நேரம்.',
    descriptionEn: 'The sacred tying of the Thirumaangalyam amidst nadaswaram chants and blessings.',
  },
  {
    id: 'virundhu',
    titleTa: 'விருந்து',
    titleEn: 'Kalyana Virundhu (Feast)',
    iconType: 'feast',
    dateTa: '2026 நவம்பர் 15',
    dateEn: 'Sunday, 15th November 2026',
    timeTa: 'மதியம் 12:00 மணி முதல்',
    timeEn: '12:00 PM onwards',
    descriptionTa: 'வாழை இலை போட்டு அறுசுவை உணவுகளுடன் கூடிய பாரம்பரிய தென்னிந்திய திருமண விருந்து.',
    descriptionEn: 'Traditional South Indian wedding feast served on fresh banana leaf with traditional delicacies.',
  },
];

export const INITIAL_BLESSINGS = [
  {
    id: '1',
    name: 'பெரியோர்கள் ஆசி',
    relation: 'குடும்பத்தினர்',
    message: 'பல்லாண்டு பல்லாண்டு பலகோடி நூறாண்டு மங்கலமாய் இல்லறம் சிறக்க வாழ்த்துகிறோம்!',
    timestamp: 'இன்று',
  },
  {
    id: '2',
    name: 'நண்பர்கள் குழு',
    relation: 'நண்பர்கள்',
    message: 'பாலாஜி & ஸ்வேதா தம்பதியினருக்கு எங்கள் மனமார்ந்த திருமண நல்வாழ்த்துகள்! வாழ்க வளமுடன்!',
    timestamp: 'இன்று',
  },
];
