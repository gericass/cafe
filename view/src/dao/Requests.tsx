import { Cafe } from '../models/Cafe';
import { POPULAR_CAFE_PATH, RECENT_CAFE_PATH } from '../constants/Paths';
import { Location } from '../models/Location';
import axios from 'axios';

const getCafe = (path: string): Cafe[] => {
  const cafes: Cafe[] = [];
  axios.get(path)
    .then((res: any) => {
        res.forEach((r: any) => {
          const location: Location = {
            lat: r.location.lat,
            lng: r.location.lng
          };
          const cafe: Cafe = {
            id: r.id,
            name: r.name,
            description: r.name,
            rate: r.rate,
            location: location,
            url: r.url,
            images: r.images
          };
          cafes.push(cafe)
        })
      },
      (e) => {
        // TODO エラーハンドリング
        console.log(e);
      });
  return cafes
};

export class Requests {

  static getPopularCafe = (): Cafe[] => {
    return getCafe(POPULAR_CAFE_PATH)
  };

  static getRecentCafe = (userId: number): Cafe[] => {
    return getCafe(RECENT_CAFE_PATH + `/${userId}`)
  }

}