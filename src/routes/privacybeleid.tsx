import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { useLanguage } from "@/lib/language";

export const Route = createFileRoute("/privacybeleid")({
  head: () => ({
    meta: [{ title: "NordAnker Service | Privacy Policy" }],
  }),
  component: PrivacybeleidPage,
});

function PrivacybeleidPage() {
  const { lang } = useLanguage();
  const t = lang === "de"
    ? {
        eyebrow: "Datenschutz",
        title: "Klarheit darueber, wie Kontaktdaten und Anfragen behandelt werden.",
        copy: "NordAnker Service nutzt Daten nur fuer Kontakt, Planung, Angebote und die Rueckmeldung zu Arbeiten. Wir halten diese Verarbeitung praktisch, begrenzt und auf die Ausfuehrung unserer Dienste ausgerichtet.",
        rows: [
          ["Welche Daten", "Name, Telefonnummer, E-Mail-Adresse, Unternehmensdaten, Standortdaten und Informationen, die fuer Anfrage, Angebot oder Planung benoetigt werden."],
          ["Wofuer", "Fuer Kontakt zu Anfragen, Terminabstimmung, Angebotserstellung, Arbeitsausfuehrung und anschliessende Rueckmeldung."],
          ["Speicherdauer", "Daten werden nicht laenger gespeichert als noetig fuer Verwaltung, Kommunikation, Ausfuehrung von Diensten und gesetzliche Pflichten."],
          ["Weitergabe von Daten", "Daten werden nur weitergegeben, wenn dies fuer Ausfuehrung, Verwaltung oder eine gesetzliche Pflicht notwendig ist. Wir verkaufen keine personenbezogenen Daten an Dritte."],
          ["Kontakt zum Datenschutz", "Bei Fragen zu Verarbeitung, Einsicht oder Korrektur kannst du Kontakt aufnehmen ueber info@nordanker-service.de oder +49 015510095242."],
        ],
      }
    : {
        eyebrow: "Privacy Policy",
        title: "Clear information on how contact data and requests are handled.",
        copy: "NordAnker Service only uses data for contact, planning, quotes and work follow-up. We keep this processing practical, limited and focused on service delivery.",
        rows: [
          ["Which data", "Name, phone number, e-mail address, company details, location details and information needed to process a request, quote or planning."],
          ["Purpose", "For communication about requests, scheduling, quotes, execution of work and follow-up."],
          ["Storage period", "Data is not stored longer than necessary for administration, communication, service execution and legal obligations."],
          ["Data sharing", "Data is only shared when needed for execution, administration or legal obligation. We do not sell personal data to third parties."],
          ["Privacy contact", "For questions about processing, access or correction, contact us via info@nordanker-service.de or +49 015510095242."],
        ],
      };

  return (
    <div>
      <Navbar />

      <main className="legal-main">
        <section className="legal-hero">
          <div className="legal-hero__inner">
            <div className="legal-hero__eyebrow">{t.eyebrow}</div>
            <h1 className="legal-hero__title">
              {t.title}
            </h1>
            <p className="legal-hero__copy">
              {t.copy}
            </p>
          </div>
        </section>

        <section className="legal-section">
          <div className="legal-section__inner">
            <div className="legal-section__rows">
              {t.rows.map((row) => (
                <div key={row[0]} className="legal-section__row">
                  <div className="legal-section__term">{row[0]}</div>
                  <p className="legal-section__detail">{row[1]}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
