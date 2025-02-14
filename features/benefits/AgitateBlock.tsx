"use client";

import { useState, useCallback } from "react";
import clsx from "clsx";
import IconTextBlock from "@/components/IconTextBlock";
import Image from "next/image";

type AgitateBlockProps = {
  data: {
    title: string;
    description: string;
    icon: React.ReactNode;
    image: {
      src: string;
      alt: string;
    };
  }[];
};

function AgitateBlock({ data }: AgitateBlockProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleTabClick = useCallback(
    (index: number) => {
      if (currentIndex !== index) {
        setCurrentIndex(index);
      }
    },
    [currentIndex]
  );

  return (
    <div className='container-xl grid lg:grid-cols-2 gap-24 md:gap-32 lg:gap-8 items-center place-items-end'>
      <div className='w-full space-y-16  lg:col-span-1'>
        <h3 className='text-h-4 font-secondary max-w-lg'>
          An underperforming website doesn’t just look bad—{" "}
          <span className='font-bold text-secondary dark:text-secondary-dark'>
            it can cost you.
          </span>
        </h3>
        <div className='grid md:grid-cols-1 gap-6 md:gap-8'>
          {data.map(({ title, description, icon }, index) => {
            const isActive = currentIndex === index;
            const buttonClass = clsx(
              "text-start flex items-start p-1 md:p-2 rounded-lg max-w-lg transition-colors duration-300 ",
              {
                "cursor-default pointer-events-none": isActive,
                "hover:bg-neutral-light hover:dark:bg-neutral-dark": !isActive,
              }
            );

            return (
              <button
                key={index}
                onClick={() => handleTabClick(index)}
                type='button'
                className={buttonClass}
                aria-selected={isActive ? "true" : "false"}
              >
                <IconTextBlock
                  variant='orientation-vertical'
                  icon={{
                    className: "icon-lg",
                    variant: isActive ? "secondary-solid" : "secondary-soft",
                  }}
                  content={{ title, description, icon }}
                />
              </button>
            );
          })}
        </div>
      </div>

      <Image
        className='order-first lg:order-last max-w-xs xl:max-w-lg dark:shadow-gray-900/20'
        src={data[currentIndex].image.src}
        alt={data[currentIndex].image.alt}
        width={643}
        height={712}
        data-testid='displayImage'
      />
    </div>
  );
}

export default AgitateBlock;
