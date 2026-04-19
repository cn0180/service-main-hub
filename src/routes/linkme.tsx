import { createFileRoute } from "@tanstack/react-router";
import { Globe2, Mail, MessageCircle } from "lucide-react";
import { useLanguage } from "@/lib/language";

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
  const { lang } = useLanguage();
  const t = lang === "de"
    ? {
        title: "Direktkontakt",
        copy: "Schnell. Direkt. Zuverlaessig.",
        whatsapp: "WhatsApp",
        mail: "E-Mail",
        website: "Website",
        open: "Oeffnen",
        hours: "Oeffnungszeiten",
        line1: "Mo-Fr: 08:00-18:00",
        line2: "Sa: nach Vereinbarung",
        line3: "Notfaelle via WhatsApp",
        cta: "Jetzt per WhatsApp anfragen",
        ctaNote: "Fuer Informationen oder ein Angebot.",
        whatsappAria: "WhatsApp oeffnen",
        mailAria: "E-Mail senden",
        websiteAria: "Website oeffnen",
      }
    : {
        title: "Direct contact",
        copy: "Snel. Direct. Betrouwbaar.",
        whatsapp: "WhatsApp",
        mail: "E-mail",
        website: "Website",
        open: "Open",
        hours: "Openingstijden",
        line1: "Ma-Fr: 08:00-18:00",
        line2: "Za: op afspraak",
        line3: "Spoed via WhatsApp",
        cta: "Nu via WhatsApp contact opnemen",
        ctaNote: "Voor informatie of een offerte.",
        whatsappAria: "WhatsApp openen",
        mailAria: "E-mail sturen",
        websiteAria: "Website openen",
      };

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
        <h1 className="linkme-page__title">{t.title}</h1>
        <p className="linkme-page__copy">{t.copy}</p>

        <div className="linkme-page__list">
          <a
            className="linkme-page__row"
            href={directLinks.whatsappHref}
            target="_blank"
            rel="noreferrer"
            aria-label={t.whatsappAria}
          >
            <div className="linkme-page__meta">
              <MessageCircle className="linkme-page__icon" />
              <div>
                <div className="linkme-page__label">{t.whatsapp}</div>
                <div className="linkme-page__value">{directLinks.whatsappLabel}</div>
              </div>
            </div>
            <span className="linkme-page__chevron" aria-hidden="true">
              {t.open}
            </span>
          </a>

          <a
            className="linkme-page__row"
            href={directLinks.emailHref}
            aria-label={t.mailAria}
          >
            <div className="linkme-page__meta">
              <Mail className="linkme-page__icon" />
              <div>
                <div className="linkme-page__label">{t.mail}</div>
                <div className="linkme-page__value">{directLinks.emailLabel}</div>
              </div>
            </div>
            <span className="linkme-page__chevron" aria-hidden="true">
              {t.open}
            </span>
          </a>

          <a
            className="linkme-page__row"
            href={directLinks.websiteHref}
            target="_blank"
            rel="noreferrer"
            aria-label={t.websiteAria}
          >
            <div className="linkme-page__meta">
              <Globe2 className="linkme-page__icon" />
              <div>
                <div className="linkme-page__label">{t.website}</div>
                <div className="linkme-page__value">{directLinks.websiteLabel}</div>
              </div>
            </div>
            <span className="linkme-page__chevron" aria-hidden="true">
              {t.open}
            </span>
          </a>
        </div>

        <div className="linkme-page__hours">
          <div className="linkme-page__hours-title">{t.hours}</div>
          <div className="linkme-page__hours-line">{t.line1}</div>
          <div className="linkme-page__hours-line">{t.line2}</div>
          <div className="linkme-page__hours-line">{t.line3}</div>
        </div>

        <a
          className="linkme-page__cta"
          href={directLinks.whatsappHref}
          target="_blank"
          rel="noreferrer"
        >
          {t.cta}
        </a>
        <div className="linkme-page__cta-note">{t.ctaNote}</div>
      </section>
    </main>
  );
}
