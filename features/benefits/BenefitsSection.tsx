"use client";

import React from "react";
import "@styles/components/icons.css";
import AgitateBlock from "@features/benefits/AgitateBlock";
import SolutionBlock from "@features/benefits/SolutionBlock";
import BenefitsBlock from "@features/benefits/BenefitsBlock";
import { SunIcon } from "@heroicons/react/24/outline";

function BenefitsSection() {
  return (
    <>
      <section className='bg-background dark:bg-background-dark'>
        <div className='section-container'>
          <h2 className='text-h-2 container-sm font-bold font-secondary text-center'>
            Running a small business is tough, and your website might not be
            helping.
          </h2>
          <AgitateBlock data={problems} />
          <SolutionBlock data={solutions} />

          <BenefitsBlock />
        </div>
      </section>
    </>
  );
}

export default BenefitsSection;

export const problems = [
  {
    icon: <SunIcon />,
    title: "Missed opportunities",
    description: "for new customers.",
    image: {
      src: "https://cdn.rareblocks.xyz/collection/celebration/images/steps/3/team.jpg",
      alt: "",
    },
  },
  {
    icon: <SunIcon />,
    title: "Poor user experience",
    description: "that frustrates visitors.",
    image: {
      src: "https://cdn.rareblocks.xyz/collection/celebration/images/steps/3/work.jpg",
      alt: "",
    },
  },
  {
    icon: <SunIcon />,
    title: "Low search rankings,",
    description: "making it harder for customers to find you.",
    image: {
      src: "https://cdn.rareblocks.xyz/collection/celebration/images/steps/3/success.jpg",
      alt: "",
    },
  },
  {
    icon: <SunIcon />,
    title: "High bounce rates,",
    description: "meaning visitors leave before engaging with your business.",
    image: {
      src: "https://cdn.rareblocks.xyz/collection/celebration/images/steps/3/team.jpg",
      alt: "",
    },
  },
];

export const solutions = [
  {
    icon: <SunIcon />,
    title: "Tailored to Your Business Needs ",
    description:
      "Custom websites designed specifically for your brand, goals, and audience.",
  },
  {
    icon: <SunIcon />,
    title: "Real Results",
    description:
      "Websites that attract the right customers, drive engagement, and convert visitors into business.",
  },
  {
    icon: <SunIcon />,
    title: "Long Term Growth",
    description:
      "Flexible, scalable websites that evolve as your business grows.",
  },
];
