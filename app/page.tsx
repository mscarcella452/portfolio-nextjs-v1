import styles from "./page.module.css";
import HeroSection from "@/features/HeroSection";

const content =
  " An image generally refers to any visual representation, such as a photo, graphic, or illustration, that can be displayed on a website or app. It can serve many purposes, including content, decoration, or as part of the design. A splash image, on the other hand, is a specific type of image used to create a striking first impression, often displayed at the beginning of an experience (like the first page or screen of a website or app). It usually serves as an introductory or welcome visual, commonly used in splash screens for apps or websites. Splash images are typically larger in size and designed to be visually impactful, often associated with a brief introductory message or logo. In short: Image: Any visual used in content or design. Splash image: A larger, attention-grabbing image used primarily at the start of an experience.";

const fullContent = `${content} ${content} ${content}`;

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className='bg-neutral-light dark:bg-neutral-dark dark:text-neutral flex'>
        <div className='flex-1'>{fullContent}</div>
      </section>
      <section className='bg-background-light dark:bg-background-dark dark:text-white flex'>
        <div className='flex-1'>{fullContent}</div>
      </section>
    </>
  );
}
