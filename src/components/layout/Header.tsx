import { useEffect, useState } from "react";

export default function Header() {
  const TRIGGER_WIDTH = 1000;

  const vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  const [width, setWidth] = useState(vw);

  window.addEventListener("resize", () => {
    const vw = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );

    if (width < TRIGGER_WIDTH && vw >= TRIGGER_WIDTH) setWidth(vw);
    else if (width >= TRIGGER_WIDTH && vw < TRIGGER_WIDTH) setWidth(vw);
  });

  const Links = () => {
    return (
      <div className="flex gap-[2rem]">
        <li>
          <a href="/">Domů</a>
        </li>
        <li>
          <a href="/sluzby">Služby</a>
        </li>
        <li>
          <a href="/rezervace">Rezervace</a>
        </li>
        <li>
          <a href="/balicky-a-plany">Balíčky a plány</a>
        </li>
        <li>
          <a href="/galerie">Galerie</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
        <li>
          <a href="/darkovy-poukaz">Permanentky</a>
        </li>
        <li>
          <a href="/kontakt">Kontakt</a>
        </li>
      </div>
    );
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (width >= TRIGGER_WIDTH || !isMenuOpen)
      document.body.style.overflow = "auto";
    else document.body.style.overflow = "hidden";
  }, [isMenuOpen, vw, width]);

  return (
    <nav
      className={`bg-primary ${isMenuOpen ? "header--active" : ""} ${
        width < TRIGGER_WIDTH ? "header--mobile" : ""
      }`}
    >
      <menu className="flex justify-between items-center p-[1rem] max-w-[1500px] mx-auto">
        <div>
          <li>
            <a href="/">
              <img
                className="w-[50px] h-[50px]"
                src="/img/logo.png"
                alt="Logo"
                width="50"
                height="50"
              />
            </a>
          </li>
        </div>
        {width >= TRIGGER_WIDTH ? (
          <Links />
        ) : (
          isMenuOpen && (
            <div className="mobile-links-wrapper">
              <Links />
            </div>
          )
        )}
        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span />
          <span />
          <span />
        </div>
        {width >= TRIGGER_WIDTH && <div className="w-[50px]" />}
      </menu>
      <div className="mobile-bg" onClick={() => setIsMenuOpen(false)} />
    </nav>
  );
}
