import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/lib/i18n";
import { ShoppingBag } from "lucide-react";
import sushiKit from "@/assets/sushi-kit.jpg";
import sakeCollection from "@/assets/sake-collection.jpg";

const BoutiqueSection = () => {
  const { addItem } = useCart();
  const { lang } = useLanguage();
  const t = useTranslation(lang);

  const products = [
    { id: "aging-kit-1", name: t("boutique.p1.name"), nameEn: "Premium Aging Sushi Kit", price: 3500, image: sushiKit, description: t("boutique.p1.desc") },
    { id: "sake-dassai", name: t("boutique.p2.name"), nameEn: "Dassai 23", price: 4200, image: sakeCollection, description: t("boutique.p2.desc") },
    { id: "aging-kit-2", name: t("boutique.p3.name"), nameEn: "Home Omakase Set", price: 5800, image: sushiKit, description: t("boutique.p3.desc") },
    { id: "sake-kubota", name: t("boutique.p4.name"), nameEn: "Kubota Manju", price: 3800, image: sakeCollection, description: t("boutique.p4.desc") },
  ];

  return (
    <section id="boutique" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.2em] uppercase text-accent mb-3 font-sans">{t("boutique.label")}</p>
          <h2 className="text-3xl md:text-5xl font-serif text-gradient-gold">{t("boutique.title")}</h2>
          <p className="text-muted-foreground font-sans mt-4 max-w-lg mx-auto">{t("boutique.subtitle")}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-accent/50 transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img src={product.image} alt={product.nameEn} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <h3 className="font-sans font-semibold text-sm text-foreground line-clamp-2 mb-1">{product.name}</h3>
                <p className="text-xs text-muted-foreground font-sans mb-3 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-serif text-primary">฿{product.price.toLocaleString()}</span>
                  <Button
                    variant="gold"
                    size="sm"
                    onClick={() => addItem({ id: product.id, name: product.name, nameEn: product.nameEn, price: product.price, image: product.image })}
                  >
                    <ShoppingBag size={14} />
                    {t("boutique.add")}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoutiqueSection;
