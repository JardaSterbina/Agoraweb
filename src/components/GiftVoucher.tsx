import { useState } from "react";
import Image from "../types/Image";
import Button from "./Button";

interface GiftVoucherProps {
  title: string;
  description: string;
  image: Image;
  priceOptions: {
    price: number;
    url: string;
  }[];
}

export default function GiftVoucher({
  title,
  priceOptions,
  description,
  image,
}: GiftVoucherProps) {
  const [selectedOption, setselectedOption] = useState<number>(0);

  return (
    <div className="flex items-center max-w-[950px] mx-auto bg-primary flex-wrap">
      <div className="basis-[225px] grow">
        <img src={image.url} alt={image.alt} />
      </div>
      <div className="basis-[225px] grow p-[1rem]">
        <h2 className="text-left after:content-none">{title}</h2>
        <p>{priceOptions[selectedOption].price} Kč</p>
        <p className="my-[2em]">{description}</p>
        <div className="flex gap-[1em] flex-wrap my-[1em]">
          {priceOptions.map((priceOption, index) => (
            <PriceOptionButton
              key={index}
              price={priceOption.price}
              onClick={() => setselectedOption(index)}
            />
          ))}
        </div>
        <Button
          href={priceOptions[selectedOption].url}
          text="Koupit"
          dark={true}
          centered={false}
        />
      </div>
    </div>
  );
}

function PriceOptionButton({
  price,
  onClick,
}: {
  price: number;
  onClick?: () => void;
}) {
  return (
    <div className="text-center p-[.5em] btn" onClick={onClick}>
      {price} Kreditů
    </div>
  );
}
