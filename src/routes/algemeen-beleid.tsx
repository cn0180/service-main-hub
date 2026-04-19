import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { useLanguage } from "@/lib/language";

export const Route = createFileRoute("/algemeen-beleid")({
  head: () => ({
    meta: [{ title: "NordAnker Service | Algemeen beleid" }],
  }),
  component: AlgemeenBeleidPage,
});

function AlgemeenBeleidPage() {
  const { lang } = useLanguage();
  const t = lang === "de"
    ? {
        eyebrow: "Allgemeine Hinweise",
        title: "Klare Absprachen zu Planung, Ausfuehrung und Kommunikation.",
        copy: "NordAnker Service arbeitet mit klarer Abstimmung im Voraus, ordentlicher Ausfuehrung vor Ort und deutlicher Rueckmeldung waehrend und nach den Arbeiten.",
        rows: [
          ["Planung", "Arbeiten werden auf Erreichbarkeit, Nutzung der Immobilie und die vereinbarte Frequenz oder Prioritaet abgestimmt."],
          ["Ausfuehrung", "Arbeiten werden sorgfaeltig und repraesentativ ausgefuehrt, mit Blick auf Sicherheit, Durchgang und eine ordentliche Uebergabe des Bereichs."],
          ["Erreichbarkeit", "Fuer schnelle Abstimmung nutzen wir kurze Kommunikationswege per Telefon, WhatsApp oder E-Mail, passend zur Art der Meldung."],
          ["Aenderungen", "Wenn sich Planung, Zugang oder Umfang aendern, stimmen wir dies vorab erneut ab, damit Ausfuehrung und Erwartungen klar bleiben."],
          ["Fragen oder Hinweise", "Fuer praktische Fragen, Hinweise oder Abstimmung zu laufenden Arbeiten kannst du direkt Kontakt aufnehmen ueber info@nordanker-service.de oder +49 015510095242."],
        ],
      }
    : {
        eyebrow: "Algemeen beleid",
        title: "Heldere afspraken over planning, uitvoering en communicatie.",
        copy: "NordAnker Service werkt met duidelijke afstemming vooraf, nette uitvoering op locatie en heldere terugkoppeling tijdens en na de werkzaamheden.",
        rows: [
          ["Planning", "Werkzaamheden worden afgestemd op bereikbaarheid, gebruik van het pand en de afgesproken frequentie of prioriteit."],
          ["Uitvoering", "Werk wordt zorgvuldig en representatief uitgevoerd, met aandacht voor veiligheid, doorgang en een nette oplevering van de ruimte."],
          ["Bereikbaarheid", "Voor snelle afstemming gebruiken we korte communicatielijnen via telefoon, WhatsApp of e-mail, afhankelijk van de aard van de melding."],
          ["Wijzigingen", "Wanneer planning, toegang of omvang verandert, stemmen we dit vooraf opnieuw af zodat uitvoering en verwachtingen helder blijven."],
          ["Vragen of opmerkingen", "Voor praktische vragen, opmerkingen of afstemming over lopende werkzaamheden kun je direct contact opnemen via info@nordanker-service.de of +49 015510095242."],
        ],
      };

  return (
    <div>
      <Navbar />

      <main className="legal-main">
        <section className="legal-hero">
          <div className="legal-hero__inner">
            <div className="legal-hero__eyebrow">{t.eyebrow}</div>
            <h1 className="legal-hero__title">
              {t.title}
            </h1>
            <p className="legal-hero__copy">
              {t.copy}
            </p>
          </div>
        </section>

        <section className="legal-section">
          <div className="legal-section__inner">
            <div className="legal-section__rows">
              {t.rows.map((row) => (
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
