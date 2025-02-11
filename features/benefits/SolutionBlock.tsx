import React from "react";
import IconTextBlock from "@/components/IconTextBlock";
import ButtonLink from "@/components/ButtonLink";

type SolutionBlockProps = {
  data: {
    title: string;
    description: string;
    IconComponent: React.ElementType;
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
        <p
          className='text-p lg:text-p-lg font-primary text-neutral md:max-w-2xl xl:max-w-lg  lg:place-self-end'
          data-testid='paragraph'
        >
          I create modern, responsive websites that are built to attract and
          engage your ideal customers. When you partner with me, you’re not just
          getting a website—you’re getting a strategy designed for your
          long-term success.
        </p>
      </div>
      <div className='container-lg grid auto-rows-fr md:grid-cols-2 gap-8 md:gap-12 md:justify-items-start'>
        {data.map(({ title, description, IconComponent }, index) => (
          <IconTextBlock
            key={index}
            content={{ title, description }}
            IconComponent={IconComponent}
            variant='primary-highlight'
            // className='horizontal-md max-w-lg md:max-w-sm bg-neutral-light dark:bg-neutral-dark p-2 rounded-lg'
            className=' w-full bg-neutral-light dark:bg-neutral-dark p-4 rounded-lg'
          />
        ))}
      </div>

      <ButtonLink
        variant='primary'
        size='md'
        href='/'
        className='max-w-[200] place-self-center'
      >
        Learn More About Me
      </ButtonLink>
    </div>
  );
}

export default SolutionBlock;
