"use client";

import { useState } from "react";
import IconTextBlock from "@/components/IconTextBlock";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Icon from "@/components/Icon";
import clsx from "clsx";
import "@styles/components/icons.css";

function FAQSection() {
  return (
    <section className='bg-background-light dark:bg-background-dark'>
      <div className='section-container'>
        <div className='container-sm text-center space-y-5'>
          <h2 className='text-h-2 font-bold font-secondary'>
            Freequent Asked Questions
          </h2>
          <p
            className='text-p lg:text-p-lg font-primary text-neutral '
            data-testid='paragraph'
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt eiusmod.
          </p>
        </div>
        <div className='container-lg grid grid-cols-1 lg:grid-cols-2  justify-items-center transition-all duration-300 ease-in-out gap-2 lg:gap-12 lg:gap-24 '>
          {faqs.map((faq, index) => {
            if (index > 5) return null; // Hide FAQ cards with index greater than 5
            return <FAQToggleCard key={index} index={index} content={faq} />;
          })}
        </div>
      </div>
    </section>
  );
}

type FAQCardProps = {
  content: {
    question: string;
    answer: string;
  };
  index: number;
};

function FAQCard({ content, index, ...rest }: FAQCardProps) {
  const FAQNumber = () => (
    <h4 className='text-center text-h-6 text-white font-secondary font-medium w-full'>
      {index + 1}
    </h4>
  );
  const { question, answer } = content;
  return (
    <div className='max-w-lg' {...rest}>
      {/* <h3 className='text-h-5 font-semibold font-secondary'>
        {content.question}
      </h3>
      <p className='text-base text-neutral font-primary'>{content.answer}</p> */}
      {/* <IconTextBlock
        className='vertical'
        variant='secondary-highlight'
        IconComponent={FAQNumber}
        content={{ title: question, description: answer }}
      /> */}
    </div>
  );
}
type FAQToggleCardProps = {
  content: {
    question: string;
    answer: string;
  };
  index: number;
};

function FAQToggleCard({ content, index, ...rest }: FAQCardProps) {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!open);
  const FAQNumber = () => (
    <div className='flex items-center justify-center  text-center text-h-6 text-white font-secondary font-medium w-full  h-full'>
      <h4>{index + 1}</h4>
    </div>
  );
  const { question, answer } = content;
  return (
    <div className='max-w-lg ' {...rest}>
      <button
        className='grid grid-cols-[auto_1fr] border-2 bg-background border-neutral-light p-4 dark:border-neutral-dark  gap-5 '
        onClick={toggleOpen}
      >
        <div className='text-left'>
          <h3 className='text-h-5 font-semibold font-secondary'>
            {content.question}
          </h3>
          <div
            className={clsx(
              "overflow-hidden",
              // "overflow-hidden transition-all duration-300 ease-in-out",
              {
                "max-h-full": open,
                "max-h-0 lg:max-h-full": !open,
              }
            )}
          >
            <p className='pt-5 text-p text-neutral font-primary'>
              {content.answer}
            </p>
          </div>
        </div>

        <div
          className={clsx(
            "block lg:hidden icon rounded-full icon-sm bg-neutral-light text-primary dark:bg-neutral-dark dark:text-primary-dark"
          )}
          // IconComponent={ChevronDownIcon}
          // size='md'
        >
          <ChevronDownIcon
            className={clsx("transition-transform duration-300 ease-in-out ", {
              "rotate-180": open,
              "rotate-0": !open,
            })}
          />
        </div>
      </button>
    </div>
  );
}

export default FAQSection;

const faqs = [
  {
    question: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
    answer:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
    answer:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
    answer:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
    answer:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
    answer:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
    answer:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
    answer:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
    answer:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
    answer:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
    answer:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ",
  },
];
