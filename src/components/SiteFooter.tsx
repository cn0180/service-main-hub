import { Link, useLocation } from "@tanstack/react-router";

function SiteFooter() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <footer className="home-footer">
      <div className="home-footer__inner">
        <div className="home-footer__brand">
          <div className="home-footer__name">NordAnker Service</div>
          <p className="home-footer__copy">
            Schoonmaak, buitenonderhoud en vastgoedservice voor panden die dagelijks
            netjes, veilig en representatief moeten blijven.
          </p>
        </div>

        <div className="home-footer__column">
          <div className="home-footer__title">Contact</div>
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

        <div className="home-footer__column">
          <div className="home-footer__title">Navigatie</div>
          <Link className="home-footer__link" to="/" hash="diensten" viewTransition={!isHome}>
            Diensten
          </Link>
          <Link className="home-footer__link" to="/" hash="waarom" viewTransition={!isHome}>
            Waarom NordAnker
          </Link>
          <Link className="home-footer__link" to="/" hash="werkwijze" viewTransition={!isHome}>
            Werkwijze
          </Link>
          <Link className="home-footer__link" to="/contact" viewTransition={location.pathname !== "/contact"}>
            Contact
          </Link>
        </div>

        <div className="home-footer__column">
          <div className="home-footer__title">Beschikbaarheid</div>
          <div className="home-footer__meta">Ma–Fr: 08:00–18:00</div>
          <div className="home-footer__meta">Za: op afspraak</div>
          <div className="home-footer__meta">Spoed via WhatsApp</div>
        </div>
      </div>

      <div className="home-footer__bottom">
        <span>NordAnker Service</span>
        <span>Snelle opvolging en duidelijke afspraken.</span>
      </div>
    </footer>
  );
}

export default SiteFooter;
