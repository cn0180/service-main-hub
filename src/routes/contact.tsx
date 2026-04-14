import { createFileRoute } from "@tanstack/react-router";
import { Clock3, Globe2, Mail, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [{ title: "NordAnker Service | Contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div>
      <Navbar />

      <main className="contact-main">
        <section className="contact-hero">
          <div className="contact-hero__inner">
            <div className="contact-hero__eyebrow">Contact</div>
            <h1 className="contact-hero__title">
              Direct contact voor offerte, planning of snelle opvolging.
            </h1>
            <p className="contact-hero__copy">
              Voor schoonmaak, buitenonderhoud en vastgoedservice met duidelijke
              afspraken, korte lijnen en een praktische planning op locatie.
            </p>
            <div className="contact-hero__actions">
              <a
                className="contact-hero__action contact-hero__action--primary"
                href="https://wa.me/4915510095242"
              >
                WhatsApp
              </a>
              <a
                className="contact-hero__action contact-hero__action--secondary"
                href="mailto:info@nordanker-service.de"
              >
                E-mail sturen
              </a>
            </div>
          </div>
        </section>

        <section className="contact-details">
          <div className="contact-details__inner">
            <div className="contact-details__intro">
              <div className="contact-details__eyebrow">Bereikbaarheid</div>
              <h2 className="contact-details__headline">
                Alles op een plek voor snelle afstemming.
              </h2>
              <p className="contact-details__copy">
                Gebruik WhatsApp voor spoed of korte afstemming, en e-mail voor
                offertes, terugkerend onderhoud en uitgebreide aanvragen.
              </p>
            </div>

            <div className="contact-details__rows">
              <a className="contact-details__row" href="https://wa.me/4915510095242">
                <div className="contact-details__label-group">
                  <MessageCircle className="contact-details__icon" />
                  <div className="contact-details__label">WhatsApp</div>
                </div>
                <div className="contact-details__value-group">
                  <div className="contact-details__value">+49 015510095242</div>
                  <div className="contact-details__note">Voor snelle opvolging en directe vragen</div>
                </div>
              </a>

              <a className="contact-details__row" href="mailto:info@nordanker-service.de">
                <div className="contact-details__label-group">
                  <Mail className="contact-details__icon" />
                  <div className="contact-details__label">E-mail</div>
                </div>
                <div className="contact-details__value-group">
                  <div className="contact-details__value">info@nordanker-service.de</div>
                  <div className="contact-details__note">Voor offertes, periodiek werk en planning</div>
                </div>
              </a>

              <a className="contact-details__row" href="https://nordanker-service.de">
                <div className="contact-details__label-group">
                  <Globe2 className="contact-details__icon" />
                  <div className="contact-details__label">Website</div>
                </div>
                <div className="contact-details__value-group">
                  <div className="contact-details__value">nordanker-service.de</div>
                  <div className="contact-details__note">Algemene informatie en bedrijfsdetails</div>
                </div>
              </a>

              <div className="contact-details__row">
                <div className="contact-details__label-group">
                  <Clock3 className="contact-details__icon" />
                  <div className="contact-details__label">Openingstijden</div>
                </div>
                <div className="contact-details__value-group">
                  <div className="contact-details__value">Ma–Fr 08:00–18:00</div>
                  <div className="contact-details__note">Za op afspraak, spoed via WhatsApp</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-scope">
          <div className="contact-scope__inner">
            <div className="contact-scope__eyebrow">Waarvoor je contact opneemt</div>
            <h2 className="contact-scope__headline">
              Alles direct onder de juiste hoofddienst.
            </h2>

            <div className="contact-scope__rows">
              <div className="contact-scope__row">
                <div className="contact-scope__term">Schoonmaak</div>
                <p className="contact-scope__detail">
                  Gebouwenreiniging, basis-/regelmatige schoonmaak, trappenhuisreiniging,
                  ramenreiniging, hogedrukreiniging en graffiti verwijdering.
                </p>
              </div>

              <div className="contact-scope__row">
                <div className="contact-scope__term">Buitenonderhoud</div>
                <p className="contact-scope__detail">
                  Tuinonderhoud, boomverzorging en winterdiensten voor entrees,
                  buitenzones en terreinen die verzorgd moeten blijven.
                </p>
              </div>

              <div className="contact-scope__row">
                <div className="contact-scope__term">Vastgoeddiensten</div>
                <p className="contact-scope__detail">
                  Kleine reparaties, controlepunten en praktische opvolging van
                  punten die in dagelijks beheer niet mogen blijven liggen.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-process">
          <div className="contact-process__inner">
            <div className="contact-process__eyebrow">Na je bericht</div>
            <h2 className="contact-process__headline">
              Snel duidelijkheid over planning en uitvoering.
            </h2>

            <div className="contact-process__rows">
              <div className="contact-process__row">
                <div className="contact-process__term">01 Eerste afstemming</div>
                <p className="contact-process__detail">
                  We kijken direct of het gaat om spoed, periodiek onderhoud of een
                  aanvraag voor vaste ondersteuning.
                </p>
              </div>

              <div className="contact-process__row">
                <div className="contact-process__term">02 Inhoud en locatie</div>
                <p className="contact-process__detail">
                  Werkzaamheden, frequentie, toegang en aandachtspunten worden helder
                  afgestemd op het pand en het gebruik ervan.
                </p>
              </div>

              <div className="contact-process__row">
                <div className="contact-process__term">03 Voorstel of planning</div>
                <p className="contact-process__detail">
                  Daarna volgt een duidelijke terugkoppeling met voorstel, werkafspraak
                  of praktische vervolgstap.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
