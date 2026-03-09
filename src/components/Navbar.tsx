import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCart } from "@/contexts/CartContext";
import { ShoppingBag, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const langs = ["TH", "EN", "KR", "CN"] as const;

const Navbar = () => {
  const { lang, setLang } = useLanguage();
  const { itemCount, setIsOpen } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="/" className="font-serif text-xl tracking-widest text-primary">
          泉 IZUMI
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#concept" className="text-sm text-muted-foreground hover:text-primary transition-colors">Concept</a>
          <a href="#courses" className="text-sm text-muted-foreground hover:text-primary transition-colors">Omakase</a>
          <a href="#boutique" className="text-sm text-muted-foreground hover:text-primary transition-colors">Boutique</a>
          <a href="#reviews" className="text-sm text-muted-foreground hover:text-primary transition-colors">Reviews</a>
        </div>

        <div className="flex items-center gap-4">
          {/* Language toggle */}
          <div className="hidden md:flex items-center border border-border rounded-full overflow-hidden">
            {langs.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1 text-xs font-sans transition-all ${lang === l ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Cart */}
          <button onClick={() => setIsOpen(true)} className="relative p-2 text-muted-foreground hover:text-primary transition-colors">
            <ShoppingBag size={20} />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center font-sans font-bold">
                {itemCount}
              </span>
            )}
          </button>

          {/* Mobile menu toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 text-muted-foreground">
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-background border-b border-border"
          >
            <div className="flex flex-col px-4 py-4 gap-4">
              <a href="#concept" onClick={() => setMobileOpen(false)} className="text-sm text-foreground">Concept</a>
              <a href="#courses" onClick={() => setMobileOpen(false)} className="text-sm text-foreground">Omakase</a>
              <a href="#boutique" onClick={() => setMobileOpen(false)} className="text-sm text-foreground">Boutique</a>
              <a href="#reviews" onClick={() => setMobileOpen(false)} className="text-sm text-foreground">Reviews</a>
              <div className="flex items-center gap-2 pt-2 border-t border-border">
                {langs.map((l) => (
                  <button key={l} onClick={() => setLang(l)} className={`px-3 py-1 text-xs rounded-full ${lang === l ? "bg-primary text-primary-foreground" : "text-muted-foreground border border-border"}`}>
                    {l}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
