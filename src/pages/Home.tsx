import Banner from "../components/sections/Banner";
import Hero from "../components/sections/Hero";
import Reviews from "../components/sections/Reviews";
import StaffMembers from "../components/sections/StaffMembers";
import ServicesSection from "../components/sections/Services";
import { Helmet } from "react-helmet-async";
import FAQ from "../components/sections/FAQ";
import Image from "../types/Image"; // Import the Image *type*
import Benefit from "../components/sections/benefit";
import benefitimg from "/img/benefit.jpeg";
import BlogPreview from "../components/sections/BlogPreview";
import { blogPosts } from "../data/BlogData";

const partnerImage: Image = {
  // Use the Image *type* here
  url: benefitimg, // Use the benefitimg *value* here
  alt: "Logo of our partner company",
};

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Ajurvédské centrum Agora | Masáže Ostrava</title>
        <meta
          name="description"
          content="Objevte ajurvédské masáže v Ajurvédském centru Agora. Nabízíme profesionální masáže Ostrava, které harmonizují tělo i mysl. Vyzkoušejte naši péči ještě dnes!"
        />
        <meta
          name="keywords"
          content="ajurvédské masáže ostrava, masáže Ostrava, relaxace ostrava, ajurveda ostrava, Ajurvedské centrum ostrava, Agora ostrava, Ajurvédské centrum Agora, Ajurvédské centrum Agora Ostrava, masaze ostrava,"
        />
        <meta
          property="og:title"
          content="Ajurvédské centrum Agora | Masáže Ostrava"
        />
        <meta
          property="og:description"
          content="Objevte sílu ajurvédských masáží v Ostravě."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <Hero
        title="Ajurvédské Centrum Agora - Masáže Ostrava"
        subtitle=""
        image="/img/hero2.jpg"
        buttons={[
          {
            href: "https://ajurvedske-centrum-agora.reservio.com/services",
            text: "Rezervovat",
          },
          {
            href: "/sluzby",
            text: "Naše služby",
          },
        ]}
      />
      <ServicesSection
        title="Naše služby"
        services={[
          {
            title: "ABHYANGA",
            description: "masáž celého těla",
            image: "/img/sluzby1.jpg",
            url: "https://ajurvedske-centrum-agora.reservio.com/services/a6215441-4caa-44bc-a608-7adf47e77fda",
          },
          {
            title: "PADHABYANGA",
            description: "masáž chodidel",
            image: "/img/sluzby2.jpg",
            url: "https://ajurvedske-centrum-agora.reservio.com/services/96173147-eaff-4c61-92a2-a05e351efc6d",
          },
          {
            title: "MUKKA ABHYANGA",
            description: "masáž obličeje",
            image: "/img/sluzby3.jpg",
            url: "https://ajurvedske-centrum-agora.reservio.com/services/843c400a-16ae-439b-b1c4-a09e51859c22",
          },
          {
            title: "SHIROABHYANGA",
            description: "masáž hlavy, krku, ramen a zad",
            image: "/img/sluzby4.jpg",
            url: "https://ajurvedske-centrum-agora.reservio.com/services/b128d021-c639-48cf-bf4b-0b871b409de3",
          },
          {
            title: "SHIRODARA",
            description: "ajurvédská terapie",
            image: "/img/sluzby5.jpg",
            url: "https://ajurvedske-centrum-agora.reservio.com/services/c17fafc7-5405-4196-8243-0557b91e46f3",
          },
          {
            title: "HERBAL KIZHI",
            description:
              "kombinace masáže abhyangy a masáže pomocí bylinných měšců",
            image: "/img/sluzby6.jpg",
            url: "https://ajurvedske-centrum-agora.reservio.com/services/32712119-6c66-4a4b-b5ec-300ef7b8795b",
          },
        ]}
      />

      <Banner
        title="O nás"
        message={
          "Vítejte u nás! V Ajurvédském centru Agora propojujeme tradici s moderním přístupem k tělesné i duševní pohodě. Jsme rodinná firma, která nabízí autentické ajurvédské masáže v Ostravě. Naše procedury, inspirované tradicemi indické Keraly, jsou navrženy tak, aby vám pomohly najít rovnováhu, uvolnění a obnovenou energii. Pokud hledáte kvalitní masáže Ostrava, jste na správné adrese.\nNaše nabídka zahrnuje komplexní spektrum procedur – od klasické celotělové masáže Abhyanga a masáže nohou Padabhyanga až po specializované terapie zaměřené na uvolnění hlavy, krku, ramen a zad. Každá z našich ajurvédských masáží je pečlivě sestavena naším zkušeným masérem Sajim, který získal své odborné znalosti přímo v kolébce ajurvédy. Díky individuálnímu přístupu na míru vám dokážeme nabídnout péči odpovídající vašim specifickým potřebám.\nNaším cílem je nejen odstranit fyzické napětí, ale také podpořit vaši vnitřní harmonii a celkovou životní vitalitu. V prostředí Ajurvédského centra Agora na vás čeká útulný a klidný prostor, kde můžete vypnout od všedních starostí a na chvíli se ponořit do světa tradičních ajurvédských postupů. Naše masáže Ostrava a procedury jsou navrženy tak, aby vám poskytly jedinečný zážitek regenerace a hlubokého odpočinku.\nPro snadnou a rychlou rezervaci termínu využijte náš online rezervační systém. Přidejte se k desítkám spokojených klientů, kteří objevili sílu a krásu autentických ajurvédských masáží. Dopřejte si péči, která vás zasáhne na úrovni těla i duše a krok za krokem vás povede ke skutečné rovnováze."
        }
        image="/img/onas.jpg"
      />

      <StaffMembers
        title="Kdo Vás bude masírovat?"
        masseur={{
          name: "Sajith Ambika",
          description: "říkáme mu Saji",
          image: "/img/saji2.jpg",
          longDescription: [
            "Vaše tělo a mysl svěříte do rukou našeho zkušeného maséra Sajiho – specialisty na tradiční ajurvédské masáže. Saji pochází z indické Keraly, kolébky ajurvédy, kde získal své odborné vzdělání a dlouholeté praktické zkušenosti, které byly oficiálně uznány českým ministerstvem vnitra. Jeho kariéra se rozšířila daleko za hranice Indie – již delší dobu pravidelně jezdil po Evropě, kde prezentoval své techniky, získával cennou zpětnou vazbu a neustále se zdokonaloval.",
            "Je třeba také dodat, že Saji komunikuje s klienty převážně v angličtině. Tento přístup odráží jeho mezinárodní zkušenosti a zaměření na globální klientelu, přičemž i přes jazykovou bariéru každý klient najde cestu k důvěře a klidu, který Sajiho masáže poskytují.",
          ],
        }}
      />
      <Reviews
        title="Reference"
        reviews={[
          {
            image: "/img/rev1.jpg",
            name: "Vendula Malchárková",
            message:
              "Dnes jsem byla na masáži nohou a odcházela jsem naprosto spokojená 🤩 Pěkné a čisté prostředí, pan masér velice příjemný. Komunikace probíhala v angličtině, ale věřím, že by se dalo i česky 😊 Určitě se sem vrátím na masáž celého těla 😁",
          },
          {
            image: "/img/rev2.jpg",
            name: "Andrea Holowková ",
            message:
              "O ajurvédské masáži jsem snila už dlouho. Jsem ráda, že jsem se odhodlala a zažila něco úžasného. Vracím se a doufám, že se stále budu vracet. Po masáží se zase můžu zhluboka nadechnout, jsem uvolněná. Děkuji z celého srdce, Saji.",
          },
          {
            image: "/img/rev3.jpg",
            name: "Radmila Chorovská",
            message:
              "Dnes jsem vyzkoušela celotělovou masáž a musím říct, že dokonalost.😊 Sice jsem byla nejprve dost nervózní, protože to bylo pro mě poprvé, ale vřele doporučuji ",
          },
          {
            image: "/img/rev4.jpg",
            name: "Marcela Simekova Kevesova ",
            message:
              "Saji je vysoko profesionálny masér, človiečik,Je balzamom pre telo, dušu a myseľ. Vďaka možnosti, ktorá mi bola poskytnutá, som tento krát nemusela cestovať do Ostravy, ale India prišla priamo na Oravu a tak som mohla znova zažiť tento luxusný zážitok. Ďakujem",
          },

          {
            image: "/img/rev6.jpg",
            name: "Goutham raj Allam",
            message:
              "Měl jsem nádhernou 75 minutovou masáž se Saji. Bylo to naše první setkání a on pozorně naslouchal mým potřebám a obavám. Neuvěřitelně zručná a profesionální masáž byla detailní, průzkumná, pevná a přesto jemná a plně si uvědomovala, jak moje tělo reaguje na různé tlaky a pohyby, které na něj působí. zařízení v centru dodržuje všechny standardy tradiční indické (Kerala) ajurvédy. Děkuji Saji!",
          },
          {
            image: "/img/rev7.jpg",
            name: "Arun Ronal Antony",
            message:
              "Měl fantastickou ajurvédskou masáž v Agora. Atmosféra byla uklidňující a terapeut byl profesionální. Mé svaly jsou mnohem uvolněnější a odcházel jsem naprosto uvolněný. Vřele doporučuji!",
          },
          {
            image: "/img/rev8.jpg",
            name: "Iveta Košařová ",
            message:
              "Dneska jsem byla na celotělové masáži u Sajiho. naprosto dokonalý zážitek pro tělo i duši. S pokorou děkuji",
          },
          {
            image: "/img/rev9.jpg",
            name: "Andrea Ada Oravcová ",
            message:
              "Ajurvédsku masáž celotelovu som absolvovala prvý krát v živote ..bol to neskutocny zážitok ..balzam na dušu aj telo..po nej som sa cítila vítalna, plna energie, ľahká ako pierko , ..brala by som kazdy den takuto masaz..odporúčam vyskúšať ju kazdemu ..neolotujete. 🤩 🤩",
          },
          {
            image: "/img/rev10.jpg",
            name: "Monika Chylová ",
            message:
              'Ak chceš zažiť "malého" človeka s veľkým srdcom, tak utekaj za Sadjim ako sa on vie vyhrať s ľudským telom je neskutočné a masáže od neho sú darom Ešte aj po pár dňoch doznievajú účinky jeho masáží. Ďakujem a nech sa vám darí.',
          },
          {
            image: "/img/rev11.jpg",
            name: "Tatiana Richterova",
            message:
              "Ajurvédsku masáž som absolvovala prvý krát v živote a bola som milo prekvapená aká bola príjemná a intenzívna zároveň a moju spokojnosť si všimlo aj moje okolie",
          },
        ]}
      />

      <Benefit title="Náš partner" image={partnerImage} />
      <BlogPreview title="Náš Blog" posts={blogPosts} />
      <FAQ
        title="Často kladené dotazy"
        items={[
          {
            question: "Co když mám voucher ze Slevomatu?",
            answer:
              "Zadejte číslo vašeho voucheru na stránkách Slevomatu: https://www.slevomat.cz/darkovy-poukaz/uplatnit , následně si vyberte termín na našich stránkách a do zprávy přidejte číslo vašeho poukazu, abychom věděli, že máte voucher ze Slevomatu a tím pádem po vás nebudeme chtít plnou platbu.",
          },
          {
            question: "Dá se u vás zaparkovat?",
            answer:
              "Ano, zaparkovat můžete napravo od domu Labyrint, kde máme masérnu, případně naproti u radnice.",
          },
          {
            question: "Co si mám vzít s sebou?",
            answer:
              "Vezměte si prosím s sebou náhradní oblečení včetně spodního prádla, jelikož je dobré si na sobě olej, kterým budete masírováni, ponechat alespoň 2 hodiny.",
          },
          {
            question: "Mohu se u vás osprchovat?",
            answer:
              "Ano, pokud budete potřebovat, lze se u nás osprchovat. K dispozici vám bude tělové mýdlo, šampón, ručník a fén.",
          },
          {
            question: "Je možné u vás zakoupit dárkový poukaz?",
            answer:
              "Ano, můžete udělat radost svým blízkým. https://ajurvedagora.cz/darkovy-poukaz",
          },
          {
            question: "Mohu se před masáží najíst?",
            answer: "Doporučuje se nejíst alespoň hodinu před masáží.",
          },
        ]}
      />
    </>
  );
}
