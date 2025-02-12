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
        <div className='max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto'>
          <div className='max-w-2xl mx-auto text-center mb-10 lg:mb-14'>
            <h2 className='text-2xl font-bold md:text-4xl md:leading-tight dark:text-white'>
              Your questions, answered
            </h2>
            <p className='mt-1 text-gray-600 dark:text-neutral-400'>
              Answers to the most frequently asked questions.
            </p>
          </div>

          <div className='max-w-2xl mx-auto'>
            <div className='hs-accordion-group'>
              <div
                className='hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/10 active'
                id='hs-basic-with-title-and-arrow-stretched-heading-one'
              >
                <button
                  className='hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400'
                  aria-expanded='true'
                  aria-controls='hs-basic-with-title-and-arrow-stretched-collapse-one'
                >
                  Can I cancel at anytime?
                  <svg
                    className='hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400'
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  >
                    <path d='m6 9 6 6 6-6' />
                  </svg>
                  <svg
                    className='hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400'
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  >
                    <path d='m18 15-6-6-6 6' />
                  </svg>
                </button>
                <div
                  id='hs-basic-with-title-and-arrow-stretched-collapse-one'
                  className='hs-accordion-content w-full overflow-hidden transition-[height] duration-300'
                  role='region'
                  aria-labelledby='hs-basic-with-title-and-arrow-stretched-heading-one'
                >
                  <p className='text-gray-800 dark:text-neutral-200'>
                    Yes, you can cancel anytime no questions are asked while you
                    cancel but we would highly appreciate if you will give us
                    some feedback.
                  </p>
                </div>
              </div>

              <div
                className='hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/10'
                id='hs-basic-with-title-and-arrow-stretched-heading-two'
              >
                <button
                  className='hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400'
                  aria-expanded='false'
                  aria-controls='hs-basic-with-title-and-arrow-stretched-collapse-two'
                >
                  My team has credits. How do we use them?
                  <svg
                    className='hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400'
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  >
                    <path d='m6 9 6 6 6-6' />
                  </svg>
                  <svg
                    className='hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400'
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  >
                    <path d='m18 15-6-6-6 6' />
                  </svg>
                </button>
                <div
                  id='hs-basic-with-title-and-arrow-stretched-collapse-two'
                  className='hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300'
                  role='region'
                  aria-labelledby='hs-basic-with-title-and-arrow-stretched-heading-two'
                >
                  <p className='text-gray-800 dark:text-neutral-200'>
                    Once your team signs up for a subscription plan. This is
                    where we sit down, grab a cup of coffee and dial in the
                    details.
                  </p>
                </div>
              </div>

              <div
                className='hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/10'
                id='hs-basic-with-title-and-arrow-stretched-heading-three'
              >
                <button
                  className='hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400'
                  aria-expanded='false'
                  aria-controls='hs-basic-with-title-and-arrow-stretched-collapse-three'
                >
                  How does Preline's pricing work?
                  <svg
                    className='hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400'
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  >
                    <path d='m6 9 6 6 6-6' />
                  </svg>
                  <svg
                    className='hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400'
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  >
                    <path d='m18 15-6-6-6 6' />
                  </svg>
                </button>
                <div
                  id='hs-basic-with-title-and-arrow-stretched-collapse-three'
                  className='hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300'
                  role='region'
                  aria-labelledby='hs-basic-with-title-and-arrow-stretched-heading-three'
                >
                  <p className='text-gray-800 dark:text-neutral-200'>
                    Our subscriptions are tiered. Understanding the task at hand
                    and ironing out the wrinkles is key.
                  </p>
                </div>
              </div>

              <div
                className='hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/10'
                id='hs-basic-with-title-and-arrow-stretched-heading-four'
              >
                <button
                  className='hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400'
                  aria-expanded='false'
                  aria-controls='hs-basic-with-title-and-arrow-stretched-collapse-four'
                >
                  How secure is Preline?
                  <svg
                    className='hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400'
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  >
                    <path d='m6 9 6 6 6-6' />
                  </svg>
                  <svg
                    className='hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400'
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  >
                    <path d='m18 15-6-6-6 6' />
                  </svg>
                </button>
                <div
                  id='hs-basic-with-title-and-arrow-stretched-collapse-four'
                  className='hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300'
                  role='region'
                  aria-labelledby='hs-basic-with-title-and-arrow-stretched-heading-four'
                >
                  <p className='text-gray-800 dark:text-neutral-200'>
                    Protecting the data you trust to Preline is our first
                    priority. This part is really crucial in keeping the project
                    in line to completion.
                  </p>
                </div>
              </div>

              <div
                className='hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/10'
                id='hs-basic-with-title-and-arrow-stretched-heading-five'
              >
                <button
                  className='hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400'
                  aria-expanded='false'
                  aria-controls='hs-basic-with-title-and-arrow-stretched-collapse-five'
                >
                  How do I get access to a theme I purchased?
                  <svg
                    className='hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400'
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  >
                    <path d='m6 9 6 6 6-6' />
                  </svg>
                  <svg
                    className='hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400'
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  >
                    <path d='m18 15-6-6-6 6' />
                  </svg>
                </button>
                <div
                  id='hs-basic-with-title-and-arrow-stretched-collapse-five'
                  className='hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300'
                  role='region'
                  aria-labelledby='hs-basic-with-title-and-arrow-stretched-heading-five'
                >
                  <p className='text-gray-800 dark:text-neutral-200'>
                    If you lose the link for a theme you purchased, don't panic!
                    We've got you covered. You can login to your account, tap
                    your avatar in the upper right corner, and tap Purchases. If
                    you didn't create a login or can't remember the information,
                    you can use our handy Redownload page, just remember to use
                    the same email you originally made your purchases with.
                  </p>
                </div>
              </div>

              <div
                className='hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/10'
                id='hs-basic-with-title-and-arrow-stretched-heading-six'
              >
                <button
                  className='hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400'
                  aria-expanded='false'
                  aria-controls='hs-basic-with-title-and-arrow-stretched-collapse-six'
                >
                  Upgrade License Type
                  <svg
                    className='hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400'
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  >
                    <path d='m6 9 6 6 6-6' />
                  </svg>
                  <svg
                    className='hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400'
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  >
                    <path d='m18 15-6-6-6 6' />
                  </svg>
                </button>
                <div
                  id='hs-basic-with-title-and-arrow-stretched-collapse-six'
                  className='hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300'
                  role='region'
                  aria-labelledby='hs-basic-with-title-and-arrow-stretched-heading-six'
                >
                  <p className='text-gray-800 dark:text-neutral-200'>
                    There may be times when you need to upgrade your license
                    from the original type you purchased and we have a solution
                    that ensures you can apply your original purchase cost to
                    the new license purchase.
                  </p>
                </div>
              </div>
            </div>
          </div>
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
