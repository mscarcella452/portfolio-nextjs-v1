import React from "react";
import ButtonLink from "@/components/ButtonLink";
import Image from "next/image";

function HeroSection() {
  return (
    <section className='w-full max-w-[1280px] min-h-heroSection dark:bg-black flex flex-col gap-6 justify-between  self-center'>
      {/* <div className='w-full '>
        <h5>[Front End Developer] [New York]</h5>
      </div> */}
      <div className='w-full  grid grid-cols-2 gap-6 items-center '>
        <div className='w-full max-w-lg  h-full bg-[green] justify-self-start'>
          <HeroImage />
        </div>
        <div className='w-full max-w-xl h-full max-h-[500px]  justify-self-center self-center flex flex-col justify-around order-first lg:order-last'>
          <HeroCTA />
        </div>
      </div>
      <div className='w-full flex-1  flex justify-between items-center'>
        <HeroFeatures />
      </div>
    </section>
  );
}

export default HeroSection;

const heroFeatures = [
  { heading: "100%", subHeading: "hand-coded" },
  { heading: "No", subHeading: "page-builders" },
  { heading: "SEO", subHeading: "services" },
  { heading: "Responsive", subHeading: "design" },
];

const HeroImage = () => {
  return (
    <Image
      src='/images/background/demoIllustration.png'
      // layout='responsive'
      className='object-contain  w-[100%] h-[100%]'
      // className='rounded-lg shadow-lg object-contain w-full h-full'
      width={644}
      height={494}
      alt='Picture of the author'
    />
  );
};
const HeroCTA = () => {
  return (
    <>
      <div className='flex gap-2 items-center'>
        <div className='h-5 w-5 bg-primary rounded-[50%]' />
        <h5>Available For Freelance [Front End Developer] [New York]</h5>
      </div>
      <h1 className='text-5xl'>
        Helping small businesses get online and stand out.
      </h1>
      <h4 className='text-2xl'>
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

const HeroFeatures = () => {
  return (
    <>
      {heroFeatures.map(({ heading, subHeading }, index) => (
        <div
          className='w-[150px] h-[100px] flex flex-col bg-[#fafafa] items-center justify-center'
          key={index}
        >
          <h5 className='text-lg font-bold'>{heading}</h5>
          <p>{subHeading}</p>
        </div>
      ))}
    </>
  );
};
