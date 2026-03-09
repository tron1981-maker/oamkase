import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Crown, Sparkles, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/lib/i18n";

const CoursesSection = () => {
  const { lang } = useLanguage();
  const t = useTranslation(lang);

  const courses = [
    {
      id: "lunch",
      icon: Star,
      title: t("courses.lunch"),
      price: "4,000",
      courses: t("courses.15"),
      description: t("courses.lunch.desc"),
      highlights: [t("courses.lunch.h1"), t("courses.lunch.h2"), t("courses.lunch.h3")],
    },
    {
      id: "signature",
      icon: Sparkles,
      title: t("courses.signature"),
      price: "6,500",
      courses: t("courses.seasonal"),
      featured: true,
      description: t("courses.signature.desc"),
      highlights: [t("courses.signature.h1"), t("courses.signature.h2"), t("courses.signature.h3")],
    },
    {
      id: "premium",
      icon: Crown,
      title: t("courses.premium"),
      price: "9,000+",
      courses: t("courses.chef"),
      description: t("courses.premium.desc"),
      highlights: [t("courses.premium.h1"), t("courses.premium.h2"), t("courses.premium.h3")],
    },
  ];

  return (
    <section id="courses" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.2em] uppercase text-accent mb-3 font-sans">{t("courses.label")}</p>
          <h2 className="text-3xl md:text-5xl font-serif text-gradient-gold">{t("courses.title")}</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {courses.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative bg-gradient-card rounded-lg border p-8 flex flex-col ${
                course.featured ? "border-accent glow-gold scale-[1.02]" : "border-border"
              }`}
            >
              {course.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-sans font-bold px-4 py-1 rounded-full">
                  {t("courses.popular")}
                </div>
              )}

              <course.icon className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-xl font-serif text-primary">{course.title}</h3>

              <div className="mb-4 mt-3">
                <span className="text-3xl font-serif text-gradient-gold">฿{course.price}</span>
                <span className="text-sm text-muted-foreground font-sans ml-2">/ {course.courses}</span>
              </div>

              <p className="text-sm text-muted-foreground font-sans mb-6 flex-1">{course.description}</p>

              <ul className="space-y-2 mb-8">
                {course.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-sm font-sans text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>

              <Button variant={course.featured ? "gold" : "gold-outline"} className="w-full">
                {t("courses.reserve")}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
