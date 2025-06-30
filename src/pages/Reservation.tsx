import Hero from "../components/sections/Hero";
import ReservationItem from "../components/ReservationItem";
import { Helmet } from 'react-helmet-async';

export default function Reservation()
{
  return (
    <>
    <Helmet>
        <title>Rezervace masáží | Ajurvédské centrum Agora</title>
        <meta name="description" content="Rezervujte si ajurvédské masáže a procedury online. Nabízíme Shirodara, Abhyanga, Herbal Kizhi a další tradiční ajurvédské masáže." />
        <meta name="keywords" content="rezervace masáže ostrava, ajurvédské masáže ostrava, shirodara ostrava, abhyanga ostrava, herbal kizhi ostrava, padabhyanga ostrava, online rezervace masaze ostrava" />
        <meta property="og:title" content="Rezervace masáží | Ajurvédské centrum Agora" />
        <meta property="og:description" content="Rezervujte si ajurvédské masáže a procedury online" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Hero 
        title="Rezervujte si naše ajurvédské masáže a procedury." 
        subtitle="Olej je dobré na sobě po masáži nechat působit nejméně dvě hodiny, doporučujeme proto vzít si s sebou náhradní oblečení. Budete-li mít potřebu, je Vám k dispozici i naše sprcha, osuška a fén." 
        image="/img/hero.jpg"
        buttons={[
          {
            href: "https://ajurvedske-centrum-agora.reservio.com/services",
            text: "Rezervace"
          }
        ]}
      />

      <section>
        <h1>Rezervace ajurvédských masážích</h1>
        <div className="flex gap-[1rem] flex-wrap justify-center">
          <ReservationItem 
            name="Shirodara + Abhyanga" 
            duration="2 hod" 
            price={2390} 
            url="https://ajurvedske-centrum-agora.reservio.com/services/c17fafc7-5405-4196-8243-0557b91e46f3" 
            image={
            {
              url: "/img/rez1.jpg",
              alt: "Shirodara + Abhyanga"
            }
          } />
          <ReservationItem
            name="Herbal Kizhi + Abhyanga" 
            duration="2 hod" 
            price={2190} 
            url="https://ajurvedske-centrum-agora.reservio.com/services/32712119-6c66-4a4b-b5ec-300ef7b8795b" 
            image={
            {
              url: "/img/rez2.jpg",
              alt: "Herbal Kizhi + Abhyanga"
            }
          } />
           <ReservationItem 
            name="Abhyanga + Mukka Abhyanga" 
            duration="1 hod 45 min" 
            price={1990} 
            url="https://ajurvedske-centrum-agora.reservio.com/services/62e8f976-a188-4fdb-8979-e607fe9e06bb" 
            image={
            {
              url: "/img/rez3.jpg",
              alt: "Abhyanga + Mukka Abhyanga"
            }
          } />
           <ReservationItem 
            name="Abhyanga - Masáž celého těla" 
            duration="1 hod 15 min" 
            price={1390} 
            url="https://ajurvedske-centrum-agora.reservio.com/services/a6215441-4caa-44bc-a608-7adf47e77fda" 
            image={
            {
              url: "/img/rez4.jpg",
              alt: "Abhyanga - Masáž celého těla"
            }
          } />
           <ReservationItem 
            name="Shiroabhyanga" 
            duration="1 hod" 
            price={1090} 
            url="https://ajurvedske-centrum-agora.reservio.com/services/b128d021-c639-48cf-bf4b-0b871b409de3" 
            image={
            {
              url: "/img/rez5.jpg",
              alt: "Shiroabhyanga"
            }
          } />
           <ReservationItem 
            name="Padabhyanga - Masáž chodidel" 
            duration="45 min" 
            price={890} 
            url="https://ajurvedske-centrum-agora.reservio.com/services/96173147-eaff-4c61-92a2-a05e351efc6d" 
            image={
            {
              url: "/img/rez6.jpg",
              alt: "Padabhyanga - Masáž chodidel"
            }
          } />
           <ReservationItem 
            name="Mukka Abhyanga - Masáž obličeje" 
            duration="30 min" 
            price={790} 
            url="https://ajurvedske-centrum-agora.reservio.com/services/843c400a-16ae-439b-b1c4-a09e51859c22" 
            image={
            {
              url: "/img/rez7.webp",
              alt: "Padabhyanga - Masáž chodidel"
            }
          } />
       
        </div>
      </section>
    </>
  )
}
