import React from "react";
import ButtonLink from "@/components/ButtonLink";
import Image from "next/image";
import { CodeBracketSquareIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline";
import { ComputerDesktopIcon } from "@heroicons/react/24/outline";

function HeroSection() {
  return (
    <div className='bg-white'>
      <section className='bg-[#FCF8F1] bg-opacity-30 py-10 flex items-center sm:py-16'>
        {/* <section className='bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24'> */}
        <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 flex flex-col'>
          <div className='grid items-center grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr] lg:items-start'>
            <div>
              <p className='text-base font-semibold tracking-wider text-blue-600 uppercase'>
                Front End Developer [New York]
              </p>
              <h1 className='mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-5xl md:text-6xl xl:text-7xl'>
                Helping small businesses thrive online.
              </h1>
              <p className='mt-4 text-base text-black lg:mt-8 sm:text-xl max-w-lg '>
                I build custom websites that look great, work fast, and are easy
                to use.
              </p>

              <HeroActionBtns className={"my-8"} />
              <HeroFeatures className='flex lg:hidden' />
            </div>

            <div>
              <img
                className='w-full'
                src='/images/background/demoIllustration.png'
                alt=''
              />
            </div>
          </div>
          <HeroFeatures className='hidden lg:flex' />
        </div>
      </section>
    </div>
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

const HeroActionBtns = ({ className }) => {
  return (
    <div className={`flex gap-4 ${className}`}>
      <ButtonLink variant='primary' size='lg' href='/'>
        Get Started
      </ButtonLink>
      <ButtonLink variant='secondary' size='lg' href='/'>
        View My Work
      </ButtonLink>
    </div>
  );
};

const HeroImage = () => {
  return (
    <Image
      src='/images/background/demoIllustration.png'
      alt='Descriptive alt text'
      className='object-contain fixed top-0 left-0 right-0 bottom-0'
      fill
    />
  );
};

const HeroCTA = () => {
  return (
    <>
      <div className='flex gap-2 items-center '>
        <div className='h-5 w-5 bg-primary rounded-[50%]' />
        <h5>Available For Freelance</h5>
        {/* <h5>Available For Freelance [Front End Developer] [New York]</h5> */}
      </div>
      <h1 className='text-2xl sm:text-3xl lg:text-4xl  font-bold text-center md:text-left'>
        Helping small businesses get online and stand out.
      </h1>
      <h4 className=' text-base sm-text-xl lg:text-2xl text-center md:text-left'>
        I build custom websites that look great, work fast, and are easy to use.
      </h4>
      <div className='flex gap-4'>
        <ButtonLink variant='primary' size='lg' href='/'>
          Get Started
        </ButtonLink>
        <ButtonLink variant='secondary' size='lg' href='/'>
          View My Work
        </ButtonLink>
      </div>
    </>
  );
};

const HeroFeatures = ({ className }) => {
  return (
    <div>
      <ul
        className={`mt-10 gap-6 flex flex-col md:flex-row md:items-center ${className}`}
      >
        {heroFeatures.map(({ icon, title }, index) => (
          <li className='flex items-center'>
            <span className='text-base'> {icon}</span>
            <p className='flex-1 text-base font-semi-bold text-gray-900 ml-2.5'>
              {title}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
