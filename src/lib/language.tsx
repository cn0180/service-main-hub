import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type LanguageCode = "en" | "de";

type LanguageContextValue = {
  lang: LanguageCode;
  setLang: (lang: LanguageCode) => void;
};

const STORAGE_KEY = "nordanker-language-v2";
const LEGACY_STORAGE_KEY = "nordanker-language";

const LanguageContext = createContext<LanguageContextValue | null>(null);

function normalizeLanguage(value: string | null): LanguageCode | null {
  if (value === "de" || value === "en") return value;
  if (value === "nl") return "de";
  return null;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<LanguageCode>("de");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = normalizeLanguage(window.localStorage.getItem(STORAGE_KEY))
      ?? normalizeLanguage(window.localStorage.getItem(LEGACY_STORAGE_KEY));

    if (stored) {
      setLang(stored);
      return;
    }

    setLang("de");
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, lang);
    window.localStorage.setItem(LEGACY_STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
