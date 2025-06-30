import { ContactForm } from "../components/ContactForm";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Kontakt | Ajurvédské centrum Agora</title>
        <meta
          name="description"
          content="Kontaktujte Ajurvédské centrum Agora v Jablonci nad Nisou. Najdete nás na adrese Ulice 123. Pro rezervace volejte +420 123 456 789."
        />
        <meta
          name="keywords"
          content="kontakt, ajurvédské centrum, Jablonec nad Nisou, masáže, terapie, rezervace"
        />
        <meta
          property="og:title"
          content="Kontakt | Ajurvédské centrum Agora"
        />
        <meta
          property="og:description"
          content="Kontaktujte Ajurvédské centrum Agora v Jablonci nad Nisou"
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <section>
        <h1 className="underline-336">Kontakt</h1>
        <EmbeddedGoogleMap src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.4308561661846!2d18.19158607638264!3d49.83436137148103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4713e3d826c63281%3A0xc39edc80bc422245!2sAjurv%C3%A9dsk%C3%A9%20centrum%20Agora!5e0!3m2!1scs!2scz!4v1736006335963!5m2!1scs!2scz" />
        <div className="adresa">
          <h3 className="underline-336">
            Adresa: Třebovická 5080/41, 722 00 Ostrava, Česko
          </h3>
          <h3 className="underline-336">IČO: 18043836</h3>
        </div>
        <div className="adresa">
          <h3 className="underline-336">
            Email:{" "}
            <a href="mailto:ajurvedavostrave@email.cz">
              ajurvedavostrave@email.cz
            </a>
          </h3>
          <h3 className="underline-336">
            <a href="tel:+420 734 447 345">TEL: +420 734 447 345</a>
          </h3>
        </div>
        <div className="adresa">
          <div className="flex gap-4 mt-2">
            <a
              href="https://www.facebook.com/ajurvedaostrava?locale=cs_CZ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--secondary)] hover:brightness-110 transition"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/ajurveda.ostrava/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--secondary)] hover:brightness-110 transition"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.059-.976.045-1.505.207-1.858.344-.466.182-.8.398-1.15.748-.35.35-.566.684-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.055-.059 1.37-.059 4.04 0 2.67.01 2.986.059 4.04.045.976.207 1.505.344 1.858.182.466.399.8.748 1.15.35.35.684.566 1.15.748.353.137.882.3 1.857.344 1.054.047 1.37.059 4.04.059 2.67 0 2.987-.01 4.04-.059.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.684.748-1.15.137-.353.3-.882.344-1.857.047-1.055.059-1.37.059-4.04 0-2.67-.01-2.986-.059-4.04-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.055-.047-1.37-.059-4.04-.059zm0 3.063a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27zm0 8.468a3.333 3.333 0 1 0 0-6.666 3.333 3.333 0 0 0 0 6.666zm6.538-8.469a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
      <ContactForm />
    </>
  );
}

function EmbeddedGoogleMap({ src }: { src: string }) {
  return (
    <iframe
      src={src}
      width="1420"
      height="550"
      style={{ border: 0 }}
      allowFullScreen={undefined}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="w-full map"
    />
  );
}
