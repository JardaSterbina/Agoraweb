import Button, { ButtonProps } from "../Button";

type BannerProps = {
  title: string;
  message: string;
  image: string;
  inverted?: boolean;
  button?: ButtonProps;
}

export default function Banner({ title, message, image, inverted, button }: BannerProps) {
  const invertedClass = inverted ? 'flex-row-reverse' : '';

  return (
    <section className={"flex gap-[1rem] flex-wrap items-center justify-center max-w-[1200px] mx-auto " + invertedClass}>
    <div className="basis-[375px] grow flex flex-col text-center md:text-left">
      <h2>{title}</h2>
      {message.split('\n').map((paragraph, index) => (
        <p key={index} className={index > 0 ? "mt-4" : ""}>{paragraph}</p>
      ))}
      {button && <Button {...button} topMargin={2} />}
    </div>
    <div className="basis-[225px] grow flex justify-center">
      <img src={image} alt={title} />
    </div>
  </section>
  )
}
