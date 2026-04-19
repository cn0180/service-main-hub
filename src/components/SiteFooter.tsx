import { Link, useLocation } from "@tanstack/react-router";
import { useLanguage } from "@/lib/language";

function SiteFooter() {
  const location = useLocation();
  const { lang } = useLanguage();
  const isHome = location.pathname === "/";
  const t = lang === "de"
    ? {
        copy: "Reinigung, Aussenpflege und Immobiliendienste fuer Gebaeude, die taeglich ordentlich, sicher und repraesentativ bleiben muessen.",
        contact: "Kontakt",
        nav: "Navigation",
        services: "Leistungen",
        why: "Warum NordAnker",
        workflow: "Ablauf",
        availability: "Verfuegbarkeit",
        privacy: "Datenschutz",
        policy: "Allgemeine Hinweise",
        monFri: "Mo-Fr: 08:00-18:00",
        sat: "Sa: nach Vereinbarung",
        urgent: "Notfaelle via WhatsApp",
        bottom: "Schnelle Rueckmeldung und klare Absprachen.",
      }
    : {
        copy: "Schoonmaak, buitenonderhoud en vastgoedservice voor panden die dagelijks netjes, veilig en representatief moeten blijven.",
        contact: "Contact",
        nav: "Navigatie",
        services: "Diensten",
        why: "Waarom NordAnker",
        workflow: "Werkwijze",
        availability: "Beschikbaarheid",
        privacy: "Privacybeleid",
        policy: "Algemeen beleid",
        monFri: "Ma-Fr: 08:00-18:00",
        sat: "Za: op afspraak",
        urgent: "Spoed via WhatsApp",
        bottom: "Snelle opvolging en duidelijke afspraken.",
      };

  return (
    <footer className="home-footer">
      <div className="home-footer__inner">
        <div className="home-footer__brand">
          <div className="home-footer__name">NordAnker Service</div>
          <p className="home-footer__copy">
            {t.copy}
          </p>
        </div>

        <div className="home-footer__column home-footer__column--contact">
          <div className="home-footer__title">{t.contact}</div>
          <a className="home-footer__link" href="tel:+49015510095242">
            +49 015510095242
          </a>
          <a className="home-footer__link" href="mailto:info@nordanker-service.de">
            info@nordanker-service.de
          </a>
          <a className="home-footer__link" href="https://nordanker-service.de">
            nordanker-service.de
          </a>
        </div>

        <div className="home-footer__column home-footer__column--nav">
          <div className="home-footer__title">{t.nav}</div>
          <Link className="home-footer__link" to="/" hash="services" viewTransition={!isHome}>
            {t.services}
          </Link>
          <Link className="home-footer__link" to="/" hash="waarom" viewTransition={!isHome}>
            {t.why}
          </Link>
          <Link className="home-footer__link" to="/" hash="werkwijze" viewTransition={!isHome}>
            {t.workflow}
          </Link>
          <Link className="home-footer__link" to="/contact" viewTransition={location.pathname !== "/contact"}>
            {t.contact}
          </Link>
          <Link
            className="home-footer__link"
            to="/privacybeleid"
            viewTransition={location.pathname !== "/privacybeleid"}
          >
            {t.privacy}
          </Link>
          <Link
            className="home-footer__link"
            to="/algemeen-beleid"
            viewTransition={location.pathname !== "/algemeen-beleid"}
          >
            {t.policy}
          </Link>
        </div>

        <div className="home-footer__column home-footer__column--availability">
          <div className="home-footer__title">{t.availability}</div>
          <div className="home-footer__meta">{t.monFri}</div>
          <div className="home-footer__meta">{t.sat}</div>
          <div className="home-footer__meta">{t.urgent}</div>
        </div>
      </div>

      <div className="home-footer__bottom">
        <span>NordAnker Service</span>
        <div className="home-footer__bottom-links">
          <span>{t.bottom}</span>
          <Link
            className="home-footer__bottom-link"
            to="/privacybeleid"
            viewTransition={location.pathname !== "/privacybeleid"}
          >
            {t.privacy}
          </Link>
          <Link
            className="home-footer__bottom-link"
            to="/algemeen-beleid"
            viewTransition={location.pathname !== "/algemeen-beleid"}
          >
            {t.policy}
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
