import Image from "next/image";
import clsx from "clsx";
import React from "react";
import { SunIcon } from "@heroicons/react/24/outline";
import Icon from "@/components/Icon";

type BenefitsBlockProps = {
  data?: {
    title: string;
    description: string;
    image: {
      src: string;
      alt: string;
    };
  }[];
};

function BenefitsBlock({ data }: BenefitsBlockProps) {
  return (
    <div className='space-y-16 md:space-y-80 '>
      {benefits.map((content, index) => (
        <BenefitsBlockCard
          content={content}
          key={index}
          className={clsx(
            // { " place-items-center": index === 0 || index === 3 },
            // { " place-items-end": index === 1 }
            { "md:container-md": index % 2 === 1 }
          )}
          reverse={index % 2 === 1}
        />
      ))}
    </div>
  );
}

export default BenefitsBlock;

type BenefitsBlockCardProps = {
  content: {
    title: string;
    description: string;
    image: {
      src: string;
      alt: string;
    };
  };
  className?: string;
  reverse?: boolean;
};

function BenefitsBlockCard({
  content,
  className,
  reverse = false,
  ...rest
}: BenefitsBlockCardProps) {
  const { title, description, image } = content;
  return (
    <div
      className={clsx(
        "grid md:grid-cols-2 gap-16 md:gap-16 lg:gap-24 justify-items-center place-items-center",
        className
      )}
      {...rest}
    >
      <Image
        className={clsx(
          " w-full max-w-md max-h-[400px] md:max-h-full object-contain order-last sm:order-first",
          {
            "sm:order-last": reverse,
          }
        )}
        src={image.src}
        alt={image.alt}
        width={643}
        height={712}
      />
      <div className='max-w-lg flex flex-col gap-3 rounded-lg min-h-[300px] justify-center'>
        <Icon variant='primary-soft' className='icon-xl'>
          <SunIcon />
        </Icon>
        <h3 className='text-h-1 font-bold text-primary font-secondary mt-5'>
          {title}
        </h3>
        <p className='text-p text-neutral '>{description}</p>
      </div>
    </div>
  );
}

const benefits = [
  {
    image: {
      src: "https://cdn.rareblocks.xyz/collection/celebration/images/steps/3/team.jpg",
      alt: "",
    },
    title: "Tailored to Your Business Needs ",
    description:
      "Lorem ipsum dolor sit amet, elit, sed do Lorem ipsum dolor sit amet, elit, sed do Lorem ipsum dolor sit amet, elit, sed do. Lorem ipsum dolor sit amet, elit, sed do Lorem ipsum dolor sit amet, elit, sed do Lorem ipsum dolor sit amet, elit, sed do",
  },
  {
    image: {
      src: "https://cdn.rareblocks.xyz/collection/celebration/images/steps/3/work.jpg",
      alt: "",
    },
    title: "Real Results",
    description:
      "Lorem ipsum dolor sit amet, elit, sed do Lorem ipsum dolor sit amet, elit, sed do Lorem ipsum dolor sit amet, elit, sed do. Lorem ipsum dolor sit amet, elit, sed do Lorem ipsum dolor sit amet, elit, sed do Lorem ipsum dolor sit amet, elit, sed do",
  },
  {
    image: {
      src: "https://cdn.rareblocks.xyz/collection/celebration/images/steps/3/success.jpg",
      alt: "",
    },
    title: "Long Term Growth",
    description:
      "Lorem ipsum dolor sit amet, elit, sed do Lorem ipsum dolor sit amet, elit, sed do Lorem ipsum dolor sit amet, elit, sed do. Lorem ipsum dolor sit amet, elit, sed do Lorem ipsum dolor sit amet, elit, sed do Lorem ipsum dolor sit amet, elit, sed do",
  },
  {
    image: {
      src: "https://cdn.rareblocks.xyz/collection/celebration/images/steps/3/team.jpg",
      alt: "",
    },
    title: "Long Term Growth1",
    description:
      "Lorem ipsum dolor sit amet, elit, sed do Lorem ipsum dolor sit amet, elit, sed do Lorem ipsum dolor sit amet, elit, sed do. Lorem ipsum dolor sit amet, elit, sed do Lorem ipsum dolor sit amet, elit, sed do Lorem ipsum dolor sit amet, elit, sed do",
  },
];
