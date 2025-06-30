import PackItem from "../components/PackItem";
import { Helmet } from 'react-helmet-async';

export default function Packs()
{
  return (
    <>
    <Helmet>
        <title>Balíčky a Panchakarma | Ajurvédské centrum Agora</title>
        <meta name="description" content="Objevte naše speciální balíčky ajurvédských masáží a procedur včetně tradiční Panchakarmy. Nabízíme výhodné balíčky Abhyanga, Shirodara a Herbal Kizhi." />
        <meta name="keywords" content="panchakarma ostrava, ajurvédské balíčky ostrava, abhyanga ostrava, shirodara balíček, herbal kizhi ostrava, ajurvédské procedury ostrava, detoxikace ostrava" />
        <meta property="og:title" content="Balíčky a Panchakarma | Ajurvédské centrum Agora" />
        <meta property="og:description" content="Kompletní nabídka ajurvédských balíčků a Panchakarma procedur" />
        <meta property="og:type" content="website" />
      </Helmet>
      <section>
      <h1 className="underline-336 pb-4">Balíčky a plány</h1>
<div className="flex gap-[1rem] flex-wrap justify-center max-w-[1000px] mx-auto">
          <PackItem 
            name="Panchakarma" 
            duration="1 týd." 
            price={14000} 
            description="platí jeden týden" 
            url="https://ajurvedske-centrum-agora.reservio.com/services/327ef33f-edc8-4d8d-bd5b-40a565487876" 
          />
          <PackItem 
            name="Panchakarma" 
            duration="2 týd." 
            price={28000} 
            description="platí po dobu 2 týdnů" 
            url="https://ajurvedske-centrum-agora.reservio.com/services/29ee7efa-5c58-489a-9af8-13e54240089c" 
          />
          <PackItem 
            name="Abhyanga 3 + 1" 
            duration="Balíček 3 x 75 minutová masáž + 1 Abhyanga ZDARMA" 
            price={4190} 
            description="Platí po dobu 2 měsíců" 
            url="https://ajurvedske-centrum-agora.reservio.com/services/d6bb3192-c5c1-4202-b7c8-af4b78ce5dcd" 
          />
              <PackItem 
            name="Shirodara 3 + 1" 
            duration="Balíček 3 x hodinová procedura + 1 Abhyanga ZDARMA" 
            price={5590} 
            description="Platí po dobu 7 dnů" 
            url="https://ajurvedske-centrum-agora.reservio.com/services/d18e4118-cf55-4976-9b6c-5765a7f65105" 
          />
              <PackItem 
            name="Herbal Kizhi 3 + 1" 
            duration="Balíček 3 x hodinová procedura + 1 Abhyanga ZDARMA" 
            price={4590} 
            description="Platí po dobu 7 dnů" 
            url="https://ajurvedske-centrum-agora.reservio.com/services/e200b610-d29d-444b-b1cd-19b787b2bb82" 
          />
              <PackItem 
            name="Abhyanga 10 + 2" 
            duration="Balíček 10 x 75 minutová procedura + 2 Abhyangy ZDARMA" 
            price={13900} 
            description="Platí po dobu 12 měsíců" 
            url="https://ajurvedske-centrum-agora.reservio.com/services/cca30c12-fb7f-4ac8-86d6-e3e32fd3e2c1" 
          />
        </div>
      </section>
      <section className="max-w-[1000px] mx-auto text-center">
      <h1 className="underline-336">Panchakarma - Ajurvédské masáže a procedury</h1>

      <p>Celý program Panchakarmy je přizpůsoben Vašemu zdravotnímu stavu a konstituci. Tedy zahrnuje typ, četnost předepsaných terapií, přírodní oleje, ajurvédské masáže, byliny a bylinné prášky používané během Vaší léčby.</p>

      <h2>Seznam procedur:</h2>
      <ul>
          <li><strong>Vamana</strong> (léčebné zvracení)</li>
          <li><strong>Virechana</strong> (léčebné vyprazdňování se)</li>
          <li><strong>Nasya</strong> (podávání bylinných přípravků nosem)</li>
          <li><strong>Basti</strong> (léčebné enema)</li>
          <li><strong>Rakthamoksha</strong> (čištění a nahrazování staré krve, novou vykonáváme jen omezeně)</li>
      </ul>

      <p>Celý program Panchakarmy je přizpůsoben Vašemu zdravotnímu stavu a konstituci. Tedy zahrnuje typ, četnost předepsaných terapií, přírodní oleje, ajurvédské masáže, byliny a bylinné prášky používané během Vaší léčby.</p>
            </section>
            <section className="max-w-[1000px] mx-auto text-center">
            <h2>Benefity</h2>

      <p>Využívá se při léčbě psychických onemocnění:</p>
      <ul>
          <li>Léčí depresivní a sebevražedné tendence</li>
          <li>Uvolňuje napětí a úzkost</li>
          <li>Uvolňuje a zbavuje mysl stresu</li>
          <li>Zlepšuje fungování mysli</li>
          <li>Zlepšuje kognitivní odezvu</li>
          <li>Podporuje zachování paměti</li>
          <li>Podporuje zdravé spánkové cykly</li>
      </ul>

      <h2>Je vhodná jako "aniti-aging" terapie:</h2>
      <ul>
          <li>Omlazuje pokožku</li>
          <li>Obnovuje a navozuje lesk pokožky</li>
          <li>Zastavuje tvorbu akné</li>
          <li>Zpomaluje proces stárnutí</li>
          <li>Omezuje vrásky v obličeji</li>
          <li>Odstraňuje strie</li>
          <li>Detoxikuje a čistí tělo od ámy (Ama je souhrnný název ajurvédy pro všechny substance, které zatěžují organismus člověka, bez ohledu na jejich původ. Patři k nim bílý povlak na jazyku, skvrny na kůži, zápach z úst) a dalších toxinů</li>
          <li>Odstraňuje dlouho usazované toxiny a čistí vnitřní kanály těla</li>
          <li>Uvolňuje tělo, uvolňuje napětí a křeče</li>
          <li>Zmírňuje bolest kloubů a svalů</li>
          <li>Stimuluje a omlazuje tkáně a orgány těla</li>
          <li>Podporuje spalování tuku a tím snižuje nadváhu</li>
          <li>Zlepšuje trávení</li>
          <li>Pomáhá léčit kožní onemocnění</li>
      </ul>
      </section>
    </>
  )
}
