import { Link, useLocation } from "@tanstack/react-router";
import { useLanguage } from "@/lib/language";

function SiteFooter() {
  const location = useLocation();
  const { lang } = useLanguage();
  const isHome = location.pathname === "/";
  const t = lang === "de"
    ? {
        contact: "Kontakt",
        nav: "Navigation",
        services: "Leistungen",
        why: "Warum NordAnker",
        workflow: "Ablauf",
        availability: "Öffnungszeiten",
        privacy: "Datenschutz",
        policy: "Allgemeine Hinweise",
        impressum: "Impressum",
        monFri: "Mo-Fr: 08:00-18:00",
        sat: "Sa: nach Vereinbarung",
      }
    : {
        contact: "Contact",
        nav: "Navigation",
        services: "Services",
        why: "Why NordAnker",
        workflow: "Workflow",
        availability: "Opening hours",
        privacy: "Privacy Policy",
        policy: "General Policy",
        impressum: "Impressum",
        monFri: "Mon-Fri: 08:00-18:00",
        sat: "Sat: by appointment",
      };

  return (
    <footer className="home-footer">
      <div className="home-footer__inner">
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
        </div>

        <div className="home-footer__column home-footer__column--availability">
          <div className="home-footer__title">{t.availability}</div>
          <div className="home-footer__meta">{t.monFri}</div>
          <div className="home-footer__meta">{t.sat}</div>
        </div>
      </div>

      <div className="home-footer__bottom">
        <div className="home-footer__bottom-links">
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
          <Link
            className="home-footer__bottom-link"
            to="/impressum"
            viewTransition={location.pathname !== "/impressum"}
          >
            {t.impressum}
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
