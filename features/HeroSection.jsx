import React from "react";
import ButtonLink from "@/components/ButtonLink";
import Image from "next/image";
import { CodeBracketSquareIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline";
import { ComputerDesktopIcon } from "@heroicons/react/24/outline";

{
  /* <section className='bg-[#FCF8F1] bg-opacity-30 py-10 flex items-center sm:py-16'>

  <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 flex flex-col bg-[red]'>
    <div className='grid items-center grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start bg-[teal]'>
      <HeroCTA />
      <div className='w-full h-full bg-[blue]' />
    </div>
    <HeroFeatures className='hidden lg:flex mt-10' />
  </div>
</section>; */
}

{
  /* <section className='bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24'> */
}

function HeroSection() {
  return (
    <section className='bg-[white] xl:min-h-heroSection flex items-center justify-center '>
      <div className='max-w-7xl gap-6 sm:gap-8 md:gap-10 xl:gap-14  grid grid-cols-1 lg:grid-cols-2 items-center'>
        {/* <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 gap-6 lg:gap-8 xl:gap-10 bg-[red] grid grid-cols-1 lg:grid-cols-2 items-center'> */}
        <HeroCTA />

        <HeroImage />
        <HeroFeatures />
      </div>
    </section>
  );
}

export default HeroSection;

const iconClass =
  "w-7 h-7 text-primary hover:text-primary-light transition-colors duration-300 ease-in-out";

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
      <p className='text-base font-semibold tracking-wider text-blue-600 uppercase'>
        Front End Developer{" "}
        <span className='text-sm sm:text-base'>[New York]</span>
      </p>
      <h1 className='text-4xl font-bold text-black sm:text-5xl md:text-6xl xl:text-7xl'>
        Helping small businesses thrive online.
      </h1>
      <p className='text-base text-black sm:text-xl max-w-lg '>
        I build custom websites that look great, work fast, and are easy to use.
      </p>

      <div className='flex gap-4 '>
        <ButtonLink variant='primary' size='lg' href='/'>
          Get Started
        </ButtonLink>
        <ButtonLink variant='secondary' size='lg' href='/'>
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
        <li className='flex items-center' key={index}>
          <span className='text-base'> {icon}</span>
          <p className='flex-1 text-base font-semi-bold text-gray-900 ml-2.5'>
            {title}
          </p>
        </li>
      ))}
    </ul>
  );
};
