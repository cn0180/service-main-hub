import { Link, createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";

const cleaningServices = [
  "Gebouwenreiniging",
  "Basis-/regelmatige schoonmaak",
  "Trappenhuisreiniging",
  "Ramenreiniging",
  "Hogedrukreiniging",
  "Graffiti verwijdering",
] as const;

const cleaningGroups = [
  {
    label: "Binnen en dagelijks",
    title: "Gebouwen, basis en trappenhuizen",
    copy:
      "Voor entrees, algemene ruimtes en looproutes die elke dag gebruikt worden en daarom structureel schoon en verzorgd moeten blijven.",
    items: [
      "Gebouwenreiniging",
      "Basis-/regelmatige schoonmaak",
      "Trappenhuisreiniging",
    ],
  },
  {
    label: "Glas en zichtlijnen",
    title: "Ramenreiniging voor een sterke eerste indruk",
    copy:
      "Voor glaspartijen, entrees en zichtbare gevelzones waar netheid direct meeweegt in hoe een pand wordt ervaren.",
    items: ["Ramenreiniging"],
  },
  {
    label: "Buiten en herstel",
    title: "Hogedrukreiniging en graffiti verwijdering",
    copy:
      "Voor harde oppervlakken en ongewenste vervuiling die een pand snel rommelig laten ogen als ze niet direct worden aangepakt.",
    items: ["Hogedrukreiniging", "Graffiti verwijdering"],
  },
] as const;

const cleaningApproach = [
  {
    term: "Afstemming",
    detail:
      "We kijken naar gebruik, toegang, frequentie en aandachtspunten zodat schoonmaak past bij het ritme van het pand.",
  },
  {
    term: "Uitvoering",
    detail:
      "Werkzaamheden worden netjes uitgevoerd met oog voor bewoners, bezoekers, medewerkers en dagelijkse doorloop.",
  },
  {
    term: "Opvolging",
    detail:
      "Vervolgpunten, terugkerende momenten en zichtbare aandachtspunten blijven in een vaste lijn meegenomen.",
  },
] as const;

export const Route = createFileRoute("/schoonmaak")({
  head: () => ({
    meta: [{ title: "NordAnker Service | Schoonmaak" }],
  }),
  component: CleaningPage,
});

function CleaningPage() {
  return (
    <div>
      <Navbar />

      <main className="cleaning-main">
        <section className="cleaning-hero">
          <div className="cleaning-hero__inner">
            <div className="cleaning-hero__eyebrow">Schoonmaak</div>
            <h1 className="cleaning-hero__title">
              Schoonmaak in een vaste lijn voor panden die zichtbaar op niveau moeten blijven.
            </h1>
            <p className="cleaning-hero__copy">
              Geen losse onderdelen onder elkaar, maar een duidelijke aanpak voor binnenruimtes,
              glas, buitenvlakken en hardnekkige vervuiling.
            </p>
            <div className="cleaning-hero__actions">
              <a
                className="cleaning-hero__action cleaning-hero__action--primary"
                href="https://wa.me/4915510095242"
              >
                WhatsApp
              </a>
              <Link
                className="cleaning-hero__action cleaning-hero__action--secondary"
                to="/contact"
                viewTransition
              >
                Contactpagina
              </Link>
            </div>
          </div>
        </section>

        <section className="cleaning-overview">
          <div className="cleaning-overview__inner">
            <div className="cleaning-overview__eyebrow">Wat we aanbieden</div>
            <h2 className="cleaning-overview__headline">
              Alles wat onder schoonmaak valt, overzichtelijk in een geheel.
            </h2>
            <p className="cleaning-overview__copy">
              Voor entrees, trappenhuizen, algemene ruimtes, ramen en buitenvlakken die schoon,
              verzorgd en representatief moeten blijven in dagelijks gebruik.
            </p>
            <div className="cleaning-overview__line">
              {cleaningServices.map((service) => (
                <span key={service} className="cleaning-overview__item">
                  {service}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="cleaning-scope">
          <div className="cleaning-scope__inner">
            <div className="cleaning-scope__intro">
              <div className="cleaning-scope__eyebrow">Waar het om gaat</div>
              <h2 className="cleaning-scope__headline">
                Niet zes losse secties, maar een schoonmaakpagina die laat zien wat je echt krijgt.
              </h2>
            </div>

            <div className="cleaning-scope__rows">
              {cleaningGroups.map((group) => (
                <div key={group.title} className="cleaning-scope__row">
                  <div className="cleaning-scope__label">{group.label}</div>
                  <div className="cleaning-scope__content">
                    <h3 className="cleaning-scope__title">{group.title}</h3>
                    <p className="cleaning-scope__copy">{group.copy}</p>
                    <div className="cleaning-scope__items">
                      {group.items.map((item) => (
                        <span key={item} className="cleaning-scope__item">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cleaning-approach">
          <div className="cleaning-approach__inner">
            <div className="cleaning-approach__eyebrow">Hoe we werken</div>
            <h2 className="cleaning-approach__headline">
              Schoonmaak die niet losstaat van planning, gebruik en uitstraling.
            </h2>

            <div className="cleaning-approach__rows">
              {cleaningApproach.map((step) => (
                <div key={step.term} className="cleaning-approach__row">
                  <div className="cleaning-approach__term">{step.term}</div>
                  <p className="cleaning-approach__detail">{step.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cleaning-cta">
          <div className="cleaning-cta__inner">
            <div className="cleaning-cta__eyebrow">Direct afstemmen</div>
            <h2 className="cleaning-cta__headline">
              Neem contact op voor schoonmaak die past bij het ritme van je pand.
            </h2>
            <div className="cleaning-cta__actions">
              <a className="cleaning-cta__action cleaning-cta__action--primary" href="https://wa.me/4915510095242">
                WhatsApp
              </a>
              <Link className="cleaning-cta__action cleaning-cta__action--secondary" to="/contact" viewTransition>
                Contactpagina
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
