import Button from "./Button";

type PackItemProps = {
  name: string;
  duration: string;
  price: number;
  description: string;
  url: string;
};

export default function PackItem(
  { name, duration, price, description, url }: PackItemProps
) {
  return (
    <div className="bg-primary text-center basis-[300px] grow p-[1rem] flex flex-col justify-between gap-[1rem]">
      <div>
        <h3>{name}</h3>
        <p className="text-[14px]">{duration}</p>  
      </div>
      <p className="text-[2rem]">{price} KČ</p>
      <div>
        <p>{description}</p> 
        <Button
          text="Rezervovat"
          href={url}
          dark={true}
        />
      </div>
    </div>
  )
}