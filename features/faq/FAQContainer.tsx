"use client";

import { useState } from "react";
import FAQCard from "@/features/faq/FAQCard";

type FAQContainerProps = {
  data: {
    title: string;
    description: string;
  }[];
  visbileLimit?: number;
};

function FAQContainer({ data, visbileLimit }: FAQContainerProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleActiveIndex = (index: number) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else setActiveIndex(index);
  };
  return (
    <div className='container-lg grid grid-cols-1 lg:grid-cols-2  transition-all duration-300 ease-in-out gap-2 lg:gap-12 lg:gap-16  '>
      {data.map((content, index) => {
        if (visbileLimit && index > visbileLimit) return null; // Hide FAQ cards with index greater than 5
        return (
          <FAQCard
            active={activeIndex === index}
            key={index}
            index={index}
            content={content}
            onClick={() => toggleActiveIndex(index)}
          />
        );
      })}
    </div>
  );
}

export default FAQContainer;
