import React from "react";
import clsx from "clsx";
import Icon from "@/components/Icon";
import {
  ChevronDownIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";

type FAQToggleCardProps = {
  content: {
    title: string;
    description: string;
  };
  index: number;
  active: boolean;
  onClick: () => void;
};

function FAQCard({
  content,
  active,
  onClick,
  index,
  ...rest
}: FAQToggleCardProps) {
  const { title, description } = content;
  return (
    <div className='max-w-full ' {...rest}>
      <button
        className={clsx(
          "grid grid-cols-[auto_1fr]  rounded-sm   h-full  p-5  gap-5  cursor-pointer lg:cursor-default",
          {
            "bg-background-light dark:bg-background-dark lg:bg-transparent dark:lg:bg-transparent":
              index % 2 === 0,
          }
        )}
        onClick={onClick}
      >
        <Icon
          className='hidden lg:block rounded-full'
          variant='soft'
          color='primary'
          size='md'
        >
          {/* <QuestionMarkCircleIcon /> */}
          <p>?</p>
        </Icon>
        <div className='text-left'>
          <h3
            className={clsx(
              "text-h-5 font-secondary lg:text-black dark:lg:text-white font-medium",
              {
                "text-primary dark:text-primary-dark": active,
              }
            )}
          >
            {content.title}
          </h3>
          <div
            className={clsx(
              "overflow-hidden",
              // "overflow-hidden transition-all duration-300 ease-in-out",
              {
                "max-h-full": active,
                "max-h-0 lg:max-h-full": !active,
              }
            )}
          >
            <p className='pt-2.5 text-p text-neutral font-primary'>
              {content.description}
            </p>
          </div>
        </div>

        <Icon
          className='block lg:hidden rounded-full'
          variant='soft'
          color='primary'
          size='sm'
        >
          <ChevronDownIcon
            className={clsx("transition-transform duration-100 ease-in-out ", {
              "rotate-180": active,
              "rotate-0": !active,
            })}
          />
        </Icon>
      </button>
    </div>
  );
}
export default FAQCard;
