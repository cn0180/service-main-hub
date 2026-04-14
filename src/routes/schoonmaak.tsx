import { Link, createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";

export const Route = createFileRoute("/schoonmaak")({
  head: () => ({
    meta: [{ title: "NordAnker Service | Schoonmaak" }],
  }),
  component: CleaningPage,
});

function CleaningPage() {
  return (
    <div>
      <Navbar />

      <main className="cleaning-main">
        <section className="cleaning-hero">
          <div className="cleaning-hero__inner">
            <div className="cleaning-hero__eyebrow">Schoonmaak</div>
            <h1 className="cleaning-hero__title">
              Alles voor panden die schoon, verzorgd en representatief moeten blijven.
            </h1>
            <p className="cleaning-hero__copy">
              Van dagelijkse reiniging tot hardnekkige vervuiling: elke dienst staat hier
              duidelijk onder elkaar, zonder submenu en zonder losse subpagina&apos;s.
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
              >
                Contactpagina
              </Link>
            </div>
          </div>
        </section>

        <section className="cleaning-feature">
          <div className="cleaning-feature__inner">
            <div className="cleaning-feature__label">01 Gebouwenreiniging</div>
            <div className="cleaning-feature__content">
              <h2 className="cleaning-feature__title">Gebouwenreiniging</h2>
              <p className="cleaning-feature__copy">
                Voor entrees, algemene ruimtes en panddelen die dagelijks gebruikt worden
                en daarom structureel schoon en verzorgd moeten blijven.
              </p>
              <div className="cleaning-feature__line">
                Entrees, looproutes, algemene ruimtes en zichtbare contactpunten.
              </div>
            </div>
          </div>
        </section>

        <section className="cleaning-feature cleaning-feature--reverse">
          <div className="cleaning-feature__inner">
            <div className="cleaning-feature__label">02 Basis-/regelmatige schoonmaak</div>
            <div className="cleaning-feature__content">
              <h2 className="cleaning-feature__title">Basis-/regelmatige schoonmaak</h2>
              <p className="cleaning-feature__copy">
                Vaste schoonmaakmomenten die ritme brengen in het onderhoud van een pand en
                zorgen dat netheid niet afhangt van losse meldingen.
              </p>
              <div className="cleaning-feature__line">
                Periodiek, voorspelbaar en afgestemd op gebruik en bezetting.
              </div>
            </div>
          </div>
        </section>

        <section className="cleaning-feature cleaning-feature--center">
          <div className="cleaning-feature__inner">
            <div className="cleaning-feature__label">03 Trappenhuisreiniging</div>
            <div className="cleaning-feature__content">
              <h2 className="cleaning-feature__title">Trappenhuisreiniging</h2>
              <p className="cleaning-feature__copy">
                Voor gedeelde ruimtes waar bewoners, bezoekers en gebruikers dagelijks
                langskomen en waar vervuiling meteen zichtbaar is.
              </p>
              <div className="cleaning-feature__line">
                Trappen, leuningen, bordessen, liftruimtes en directe toegangszones.
              </div>
            </div>
          </div>
        </section>

        <section className="cleaning-feature">
          <div className="cleaning-feature__inner">
            <div className="cleaning-feature__label">04 Ramenreiniging</div>
            <div className="cleaning-feature__content">
              <h2 className="cleaning-feature__title">Ramenreiniging</h2>
              <p className="cleaning-feature__copy">
                Schone ramen versterken de eerste indruk van een pand en laten entrees,
                gevels en werkruimtes direct beter ogen.
              </p>
              <div className="cleaning-feature__line">
                Glaspartijen, entreezones en zichtlijnen die bepalend zijn voor uitstraling.
              </div>
            </div>
          </div>
        </section>

        <section className="cleaning-feature cleaning-feature--reverse">
          <div className="cleaning-feature__inner">
            <div className="cleaning-feature__label">05 Hogedrukreiniging</div>
            <div className="cleaning-feature__content">
              <h2 className="cleaning-feature__title">Hogedrukreiniging</h2>
              <p className="cleaning-feature__copy">
                Voor buitenvlakken, entrees en harde oppervlakken waar aanslag, vuil en
                weersinvloed zich duidelijk opbouwen.
              </p>
              <div className="cleaning-feature__line">
                Gevelzones, bestrating, entrees en andere zware gebruiksoppervlakken.
              </div>
            </div>
          </div>
        </section>

        <section className="cleaning-feature cleaning-feature--center">
          <div className="cleaning-feature__inner">
            <div className="cleaning-feature__label">06 Graffiti verwijdering</div>
            <div className="cleaning-feature__content">
              <h2 className="cleaning-feature__title">Graffiti verwijdering</h2>
              <p className="cleaning-feature__copy">
                Snelle verwijdering van ongewenste vervuiling zodat een pand representatief
                blijft en schade aan de uitstraling niet blijft hangen.
              </p>
              <div className="cleaning-feature__line">
                Gericht op snelheid, nette afwerking en minimale visuele resten.
              </div>
            </div>
          </div>
        </section>

        <section className="cleaning-cta">
          <div className="cleaning-cta__inner">
            <div className="cleaning-cta__eyebrow">Direct afstemmen</div>
            <h2 className="cleaning-cta__headline">
              Neem contact op voor schoonmaak die past bij het ritme van je pand.
            </h2>
            <div className="cleaning-cta__actions">
              <a className="cleaning-cta__action cleaning-cta__action--primary" href="https://wa.me/4915510095242">
                WhatsApp
              </a>
              <Link className="cleaning-cta__action cleaning-cta__action--secondary" to="/contact">
                Contactpagina
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
