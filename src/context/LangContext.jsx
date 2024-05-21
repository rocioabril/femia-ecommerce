import { createContext, useState, useContext } from "react";
import en from "../lang/en";
import es from "../lang/es";

export const defaultLang = { es, en }

const LangContext = createContext({
  language: defaultLang.es,
  setLanguage: () => {},
});

export function useLang() {
  return useContext(LangContext);
}

export function LangProvider({ children }) {
  const [language, setLanguage] = useState(defaultLang.es);

  const toggleLanguage = (lang) => {
    setLanguage(defaultLang[lang]);
  };

  return (
    <LangContext.Provider value={{ language, setLanguage: toggleLanguage }}>
      {children}
    </LangContext.Provider>
  );
}

export default LangContext;
