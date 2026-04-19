import { Link, createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { useLanguage } from "@/lib/language";

const outdoorServices = [
  "Garden Care",
  "Tree Care",
  "Winter Services",
] as const;

const outdoorGroups = [
  {
    label: "Green areas and first impression",
    title: "Garden care for well-kept outdoor spaces",
    copy:
      "For entrances, planting zones, green strips and outdoor areas that need to stay neat and in order during daily use.",
    items: ["Garden Care"],
  },
  {
    label: "Structure and safety",
    title: "Tree care with attention to visibility and access",
    copy:
      "For trees and larger green elements that need maintenance to keep grounds neat, accessible and safe.",
    items: ["Tree Care"],
  },
  {
    label: "Season and accessibility",
    title: "Winter services when weather conditions require action",
    copy:
      "For paths, entrances and outdoor spaces that must remain usable and representative in cold and wet periods.",
    items: ["Winter Services"],
  },
] as const;

const outdoorApproach = [
  {
    term: "Season planning",
    detail:
      "We align maintenance with growth periods, weather impact and load around the property.",
  },
  {
    term: "On-site execution",
    detail:
      "Work is carried out with attention to access, residents, visitors and first impression on arrival.",
  },
  {
    term: "Fixed follow-up",
    detail:
      "Focus points remain visible so outdoor care is not dependent on isolated requests.",
  },
] as const;

export const Route = createFileRoute("/buitenonderhoud")({
  head: () => ({
    meta: [{ title: "NordAnker Service | Outdoor Care" }],
  }),
  component: OutdoorPage,
});

function OutdoorPage() {
  const { lang } = useLanguage();
  const isGerman = lang === "de";
  const services = isGerman
    ? ["Gartenpflege", "Baumpflege", "Winterdienst"]
    : outdoorServices;
  const groups = isGerman
    ? [
        {
          label: "Gruen und erster Eindruck",
          title: "Gartenpflege fuer gepflegte Aussenbereiche",
          copy: "Fuer Eingaenge, Pflanzbereiche, Gruenstreifen und Aussenbereiche, die ordentlich wirken und im taeglichen Gebrauch in Ordnung bleiben muessen.",
          items: ["Gartenpflege"],
        },
        {
          label: "Struktur und Sicherheit",
          title: "Baumpflege mit Blick auf Uebersicht und Durchgang",
          copy: "Fuer Baeume und groessere Gruenbereiche, die Pflege brauchen, damit das Gelaende gepflegt, zugaenglich und sicher bleibt.",
          items: ["Baumpflege"],
        },
        {
          label: "Saison und Erreichbarkeit",
          title: "Winterdienst, sobald die Wetterlage es verlangt",
          copy: "Fuer Wege, Eingaenge und Aussenbereiche, die auch in kalten und nassen Zeiten nutzbar und repraesentativ bleiben muessen.",
          items: ["Winterdienst"],
        },
      ]
    : outdoorGroups;
  const approach = isGerman
    ? [
        {
          term: "Saisonplanung",
          detail: "Wir stimmen die Pflege auf Wachstumsphasen, Wetter und die Belastung des Gelaendes rund um die Immobilie ab.",
        },
        {
          term: "Ausfuehrung vor Ort",
          detail: "Die Arbeiten erfolgen mit Blick auf Durchgang, Bewohner, Besucher und den ersten Eindruck bei der Ankunft.",
        },
        {
          term: "Feste Rueckmeldung",
          detail: "Aufmerksamkeitspunkte bleiben sichtbar, damit Aussenpflege nicht von einzelnen Meldungen abhaengt.",
        },
      ]
    : outdoorApproach;
  const t = isGerman
    ? {
        eyebrow: "Aussenpflege",
        title: "Aussenpflege fuer Immobilien, die draussen genauso gepflegt wirken muessen wie drinnen.",
        copy: "Keine einzelnen Unterpunkte untereinander, sondern ein klarer Ansatz fuer Gruenflaechen, Gelaende und saisonale Arbeiten rund um die Immobilie.",
        contact: "Kontaktseite",
        overviewEyebrow: "Was wir anbieten",
        overviewTitle: "Alles aus der Aussenpflege klar in einem Gesamtbild.",
        overviewCopy: "Fuer Eingaenge, Wege, Gruenstreifen und Aussenbereiche, die das ganze Jahr ueber gepflegt, nutzbar und repraesentativ bleiben muessen.",
        scopeEyebrow: "Worum es geht",
        scopeTitle: "Aussenpflege, die zu Ausstrahlung, Sicherheit und taeglicher Nutzung passt.",
        approachEyebrow: "Wie wir arbeiten",
        approachTitle: "Aussenpflege, die sich mit Saison, Gelaende und Nutzung bewegt.",
        ctaEyebrow: "Direkt abstimmen",
        ctaTitle: "Nimm Kontakt auf fuer Aussenpflege, die zu Gelaende, Saison und Nutzung passt.",
      }
    : {
        eyebrow: "Outdoor care",
        title: "Outdoor care for properties that must look as presentable outside as they do inside.",
        copy: "No separate pieces under each other, but one clear approach for green zones, terrain and seasonal work around the property.",
        contact: "Contact page",
        overviewEyebrow: "What we offer",
        overviewTitle: "Everything under outdoor care in one clear overview.",
        overviewCopy: "For entrances, paths, green strips and outdoor spaces that must stay neat, usable and representative all year.",
        scopeEyebrow: "What this covers",
        scopeTitle: "Outdoor care aligned with appearance, safety and daily use.",
        approachEyebrow: "How we work",
        approachTitle: "Outdoor care that moves with season, terrain and usage.",
        ctaEyebrow: "Direct alignment",
        ctaTitle: "Get in touch for outdoor care that fits terrain, season and usage.",
      };

  return (
    <div>
      <Navbar />

      <main className="outdoor-main">
        <section className="outdoor-hero">
          <div className="outdoor-hero__inner">
            <div className="outdoor-hero__eyebrow">{t.eyebrow}</div>
            <h1 className="outdoor-hero__title">
              {t.title}
            </h1>
            <p className="outdoor-hero__copy">
              {t.copy}
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
                {t.contact}
              </Link>
            </div>
          </div>
        </section>

        <section className="outdoor-overview">
          <div className="outdoor-overview__inner">
            <div className="outdoor-overview__eyebrow">{t.overviewEyebrow}</div>
            <h2 className="outdoor-overview__headline">
              {t.overviewTitle}
            </h2>
            <p className="outdoor-overview__copy">
              {t.overviewCopy}
            </p>
            <div className="outdoor-overview__line">
              {services.map((service) => (
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
              <div className="outdoor-scope__eyebrow">{t.scopeEyebrow}</div>
              <h2 className="outdoor-scope__headline">
                {t.scopeTitle}
              </h2>
            </div>

            <div className="outdoor-scope__rows">
              {groups.map((group) => (
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
            <div className="outdoor-approach__eyebrow">{t.approachEyebrow}</div>
            <h2 className="outdoor-approach__headline">
              {t.approachTitle}
            </h2>

            <div className="outdoor-approach__rows">
              {approach.map((step) => (
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
            <div className="outdoor-cta__eyebrow">{t.ctaEyebrow}</div>
            <h2 className="outdoor-cta__headline">
              {t.ctaTitle}
            </h2>
            <div className="outdoor-cta__actions">
              <a className="outdoor-cta__action outdoor-cta__action--primary" href="https://wa.me/4915510095242">
                WhatsApp
              </a>
              <Link className="outdoor-cta__action outdoor-cta__action--secondary" to="/contact" viewTransition>
                {t.contact}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
