import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [{ title: "NordAnker Service | Impressum" }],
  }),
  component: ImpressumPage,
});

function ImpressumPage() {
  const rows = [
    ["Name", "Umied Sindi"],
    ["Unternehmen", "NordAnker Hausmeisterservice"],
    ["Anschrift", "Vaasaastraße 8, 24109 Kiel"],
    ["Telefon", "015510095242"],
    ["E-Mail", "info@nordanker-service.de"],
  ] as const;

  return (
    <div>
      <Navbar />

      <main className="legal-main">
        <section className="legal-hero">
          <div className="legal-hero__inner">
            <div className="legal-hero__eyebrow">Angaben gemäß § 5 TMG</div>
            <h1 className="legal-hero__title">Impressum</h1>
            <p className="legal-hero__copy">
              Verantwortliche Angaben für NordAnker Hausmeisterservice.
            </p>
          </div>
        </section>

        <section className="legal-section">
          <div className="legal-section__inner">
            <div className="legal-section__rows">
              {rows.map((row) => (
                <div key={row[0]} className="legal-section__row">
                  <div className="legal-section__term">{row[0]}</div>
                  <p className="legal-section__detail">{row[1]}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
