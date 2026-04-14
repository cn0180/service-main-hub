import { Link, createFileRoute } from "@tanstack/react-router";
import { Building2, Trees, Wrench } from "lucide-react";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <Navbar />
      <main className="home-main">
        <section className="home-hero">
          <div className="home-hero__inner">
            <div className="home-hero__eyebrow">
              Schoonmaak, buitenonderhoud en vastgoedservice
            </div>
            <h1 className="home-hero__title">
              Een pand dat elke dag strak, schoon en representatief blijft.
            </h1>
            <p className="home-hero__copy">
              NordAnker regelt gebouwenreiniging, buitenonderhoud en kleine
              reparaties met vaste kwaliteit, heldere communicatie en een team
              dat gewoon op tijd komt.
            </p>
            <div className="home-hero__actions">
              <Link className="home-hero__action home-hero__action--primary" to="/contact">
                Offerte aanvragen
              </Link>
              <a className="home-hero__action home-hero__action--secondary" href="#diensten">
                Bekijk diensten
              </a>
            </div>
          </div>
        </section>

        <section className="home-stats" id="diensten">
          <div className="home-stats__inner">
            <div className="home-stats__item">
              <div className="home-stats__value">150+</div>
              <div className="home-stats__label">Projecten</div>
            </div>
            <div className="home-stats__item">
              <div className="home-stats__value">98%</div>
              <div className="home-stats__label">Tevreden</div>
            </div>
            <div className="home-stats__item">
              <div className="home-stats__value">5+</div>
              <div className="home-stats__label">Jaar</div>
            </div>
            <div className="home-stats__item">
              <div className="home-stats__value">24u</div>
              <div className="home-stats__label">Response</div>
            </div>
          </div>
        </section>

        <section className="home-offer" id="services">
          <div className="home-offer__inner">
            <div className="home-offer__header">
              <div className="home-offer__eyebrow">Onze services</div>
              <h2 className="home-offer__headline">
                Alle onderdelen overzichtelijk onder drie vaste diensten.
              </h2>
              <p className="home-offer__intro">
                Geen losse subpagina&apos;s, maar een duidelijk overzicht waarin alle
                werkzaamheden direct onder de juiste hoofddienst vallen.
              </p>
            </div>

            <div className="home-offer__rows">
              <article className="home-offer__service" id="buitenonderhoud">
                <div className="home-offer__service-head">
                  <Building2 className="home-offer__service-icon" />
                  <div>
                    <h3 className="home-offer__service-title">Schoonmaak</h3>
                    <p className="home-offer__service-copy">
                      Dagelijkse en periodieke reiniging voor panden die zichtbaar netjes
                      moeten blijven in gebruik.
                    </p>
                  </div>
                </div>
                <div className="home-offer__service-list">
                  <span className="home-offer__service-item">Gebouwenreiniging</span>
                  <span className="home-offer__service-item">Basis-/regelmatige schoonmaak</span>
                  <span className="home-offer__service-item">Trappenhuisreiniging</span>
                  <span className="home-offer__service-item">Ramenreiniging</span>
                  <span className="home-offer__service-item">Hogedrukreiniging</span>
                  <span className="home-offer__service-item">Graffiti verwijdering</span>
                </div>
              </article>

              <article className="home-offer__service" id="vastgoeddiensten">
                <div className="home-offer__service-head">
                  <Trees className="home-offer__service-icon" />
                  <div>
                    <h3 className="home-offer__service-title">Buitenonderhoud</h3>
                    <p className="home-offer__service-copy">
                      Onderhoud rond entrees, buitenzones en groenvoorziening voor een
                      verzorgde eerste indruk in elk seizoen.
                    </p>
                  </div>
                </div>
                <div className="home-offer__service-list">
                  <span className="home-offer__service-item">Tuinonderhoud</span>
                  <span className="home-offer__service-item">Boomverzorging</span>
                  <span className="home-offer__service-item">Winterdiensten</span>
                </div>
              </article>

              <article className="home-offer__service">
                <div className="home-offer__service-head">
                  <Wrench className="home-offer__service-icon" />
                  <div>
                    <h3 className="home-offer__service-title">Vastgoeddiensten</h3>
                    <p className="home-offer__service-copy">
                      Praktische ondersteuning voor panden waar kleine gebreken en
                      opvolging niet mogen blijven liggen.
                    </p>
                  </div>
                </div>
                <div className="home-offer__service-list">
                  <span className="home-offer__service-item">Kleine reparaties</span>
                  <span className="home-offer__service-item">Controlepunten</span>
                  <span className="home-offer__service-item">Snelle opvolging</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="home-why" id="waarom">
          <div className="home-why__inner">
            <div className="home-why__eyebrow">Waarom NordAnker</div>
            <h2 className="home-why__headline">
              Een aanpak die snel schakelt, zichtbaar netjes werkt en overzicht houdt.
            </h2>
            <p className="home-why__intro">
              Praktisch werken, helder communiceren en opvolging serieus nemen in elke fase van het werk.
            </p>

            <div className="home-why__rows">
              <div className="home-why__row">
                <div className="home-why__term">Snel</div>
                <p className="home-why__detail">
                  Korte lijnen en directe actie zodra een pand aandacht nodig heeft.
                </p>
              </div>

              <div className="home-why__row">
                <div className="home-why__term">Netjes</div>
                <p className="home-why__detail">
                  Werkzaamheden die niet alleen opgelost worden, maar ook verzorgd ogen in dagelijks gebruik.
                </p>
              </div>

              <div className="home-why__row">
                <div className="home-why__term">Helder</div>
                <p className="home-why__detail">
                  Vaste communicatie, duidelijke afspraken en geen losse eindjes in de opvolging.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="home-flow" id="werkwijze">
          <div className="home-flow__inner">
            <div className="home-flow__intro">
              <div className="home-flow__eyebrow">Werkwijze</div>
              <h2 className="home-flow__headline">
                Van melding tot uitvoering zonder losse eindjes.
              </h2>
              <p className="home-flow__copy">
                Heldere afspraken, vaste terugkoppeling en een planning die past bij panden
                die gewoon in gebruik blijven.
              </p>
            </div>

            <div className="home-flow__rows">
              <div className="home-flow__row">
                <div className="home-flow__term">01 Melding of aanvraag</div>
                <p className="home-flow__detail">
                  We stemmen snel af wat direct nodig is, wat periodiek moet gebeuren en
                  welke opvolging praktisch werkt op locatie.
                </p>
              </div>

              <div className="home-flow__row">
                <div className="home-flow__term">02 Planning en afstemming</div>
                <p className="home-flow__detail">
                  Werkmomenten, toegang, aandachtspunten en verwachtingen worden vooraf
                  duidelijk vastgelegd.
                </p>
              </div>

              <div className="home-flow__row">
                <div className="home-flow__term">03 Uitvoering op locatie</div>
                <p className="home-flow__detail">
                  Schoonmaak, buitenonderhoud en herstelwerk worden netjes uitgevoerd met
                  oog voor dagelijks gebruik van het pand.
                </p>
              </div>

              <div className="home-flow__row">
                <div className="home-flow__term">04 Controle en opvolging</div>
                <p className="home-flow__detail">
                  Na uitvoering blijft de communicatie kort en duidelijk, zodat open punten
                  direct opgepakt kunnen worden.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="home-sectors" id="panden">
          <div className="home-sectors__inner">
            <div className="home-sectors__header">
              <div className="home-sectors__eyebrow">Voor wie wij werken</div>
              <h2 className="home-sectors__headline">
                Praktische ondersteuning voor panden die elke dag verzorgd moeten blijven.
              </h2>
              <p className="home-sectors__copy">
                Van entrees en algemene ruimtes tot buitenzones en klein herstelwerk, met
                een aanpak die overzicht houdt in dagelijks beheer.
              </p>
            </div>

            <div className="home-sectors__list">
              <div className="home-sectors__item">
                <div className="home-sectors__name">Wooncomplexen en VvE&apos;s</div>
                <p className="home-sectors__text">
                  Trappenhuizen, entrees, glas en buitenruimte voor panden waar continu
                  bewoners en bezoekers in- en uitlopen.
                </p>
              </div>

              <div className="home-sectors__item">
                <div className="home-sectors__name">Kantoren en bedrijfsunits</div>
                <p className="home-sectors__text">
                  Representatieve werkplekken, nette ontvangstruimtes en praktische
                  opvolging van kleine herstelpunten.
                </p>
              </div>

              <div className="home-sectors__item">
                <div className="home-sectors__name">Commercieel vastgoed</div>
                <p className="home-sectors__text">
                  Locaties waar uitstraling, bereikbaarheid en continue netheid direct
                  merkbaar zijn voor klanten en gebruikers.
                </p>
              </div>

              <div className="home-sectors__item">
                <div className="home-sectors__name">Buitenterreinen en entrees</div>
                <p className="home-sectors__text">
                  Onderhoud, reiniging en seizoenwerk voor de eerste indruk rond een pand
                  en de dagelijkse doorgang naar binnen.
                </p>
              </div>
            </div>

            <div className="home-sectors__notes">
              <span className="home-sectors__note">Vaste contactpersoon</span>
              <span className="home-sectors__note">Korte lijnen</span>
              <span className="home-sectors__note">Flexibel inzetbaar</span>
            </div>
          </div>
        </section>

        <section className="home-cta" id="contact">
          <div className="home-cta__inner">
            <div className="home-cta__eyebrow">Direct contact</div>
            <h2 className="home-cta__headline">
              Neem contact op voor een offerte, vaste planning of snelle opvolging op
              locatie.
            </h2>
            <div className="home-cta__actions">
              <a className="home-cta__action home-cta__action--primary" href="https://wa.me/4915510095242">
                WhatsApp
              </a>
              <Link className="home-cta__action home-cta__action--secondary" to="/contact">
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
