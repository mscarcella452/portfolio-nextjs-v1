import styles from "./page.module.css";
import HeroSection from "@/features/HeroSection";
import BenefitsSection from "@/features/benefits/BenefitsSection";
import ComparisonSection from "@/features/comparison/ComparisonSection";
import FAQSection from "@/features/faq/FAQSection";
import RoadMapSection from "@/features/roadmap/RoadMapSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      {/* <ComparisonSection /> */}
      <RoadMapSection />
      <FAQSection />
    </>
  );
}
