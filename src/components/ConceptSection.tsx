import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/lib/i18n";
import chefImage from "@/assets/chef-action.jpg";

const ConceptSection = () => {
  const { lang } = useLanguage();
  const t = useTranslation(lang);

  return (
    <section id="concept" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm tracking-[0.2em] uppercase text-accent mb-3 font-sans">{t("concept.label")}</p>
            <h2 className="text-3xl md:text-5xl font-serif text-gradient-gold mb-6 leading-tight">
              {t("concept.title1")}
              <br />
              {t("concept.title2")}
            </h2>
            <div className="space-y-4 text-muted-foreground font-sans leading-relaxed">
              <p>{t("concept.p1")}</p>
              <p>{t("concept.p2")}</p>
            </div>
            <div className="flex gap-6 mt-8">
              <div className="border-l-2 border-accent pl-4">
                <p className="text-2xl font-serif text-primary">48{t("concept.stat1")}</p>
                <p className="text-xs text-muted-foreground font-sans">{t("concept.stat1.sub")}</p>
              </div>
              <div className="border-l-2 border-accent pl-4">
                <p className="text-2xl font-serif text-primary">8</p>
                <p className="text-xs text-muted-foreground font-sans">{t("concept.stat2.sub")}</p>
              </div>
              <div className="border-l-2 border-accent pl-4">
                <p className="text-2xl font-serif text-primary">20+</p>
                <p className="text-xs text-muted-foreground font-sans">{t("concept.stat3.sub")}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-lg overflow-hidden glow-gold">
              <img src={chefImage} alt="Chef preparing omakase" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-lg p-4 shadow-xl">
              <p className="text-xs text-muted-foreground font-sans">{t("concept.badge.label")}</p>
              <p className="text-lg font-serif text-primary">{t("concept.badge.name")}</p>
              <p className="text-xs text-accent font-sans">{t("concept.badge.sub")}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConceptSection;
