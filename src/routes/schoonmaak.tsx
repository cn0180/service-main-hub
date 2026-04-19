import { Link, createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { useLanguage } from "@/lib/language";

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
  const { lang } = useLanguage();
  const isGerman = lang === "de";
  const services = isGerman
    ? [
        "Gebaeudereinigung",
        "Grund-/Unterhaltsreinigung",
        "Treppenhausreinigung",
        "Fensterreinigung",
        "Hochdruckreinigung",
        "Graffitientfernung",
      ]
    : cleaningServices;
  const groups = isGerman
    ? [
        {
          label: "Innenbereiche und Alltag",
          title: "Gebaeude, Basisreinigung und Treppenhaeuser",
          copy: "Fuer Eingaenge, Gemeinschaftsbereiche und Laufwege, die taeglich genutzt werden und deshalb dauerhaft sauber und gepflegt bleiben muessen.",
          items: ["Gebaeudereinigung", "Grund-/Unterhaltsreinigung", "Treppenhausreinigung"],
        },
        {
          label: "Glas und Sichtlinien",
          title: "Fensterreinigung fuer einen starken ersten Eindruck",
          copy: "Fuer Glasflaechen, Eingaenge und sichtbare Fassadenbereiche, bei denen Sauberkeit direkt mitentscheidet, wie eine Immobilie wahrgenommen wird.",
          items: ["Fensterreinigung"],
        },
        {
          label: "Aussenflaechen und Entfernung",
          title: "Hochdruckreinigung und Graffitientfernung",
          copy: "Fuer harte Oberflaechen und unerwuenschte Verschmutzung, die eine Immobilie schnell ungepflegt wirken lassen, wenn sie nicht direkt angegangen werden.",
          items: ["Hochdruckreinigung", "Graffitientfernung"],
        },
      ]
    : cleaningGroups;
  const approach = isGerman
    ? [
        {
          term: "Abstimmung",
          detail: "Wir betrachten Nutzung, Zugang, Frequenz und Aufmerksamkeitspunkte, damit die Reinigung zum Rhythmus der Immobilie passt.",
        },
        {
          term: "Ausfuehrung",
          detail: "Arbeiten werden ordentlich ausgefuehrt mit Blick auf Bewohner, Besucher, Mitarbeiter und den taeglichen Durchlauf.",
        },
        {
          term: "Rueckmeldung",
          detail: "Folgepunkte, wiederkehrende Momente und sichtbare Aufmerksamkeitspunkte bleiben in einer festen Linie im Blick.",
        },
      ]
    : cleaningApproach;
  const t = isGerman
    ? {
        eyebrow: "Reinigung",
        title: "Reinigung in einer festen Linie fuer Immobilien, die sichtbar auf Niveau bleiben muessen.",
        copy: "Keine einzelnen Unterpunkte untereinander, sondern ein klarer Ansatz fuer Innenraeume, Glas, Aussenflaechen und hartnaeckige Verschmutzung.",
        contact: "Kontaktseite",
        overviewEyebrow: "Was wir anbieten",
        overviewTitle: "Alles rund um Reinigung uebersichtlich in einem Gesamtbild.",
        overviewCopy: "Fuer Eingaenge, Treppenhaeuser, Gemeinschaftsbereiche, Fenster und Aussenflaechen, die sauber, gepflegt und repraesentativ bleiben muessen.",
        scopeEyebrow: "Worum es geht",
        scopeTitle: "Keine sechs einzelnen Bereiche, sondern eine Reinigungsseite, die zeigt, was man wirklich bekommt.",
        approachEyebrow: "Wie wir arbeiten",
        approachTitle: "Reinigung, die nicht losgeloest von Planung, Nutzung und Ausstrahlung ist.",
        ctaEyebrow: "Direkt abstimmen",
        ctaTitle: "Nimm Kontakt auf fuer Reinigung, die zum Rhythmus deiner Immobilie passt.",
      }
    : {
        eyebrow: "Schoonmaak",
        title: "Schoonmaak in een vaste lijn voor panden die zichtbaar op niveau moeten blijven.",
        copy: "Geen losse onderdelen onder elkaar, maar een duidelijke aanpak voor binnenruimtes, glas, buitenvlakken en hardnekkige vervuiling.",
        contact: "Contactpagina",
        overviewEyebrow: "Wat we aanbieden",
        overviewTitle: "Alles wat onder schoonmaak valt, overzichtelijk in een geheel.",
        overviewCopy: "Voor entrees, trappenhuizen, algemene ruimtes, ramen en buitenvlakken die schoon, verzorgd en representatief moeten blijven in dagelijks gebruik.",
        scopeEyebrow: "Waar het om gaat",
        scopeTitle: "Niet zes losse secties, maar een schoonmaakpagina die laat zien wat je echt krijgt.",
        approachEyebrow: "Hoe we werken",
        approachTitle: "Schoonmaak die niet losstaat van planning, gebruik en uitstraling.",
        ctaEyebrow: "Direct afstemmen",
        ctaTitle: "Neem contact op voor schoonmaak die past bij het ritme van je pand.",
      };

  return (
    <div>
      <Navbar />

      <main className="cleaning-main">
        <section className="cleaning-hero">
          <div className="cleaning-hero__inner">
            <div className="cleaning-hero__eyebrow">{t.eyebrow}</div>
            <h1 className="cleaning-hero__title">
              {t.title}
            </h1>
            <p className="cleaning-hero__copy">
              {t.copy}
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
                {t.contact}
              </Link>
            </div>
          </div>
        </section>

        <section className="cleaning-overview">
          <div className="cleaning-overview__inner">
            <div className="cleaning-overview__eyebrow">{t.overviewEyebrow}</div>
            <h2 className="cleaning-overview__headline">
              {t.overviewTitle}
            </h2>
            <p className="cleaning-overview__copy">
              {t.overviewCopy}
            </p>
            <div className="cleaning-overview__line">
              {services.map((service) => (
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
              <div className="cleaning-scope__eyebrow">{t.scopeEyebrow}</div>
              <h2 className="cleaning-scope__headline">
                {t.scopeTitle}
              </h2>
            </div>

            <div className="cleaning-scope__rows">
              {groups.map((group) => (
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
            <div className="cleaning-approach__eyebrow">{t.approachEyebrow}</div>
            <h2 className="cleaning-approach__headline">
              {t.approachTitle}
            </h2>

            <div className="cleaning-approach__rows">
              {approach.map((step) => (
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
            <div className="cleaning-cta__eyebrow">{t.ctaEyebrow}</div>
            <h2 className="cleaning-cta__headline">
              {t.ctaTitle}
            </h2>
            <div className="cleaning-cta__actions">
              <a className="cleaning-cta__action cleaning-cta__action--primary" href="https://wa.me/4915510095242">
                WhatsApp
              </a>
              <Link className="cleaning-cta__action cleaning-cta__action--secondary" to="/contact" viewTransition>
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
