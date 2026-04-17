import { Link, createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";

const outdoorServices = [
  "Tuinonderhoud",
  "Boomverzorging",
  "Winterdiensten",
] as const;

const outdoorGroups = [
  {
    label: "Groen en eerste indruk",
    title: "Tuinonderhoud voor verzorgde buitenruimtes",
    copy:
      "Voor entrees, plantvakken, groenstroken en buitenzones die netjes moeten ogen en in dagelijks gebruik op orde moeten blijven.",
    items: ["Tuinonderhoud"],
  },
  {
    label: "Structuur en veiligheid",
    title: "Boomverzorging met aandacht voor overzicht en doorgang",
    copy:
      "Voor bomen en grotere groenonderdelen die onderhoud nodig hebben om het terrein verzorgd, toegankelijk en veilig te houden.",
    items: ["Boomverzorging"],
  },
  {
    label: "Seizoen en bereikbaarheid",
    title: "Winterdiensten zodra weersomstandigheden het vragen",
    copy:
      "Voor paden, entrees en buitenruimtes die ook in koude en natte periodes bruikbaar en representatief moeten blijven.",
    items: ["Winterdiensten"],
  },
] as const;

const outdoorApproach = [
  {
    term: "Seizoensplanning",
    detail:
      "We stemmen onderhoud af op groeiperiodes, weersinvloed en de belasting van het terrein rond het pand.",
  },
  {
    term: "Uitvoering op locatie",
    detail:
      "Werk gebeurt met oog voor doorgang, bewoners, bezoekers en de eerste indruk bij aankomst.",
  },
  {
    term: "Vaste opvolging",
    detail:
      "Aandachtspunten blijven in beeld zodat buitenonderhoud niet afhankelijk wordt van losse meldingen.",
  },
] as const;

export const Route = createFileRoute("/buitenonderhoud")({
  head: () => ({
    meta: [{ title: "NordAnker Service | Buitenonderhoud" }],
  }),
  component: OutdoorPage,
});

function OutdoorPage() {
  return (
    <div>
      <Navbar />

      <main className="outdoor-main">
        <section className="outdoor-hero">
          <div className="outdoor-hero__inner">
            <div className="outdoor-hero__eyebrow">Buitenonderhoud</div>
            <h1 className="outdoor-hero__title">
              Buitenonderhoud voor panden die buiten net zo verzorgd moeten ogen als binnen.
            </h1>
            <p className="outdoor-hero__copy">
              Geen losse onderdelen onder elkaar, maar een duidelijke aanpak voor groen,
              terrein en seizoenswerk rond het pand.
            </p>
            <div className="outdoor-hero__actions">
              <a
                className="outdoor-hero__action outdoor-hero__action--primary"
                href="https://wa.me/4915510095242"
              >
                WhatsApp
              </a>
              <Link
                className="outdoor-hero__action outdoor-hero__action--secondary"
                to="/contact"
                viewTransition
              >
                Contactpagina
              </Link>
            </div>
          </div>
        </section>

        <section className="outdoor-overview">
          <div className="outdoor-overview__inner">
            <div className="outdoor-overview__eyebrow">Wat we aanbieden</div>
            <h2 className="outdoor-overview__headline">
              Alles wat onder buitenonderhoud valt, helder in een geheel.
            </h2>
            <p className="outdoor-overview__copy">
              Voor entrees, paden, groenstroken en buitenruimtes die het hele jaar door
              verzorgd, bruikbaar en representatief moeten blijven.
            </p>
            <div className="outdoor-overview__line">
              {outdoorServices.map((service) => (
                <span key={service} className="outdoor-overview__item">
                  {service}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="outdoor-scope">
          <div className="outdoor-scope__inner">
            <div className="outdoor-scope__intro">
              <div className="outdoor-scope__eyebrow">Waar het om gaat</div>
              <h2 className="outdoor-scope__headline">
                Buitenonderhoud dat aansluit op uitstraling, veiligheid en dagelijks gebruik.
              </h2>
            </div>

            <div className="outdoor-scope__rows">
              {outdoorGroups.map((group) => (
                <div key={group.title} className="outdoor-scope__row">
                  <div className="outdoor-scope__label">{group.label}</div>
                  <div className="outdoor-scope__content">
                    <h3 className="outdoor-scope__title">{group.title}</h3>
                    <p className="outdoor-scope__copy">{group.copy}</p>
                    <div className="outdoor-scope__items">
                      {group.items.map((item) => (
                        <span key={item} className="outdoor-scope__item">
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

        <section className="outdoor-approach">
          <div className="outdoor-approach__inner">
            <div className="outdoor-approach__eyebrow">Hoe we werken</div>
            <h2 className="outdoor-approach__headline">
              Buitenonderhoud dat meebeweegt met seizoen, terrein en gebruik.
            </h2>

            <div className="outdoor-approach__rows">
              {outdoorApproach.map((step) => (
                <div key={step.term} className="outdoor-approach__row">
                  <div className="outdoor-approach__term">{step.term}</div>
                  <p className="outdoor-approach__detail">{step.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="outdoor-cta">
          <div className="outdoor-cta__inner">
            <div className="outdoor-cta__eyebrow">Direct afstemmen</div>
            <h2 className="outdoor-cta__headline">
              Neem contact op voor buitenonderhoud dat past bij terrein, seizoen en gebruik.
            </h2>
            <div className="outdoor-cta__actions">
              <a className="outdoor-cta__action outdoor-cta__action--primary" href="https://wa.me/4915510095242">
                WhatsApp
              </a>
              <Link className="outdoor-cta__action outdoor-cta__action--secondary" to="/contact" viewTransition>
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
