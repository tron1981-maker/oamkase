import { useCart } from "@/contexts/CartContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Minus, Plus, Trash2 } from "lucide-react";

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, total, clearCart } = useCart();
  const { lang } = useLanguage();
  const t = useTranslation(lang);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="bg-card border-border w-full sm:max-w-md flex flex-col">
        <SheetHeader>
          <SheetTitle className="font-serif text-primary text-xl">{t("cart.title")}</SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-muted-foreground font-sans text-sm">{t("cart.empty")}</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto space-y-4 mt-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-3 border-b border-border pb-4">
                  <img src={item.image} alt={item.nameEn} className="w-16 h-16 rounded object-cover" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-sans font-semibold text-foreground truncate">{item.name}</p>
                    <p className="text-sm text-primary font-sans">฿{item.price.toLocaleString()}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-7 h-7 rounded border border-border flex items-center justify-center text-muted-foreground hover:text-foreground">
                        <Minus size={12} />
                      </button>
                      <span className="text-sm font-sans w-6 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-7 h-7 rounded border border-border flex items-center justify-center text-muted-foreground hover:text-foreground">
                        <Plus size={12} />
                      </button>
                      <button onClick={() => removeItem(item.id)} className="ml-auto text-destructive hover:text-destructive/80">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-4 space-y-3">
              <div className="flex justify-between font-sans">
                <span className="text-muted-foreground">{t("cart.total")}</span>
                <span className="text-xl font-serif text-primary">฿{total.toLocaleString()}</span>
              </div>
              <Button variant="gold" className="w-full" size="lg">
                {t("cart.checkout")}
              </Button>
              <button onClick={clearCart} className="w-full text-center text-xs text-muted-foreground hover:text-foreground font-sans">
                {t("cart.clear")}
              </button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
