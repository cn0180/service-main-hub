import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { useLanguage } from "@/lib/language";

export const Route = createFileRoute("/privacybeleid")({
  head: () => ({
    meta: [{ title: "NordAnker Service | Privacybeleid" }],
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
        eyebrow: "Privacybeleid",
        title: "Duidelijkheid over hoe contactgegevens en aanvragen worden behandeld.",
        copy: "NordAnker Service gebruikt gegevens alleen voor contact, planning, offertes en opvolging van werkzaamheden. We houden die verwerking praktisch, beperkt en gericht op de uitvoering van onze diensten.",
        rows: [
          ["Welke gegevens", "Naam, telefoonnummer, e-mailadres, bedrijfsgegevens, locatiegegevens en informatie die nodig is om een aanvraag, offerte of planning goed op te volgen."],
          ["Waarvoor", "Voor contact over aanvragen, het maken van afspraken, het opstellen van offertes, het uitvoeren van werk en de terugkoppeling daarna."],
          ["Bewaartermijn", "Gegevens worden niet langer bewaard dan nodig is voor administratie, communicatie, uitvoering van diensten en de wettelijke verplichtingen die daarbij horen."],
          ["Delen van gegevens", "Gegevens worden alleen gedeeld wanneer dat nodig is voor uitvoering, administratie of een wettelijke verplichting. We verkopen geen persoonsgegevens aan derden."],
          ["Contact over privacy", "Voor vragen over verwerking, inzage of correctie kun je contact opnemen via info@nordanker-service.de of +49 015510095242."],
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
