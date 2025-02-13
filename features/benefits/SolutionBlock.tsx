import React from "react";
import clsx from "clsx";
import IconTextBlock from "@/components/IconTextBlock";
import ButtonLink from "@/components/ButtonLink";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

type SolutionBlockProps = {
  data: {
    title: string;
    description: string;
    icon: React.ReactNode;
  }[];
};

function SolutionBlock({ data }: SolutionBlockProps) {
  return (
    <div className='container-xl space-y-16 md:space-y-24'>
      <div className='grid lg:grid-cols-2 gap-8'>
        <h3 className='text-h-4 max-w-lg font-secondary'>
          That's where{" "}
          <span className='font-bold text-primary dark:text-primary-dark font-secondary'>
            I, come in.
          </span>
        </h3>
        <div className='md:max-w-2xl xl:max-w-lg space-y-5  lg:place-self-end'>
          <p
            className='text-p lg:text-p-lg font-primary text-neutral'
            data-testid='paragraph'
          >
            I create modern, responsive websites that are built to attract and
            engage your ideal customers. When you partner with me, you’re not
            just getting a website—you’re getting a strategy designed for your
            long-term success.
          </p>
          <ButtonLink
            className='place-self-start light:btn-lg dark:btn-md'
            variant='light:primary-tertiary-btn dark:neutral-soft-btn'
            href='/'
            icon={{
              className: "icon-md icon-transition-translate-right",
              endIcon: <ArrowLongRightIcon />,
            }}
          >
            Learn More About Me
          </ButtonLink>
        </div>
      </div>
      {/* <div className='container-xl grid auto-rows-fr md:grid-cols-3 gap-8 md:gap-12 md:align-items-start '>
        {data.map((content, index) => (
          <IconTextBlock
            key={index}
            content={content}
            variant='solid'
            color='primary'
            // className='horizontal-md max-w-lg md:max-w-sm bg-neutral-light dark:bg-neutral-dark p-2 rounded-lg'
            className=' w-full p-4 rounded-lg  bg-primary bg-opacity-5 dark:bg-neutral-dark '
          />
        ))}
      </div> */}

      {/* <ButtonLink
        variant='solid'
        color='accent'
        size='md'
        href='/'
        className='max-w-[200] place-self-center'
      >
        Learn More About Me
      </ButtonLink> */}
    </div>
  );
}

export default SolutionBlock;
