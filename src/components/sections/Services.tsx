import type { Service } from "../../types/Service";

type ServicesProps = {
  title: string;
  services: Service[];
};

export default function ServicesSection({ title, services }: ServicesProps)
{
  return (
    <section>
      <h2>{title}</h2>
      <div className="flex gap-[1rem] flex-wrap">
        {services.map((service, index) => 
          <ServiceCard key={index} {...service} />
        )}
      </div>
    </section>
  )
}

function ServiceCard({ title, description, image, url }: Service)  
{
  return (
    <a className="basis-[350px] shrink-0 grow text-center block hover:cursor-pointer" href={url}>
      <div>
        <img src={image} alt={title} className="dark-img"/>
      </div>
      <h3 className="underline-100 my-[1rem]">{title}</h3>
      <p>{description}</p>
    </a>
  )
}