import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ShoppingBag } from "lucide-react";
import sushiKit from "@/assets/sushi-kit.jpg";
import sakeCollection from "@/assets/sake-collection.jpg";

const products = [
  {
    id: "aging-kit-1",
    name: "Premium Aging Sushi Kit — Signature",
    nameEn: "Premium Aging Sushi Kit",
    price: 3500,
    image: sushiKit,
    description: "ชุดซูชิเอจจิ้งพรีเมียม พร้อมปลาคัดสรรจากโทโยสุ 5 ชนิด",
  },
  {
    id: "sake-dassai",
    name: "Dassai 23 Junmai Daiginjo 720ml",
    nameEn: "Dassai 23",
    price: 4200,
    image: sakeCollection,
    description: "สาเกระดับพรีเมียมจาก Yamaguchi ขัดข้าว 23% ละมุนและสะอาด",
  },
  {
    id: "aging-kit-2",
    name: "Home Omakase Set — 2 Persons",
    nameEn: "Home Omakase Set",
    price: 5800,
    image: sushiKit,
    description: "เซ็ตโอมากาเสะทานที่บ้าน สำหรับ 2 ท่าน พร้อมคำแนะนำจากเชฟ",
  },
  {
    id: "sake-kubota",
    name: "Kubota Manju Junmai Daiginjo 720ml",
    nameEn: "Kubota Manju",
    price: 3800,
    image: sakeCollection,
    description: "สาเก Kubota รุ่น Manju ระดับสุดยอด หอมผลไม้ รสนุ่มลึก",
  },
];

const BoutiqueSection = () => {
  const { addItem } = useCart();

  return (
    <section id="boutique" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.2em] uppercase text-accent mb-3 font-sans">E-commerce Boutique</p>
          <h2 className="text-3xl md:text-5xl font-serif text-gradient-gold">The IZUMI Collection</h2>
          <p className="text-muted-foreground font-sans mt-4 max-w-lg mx-auto">
            นำประสบการณ์โอมากาเสะกลับไปเพลิดเพลินที่บ้าน
          </p>
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
                <img
                  src={product.image}
                  alt={product.nameEn}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
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
                    Add
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
