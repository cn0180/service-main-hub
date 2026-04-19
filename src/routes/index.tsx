import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import {
  Mail,
  PhoneCall,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { useLanguage } from "@/lib/language";

const serviceSections = {
  en: [
    {
      id: "schoonmaakdiensten",
      title: "Cleaning Services",
      copy: "For indoor areas and glass that must stay fresh, neat and representative every day.",
      items: [
        {
          title: "Building Cleaning",
          detail: "Cleaning of entrances, shared areas and walkways at fixed intervals.",
        },
        {
          title: "Basic / Regular Cleaning",
          detail: "Recurring rounds aligned with use, occupancy and required presentation.",
        },
        {
          title: "Stairwell Cleaning",
          detail: "Stairwells and lift lobbies kept clean for intensive daily use.",
        },
        {
          title: "Window Cleaning",
          detail: "Inside and outside glass cleaned for a clear and well-kept first impression.",
        },
      ],
    },
    {
      id: "buitenonderhoud",
      title: "Outdoor Care",
      copy: "For facades, grounds and outdoor zones that must look clean and safe in every season.",
      items: [
        {
          title: "High-pressure Cleaning",
          detail: "Deep cleaning of stone, paving and facade surfaces with suitable pressure levels.",
        },
        {
          title: "Garden / Tree Care",
          detail: "Maintenance of green areas, pruning work and tree care around the property.",
        },
        {
          title: "Graffiti Removal",
          detail: "Fast graffiti removal to restore the appearance of the property.",
        },
      ],
    },
    {
      id: "vastgoeddiensten",
      title: "Property Services",
      copy: "For minor repair points that need fast and clear follow-up.",
      items: [
        {
          title: "Winter Services",
          detail: "Snow and anti-slip response for access points and walkways in cold periods.",
        },
        {
          title: "Small Repairs",
          detail: "Small fixes and practical interventions that keep daily property operations running.",
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
  en: [
    {
      question: "How fast can you respond?",
      answer:
        "For urgent requests we quickly align priorities and a practical execution moment.",
    },
    {
      question: "Can cleaning, outdoor care and repair work be combined?",
      answer:
        "Yes. We keep this combination in one fixed line, so you do not need to coordinate multiple separate parties.",
    },
    {
      question: "Do you also work on a recurring schedule?",
      answer:
        "Yes. We set fixed moments for recurring cleaning, outdoor care and control points on site.",
    },
    {
      question: "How does contact and follow-up work?",
      answer:
        "Through short communication lines, clear feedback and fixed agreements on what is done, when it is done, and what is still open.",
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
  en: [
    "Reliability and discretion",
    "Professional and experienced team",
    "High-quality cleaning products",
    "Flexible planning",
    "Clear and transparent pricing",
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
        heroCopy: "Ein Team fuer Reinigung, Aussenpflege und praktische Immobiliendienste mit klarer Planung und direkter Rueckmeldung.",
        heroPrimary: "Angebot anfragen",
        heroSecondary: "Leistungen ansehen",
        stats: [
          ["3", "Bereiche"],
          ["9", "Dienste"],
          ["24/7", "Notaufnahme"],
          ["08-18", "Werktage"],
        ],
        servicesEyebrow: "Unsere Leistungen",
        whyEyebrow: "Warum NordAnker",
        whyTitle: "Reinigung, auf die man sich verlassen kann",
        whyCopy: "Gruendliche Reinigung mit klaren Absprachen und sichtbar ordentlichem Ergebnis.",
        flowEyebrow: "Ablauf",
        flowTitle: "Vier Schritte, kurze Wege, klare Ausfuehrung.",
        flowSteps: [
          ["Meldung", "Wir stimmen direkt ab, was anliegt, was Prioritaet hat und was praktisch gebraucht wird."],
          ["Abstimmung", "Zugang, Planung und Aufmerksamkeitspunkte werden vorab klar festgelegt."],
          ["Ausfuehrung", "Die Arbeit wird ordentlich vor Ort erledigt, mit Blick auf Nutzung und Durchlauf."],
          ["Rueckmeldung", "Offene Punkte bleiben nicht liegen und Folgearbeiten werden direkt aufgenommen."],
        ],
        faqEyebrow: "FAQ",
        ctaTitle: "Bereit fuer eine saubere Umgebung?",
      }
    : {
        heroEyebrow: "Cleaning, outdoor care and property services",
        heroTitle: "Clean, sharp and representative.",
        heroCopy: "One team for cleaning, outdoor care and practical property support with clear planning and direct follow-up.",
        heroPrimary: "Request quote",
        heroSecondary: "View services",
        stats: [
          ["3", "Areas"],
          ["9", "Services"],
          ["24/7", "Urgency"],
          ["08-18", "Weekdays"],
        ],
        servicesEyebrow: "Our services",
        whyEyebrow: "Why NordAnker",
        whyTitle: "Cleaning you can rely on",
        whyCopy: "Thorough work, clear agreements and a visibly neat result.",
        flowEyebrow: "Workflow",
        flowTitle: "Four steps, short lines, clear execution.",
        flowSteps: [
          ["Request", "We align quickly on what is happening, what has priority and what is practically needed."],
          ["Planning", "Access, timing and focus points are fixed clearly in advance."],
          ["Execution", "Work is done neatly on-site with attention to daily use and flow."],
          ["Follow-up", "Open points are not left behind and next actions are handled directly."],
        ],
        faqEyebrow: "FAQ",
        ctaTitle: "Ready for a clean environment?",
      };
  const localizedServiceSections = serviceSections[lang];
  const localizedFaqs = faqs[lang];
  const localizedWhyPoints = whyPoints[lang];
  const flowTrackRef = useRef<HTMLDivElement | null>(null);
  const [flowProgress, setFlowProgress] = useState(0);

  useEffect(() => {
    let raf = 0;

    const updateProgress = () => {
      const track = flowTrackRef.current;
      if (!track) return;

      const rect = track.getBoundingClientRect();
      const viewport = window.innerHeight || 1;
      const start = viewport * 0.82;
      const end = -rect.height * 0.18;
      const raw = (start - rect.top) / (start - end);
      const clamped = Math.max(0, Math.min(1, raw));

      setFlowProgress((prev) => (Math.abs(prev - clamped) > 0.01 ? clamped : prev));
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const flowTrackStyle = {
    "--flow-progress": `${(flowProgress * 100).toFixed(1)}%`,
  } as CSSProperties;

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
              <p className="home-hero__copy">
                {t.heroCopy}
              </p>
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
            {t.stats.map((stat) => (
              <div key={stat[1]} className="home-stats__item">
                <div className="home-stats__value">{stat[0]}</div>
                <div className="home-stats__label">{stat[1]}</div>
              </div>
            ))}
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

            <div className="home-flow__track" ref={flowTrackRef} style={flowTrackStyle}>
              {t.flowSteps.map((step, index) => (
                <div key={step[0]} className="home-flow__step">
                  <div className="home-flow__step-content">
                    <div className="home-flow__step-number">{String(index + 1).padStart(2, "0")}</div>
                    <h3 className="home-flow__step-title">{step[0]}</h3>
                    <p className="home-flow__step-copy">{step[1]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="home-faq" id="faq">
          <div className="home-faq__inner">
            <div className="home-faq__header">
              <div className="home-faq__eyebrow">{t.faqEyebrow}</div>
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
