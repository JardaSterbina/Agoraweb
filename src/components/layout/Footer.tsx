export default function Footer() {
  return (
    <footer className="bg-primary p-[1rem] pb-[1rem]">
      <div className="flex justify-between max-w-[1200px] mx-auto">
        <div>
          <img src="/img/logo.png" alt="Logo" width="50" height="50" />
        </div>
        <div className="flex flex-col gap-[0.2rem]">
          <a href="/">Domů</a>
          <a href="/sluzby">Služby</a>
          <a href="/rezervace">Rezervace</a>
          <a href="/balicky-a-plany">Balíčky a plány</a>
          <a href="/darkovy-poukaz">Permanentky</a>
          <a href="/galerie">Galerie</a>
          <a href="/kontakt">Kontakt</a>
          <a href="/obchodni-podminky">Obchodní podmínky</a>
        </div>
        <address>
          <p>Třebovická 5080/41, 722 00 Ostrava, Česko</p>
          <p>ajurvedavostrave@email.cz</p>
          <p>+420 734 447 345</p>
        </address>
      </div>
      <div className="mt-[3em] opacity-50">
        <p className="text-center">
          Web vytvořila{" "}
          <a
            className="text-[#9400d3] hover:underline"
            href="https://www.dvojkavit.cz/"
            target="_blank"
          >
            DvojkaVIt
          </a>
        </p>
      </div>
    </footer>
  );
}
