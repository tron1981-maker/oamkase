import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/lib/i18n";
import type { Lang } from "@/contexts/LanguageContext";

const reviewsByLang: Record<Lang, { name: string; handle: string; text: string; rating: number }[]> = {
  TH: [
    { name: "พลอย ก.", handle: "@ployeats", text: "โอมากาเสะที่ดีที่สุดในทองหล่อ! ปลาสดมากๆ เหมือนนั่งทานที่โตเกียวเลย 🍣✨", rating: 5 },
    { name: "มาร์ค ท.", handle: "@markfoodie", text: "เทคนิคการเอจจิ้งเหนือระดับมาก ทุกคำมีเรื่องราว ที่ชอบมากคือเชฟพูดคุยให้ฟังตลอด!", rating: 5 },
    { name: "ส้มโอ", handle: "@somfoodjournal", text: "ราคาคุ้มค่ามากเทียบกับคุณภาพ คอร์ส 6,500 ฟินทุกคำ อูนิสดมาก จองรอบหน้าแน่นอน", rating: 5 },
    { name: "แจ วอน", handle: "@jaewon_bkk", text: "ปลาดีมาก รสชาติเหมือนทานที่ญี่ปุ่นจริงๆ โอมากาเสะดีที่สุดในกรุงเทพฯ! 🇯🇵", rating: 5 },
    { name: "นีน่า ล.", handle: "@ninaeats", text: "พาพ่อแม่มาฉลองวันครบรอบ ทุกคนประทับใจมาก โอโทโร่ละลายในปากจริงๆ 🤤", rating: 5 },
    { name: "บีม พ.", handle: "@beamtastebkk", text: "สวยจริง อร่อยจริง บรรยากาศเป็นส่วนตัวมากๆ ถ่ายรูปสวยทุกมุม ❤️", rating: 5 },
  ],
  EN: [
    { name: "Ploy K.", handle: "@ployeats", text: "The best omakase in Thonglor! Fish is incredibly fresh — feels like dining in Tokyo itself 🍣✨", rating: 5 },
    { name: "Mark T.", handle: "@markfoodie", text: "The aging technique is next level. Every piece tells a story. Chef's interaction makes it so special!", rating: 5 },
    { name: "Som O.", handle: "@somfoodjournal", text: "Incredible value for this quality. The 6,500 course is perfect in every bite. The uni is divine. Booking again!", rating: 5 },
    { name: "Jae W.", handle: "@jaewon_bkk", text: "Same level as the finest sushi in Japan. Absolutely the best omakase in Bangkok! 🇯🇵", rating: 5 },
    { name: "Nina L.", handle: "@ninaeats", text: "Brought my parents for their anniversary. They were blown away. The otoro literally melts! 🤤", rating: 5 },
    { name: "Beam P.", handle: "@beamtastebkk", text: "Stunning presentation, exquisite taste. The atmosphere is so intimate. Photo-worthy every angle ❤️", rating: 5 },
  ],
  KR: [
    { name: "플로이 K.", handle: "@ployeats", text: "통로에서 최고의 오마카세! 생선이 정말 신선해요 — 도쿄에서 먹는 것 같아요 🍣✨", rating: 5 },
    { name: "마크 T.", handle: "@markfoodie", text: "숙성 기술이 정말 대단해요. 모든 조각에 이야기가 있어요. 셰프와의 소통이 특별해요!", rating: 5 },
    { name: "솜 O.", handle: "@somfoodjournal", text: "이 퀄리티에 이 가격은 정말 가성비 최고. 6,500바트 코스 매 한 입이 완벽해요. 우니가 환상적!", rating: 5 },
    { name: "재원", handle: "@jaewon_bkk", text: "일본에서 먹는 것과 같은 수준입니다. 방콕 최고의 오마카세! 🇯🇵", rating: 5 },
    { name: "니나 L.", handle: "@ninaeats", text: "부모님 기념일에 데려갔는데 모두 감동하셨어요. 오토로가 정말 녹아요! 🤤", rating: 5 },
    { name: "빔 P.", handle: "@beamtastebkk", text: "비주얼도 맛도 완벽. 분위기가 정말 아늑해요. 어디서 찍어도 인스타감 ❤️", rating: 5 },
  ],
  CN: [
    { name: "Ploy K.", handle: "@ployeats", text: "通罗最棒的御任料理！鱼非常新鲜——就像在东京用餐一样 🍣✨", rating: 5 },
    { name: "Mark T.", handle: "@markfoodie", text: "熟成技术超一流。每一贯都有故事。主厨的互动让体验更加特别！", rating: 5 },
    { name: "Som O.", handle: "@somfoodjournal", text: "这个品质性价比太高了。6,500泰铢的套餐每一口都完美。海胆绝了。一定会再来！", rating: 5 },
    { name: "Jae W.", handle: "@jaewon_bkk", text: "和日本顶级寿司一样的水准。绝对是曼谷最好的御任料理！🇯🇵", rating: 5 },
    { name: "Nina L.", handle: "@ninaeats", text: "带父母来庆祝纪念日，所有人都惊叹不已。大腹真的入口即化！🤤", rating: 5 },
    { name: "Beam P.", handle: "@beamtastebkk", text: "摆盘精美，味道绝佳。氛围非常私密。每个角度都值得拍照 ❤️", rating: 5 },
  ],
};

const ReviewsSection = () => {
  const { lang } = useLanguage();
  const t = useTranslation(lang);
  const reviews = reviewsByLang[lang];

  return (
    <section id="reviews" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <p className="text-sm tracking-[0.2em] uppercase text-accent mb-3 font-sans">{t("reviews.label")}</p>
          <h2 className="text-3xl md:text-5xl font-serif text-gradient-gold">{t("reviews.title")}</h2>
        </motion.div>

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
            <span className="text-xs text-muted-foreground font-sans">Google</span>
          </div>
        </motion.div>

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
