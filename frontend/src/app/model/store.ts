import {Review} from './review';

export interface Store {

  id: number;
  name: string;
  site: string;
  type: string;
  types: string;
  address: string;
  addressCity: string;
  addressStreet: string;
  postalCode: string;
  latitude: number;
  longitude: number;
  distanceToUser: number;
  phone: string;
  rating: number;
  reviews: Review[];
  reviewsCount: number;
  reviewsLink: string;
  reviewsPerScore: number;
  reviewsId: string;
  photosCount: number;
  photo: string;
  workingHours: string;
  verified: boolean;
  ownerId: string;
  ownerLink: string;
  googleId: string;
  email: string;
  email2: string;
  twitter: string;
  linkedin: string;
  facebook: string;
  instagram: string;
  storeOwner: number;
  position: any,
  icon: string
  // deliveryType: any;
  // paymentType: any;
}
