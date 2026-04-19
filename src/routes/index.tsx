import { Link, createFileRoute } from "@tanstack/react-router";
import {
  Mail,
  PhoneCall,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { useLanguage } from "@/lib/language";

const serviceSections = {
  nl: [
    {
      id: "schoonmaakdiensten",
      title: "Schoonmaakdiensten",
      copy: "Voor binnenruimtes en glas dat dagelijks fris, netjes en representatief moet blijven.",
      items: [
        {
          title: "Gebouwenreiniging",
          detail: "Schoonmaak van entrees, algemene ruimtes en loopzones op vaste momenten.",
        },
        {
          title: "Basis-/Regelmatige schoonmaak",
          detail: "Terugkerende rondes afgestemd op gebruik, bezetting en gewenste uitstraling.",
        },
        {
          title: "Trappenhuisreiniging",
          detail: "Trappenhuizen en lifthallen netjes gehouden voor dagelijks intensief gebruik.",
        },
        {
          title: "Ramenreiniging",
          detail: "Binnen- en buitenzijde van glas voor een heldere en verzorgde eerste indruk.",
        },
      ],
    },
    {
      id: "buitenonderhoud",
      title: "Buitenonderhoud",
      copy: "Voor gevels, terrein en buitenzones die verzorgd en veilig moeten ogen in elk seizoen.",
      items: [
        {
          title: "Hogedrukreiniging",
          detail: "Dieptereiniging van steen, bestrating en gevelvlakken met passend drukniveau.",
        },
        {
          title: "Tuinonderhoud / Boomverzorging",
          detail: "Onderhoud van groen, snoeiwerk en verzorging van bomen rond het pand.",
        },
        {
          title: "Graffiti verwijdering",
          detail: "Snelle verwijdering van graffiti om de uitstraling van het pand te herstellen.",
        },
      ],
    },
    {
      id: "vastgoeddiensten",
      title: "Vastgoeddiensten",
      copy: "Voor kleine herstelpunten die snel en zonder ruis opgepakt moeten worden.",
      items: [
        {
          title: "Winterdiensten",
          detail: "Sneeuw- en gladheidsaanpak voor toegangen en looproutes in koude periodes.",
        },
        {
          title: "Kleine reparaties",
          detail: "Kleine herstelpunten en praktische ingrepen die dagelijks beheer soepel houden.",
        },
      ],
    },
  ],
  de: [
    {
      id: "schoonmaakdiensten",
      title: "Reinigungsdienste",
      copy: "Fuer Innenraeume und Glasflaechen, die taeglich frisch, sauber und repraesentativ bleiben muessen.",
      items: [
        {
          title: "Gebaeudereinigung",
          detail: "Reinigung von Eingaengen, Gemeinschaftsbereichen und Laufwegen in festen Intervallen.",
        },
        {
          title: "Grund-/Unterhaltsreinigung",
          detail: "Wiederkehrende Reinigungsrunden passend zu Nutzung, Auslastung und gewuenschter Ausstrahlung.",
        },
        {
          title: "Treppenhausreinigung",
          detail: "Treppenhaeuser und Aufzugsvorbereiche sauber gehalten fuer den intensiven Tagesbetrieb.",
        },
        {
          title: "Fensterreinigung",
          detail: "Innen- und Aussenseiten von Glasflaechen fuer einen klaren und gepflegten ersten Eindruck.",
        },
      ],
    },
    {
      id: "buitenonderhoud",
      title: "Aussenpflege",
      copy: "Fuer Fassaden, Gelaende und Aussenbereiche, die in jeder Jahreszeit gepflegt und sicher wirken muessen.",
      items: [
        {
          title: "Hochdruckreinigung",
          detail: "Tiefenreinigung von Stein, Pflaster und Fassadenflaechen mit abgestimmtem Druckniveau.",
        },
        {
          title: "Gartenpflege / Baumpflege",
          detail: "Pflege von Gruenflaechen, Schnittarbeiten und Betreuung von Baeumen rund um die Immobilie.",
        },
        {
          title: "Graffitientfernung",
          detail: "Schnelle Entfernung von Graffiti, damit die Immobilie wieder ordentlich wirkt.",
        },
      ],
    },
    {
      id: "vastgoeddiensten",
      title: "Immobiliendienste",
      copy: "Fuer kleinere Reparaturen und praktische Punkte, die schnell und ohne Umwege erledigt werden muessen.",
      items: [
        {
          title: "Winterdienst",
          detail: "Schnee- und Glaetteeinsatz fuer Zugaenge und Laufwege in kalten Perioden.",
        },
        {
          title: "Kleinreparaturen",
          detail: "Kleine Instandsetzungen und praktische Eingriffe, die den taeglichen Betrieb stabil halten.",
        },
      ],
    },
  ],
} as const;

const faqs = {
  nl: [
    {
      question: "Hoe snel kunnen jullie schakelen?",
      answer:
        "Bij directe meldingen stemmen we snel af wat prioriteit heeft en wanneer uitvoering praktisch kan plaatsvinden.",
    },
    {
      question: "Kunnen schoonmaak, buitenonderhoud en herstelwerk gecombineerd worden?",
      answer:
        "Ja. Juist die combinatie houden we in een vaste lijn, zodat je niet met meerdere losse partijen hoeft te schakelen.",
    },
    {
      question: "Werken jullie ook periodiek?",
      answer:
        "Ja. We stemmen vaste momenten af voor terugkerende schoonmaak, buitenonderhoud en controlepunten op locatie.",
    },
    {
      question: "Hoe verloopt contact en opvolging?",
      answer:
        "Via korte lijnen, duidelijke terugkoppeling en vaste afspraken over wat gebeurt, wanneer het gebeurt en wat nog openstaat.",
    },
  ],
  de: [
    {
      question: "Wie schnell koennt ihr reagieren?",
      answer:
        "Bei direkten Meldungen stimmen wir schnell ab, was Prioritaet hat und wann die Ausfuehrung praktisch erfolgen kann.",
    },
    {
      question: "Koennen Reinigung, Aussenpflege und Reparaturen kombiniert werden?",
      answer:
        "Ja. Gerade diese Kombination fuehren wir in einer festen Linie, damit du nicht mit mehreren einzelnen Parteien abstimmen musst.",
    },
    {
      question: "Arbeitet ihr auch periodisch?",
      answer:
        "Ja. Wir stimmen feste Zeitpunkte fuer wiederkehrende Reinigung, Aussenpflege und Kontrollpunkte vor Ort ab.",
    },
    {
      question: "Wie laufen Kontakt und Rueckmeldung ab?",
      answer:
        "Ueber kurze Wege, klare Rueckmeldungen und feste Absprachen dazu, was passiert, wann es passiert und was noch offen ist.",
    },
  ],
} as const;

const whyPoints = {
  nl: [
    "Betrouwbaarheid en discretie",
    "Professioneel en ervaren team",
    "Hoogwaardige schoonmaakmiddelen",
    "Flexibele planning",
    "Scherpe en transparante prijzen",
  ],
  de: [
    "Zuverlaessigkeit und Diskretion",
    "Professionelles und erfahrenes Team",
    "Hochwertige Reinigungsmittel",
    "Flexible Planung",
    "Faire und transparente Preise",
  ],
} as const;

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const { lang } = useLanguage();
  const t = lang === "de"
    ? {
        heroEyebrow: "Reinigung, Aussenpflege und Immobiliendienste",
        heroTitle: "Sauber, ordentlich und repraesentativ.",
        heroPrimary: "Angebot anfragen",
        heroSecondary: "Leistungen ansehen",
        stats: ["Projekte", "Zufrieden", "Jahre", "Antwort"],
        servicesEyebrow: "Unsere Leistungen",
        whyEyebrow: "Warum NordAnker",
        whyTitle: "Reinigung, auf die man sich verlassen kann",
        whyCopy: "Wir liefern gruendliche und sorgfaeltige Reinigung, damit jede Flaeche frisch, ordentlich und repraesentativ bleibt. Absprachen gelten, mit Blick fuer Details bis in jede Ecke.",
        flowEyebrow: "Ablauf",
        flowTitle: "Vier Schritte, kurze Wege, klare Ausfuehrung.",
        flowSteps: [
          ["Meldung", "Wir stimmen direkt ab, was anliegt, was Prioritaet hat und was praktisch gebraucht wird."],
          ["Abstimmung", "Zugang, Planung und Aufmerksamkeitspunkte werden vorab klar festgelegt."],
          ["Ausfuehrung", "Die Arbeit wird ordentlich vor Ort erledigt, mit Blick auf Nutzung und Durchlauf."],
          ["Rueckmeldung", "Offene Punkte bleiben nicht liegen und Folgearbeiten werden direkt aufgenommen."],
        ],
        faqEyebrow: "FAQ",
        faqTitle: "Kurze Antworten zu Planung, Kombination und Rueckmeldung.",
        ctaTitle: "Bereit fuer eine saubere Umgebung?",
        ctaCopy: "Dann nimm Kontakt mit einem unserer Mitarbeiter auf.",
      }
    : {
        heroEyebrow: "Schoonmaak, buitenonderhoud en vastgoedservice",
        heroTitle: "Strak, schoon en representatief.",
        heroPrimary: "Offerte aanvragen",
        heroSecondary: "Bekijk diensten",
        stats: ["Projecten", "Tevreden", "Jaar", "Response"],
        servicesEyebrow: "Onze services",
        whyEyebrow: "Waarom NordAnker",
        whyTitle: "Schoonmaak waarop je kunt vertrouwen",
        whyCopy: "Wij leveren een grondige en zorgvuldige schoonmaak, zodat elke ruimte fris, netjes en representatief achterblijft. Afspraak is afspraak, met oog voor detail in elk hoekje.",
        flowEyebrow: "Werkwijze",
        flowTitle: "Vier stappen, korte lijn, duidelijke uitvoering.",
        flowSteps: [
          ["Melding", "We stemmen direct af wat speelt, wat prioriteit heeft en wat praktisch nodig is."],
          ["Afstemming", "Toegang, planning en aandachtspunten liggen vooraf duidelijk vast."],
          ["Uitvoering", "Het werk gebeurt netjes op locatie, met oog voor gebruik en doorloop."],
          ["Terugkoppeling", "Open punten blijven niet liggen en vervolgwerk wordt direct opgepakt."],
        ],
        faqEyebrow: "FAQ",
        faqTitle: "Korte antwoorden op vragen over planning, combinatie en opvolging.",
        ctaTitle: "Klaar voor een schone omgeving?",
        ctaCopy: "Neem dan contact op met een van onze medewerkers.",
      };
  const localizedServiceSections = serviceSections[lang];
  const localizedFaqs = faqs[lang];
  const localizedWhyPoints = whyPoints[lang];

  return (
    <div>
      <Navbar />
      <main className="home-main">
        <section className="home-hero">
          <div className="home-hero__inner">
            <div className="home-hero__eyebrow">
              {t.heroEyebrow}
            </div>
            <div className="home-hero__text">
              <h1 className="home-hero__title">
                {t.heroTitle}
              </h1>
            </div>
            <div className="home-hero__actions">
              <Link className="home-hero__action home-hero__action--primary" to="/contact" viewTransition>
                {t.heroPrimary}
              </Link>
              <a className="home-hero__action home-hero__action--secondary" href="#services">
                {t.heroSecondary}
              </a>
            </div>
          </div>
        </section>

        <section className="home-stats" id="diensten">
          <div className="home-stats__inner">
            <div className="home-stats__item">
              <div className="home-stats__value">150+</div>
              <div className="home-stats__label">{t.stats[0]}</div>
            </div>
            <div className="home-stats__item">
              <div className="home-stats__value">98%</div>
              <div className="home-stats__label">{t.stats[1]}</div>
            </div>
            <div className="home-stats__item">
              <div className="home-stats__value">5+</div>
              <div className="home-stats__label">{t.stats[2]}</div>
            </div>
            <div className="home-stats__item">
              <div className="home-stats__value">24u</div>
              <div className="home-stats__label">{t.stats[3]}</div>
            </div>
          </div>
        </section>

        <section className="home-services-intro" id="services">
          <div className="home-services-intro__inner">
            <div className="home-services-intro__eyebrow">{t.servicesEyebrow}</div>
          </div>
        </section>

        {localizedServiceSections.map((section, index) => (
          <section
            key={section.title}
            className={`home-service-band home-service-band--${index % 2 === 0 ? "forward" : "reverse"}`}
            id={section.id}
          >
            <div className="home-service-band__inner">
              <div className="home-service-band__meta">
                <h2 className="home-service-band__title">{section.title}</h2>
                <p className="home-service-band__copy">{section.copy}</p>
              </div>

              <ul
                className={`home-service-band__list${section.items.length === 1 ? " home-service-band__list--single" : ""}`}
              >
                {section.items.map((item) => (
                  <li key={item.title} className="home-service-band__item">
                    <details className="home-service-band__entry">
                      <summary className="home-service-band__summary">
                        <span className="home-service-band__item-label">{item.title}</span>
                        <span className="home-service-band__plus" aria-hidden="true">
                          <span className="home-service-band__plus-line home-service-band__plus-line--h" />
                          <span className="home-service-band__plus-line home-service-band__plus-line--v" />
                        </span>
                      </summary>
                      <div className="home-service-band__detail">
                        <p className="home-service-band__detail-copy">{item.detail}</p>
                      </div>
                    </details>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}

        <section className="home-why" id="waarom">
          <div className="home-why__inner">
            <div className="home-why__layout">
              <div className="home-why__content">
                <div className="home-why__eyebrow">{t.whyEyebrow}</div>
                <h2 className="home-why__headline">
                  {t.whyTitle}
                </h2>
                <p className="home-why__intro">
                  {t.whyCopy}
                </p>
              </div>

              <ul className="home-why__list">
                {localizedWhyPoints.map((point) => (
                  <li key={point} className="home-why__list-item">
                    <span className="home-why__check" aria-hidden="true" />
                    <span className="home-why__list-copy">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="home-flow" id="werkwijze">
          <div className="home-flow__inner">
            <div className="home-flow__eyebrow">{t.flowEyebrow}</div>
            <h2 className="home-flow__headline">
              {t.flowTitle}
            </h2>

            <div className="home-flow__track">
              {t.flowSteps.map((step, index) => (
                <div key={step[0]} className="home-flow__step">
                  <div className="home-flow__step-number">{String(index + 1).padStart(2, "0")}</div>
                  <h3 className="home-flow__step-title">{step[0]}</h3>
                  <p className="home-flow__step-copy">{step[1]}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="home-faq" id="faq">
          <div className="home-faq__inner">
            <div className="home-faq__header">
              <div className="home-faq__eyebrow">{t.faqEyebrow}</div>
              <h2 className="home-faq__headline">
                {t.faqTitle}
              </h2>
            </div>

            <div className="home-faq__list">
              {localizedFaqs.map((faq) => (
                <details key={faq.question} className="home-faq__item">
                  <summary className="home-faq__summary">
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
            <div className="home-cta__content">
              <h2 className="home-cta__headline">
                {t.ctaTitle}
              </h2>
              <p className="home-cta__copy">
                {t.ctaCopy}
              </p>
            </div>

            <div className="home-cta__details">
              <a className="home-cta__detail" href="tel:+4915510095242">
                <PhoneCall className="home-cta__detail-icon" />
                <span className="home-cta__detail-value">+49 015510095242</span>
              </a>

              <a className="home-cta__detail" href="mailto:info@nordanker-service.de">
                <Mail className="home-cta__detail-icon" />
                <span className="home-cta__detail-value">info@nordanker-service.de</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
