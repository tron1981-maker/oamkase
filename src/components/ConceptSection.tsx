import { motion } from "framer-motion";
import chefImage from "@/assets/chef-action.jpg";

const ConceptSection = () => {
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
            <p className="text-sm tracking-[0.2em] uppercase text-accent mb-3 font-sans">Our Philosophy</p>
            <h2 className="text-3xl md:text-5xl font-serif text-gradient-gold mb-6 leading-tight">
              Convivial Dining
              <br />
              meets Toyosu Freshness
            </h2>
            <div className="space-y-4 text-muted-foreground font-sans leading-relaxed">
              <p>
                วัตถุดิบทุกชิ้นของ IZUMI OMAKASE ถูกคัดสรรและนำเข้าโดยตรงจากตลาดโทโยสุ (Toyosu Market) กรุงโตเกียว
                เพื่อรักษาความสดใหม่และคุณภาพระดับสูงสุดในทุกจาน
              </p>
              <p>
                เราเชื่อในประสบการณ์ "Convivial Dining" — การรับประทานอาหารที่อบอุ่น เป็นกันเอง
                โดยเชฟจะนำเสนอแต่ละคำด้วยเรื่องราว เทคนิค และความใส่ใจ
                เสมือนได้นั่งรับประทานที่เคาน์เตอร์ซูชิย่านกินซ่า
              </p>
            </div>
            <div className="flex gap-6 mt-8">
              <div className="border-l-2 border-accent pl-4">
                <p className="text-2xl font-serif text-primary">48h</p>
                <p className="text-xs text-muted-foreground font-sans">Tokyo to Bangkok</p>
              </div>
              <div className="border-l-2 border-accent pl-4">
                <p className="text-2xl font-serif text-primary">8</p>
                <p className="text-xs text-muted-foreground font-sans">Seats Only</p>
              </div>
              <div className="border-l-2 border-accent pl-4">
                <p className="text-2xl font-serif text-primary">20+</p>
                <p className="text-xs text-muted-foreground font-sans">Years Experience</p>
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
              <p className="text-xs text-muted-foreground font-sans">Direct from</p>
              <p className="text-lg font-serif text-primary">豊洲市場</p>
              <p className="text-xs text-accent font-sans">Toyosu Market, Tokyo</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConceptSection;
