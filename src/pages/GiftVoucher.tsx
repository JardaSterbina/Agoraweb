import GiftVoucher from "../components/GiftVoucher";
import { Helmet } from "react-helmet-async";

export default function GiftVouchers() {
  return (
    <>
      <Helmet>
        <title>Permanentky | Ajurvédské centrum Agora</title>
        <meta
          name="description"
          content="Pořiďte si permanentku na ajurvédské masáže v Ostravě a dopřejte si pravidelnou péči o tělo i mysl. Ušetřete a užijte si hlubokou relaxaci s našimi profesionálními masážemi."
        />
        <meta
          name="keywords"
          content="permanentky ostrava, voucher masaze, ajurvédské masáže ostrava, voucher ostrava, masáže voucher ostrava, masáže permanentky, masaze permanentky, vernostni program"
        />
        <meta
          property="og:title"
          content="Permanentky | Ajurvédské centrum Agora"
        />
        <meta
          property="og:description"
          content="Pořiďte si permanentku na ajurvédské masáže v Ostravě a dopřejte si pravidelnou péči o tělo i mysl. Ušetřete a relaxujte s profesionálními masážemi, které harmonizují vaše zdraví."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <section>
        <h1 className="underline-336 pb-4">Permanentky</h1>
        <GiftVoucher
          title="Kreditové permanentky na ajurvédské masáže"
          description="Staňte se našími věrnými klienty a pořiďte si výhodnou kreditovou permanentku na ajurvédské masáže! 🌿"
          image={{
            url: "img/permanentka.jpg",
            alt: "Permanentka na arujvedské masáže",
          }}
          priceOptions={[
            {
              price: 3000,
              url: "https://ajurvedske-centrum-agora.reservio.com/passes/8c3b523f-e735-4760-b5ed-bb12dd0b63b1",
            },
            {
              price: 5000,
              url: "https://ajurvedske-centrum-agora.reservio.com/passes/8035bb7a-50da-46b6-b07e-9b48d880166c",
            },
            {
              price: 8000,
              url: "https://ajurvedske-centrum-agora.reservio.com/passes/83d3a3aa-0fac-411d-bb30-fa138934a2ff",
            },
            {
              price: 10000,
              url: "https://ajurvedske-centrum-agora.reservio.com/passes/a67dbbef-ccad-469e-a0a3-f926ad9dd5ed",
            },
          ]}
        />
      </section>
    </>
  );
}
