import { useTranslation, } from "react-i18next";
import en from "../locales/en";
import ptBr from "../locales/pt-BR";

interface UseLocaleProps {
  language: string;
  t: Record<string, string>;
  // changeLanguage: Promise<TFunction>;
}

export const useLocale = (): UseLocaleProps => {
  const { i18n } = useTranslation();
  const t = i18n.language === "pt-BR" ? ptBr : en;

  return {
    t,
    language: i18n.language,
    // changeLanguage: i18n.changeLanguage()
  };
};

export default useLocale;