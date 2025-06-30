import type { ReservationItem } from "../types/ReservationItem";
import Button from "./Button";

export default function ReservationItem({ name, duration, price, url, image }: ReservationItem)
{
  return (
    <div className="flex bg-primary text-center basis-[475px] max-w-[650px] grow flex-wrap">
      <div className="basis-[200px] grow">
        <img className="h-[100%] object-cover" src={image.url} alt={image.alt} />
      </div>
      <div className="basis-[200px] grow p-[1rem] flex flex-col justify-around">
        <div>
          <h2 className="text-[1.2rem] after:content-none my-0">{name}</h2>
          <p className="text-[12px]">{duration}</p>
        </div>
        <p className="text-[2rem]">{price} Kč</p>
        <Button
          text="Rezervovat"
          href={url}
          dark={true}
        />
      </div>        
    </div>
  )
}