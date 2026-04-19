import { createFileRoute } from "@tanstack/react-router";
import { Clock3, Globe2, Mail, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { useLanguage } from "@/lib/language";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [{ title: "NordAnker Service | Contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { lang } = useLanguage();
  const t = lang === "de"
    ? {
        title: "Direktkontakt",
        whatsapp: "WhatsApp",
        mailLabel: "E-Mail",
        website: "Website",
        hours: "Oeffnungszeiten",
        whatsappNote: "Schnelle Rueckmeldung und direkte Abstimmung",
        mailNote: "Anfragen, Angebote und periodische Planung",
        websiteNote: "Weitere Informationen und Firmendetails",
        hoursValue: "Mo-Fr 08:00-18:00",
        hoursNote: "Sa nach Vereinbarung, Notfaelle via WhatsApp",
        scopeEyebrow: "Leistungsbereiche",
        scopeTitle: "Wobei wir direkt unterstuetzen",
        cleaning: "Reinigung",
        cleaningDetail: "Gebaeudereinigung, Grund-/Unterhaltsreinigung, Treppenhausreinigung, Fensterreinigung, Hochdruckreinigung und Graffitientfernung.",
        outdoor: "Aussenpflege",
        outdoorDetail: "Gartenpflege, Baumpflege und Winterdienst fuer Eingaenge, Aussenbereiche und Gelaende, die gepflegt bleiben muessen.",
        property: "Immobiliendienste",
        propertyDetail: "Kleinreparaturen, Kontrollpunkte und praktische Rueckmeldung bei Dingen, die im taeglichen Betrieb nicht liegen bleiben duerfen.",
      }
    : {
        title: "Direct contact",
        whatsapp: "WhatsApp",
        mailLabel: "E-mail",
        website: "Website",
        hours: "Openingstijden",
        whatsappNote: "Snelle opvolging en directe afstemming",
        mailNote: "Aanvragen, offertes en periodieke planning",
        websiteNote: "Meer informatie en bedrijfsdetails",
        hoursValue: "Ma-Fr 08:00-18:00",
        hoursNote: "Za op afspraak, spoed via WhatsApp",
        scopeEyebrow: "Diensten",
        scopeTitle: "Waar we direct bij helpen",
        cleaning: "Schoonmaak",
        cleaningDetail: "Gebouwenreiniging, basis-/regelmatige schoonmaak, trappenhuisreiniging, ramenreiniging, hogedrukreiniging en graffiti verwijdering.",
        outdoor: "Buitenonderhoud",
        outdoorDetail: "Tuinonderhoud, boomverzorging en winterdiensten voor entrees, buitenzones en terreinen die verzorgd moeten blijven.",
        property: "Vastgoeddiensten",
        propertyDetail: "Kleine reparaties, controlepunten en praktische opvolging van punten die in dagelijks beheer niet mogen blijven liggen.",
      };

  return (
    <div>
      <Navbar />

      <main className="contact-main">
        <section className="contact-details">
          <div className="contact-details__inner">
            <h1 className="contact-details__compact-title">{t.title}</h1>

            <div className="contact-details__rows">
              <a className="contact-details__row" href="https://wa.me/4915510095242">
                <div className="contact-details__label-group">
                  <MessageCircle className="contact-details__icon" />
                  <div className="contact-details__label">{t.whatsapp}</div>
                </div>
                <div className="contact-details__value-group">
                  <div className="contact-details__value">+49 015510095242</div>
                  <div className="contact-details__note">{t.whatsappNote}</div>
                </div>
              </a>

              <a className="contact-details__row" href="mailto:info@nordanker-service.de">
                <div className="contact-details__label-group">
                  <Mail className="contact-details__icon" />
                  <div className="contact-details__label">{t.mailLabel}</div>
                </div>
                <div className="contact-details__value-group">
                  <div className="contact-details__value">info@nordanker-service.de</div>
                  <div className="contact-details__note">{t.mailNote}</div>
                </div>
              </a>

              <a className="contact-details__row" href="https://nordanker-service.de">
                <div className="contact-details__label-group">
                  <Globe2 className="contact-details__icon" />
                  <div className="contact-details__label">{t.website}</div>
                </div>
                <div className="contact-details__value-group">
                  <div className="contact-details__value">nordanker-service.de</div>
                  <div className="contact-details__note">{t.websiteNote}</div>
                </div>
              </a>

              <div className="contact-details__row">
                <div className="contact-details__label-group">
                  <Clock3 className="contact-details__icon" />
                  <div className="contact-details__label">{t.hours}</div>
                </div>
                <div className="contact-details__value-group">
                  <div className="contact-details__value">{t.hoursValue}</div>
                  <div className="contact-details__note">{t.hoursNote}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-scope">
          <div className="contact-scope__inner">
            <div className="contact-scope__eyebrow">{t.scopeEyebrow}</div>
            <h2 className="contact-scope__headline">
              {t.scopeTitle}
            </h2>

            <div className="contact-scope__rows">
              <div className="contact-scope__row">
                <div className="contact-scope__term">{t.cleaning}</div>
                <p className="contact-scope__detail">{t.cleaningDetail}</p>
              </div>

              <div className="contact-scope__row">
                <div className="contact-scope__term">{t.outdoor}</div>
                <p className="contact-scope__detail">{t.outdoorDetail}</p>
              </div>

              <div className="contact-scope__row">
                <div className="contact-scope__term">{t.property}</div>
                <p className="contact-scope__detail">{t.propertyDetail}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
