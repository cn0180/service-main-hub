import { useLayoutEffect } from "react";
import { Outlet, Link, createRootRoute, HeadContent, Scripts, useLocation } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { LanguageProvider, useLanguage } from "@/lib/language";

function NotFoundComponent() {
  const { lang } = useLanguage();
  const t = lang === "de"
    ? {
        title: "Seite nicht gefunden",
        copy: "Die gesuchte Seite existiert nicht oder wurde verschoben.",
        cta: "Zur Startseite",
      }
    : {
        title: "Page not found",
        copy: "The page you are looking for does not exist or has moved.",
        cta: "Back to home",
      };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">
          {t.title}
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {t.copy}
        </p>
        <div className="mt-6">
          <Link
            to="/"
            viewTransition
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t.cta}
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "NordAnker | Hausmeister- & Reinigungsservice" },
      { name: "description", content: "Lovable Generated Project" },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Lovable App" },
      { property: "og:description", content: "Lovable Generated Project" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "icon",
        href: "/favicon.ico",
        type: "image/x-icon",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <HeadContent />
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const location = useLocation();
  const { lang } = useLanguage();
  const showFloatingWhatsapp = location.pathname !== "/linkme";

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    <>
      <Outlet />
      {showFloatingWhatsapp ? (
        <a
          className="floating-whatsapp"
          href="https://wa.me/4915510095242"
          target="_blank"
          rel="noreferrer"
          aria-label={lang === "de" ? "WhatsApp oeffnen" : "Open WhatsApp"}
        >
          <img
            className="floating-whatsapp__icon"
            src="/images/whatsapp-icon.svg"
            alt=""
          />
        </a>
      ) : null}
    </>
  );
}
