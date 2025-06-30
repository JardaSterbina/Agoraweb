import Banner from "../components/sections/Banner";
import { Helmet } from "react-helmet-async";

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Služby | Ajurvédské centrum Agora</title>
        <meta
          name="description"
          content="Objevte naše ajurvédské služby - Abhyanga, Mukka Abhyanga, Padhabyanga, Shiroabhyanga, Shirodara a Herbal Kizhi. Tradiční ajurvédské masáže a terapie pro vaše zdraví."
        />
        <meta
          name="keywords"
          content="abhyanga ostrava, mukka abhyanga ostrava, padhabyanga ostrava, shiroabhyanga ostrava, shirodara ostrava, herbal kizhi ostrava, ajurvédské masáže ostrava, masáže celého těla ostrava, masáže obličeje ostrava, masáže hlavy ostrava, masáže nohou ostrava, masáže chodidel ostrava"
        />
        <meta property="og:title" content="Služby | Ajurvédské centrum Agora" />
        <meta
          property="og:description"
          content="Kompletní nabídka ajurvédských masáží a terapií"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <Banner
        title="ABHYANGA - Masáž celého těla"
        message={
          "V Ajurvédském centru Agora provádíme masáž Abhyanga s maximální péčí a důrazem na tradiční přístup. Tato osvědčená ajurvédská masáž, při které aplikujeme kvalitní sezamový olej obohacený o bylinné extrakty, harmonizuje tělo i mysl. Pomáhá stimulovat krevní oběh, uvolňovat svalové napětí a zklidňovat nervový systém, což podporuje celkovou regeneraci. \nAbhyanga je vhodná pro všechny, kdo hledají profesionální péči o tělo a duši. Věnujeme pozornost vašim individuálním potřebám, abychom vám zajistili hluboké uvolnění a vnitřní klid. Naše masáže jsou navrženy tak, aby nejen odstranily napětí, ale také obnovily životní energii a vitalitu. Dopřejte si autentický zážitek přímo od odborníka na ajurvédské procedury."
        }
        image="/img/sluzby1.jpg"
        button={{
          href: "https://ajurvedske-centrum-agora.reservio.com/services/a6215441-4caa-44bc-a608-7adf47e77fda",
          text: "Rezervovat",
          dark: true,
        }}
      />
      <Banner
        title="MUKKA ABHYANGA - Masáž obličeje"
        message={
          "Mukka Abhyanga - masáž obličeje, která podporuje regeneraci pleti a uvolnění mimických svalů. Tato procedura jemně odstraňuje napětí z obličeje, redukuje jemné vrásky a zpomaluje proces stárnutí. Po masáži je pleť rozjasněná, osvěžená a přirozeně revitalizovaná. \nMukka Abhyanga má nejen kosmetické, ale i zdravotní přínosy. Masáž pomáhá při nachlazení, rýmě, závratích, nespavosti a migrénách. Podporuje hojení akné, jizev a odstraňování kruhů pod očima. Každá procedura je prováděna s důrazem na vaše individuální potřeby, aby výsledkem byla pleť plná vitality a harmonie těla i mysli."
        }
        image="/img/sluzby3.jpg"
        inverted={true}
        button={{
          href: "https://ajurvedske-centrum-agora.reservio.com/services/843c400a-16ae-439b-b1c4-a09e51859c22",
          text: "Rezervovat",
          dark: true,
        }}
      />
      <Banner
        title="PADHABYANGA - Masáž nohou"
        message={
          "U nás se během masáže chodidel zaměřujeme na využití speciálně napuštěných bylinných olejů, které pečlivě zahříváme, aby přinesly maximální blahodárné účinky. Oleje se jemně vmasírovávají do bodů Marma - energetických center těla, která hrají klíčovou roli v ajurvédské léčbě. Marma body obsahují životní energii prána, kterou jemný tlak aktivuje a dodává tělu i mysli léčivou sílu. \nPadabhyanga je hluboce uvolňující procedura, která detoxikuje, harmonizuje, posiluje a revitalizuje celé tělo. Tato tradiční masáž chodidel pomáhá obnovit rovnováhu a vitalitu, přináší pocit klidu a podporuje přirozené léčebné procesy. Vyzkoušejte naši odbornou péči a poznejte výhody této autentické ajurvédské masáže."
        }
        image="/img/sluzby2.jpg"
        button={{
          href: "https://ajurvedske-centrum-agora.reservio.com/services/96173147-eaff-4c61-92a2-a05e351efc6d",
          text: "Rezervovat",
          dark: true,
        }}
      />
      <Banner
        title="SHIROABHYANGA - Masáž hlavy, ramen, krku a zad"
        message={
          "Shiroabhyanga - hluboce uvolňující procedura, která zahrnuje masáž hlavy, krku, ramen a zad za použití teplého ajurvédského bylinného oleje. Tato masáž zlepšuje prokrvení v oblasti hlavy, uvolňuje fyzické i emocionální energetické blokády a poskytuje úlevu od duševního napětí. \nShiroabhyanga pomáhá posílit imunitní a nervový systém a je obzvlášť účinná při problémech, jako jsou úzkosti, poruchy spánku, deprese a celkové napětí v těle. Dopřejte si péči, která harmonizuje tělo i mysl a přináší pocit hluboké regenerace a klidu."
        }
        image="/img/sluzby4.jpg"
        inverted={true}
        button={{
          href: "https://ajurvedske-centrum-agora.reservio.com/services/b128d021-c639-48cf-bf4b-0b871b409de3",
          text: "Rezervovat",
          dark: true,
        }}
      />
      <Banner
        title="SHIRODARA - Masáž třetího oka"
        message={
          "Shirodara je jedinečná ajurvédská, která spočívá v jemném toku teplého bylinného oleje na čelo, přesně do oblasti třetího oka. Tato terapie je známá svou schopností ulevit od potíží, jako jsou zrakové problémy, neurologická onemocnění, poruchy paměti, nespavost, tinnitus a migrény. Shirodara má široké využití v tradiční ajurvédské medicíně, často jako součást Panchakarmy, a její účinky se dále násobí v kombinaci s procedurou Abhyanga. \nTeplý bylinný olej během Shirodary nejen zlepšuje krevní oběh v oblasti mozku, ale také snižuje hladinu stresových hormonů, jako je adrenalin a noradrenalin. Tato terapie nabízí hlubokou relaxaci, obnovu rovnováhy a podporu léčebných procesů těla i mysli. Přijďte zažít léčivou sílu Shirodary a dopřejte si proceduru, která vás harmonizuje a revitalizuje."
        }
        image="/img/sluzby5.jpg"
        button={{
          href: "https://ajurvedske-centrum-agora.reservio.com/services/c17fafc7-5405-4196-8243-0557b91e46f3",
          text: "Rezervovat",
          dark: true,
        }}
      />
      <Banner
        title="HERBAL KIZHI - Masáž bylinnými měšci"
        message={
          "Masáž Herbal Kizhi kombinuje tradiční masáž abhyangu s použitím bylinných měšců. Tyto měšce jsou naplněny směsí ajurvédských bylin, kořenů a listů, které se nahřívají v páře. Během masáže jsou přikládány na bolestivé oblasti zad, kde suché teplo účinně působí na svalové napětí a podporuje regeneraci. \nTato procedura je ideální pro osoby zatížené dlouhodobým sedavým zaměstnáním, profesionální řidiče, sportovce, či jednotlivce trpící nevysvětlitelnými bolestmi zad. Herbal Kizhi účinně pomáhá při léčbě artritidy, dny a celkové ztuhlosti zádového svalstva. Zažijte blahodárné účinky této unikátní masáže, která harmonizuje tělo, zmírňuje bolest a obnovuje vaši vitalitu."
        }
        image="/img/sluzby6.jpg"
        inverted={true}
        button={{
          href: "https://ajurvedske-centrum-agora.reservio.com/services/32712119-6c66-4a4b-b5ec-300ef7b8795b",
          text: "Rezervovat",
          dark: true,
        }}
      />
    </>
  );
}
