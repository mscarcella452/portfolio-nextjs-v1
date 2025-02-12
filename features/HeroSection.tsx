import React from "react";
import ButtonLink from "@/components/ButtonLink";
import Image from "next/image";
import { CodeBracketSquareIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline";
import { ComputerDesktopIcon } from "@heroicons/react/24/outline";

{
  /* <section className='bg-[#FCF8F1] bg-0topacity-30 py-10 sm:py-16 lg:py-24'> */
}

function HeroSection() {
  return (
    <section className='bg-background dark:bg-background-dark xl:min-h-heroSection flex items-center justify-center '>
      <div className='max-w-7xl gap-6 sm:gap-8 md:gap-10 xl:gap-14  grid grid-cols-1 lg:grid-cols-2 items-center'>
        <HeroCTA />
        <HeroImage />
        <HeroFeatures />
      </div>
    </section>
  );
}

export default HeroSection;

const iconClass = "w-7 h-7 text-primary";

const heroFeatures = [
  {
    icon: <CodeBracketSquareIcon className={iconClass} />,
    title: "100% Hand-Coded",
  },
  {
    icon: <MagnifyingGlassCircleIcon className={iconClass} />,
    title: "SEO Services",
  },
  {
    icon: <ComputerDesktopIcon className={iconClass} />,
    title: "Responsive Design",
  },
];

const HeroImage = () => {
  return (
    <Image
      src='/images/background/demoIllustration.png'
      alt='Descriptive alt text'
      className='object-contain w-full order-3 lg:order-2'
      width={611}
      height={439}
    />
  );
};

const HeroCTA = () => {
  return (
    <div className='flex flex-col gap-6 sm:gap-8'>
      <p className='text-small font-semibold tracking-wider text-blue-600 uppercase'>
        {/* <p className='text-base font-semibold tracking-wider text-blue-600 uppercase'> */}
        Front End Developer [New York]
      </p>

      <h1 className='text-h-1 text-black'>
        Helping small businesses thrive online.
      </h1>
      <p className='text-p-lg max-w-lg'>
        I build custom websites that look great, work fast, and are easy to use.
      </p>

      <div className='inline-flex space-x-4 '>
        <ButtonLink variant='solid' color='accent' size='lg' href='/'>
          Get Started
        </ButtonLink>
        <ButtonLink variant='soft' color='neutral' size='lg' href='/'>
          View My Work
        </ButtonLink>
      </div>
    </div>
  );
};

const HeroFeatures = () => {
  return (
    <ul
      className={`gap-6 flex flex-col md:flex-row md:items-center lg:col-span-2 order-2 lg:order-3`}
    >
      {heroFeatures.map(({ icon, title }, index) => (
        <li className='flex items-center gap-2' key={index}>
          {icon}
          <p className='text-p font-semi-bold text-gray-900'>{title}</p>
        </li>
      ))}
    </ul>
  );
};
