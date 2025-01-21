import React from "react";
import ButtonLink from "@/components/ButtonLink";
import Image from "next/image";

function HeroSection() {
  return (
    <section className='min-h-heroSection  dark:bg-black flex flex-col gap-6 justify-center'>
      <div className='flex gap-2 items-center'>
        <h5>[Front End Developer]</h5>
        <h5>[New York]</h5>
      </div>
      <div className='w-full grid grid-cols-1 lg:grid-cols-2  gap-6'>
        <Image
          src='/images/background/demoIllustration.png'
          // layout='responsive'
          className='object-contain w-full h-full'
          // className='rounded-lg shadow-lg object-contain w-full h-full'
          width={644}
          height={494}
          alt='Picture of the author'
        />
        <div className='w-full h-full lg:w-[600px] flex flex-col justify-center gap-8 order-first lg:order-last'>
          <div className='flex gap-2 items-center'>
            <div className='h-5 w-5 bg-primary rounded-[50%]' />
            <h5>Available For Freelance</h5>
          </div>
          <h1 className='text-5xl'>
            Helping small businesses get online and stand out.
          </h1>
          <h4 className='text-2xl'>
            I build custom websites that look great, work fast, and are easy to
            use.
          </h4>
          <div className='flex gap-4'>
            <ButtonLink variant='primary' href='/'>
              Get Started
            </ButtonLink>
            <ButtonLink variant='secondary' href='/'>
              View My Work
            </ButtonLink>
          </div>
        </div>
      </div>
      <div className='w-full h-full lg:h-[100px] grid grid-cols-2 lg:grid-cols-4 gap-4 justify-center'>
        {heroFeatures.map(({ heading, subHeading }, index) => (
          <div
            className='w-[150px] h-[100px] flex flex-col bg-[#fefefe] items-center justify-center'
            key={index}
          >
            <h5>{heading}</h5>
            <p>{subHeading}</p>
          </div>
        ))}
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
