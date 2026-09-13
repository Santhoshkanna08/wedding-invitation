export interface WeddingInfo {
  groom: {
    nameEn: string;
    nameTa: string;
    parentsTa: string;
    parentsEn: string;
    relationTa: string;
  };
  bride: {
    nameEn: string;
    nameTa: string;
    parentsTa: string;
    parentsEn: string;
    relationTa: string;
  };
  muhurthamDate: Date;
  dateFormattedTa: string;
  dateFormattedEn: string;
  muhurthamTimeTa: string;
  muhurthamTimeEn: string;
  venueNameTa: string;
  venueNameEn: string;
  venueAddressTa: string;
  venueAddressEn: string;
  googleMapsUrl: string;
}

export interface TimelineEvent {
  id: string;
  titleTa: string;
  titleEn: string;
  iconType: 'flower' | 'leaf' | 'lamp' | 'feast';
  timeTa: string;
  timeEn: string;
  dateTa: string;
  dateEn: string;
  descriptionTa: string;
  descriptionEn: string;
}

export interface GuestBlessing {
  id: string;
  name: string;
  relation: string;
  message: string;
  timestamp: string;
}
