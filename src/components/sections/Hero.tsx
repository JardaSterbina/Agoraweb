import Button, { ButtonProps } from "../Button";

type HeroProps = {
  title: string;
  subtitle: string;
  image: string;
  buttons: ButtonProps[];
};

export default function Hero({ title, subtitle, image, buttons }: HeroProps)
{
  return(
    <section 
      style={{backgroundImage: `url(${image})`}} 
      className="text-white text-center h-[60vh] max-h-[750px] flex items-center justify-center bg-cover bg-center p-[2rem] mt-[3rem] hero"
    >
      <div>
        <h1>{title}</h1>
        <p className="w-fit m-auto my-[1em] max-w-[875px]">{subtitle}</p>
        <div className="flex gap-[1em] justify-center">
          {buttons.map((button, index) => 
            <Button key={index} {...button} centered={false} />
          )}
        </div>
      </div>
    </section>
  )
}