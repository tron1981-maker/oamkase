import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { name: "Ploy K.", handle: "@ployeats", text: "โอมากาเสะที่ดีที่สุดในทองหล่อ! ปลาสดมากๆ เหมือนนั่งทานที่โตเกียวเลย 🍣✨", rating: 5 },
  { name: "Mark T.", handle: "@markfoodie", text: "The aging technique is next level. Every piece tells a story. Chef's interaction makes it so special!", rating: 5 },
  { name: "Som O.", handle: "@somfoodjournal", text: "ราคาคุ้มค่ามากเทียบกับคุณภาพ คอร์ส 6,500 ฟินทุกคำ Uni สดมาก จองรอบหน้าแน่นอน", rating: 5 },
  { name: "Jae W.", handle: "@jaewon_bkk", text: "일본에서 먹는 것과 같은 수준입니다. 방콕 최고의 오마카세! 🇯🇵", rating: 5 },
  { name: "Nina L.", handle: "@ninaeats", text: "Brought my parents here for anniversary. They were blown away. The Otoro literally melts! 🤤", rating: 5 },
  { name: "Beam P.", handle: "@beamtastebkk", text: "IG ไม่ได้โม้ สวยจริง อร่อยจริง บรรยากาศ intimate มากๆ ❤️", rating: 5 },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <p className="text-sm tracking-[0.2em] uppercase text-accent mb-3 font-sans">Social Proof</p>
          <h2 className="text-3xl md:text-5xl font-serif text-gradient-gold">Trusted by Bangkok's Elite</h2>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 mb-14"
        >
          <div className="flex items-center gap-2 bg-card border border-border rounded-full px-5 py-2">
            <Star className="w-4 h-4 text-accent fill-accent" />
            <span className="text-sm font-sans text-foreground font-semibold">4.9/5</span>
            <span className="text-xs text-muted-foreground font-sans">Wongnai</span>
          </div>
          <div className="flex items-center gap-2 bg-card border border-border rounded-full px-5 py-2">
            <Star className="w-4 h-4 text-accent fill-accent" />
            <span className="text-sm font-sans text-foreground font-semibold">4.8/5</span>
            <span className="text-xs text-muted-foreground font-sans">Google Reviews</span>
          </div>
        </motion.div>

        {/* IG-style review grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-gradient-card border border-border rounded-lg p-6 hover:border-accent/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-hinoki to-gold flex items-center justify-center text-primary-foreground font-sans font-bold text-sm">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-sans font-semibold text-foreground">{review.name}</p>
                  <p className="text-xs text-muted-foreground font-sans">{review.handle}</p>
                </div>
              </div>
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-sm text-foreground/90 font-sans leading-relaxed">{review.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
