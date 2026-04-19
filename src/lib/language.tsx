import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type LanguageCode = "en" | "de";

type LanguageContextValue = {
  lang: LanguageCode;
  setLang: (lang: LanguageCode) => void;
};

const STORAGE_KEY = "nordanker-language";

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<LanguageCode>("en");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = window.localStorage.getItem(STORAGE_KEY);

    if (stored === "en" || stored === "de") {
      setLang(stored);
      return;
    }

    if (window.navigator.language.toLowerCase().startsWith("de")) {
      setLang("de");
      return;
    }

    setLang("en");
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, lang);
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
