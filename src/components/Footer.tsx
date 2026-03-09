import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/lib/i18n";

const Footer = () => {
  const { lang } = useLanguage();
  const t = useTranslation(lang);

  return (
    <footer className="border-t border-border py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <p className="font-serif text-xl text-primary mb-2">泉 IZUMI OMAKASE</p>
            <p className="text-sm text-muted-foreground font-sans">{t("hero.location")}</p>
          </div>
          <div>
            <p className="text-sm font-sans font-semibold text-foreground mb-3">{t("footer.hours")}</p>
            <p className="text-sm text-muted-foreground font-sans">{t("footer.lunch")}</p>
            <p className="text-sm text-muted-foreground font-sans">{t("footer.dinner")}</p>
            <p className="text-sm text-muted-foreground font-sans">{t("footer.closed")}</p>
          </div>
          <div>
            <p className="text-sm font-sans font-semibold text-foreground mb-3">{t("footer.contact")}</p>
            <p className="text-sm text-muted-foreground font-sans">Tel: +66 2 XXX XXXX</p>
            <p className="text-sm text-muted-foreground font-sans">LINE: @izumiomakase</p>
            <p className="text-sm text-muted-foreground font-sans">IG: @izumi.omakase</p>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground font-sans">© 2026 IZUMI OMAKASE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
