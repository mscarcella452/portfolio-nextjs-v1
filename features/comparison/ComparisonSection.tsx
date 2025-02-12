import React from "react";
import clsx from "clsx";
import Icon from "@/components/Icon";
import Image from "next/image";
import { SunIcon } from "@heroicons/react/24/outline";

function ComparisonSection() {
  return (
    <section className='bg-background dark:bg-background'>
      <div className='section-container '>
        <h2 className='text-h-2 container-sm font-bold font-secondary text-center'>
          Avoid The “Do-It-Yourself” Pitfalls
        </h2>
        <div className='container-sm xl:container-xl grid md:grid-cols-2 xl:grid-cols-3  gap-24 md:gap-12 items-center '>
          <div className='grid  md:grid-rows-2  gap-12 p-6'>
            <ComparisonHeader content={data[0].header} />
            <ComparisonIconList
              content={data[0].iconList}
              variant='solid'
              color='secondary'
            />
          </div>

          <div className='md:hidden xl:block order-0 xl:order-first'>
            <ComparisonImage image={data[1].image} />
          </div>

          <div className='grid  md:grid-rows-2  gap-12 p-6 bg-background-light'>
            <ComparisonHeader content={data[1].header} />
            <ComparisonIconList
              content={data[1].iconList}
              variant='solid'
              color='primary'
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ComparisonSection;

const data = [
  {
    image: {
      src: "https://images.unsplash.com/photo-1665686306574-1ace09918530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&h=720&q=80",
      alt: "alt name for image",
    },
    header: {
      title: "Lorem ipsum dolor sit amet, elit, sed do",
      description:
        "Lorem ipsum dolor sit amet, elit, sed do Lorem ipsum dolor sit amet, elit, sed do Lorem ipsum dolor sit amet, elit, sed do",
    },
    iconList: {
      title: "With DIY...",
      list: [
        { icon: <SunIcon />, description: "Lorem ipsum dolor sit amet." },
        { icon: <SunIcon />, description: "Lorem ipsum dolor sit amet." },
        { icon: <SunIcon />, description: "Lorem ipsum dolor sit amet." },
        { icon: <SunIcon />, description: "Lorem ipsum dolor sit amet." },
      ],
    },
  },

  {
    image: {
      src: "https://images.unsplash.com/photo-1598929213452-52d72f63e307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&h=720&q=80",
      alt: "alt name for image",
    },
    header: {
      title: "Lorem ipsum dolor sit amet, elit, sed do",
      description: "Lorem ipsum dolor sit amet, elit, sed do",
    },
    iconList: {
      title: "With Me...",
      list: [
        { icon: <SunIcon />, description: "Lorem ipsum dolor sit amet." },
        { icon: <SunIcon />, description: "Lorem ipsum dolor sit amet." },
        { icon: <SunIcon />, description: "Lorem ipsum dolor sit amet." },
        { icon: <SunIcon />, description: "Lorem ipsum dolor sit amet." },
      ],
    },
  },
];

type ComparisonHeaderProps = {
  content: { title: string; description: string };
};

function ComparisonHeader({ content }: ComparisonHeaderProps) {
  const { title, description } = content;
  return (
    <div className='space-y-5'>
      <h3 className='text-h-5 font-medium font-secondary'>{title}</h3>
      <p className='text-p lg:text-p-lg font-primary text-neutral'>
        {description}
      </p>
    </div>
  );
}
type ComparisonIconListProps = {
  content: {
    title: string;
    list: { icon: React.ReactNode; description: string }[];
  };
} & React.ComponentProps<typeof Icon>; // Inherit types from Icon component;

function ComparisonIconList({
  content,
  variant,
  color,
}: ComparisonIconListProps) {
  const { title, list } = content;
  return (
    <div className='space-y-5 '>
      <h3 className='text-h-6 font-medium font-secondary'>{title}</h3>

      {list.map((content, index) => (
        <div className='flex gap-5 items-center' key={index}>
          <Icon variant={variant} color={color} size={"md"}>
            {content.icon}
          </Icon>
          <p className='text-base text-neutral font-primary'>
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      ))}
    </div>
  );
}

type ComparisonImageProps = {
  image: {
    src: string;
    alt: string;
  };
  className?: string;
};

function ComparisonImage({ image, className }: ComparisonImageProps) {
  const { src, alt } = image;
  return (
    <Image
      className={clsx(
        "m-auto max-w-xs xl:max-w-full object-cover shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20",
        className
      )}
      src={src}
      alt={alt}
      width={560}
      height={720}
    />
  );
}
