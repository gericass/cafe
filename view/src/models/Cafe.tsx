import { Location } from './Location';

export interface Cafe {
  id: number;
  name: string;
  description: string;
  rate: number;
  location: Location;
  url: string;
  images: string[];
}