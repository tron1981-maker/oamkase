import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/lib/i18n";

const FloatingLineButton = () => {
  const { lang } = useLanguage();
  const t = useTranslation(lang);

  return (
    <a
      href="https://line.me/R/"
      target="_blank"
      rel="noopener noreferrer"
      className="line-float-btn"
    >
      <MessageCircle size={18} />
      <span className="hidden sm:inline">{t("line.text")}</span>
      <span className="sm:hidden">{t("line.short")}</span>
    </a>
  );
};

export default FloatingLineButton;
