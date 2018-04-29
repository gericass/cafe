import { Cafe } from '../models/Cafe';
import { POPULAR_CAFE_PATH } from '../constants/Paths';
import { Location } from '../models/Location';

export class Requests {
  static getPopularCafe = (): Cafe[] => {
    const cafes: Cafe[] = new Cafe;
    axios.get(POPULAR_CAFE_PATH)
      .then((res) => {
        res.forEach((r) => {
          const location: Location = {
            lat: r.location.lat,
            lng: r.location.lng
          };
          const cafe: Cafe = {
            name: r.name,
            description: r.name,
            rate: r.rate,
            location: location,
            url: r.url,
            images: r.images
          };
          cafes.push(cafe)
        })
      });
    return cafes
  }

}