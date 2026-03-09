import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ConceptSection from "@/components/ConceptSection";
import CoursesSection from "@/components/CoursesSection";
import BoutiqueSection from "@/components/BoutiqueSection";
import ReviewsSection from "@/components/ReviewsSection";
import CartDrawer from "@/components/CartDrawer";
import FloatingLineButton from "@/components/FloatingLineButton";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ConceptSection />
      <CoursesSection />
      <BoutiqueSection />
      <ReviewsSection />
      <Footer />
      <CartDrawer />
      <FloatingLineButton />
    </div>
  );
};

export default Index;
