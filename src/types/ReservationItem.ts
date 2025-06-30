import Image from "./Image";

export type ReservationItem = {
  name: string;
  duration: string;
  price: number;
  url: string;
  image: Image;
};