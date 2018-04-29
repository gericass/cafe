import { Location } from './Location';

export interface Cafe {
  name: string;
  description: string;
  rate: number;
  location: Location;
  url: string;
  images: string[];
}