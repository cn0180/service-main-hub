import { Link, createFileRoute } from "@tanstack/react-router";
import {
  BrushCleaning,
  Building2,
  ClipboardCheck,
  Hammer,
  ScanSearch,
  Snowflake,
  Sparkles,
  SprayCan,
  Trees,
  WandSparkles,
  Wrench,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";

const serviceItems = [
  { group: "Schoonmaak", title: "Gebouwenreiniging", Icon: Building2 },
  { group: "Schoonmaak", title: "Basis-/regelmatige schoonmaak", Icon: Sparkles },
  { group: "Schoonmaak", title: "Trappenhuisreiniging", Icon: BrushCleaning },
  { group: "Schoonmaak", title: "Ramenreiniging", Icon: ScanSearch },
  { group: "Schoonmaak", title: "Hogedrukreiniging", Icon: SprayCan },
  { group: "Schoonmaak", title: "Graffiti verwijdering", Icon: WandSparkles },
  { group: "Buitenonderhoud", title: "Tuinonderhoud", Icon: Trees, id: "buitenonderhoud" },
  { group: "Buitenonderhoud", title: "Boomverzorging", Icon: Trees },
  { group: "Buitenonderhoud", title: "Winterdiensten", Icon: Snowflake },
  { group: "Vastgoeddiensten", title: "Kleine reparaties", Icon: Hammer, id: "vastgoeddiensten" },
  { group: "Vastgoeddiensten", title: "Controlepunten", Icon: ClipboardCheck },
  { group: "Vastgoeddiensten", title: "Snelle opvolging", Icon: Wrench },
] as const;

const faqs = [
  {
    number: "01",
    question: "Hoe snel kunnen jullie schakelen?",
    answer:
      "Bij directe meldingen stemmen we snel af wat prioriteit heeft en wanneer uitvoering praktisch kan plaatsvinden.",
  },
  {
    number: "02",
    question: "Kunnen schoonmaak, buitenonderhoud en herstelwerk gecombineerd worden?",
    answer:
      "Ja. Juist die combinatie houden we in een vaste lijn, zodat je niet met meerdere losse partijen hoeft te schakelen.",
  },
  {
    number: "03",
    question: "Werken jullie ook periodiek?",
    answer:
      "Ja. We stemmen vaste momenten af voor terugkerende schoonmaak, buitenonderhoud en controlepunten op locatie.",
  },
  {
    number: "04",
    question: "Hoe verloopt contact en opvolging?",
    answer:
      "Via korte lijnen, duidelijke terugkoppeling en vaste afspraken over wat gebeurt, wanneer het gebeurt en wat nog openstaat.",
  },
] as const;

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
            <div className="home-hero__text">
              <h1 className="home-hero__title">
                Strak, schoon en representatief.
              </h1>
              <p className="home-hero__copy">
                Gebouwenreiniging, buitenonderhoud en klein herstelwerk in een vaste lijn.
              </p>
            </div>
            <div className="home-hero__actions">
              <Link className="home-hero__action home-hero__action--primary" to="/contact" viewTransition>
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
              <div>
                <div className="home-offer__eyebrow">Onze services</div>
                <h2 className="home-offer__headline">
                  Alle diensten in een doorlopende lijn met iconen.
                </h2>
              </div>
              <p className="home-offer__intro">
                Gebouwenreiniging, buitenonderhoud en vastgoedservice in een bewegende strip.
              </p>
            </div>

            <div className="home-offer__marquee">
              <div className="home-offer__grid">
                {[...serviceItems, ...serviceItems].map((item, index) => {
                  const Icon = item.Icon;
                  const isPrimarySet = index < serviceItems.length;

                  return (
                    <article
                      key={`${item.title}-${index}`}
                      className="home-offer__item"
                      id={isPrimarySet ? item.id : undefined}
                    >
                      <div className="home-offer__item-header">
                        <p className="home-offer__item-detail">{item.group}</p>
                        <h3 className="home-offer__item-title">{item.title}</h3>
                      </div>
                      <div className="home-offer__icon-wrap">
                        <Icon className="home-offer__item-icon" />
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="home-why" id="waarom">
          <div className="home-why__inner">
            <div className="home-why__eyebrow">Waarom NordAnker</div>
            <h2 className="home-why__headline">
              Geen ruis in de opvolging, maar vaste lijnen voor panden die verzorgd moeten blijven.
            </h2>
            <p className="home-why__intro">
              Een vaste contactlijn, duidelijke afspraken en werk dat ook tijdens dagelijks gebruik representatief blijft.
            </p>

            <div className="home-why__proofs">
              <div className="home-why__proof">
                <div className="home-why__proof-title">Snelle lijn</div>
                <p className="home-why__proof-copy">
                  Direct schakelen zodra er iets speelt op locatie.
                </p>
              </div>

              <div className="home-why__proof">
                <div className="home-why__proof-title">Net uitgevoerd</div>
                <p className="home-why__proof-copy">
                  Werk dat zichtbaar klopt in entrees, algemene ruimtes en buitenzones.
                </p>
              </div>

              <div className="home-why__proof">
                <div className="home-why__proof-title">Vaste afspraken</div>
                <p className="home-why__proof-copy">
                  Duidelijk wat gebeurt, wanneer het gebeurt en wat er nog openstaat.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="home-flow" id="werkwijze">
          <div className="home-flow__inner">
            <div className="home-flow__eyebrow">Werkwijze</div>
            <h2 className="home-flow__headline">
              Vier stappen, korte lijn, duidelijke uitvoering.
            </h2>

            <div className="home-flow__track">
              <div className="home-flow__step">
                <div className="home-flow__step-number">01</div>
                <h3 className="home-flow__step-title">Melding</h3>
                <p className="home-flow__step-copy">
                  We stemmen direct af wat speelt, wat prioriteit heeft en wat praktisch nodig is.
                </p>
              </div>

              <div className="home-flow__step">
                <div className="home-flow__step-number">02</div>
                <h3 className="home-flow__step-title">Afstemming</h3>
                <p className="home-flow__step-copy">
                  Toegang, planning en aandachtspunten liggen vooraf duidelijk vast.
                </p>
              </div>

              <div className="home-flow__step">
                <div className="home-flow__step-number">03</div>
                <h3 className="home-flow__step-title">Uitvoering</h3>
                <p className="home-flow__step-copy">
                  Het werk gebeurt netjes op locatie, met oog voor gebruik en doorloop.
                </p>
              </div>

              <div className="home-flow__step">
                <div className="home-flow__step-number">04</div>
                <h3 className="home-flow__step-title">Terugkoppeling</h3>
                <p className="home-flow__step-copy">
                  Open punten blijven niet liggen en vervolgwerk wordt direct opgepakt.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="home-faq" id="faq">
          <div className="home-faq__inner">
            <div className="home-faq__header">
              <div className="home-faq__eyebrow">FAQ</div>
              <h2 className="home-faq__headline">
                Korte antwoorden op vragen over planning, combinatie en opvolging.
              </h2>
            </div>

            <div className="home-faq__list">
              {faqs.map((faq, index) => (
                <details key={faq.question} className="home-faq__item" open={index === 0}>
                  <summary className="home-faq__summary">
                    <span className="home-faq__number">{faq.number}</span>
                    <span className="home-faq__question">{faq.question}</span>
                  </summary>
                  <div className="home-faq__answer">
                    <p className="home-faq__answer-copy">{faq.answer}</p>
                  </div>
                </details>
              ))}
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
              <Link className="home-cta__action home-cta__action--secondary" to="/contact" viewTransition>
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
