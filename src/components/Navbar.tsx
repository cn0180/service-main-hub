import { useState, useEffect } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { ChevronDown, Clock3, Globe, Mail, Menu, PhoneCall, X } from "lucide-react";
import { useLanguage } from "@/lib/language";

const translations: Record<string, Record<string, string>> = {
  en: {
    Home: "Home",
    Schoonmaak: "Cleaning",
    Buitenonderhoud: "Outdoor Care",
    Vastgoeddiensten: "Property Services",
    Contact: "Contact",
  },
  de: {
    Home: "Startseite",
    Schoonmaak: "Reinigung",
    Buitenonderhoud: "Außenpflege",
    Vastgoeddiensten: "Immobiliendienste",
    Contact: "Kontakt",
  },
};

const navItems = [
  { name: "Home", to: "/" as const },
  { name: "Schoonmaak", to: "/" as const, hash: "schoonmaakdiensten" },
  { name: "Buitenonderhoud", to: "/" as const, hash: "buitenonderhoud" },
  { name: "Vastgoeddiensten", to: "/" as const, hash: "vastgoeddiensten" },
  { name: "Contact", to: "/contact" as const },
] as const;
const languages = [
  { code: "de", label: "Deutsch" },
  { code: "en", label: "English" },
] as const;

function NavLine() {
  return (
    <div
      style={{
        width: "2px",
        height: "24px",
        background: "linear-gradient(to bottom, rgba(95,143,77,0.18), rgba(24,48,38,0.58), rgba(95,143,77,0.18))",
        boxShadow: "0 0 10px rgba(95,143,77,0.18)",
      }}
    />
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 760);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setLangOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!isMobile) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobile, mobileMenuOpen]);

  const t = (key: string) => translations[lang]?.[key] || key;

  const isActive = (name: string) => {
    const currentHash = location.hash ?? "";

    if (name === "Home") {
      return (
        location.pathname === "/" &&
        !["#schoonmaakdiensten", "#buitenonderhoud", "#vastgoeddiensten"].includes(currentHash)
      );
    }

    if (name === "Schoonmaak") {
      return location.pathname === "/" && currentHash === "#schoonmaakdiensten";
    }

    if (name === "Buitenonderhoud") {
      return location.pathname === "/" && currentHash === "#buitenonderhoud";
    }

    if (name === "Vastgoeddiensten") {
      return location.pathname === "/" && currentHash === "#vastgoeddiensten";
    }

    if (name === "Contact") return location.pathname === "/contact";
    return false;
  };

  const currentLang = languages.find((l) => l.code === lang)!;
  const mobileMenuOpenLabel = lang === "de" ? "Menue oeffnen" : "Open menu";
  const mobileMenuCloseLabel = lang === "de" ? "Menue schliessen" : "Close menu";
  const mobileContactLabel = lang === "de" ? "Direktkontakt" : "Direct contact";
  const mobileHours = lang === "de" ? "Mo-Fr 08:00-18:00" : "Mon-Fri 08:00-18:00";
  const mobileNavItems = navItems.filter((item) => item.name !== "Contact");

  if (isMobile) {
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
        }}
      >
        <div
          style={{
            background: scrolled
              ? "linear-gradient(135deg, rgba(240,247,237,0.97) 0%, rgba(232,240,248,0.97) 100%)"
              : "linear-gradient(135deg, rgba(248,252,247,0.98) 0%, rgba(243,247,252,0.98) 100%)",
            backdropFilter: "blur(12px)",
            transition: "all 0.35s ease",
          }}
        >
          <div
            style={{
              height: "72px",
              padding: "0 14px 0 10px",
              display: "grid",
              gridTemplateColumns: "1fr auto",
              alignItems: "center",
            }}
          >
            <Link to="/" viewTransition={location.pathname !== "/"}>
              <img
                src="/images/logo.png"
                alt="NordAnker Hausmeister- & Reinigungsservice"
                style={{
                  height: "52px",
                  width: "auto",
                  display: "block",
                }}
              />
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? mobileMenuCloseLabel : mobileMenuOpenLabel}
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "8px",
                border: "1px solid rgba(30,58,95,0.14)",
                background: "rgba(255,255,255,0.78)",
                color: "#1e3a5f",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <div
          role="dialog"
          aria-modal="true"
          aria-hidden={!mobileMenuOpen}
          style={{
            position: "fixed",
            top: "72px",
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(18,30,24,0.34)",
            backdropFilter: "blur(4px)",
            display: "flex",
            justifyContent: "flex-end",
            opacity: mobileMenuOpen ? 1 : 0,
            pointerEvents: mobileMenuOpen ? "auto" : "none",
            transition: "opacity 320ms ease",
          }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            style={{
              width: "min(86vw, 340px)",
              height: "calc(100dvh - 72px)",
              background: "linear-gradient(180deg, #f7f9f4 0%, #eff5eb 100%)",
              borderLeft: "1px solid rgba(32,58,47,0.12)",
              boxShadow: "-20px 0 40px rgba(17,30,24,0.2)",
              overflowY: "auto",
              transform: mobileMenuOpen ? "translateX(0)" : "translateX(100%)",
              transition: "transform 360ms cubic-bezier(0.22, 1, 0.36, 1)",
              willChange: "transform",
            }}
            onClick={(event) => event.stopPropagation()}
          >
            <div style={{ minHeight: "100%", padding: "14px 16px 18px", display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label={mobileMenuCloseLabel}
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "8px",
                    border: "1px solid rgba(32,58,47,0.16)",
                    background: "rgba(255,255,255,0.86)",
                    color: "#203a2f",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  <X size={16} />
                </button>
              </div>

              <div style={{ marginTop: "2px", display: "flex", justifyContent: "center" }}>
                <Link to="/" viewTransition={location.pathname !== "/"} onClick={() => setMobileMenuOpen(false)}>
                  <img
                    src="/images/logo.png"
                    alt="NordAnker Hausmeister- & Reinigungsservice"
                    style={{
                      height: "54px",
                      width: "auto",
                      display: "block",
                    }}
                  />
                </Link>
              </div>

              <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>
                <nav style={{ display: "grid", gap: 0 }}>
                  {mobileNavItems.map((item, index) => {
                    const active = isActive(item.name);
                    const linkStyle = {
                      display: "block",
                      textDecoration: "none",
                      textAlign: "center" as const,
                      fontSize: "22px",
                      lineHeight: "1.1",
                      fontWeight: 600,
                      color: active ? "#5f8f4d" : "#203a2f",
                    };

                    return (
                      <div key={item.name} style={{ display: "grid", gap: "14px", padding: "8px 0 12px" }}>
                        {item.hash ? (
                          <Link
                            to="/"
                            hash={item.hash}
                            viewTransition={location.pathname !== "/"}
                            onClick={() => setMobileMenuOpen(false)}
                            style={linkStyle}
                          >
                            {t(item.name)}
                          </Link>
                        ) : (
                          <Link
                            to={item.to}
                            viewTransition={location.pathname !== item.to}
                            onClick={() => setMobileMenuOpen(false)}
                            style={linkStyle}
                          >
                            {t(item.name)}
                          </Link>
                        )}

                        {index < mobileNavItems.length - 1 ? (
                          <div
                            style={{
                              width: "74%",
                              height: "2px",
                              justifySelf: "center",
                              borderRadius: "999px",
                              background:
                                "linear-gradient(to right, rgba(95,143,77,0), rgba(95,143,77,0.42), rgba(32,58,47,0.34), rgba(95,143,77,0.42), rgba(95,143,77,0))",
                            }}
                          />
                        ) : null}
                      </div>
                    );
                  })}
                </nav>

                <Link
                  to="/contact"
                  viewTransition={location.pathname !== "/contact"}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    marginTop: "20px",
                    minHeight: "38px",
                    padding: "0 14px",
                    borderRadius: "8px",
                    background: "#5f8f4d",
                    color: "#f7f6f2",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "15px",
                    fontWeight: 600,
                  }}
                >
                  {mobileContactLabel}
                </Link>
              </div>

              <div style={{ marginTop: "auto" }}>
                <div
                  style={{
                    marginTop: "12px",
                    height: "1px",
                    background: "linear-gradient(to right, transparent, rgba(32,58,47,0.3), transparent)",
                  }}
                />

                <div style={{ marginTop: "10px", display: "grid", gap: "8px" }}>
                  <a
                    href="tel:+4915510095242"
                    style={{
                      textDecoration: "none",
                      color: "#284638",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "14px",
                      fontWeight: 500,
                    }}
                  >
                    <PhoneCall size={14} />
                    <span>+49 015510095242</span>
                  </a>

                  <a
                    href="mailto:info@nordanker-service.de"
                    style={{
                      textDecoration: "none",
                      color: "#284638",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "14px",
                      fontWeight: 500,
                    }}
                  >
                    <Mail size={14} />
                    <span>info@nordanker-service.de</span>
                  </a>

                  <div
                    style={{
                      color: "#486456",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "13px",
                      fontWeight: 500,
                    }}
                  >
                    <Clock3 size={13} />
                    <span>{mobileHours}</span>
                  </div>
                </div>

                <div style={{ marginTop: "10px", display: "flex", gap: "8px" }}>
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      type="button"
                      onClick={() => setLang(l.code)}
                      style={{
                        minHeight: "30px",
                        padding: "0 10px",
                        borderRadius: "8px",
                        border: "1px solid rgba(30,58,95,0.14)",
                        background: lang === l.code ? "rgba(74,140,63,0.12)" : "rgba(255,255,255,0.72)",
                        color: lang === l.code ? "#4a8c3f" : "#1e3a5f",
                        fontSize: "12px",
                        fontWeight: 600,
                        cursor: "pointer",
                      }}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            height: "3px",
            background: scrolled
              ? "linear-gradient(to right, rgba(95,143,77,0.04) 0%, rgba(95,143,77,0.48) 18%, rgba(24,48,38,0.36) 50%, rgba(95,143,77,0.48) 82%, rgba(95,143,77,0.04) 100%)"
              : "linear-gradient(to right, rgba(95,143,77,0.03) 0%, rgba(95,143,77,0.34) 18%, rgba(24,48,38,0.28) 50%, rgba(95,143,77,0.34) 82%, rgba(95,143,77,0.03) 100%)",
            transition: "background 0.4s ease",
          }}
        />
      </div>
    );
  }

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
      }}
    >
      {/* Main navbar */}
      <div
        style={{
          background: scrolled
            ? "linear-gradient(135deg, rgba(240,247,237,0.97) 0%, rgba(232,240,248,0.97) 100%)"
            : "linear-gradient(135deg, rgba(248,252,247,0.98) 0%, rgba(243,247,252,0.98) 100%)",
          backdropFilter: "blur(12px)",
          transition: "all 0.4s ease",
        }}
      >
          <div
            style={{
              padding: "0 40px",
              height: "80px",
              width: "100%",
              display: "grid",
              gridTemplateColumns: "1fr auto 1fr",
              alignItems: "center",
            }}
          >
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", justifySelf: "start" }}>
            <Link to="/" viewTransition={location.pathname !== "/"}>
              <img
                src="/images/logo.png"
                alt="NordAnker Hausmeister- & Reinigungsservice"
                style={{
                  height: "56px",
                  width: "auto",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLImageElement).style.transform = "scale(1.04)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLImageElement).style.transform = "scale(1)";
                }}
              />
            </Link>
          </div>

          {/* Nav items with navlines */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
              justifySelf: "center",
            }}
          >
            {navItems.map((item, idx) => {
              const active = isActive(item.name);
              const commonStyle = {
                textDecoration: "none",
                color: active ? "#4a8c3f" : "#1e3a5f",
                fontWeight: 600,
                fontSize: "15px",
                letterSpacing: "0.3px",
                transition: "color 0.35s ease",
                position: "relative" as const,
                padding: "8px 0",
              };

              const navElement = item.hash ? (
                <Link
                  key={item.name}
                  to="/"
                  hash={item.hash}
                  viewTransition={location.pathname !== "/"}
                  style={commonStyle}
                >
                  {t(item.name)}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "0",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: active ? "100%" : "0%",
                      height: "2px",
                      background: "linear-gradient(to right, #4a8c3f, #6ab85a)",
                      borderRadius: "1px",
                      transition: "width 0.35s ease",
                    }}
                  />
                </Link>
              ) : (
                <Link
                  key={item.name}
                  to={item.to}
                  viewTransition={location.pathname !== item.to}
                  style={commonStyle}
                >
                  {t(item.name)}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "0",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: active ? "100%" : "0%",
                      height: "2px",
                      background: "linear-gradient(to right, #4a8c3f, #6ab85a)",
                      borderRadius: "1px",
                      transition: "width 0.35s ease",
                    }}
                  />
                </Link>
              );

              return (
                <div key={item.name} style={{ display: "flex", alignItems: "center", gap: "24px" }}>
                  {idx > 0 && <NavLine />}
                  {navElement}
                </div>
              );
            })}
          </div>

          {/* Language switcher */}
          <div
            style={{ position: "relative", justifySelf: "end" }}
            onMouseEnter={() => setLangOpen(true)}
            onMouseLeave={() => setLangOpen(false)}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer",
                padding: "8px 16px",
                borderRadius: "8px",
                border: "1px solid rgba(30,58,95,0.12)",
                background: "rgba(255,255,255,0.6)",
                transition: "all 0.3s ease",
                ...(langOpen ? {
                  background: "rgba(255,255,255,0.9)",
                  borderColor: "rgba(74,140,63,0.3)",
                  boxShadow: "0 2px 8px rgba(74,140,63,0.1)",
                } : {}),
              }}
            >
              <Globe
                style={{
                  width: "18px",
                  height: "18px",
                  color: langOpen ? "#4a8c3f" : "#1e3a5f",
                  transition: "color 0.3s ease",
                }}
              />
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#1e3a5f",
                  letterSpacing: "0.3px",
                }}
              >
                {currentLang.label}
              </div>
              <ChevronDown
                style={{
                  width: "14px",
                  height: "14px",
                  color: "#1e3a5f",
                  transition: "transform 0.3s ease",
                  transform: langOpen ? "rotate(180deg)" : "rotate(0)",
                }}
              />
            </div>

            {/* Language dropdown */}
            <div
              style={{
                position: "absolute",
                top: "100%",
                right: 0,
                paddingTop: "8px",
                pointerEvents: langOpen ? "auto" : "none",
              }}
            >
              <div
                style={{
                  background: "linear-gradient(135deg, #f0f7ed 0%, #e8f0f8 100%)",
                  borderRadius: "10px",
                  boxShadow: langOpen
                    ? "0 8px 30px rgba(30,58,95,0.12)"
                    : "none",
                  border: "1px solid rgba(30,58,95,0.08)",
                  overflow: "hidden",
                  opacity: langOpen ? 1 : 0,
                  transform: langOpen ? "translateY(0)" : "translateY(-6px)",
                  transition: "opacity 0.25s ease, transform 0.25s ease",
                  minWidth: "160px",
                }}
              >
                {languages.map((l, idx) => (
                  <div key={l.code}>
                    <div
                      style={{
                        padding: "10px 18px",
                        fontSize: "14px",
                        fontWeight: lang === l.code ? 600 : 400,
                        color: lang === l.code ? "#4a8c3f" : "#1e3a5f",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        transition: "background 0.2s ease, color 0.2s ease",
                        backgroundColor: lang === l.code ? "rgba(74,140,63,0.08)" : "transparent",
                      }}
                      onMouseEnter={(e) => {
                        if (lang !== l.code) {
                          e.currentTarget.style.backgroundColor = "rgba(74,140,63,0.06)";
                          e.currentTarget.style.color = "#4a8c3f";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (lang !== l.code) {
                          e.currentTarget.style.backgroundColor = "transparent";
                          e.currentTarget.style.color = "#1e3a5f";
                        }
                      }}
                      onClick={() => {
                        setLang(l.code);
                        setLangOpen(false);
                      }}
                    >
                      <div>{l.label}</div>
                    </div>
                    {idx < languages.length - 1 && (
                      <div
                        style={{
                          height: "1px",
                          margin: "0 14px",
                          background: "linear-gradient(to right, transparent, rgba(30,58,95,0.1), transparent)",
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom navline under navbar */}
      <div
        style={{
          height: "3px",
          background: scrolled
            ? "linear-gradient(to right, rgba(95,143,77,0.04) 0%, rgba(95,143,77,0.48) 18%, rgba(24,48,38,0.36) 50%, rgba(95,143,77,0.48) 82%, rgba(95,143,77,0.04) 100%)"
            : "linear-gradient(to right, rgba(95,143,77,0.03) 0%, rgba(95,143,77,0.34) 18%, rgba(24,48,38,0.28) 50%, rgba(95,143,77,0.34) 82%, rgba(95,143,77,0.03) 100%)",
          transition: "background 0.4s ease",
        }}
      />
    </div>
  );
}
