import clsx from "clsx";
import Image from "next/image";
import React from "react";

function RoadMapSection() {
  return (
    <section className='py-10 bg-gray-50 sm:py-16 lg:py-24 bg-background-light dark:bg-background-dark'>
      <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <div className='grid lg:grid-cols-2 gap-8'>
          <h2 className='font-bold font-secondary leading-tight text-h-2 lg:max-w-lg'>
            How We Bring Your Website to Life
          </h2>
          <p
            className='text-p lg:text-p-lg font-primary text-neutral md:max-w-2xl xl:max-w-lg  lg:place-self-end'
            data-testid='paragraph'
          >
            I create modern, responsive websites that are built to attract and
            engage your ideal customers. When you partner with me, you’re not
            just getting a website—you’re getting a strategy designed for your
            long-term success.
          </p>
        </div>

        <div className='grid grid-cols-1 mt-12 lg:mt-24 gap-y-12 md:grid-cols-2 gap-x-6 justify-items-center'>
          {steps.map((content, index) => (
            <RoadMapCard content={content} key={index} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RoadMapSection;

const steps = [
  {
    image: {
      className: "-rotate-1",
      src: "https://cdn.rareblocks.xyz/collection/celebration/images/steps/3/team.jpg",
      alt: "",
    },
    title: "Discovery & Strategy",
    description:
      "We’ll identify your business goals, target audience, and key website features. This ensures your website isn’t just pretty – it works for your business..",
  },
  {
    image: {
      className: "rotate-1",
      src: "https://cdn.rareblocks.xyz/collection/celebration/images/steps/3/work.jpg",
      alt: "",
    },
    title: "Custom Design & Development",
    description:
      "You’ll get a website built around your brand with a design tailored to attract and convert your customers. I’ll handle everything from responsive design to functionality that makes your site easy to use",
  },
  {
    image: {
      className: "rotate-1",
      src: "https://cdn.rareblocks.xyz/collection/celebration/images/steps/3/success.jpg",
      alt: "",
    },
    title: "Launch & Support",
    description:
      "Your website goes live with full confidence, and I’ll be here to support you, making sure your site stays up-to-date and continues to perform at its best.",
  },
  {
    image: {
      className: "-rotate-1",
      src: "https://cdn.rareblocks.xyz/collection/celebration/images/steps/3/team.jpg",
      alt: "",
    },
    title: "Optimization & Growth",
    description:
      "Your website isn’t static. After launch, we continuously monitor performance, implement updates, and optimize the site to help you grow and adapt to your customers' needs.",
  },
];

type RoadMapCardsProps = {
  content: {
    title: string;
    description: string;
    image: {
      src: string;
      alt: string;
      className: string;
    };
  };
  index: number;
};

function RoadMapCard({ content, index, ...rest }: RoadMapCardsProps) {
  const { image, title, description } = content;
  return (
    <div className='md:px-4 lg:px-10 md:max-w-lg overflow-hidden' {...rest}>
      <Image
        className={clsx(
          "max-h-[400px] md:max-h-full object-contain",
          { "hidden md:block order-first ": index % 2 === 0 },
          image.className
        )}
        src={image.src}
        alt={image.alt}
        width={643}
        height={712}
      />
      <h3 className='mt-12 text-h-5 font-secondary font-semibold leading-tight'>
        {index + 1}. {title}
      </h3>
      <p className='mt-4 text-p text-neutral'>{description}</p>
    </div>
  );
}
