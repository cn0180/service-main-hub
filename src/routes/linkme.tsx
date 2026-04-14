import { createFileRoute } from "@tanstack/react-router";
import { Globe2, Mail, MessageCircle } from "lucide-react";

const directLinks = {
  whatsappLabel: "+49 015510095242",
  whatsappHref: "https://wa.me/4915510095242",
  emailLabel: "info@nordanker-service.de",
  emailHref: "mailto:info@nordanker-service.de",
  websiteLabel: "nordanker-service.de",
  websiteHref: "https://nordanker-service.de",
};

export const Route = createFileRoute("/linkme")({
  head: () => ({
    meta: [
      { title: "NordAnker Service | Direktkontakt" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: LinkMePage,
});

function LinkMePage() {
  return (
    <main className="linkme-page">
      <section className="linkme-page__section">
        <div className="linkme-page__profile">
          <img
            className="linkme-page__profile-image"
            src="/images/logo.png"
            alt="NordAnker"
          />
        </div>
        <div className="linkme-page__eyebrow">NordAnker Service</div>
        <h1 className="linkme-page__title">Direktkontakt</h1>
        <p className="linkme-page__copy">Schnell. Direkt. Zuverlaessig.</p>

        <div className="linkme-page__list">
          <a
            className="linkme-page__row"
            href={directLinks.whatsappHref}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp oeffnen"
          >
            <div className="linkme-page__meta">
              <MessageCircle className="linkme-page__icon" />
              <div>
                <div className="linkme-page__label">WhatsApp</div>
                <div className="linkme-page__value">{directLinks.whatsappLabel}</div>
              </div>
            </div>
            <span className="linkme-page__chevron" aria-hidden="true">
              Oeffnen
            </span>
          </a>

          <a
            className="linkme-page__row"
            href={directLinks.emailHref}
            aria-label="E-Mail senden"
          >
            <div className="linkme-page__meta">
              <Mail className="linkme-page__icon" />
              <div>
                <div className="linkme-page__label">E-Mail</div>
                <div className="linkme-page__value">{directLinks.emailLabel}</div>
              </div>
            </div>
            <span className="linkme-page__chevron" aria-hidden="true">
              Oeffnen
            </span>
          </a>

          <a
            className="linkme-page__row"
            href={directLinks.websiteHref}
            target="_blank"
            rel="noreferrer"
            aria-label="Website oeffnen"
          >
            <div className="linkme-page__meta">
              <Globe2 className="linkme-page__icon" />
              <div>
                <div className="linkme-page__label">Website</div>
                <div className="linkme-page__value">{directLinks.websiteLabel}</div>
              </div>
            </div>
            <span className="linkme-page__chevron" aria-hidden="true">
              Oeffnen
            </span>
          </a>
        </div>

        <div className="linkme-page__hours">
          <div className="linkme-page__hours-title">Oeffnungszeiten</div>
          <div className="linkme-page__hours-line">Mo-Fr: 08:00-18:00</div>
          <div className="linkme-page__hours-line">Sa: nach Vereinbarung</div>
          <div className="linkme-page__hours-line">Notfaelle via WhatsApp</div>
        </div>

        <a
          className="linkme-page__cta"
          href={directLinks.whatsappHref}
          target="_blank"
          rel="noreferrer"
        >
          Jetzt per WhatsApp anfragen
        </a>
        <div className="linkme-page__cta-note">Fuer Informationen oder ein Angebot.</div>
      </section>
    </main>
  );
}
