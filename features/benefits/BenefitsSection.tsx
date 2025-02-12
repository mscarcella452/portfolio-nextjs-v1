"use client";

import React from "react";
import "@styles/components/icons.css";
import AgitateBlock from "@features/benefits/AgitateBlock";
import SolutionBlock from "@features/benefits/SolutionBlock";
import { SunIcon } from "@heroicons/react/24/outline";

function BenefitsSection() {
  return (
    <section className='bg-background-light dark:bg-background-dark'>
      <div className='section-container'>
        <h2 className='text-h-2 container-sm font-bold font-secondary text-center'>
          Running a small business is tough, and your website might not be
          helping.
        </h2>
        <AgitateBlock data={problems} />
        <SolutionBlock data={solutions} />
      </div>
    </section>
  );
}

export default BenefitsSection;

export const problems = [
  {
    icon: <SunIcon />,
    title: "Missed opportunities",
    description: "for new customers.",
    image: {
      src: "https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&h=720&q=80",
      alt: "alt name for image",
    },
  },
  {
    icon: <SunIcon />,
    title: "Poor user experience",
    description: "that frustrates visitors.",
    image: {
      src: "https://images.unsplash.com/photo-1665686306574-1ace09918530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&h=720&q=80",
      alt: "alt name for image",
    },
  },
  {
    icon: <SunIcon />,
    title: "Low search rankings,",
    description: "making it harder for customers to find you.",
    image: {
      src: "https://images.unsplash.com/photo-1598929213452-52d72f63e307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&h=720&q=80",
      alt: "alt name for image",
    },
  },
  {
    icon: <SunIcon />,
    title: "High bounce rates,",
    description: "meaning visitors leave before engaging with your business.",
    image: {
      src: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=560&h=720&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "alt name for image",
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
  {
    icon: <SunIcon />,
    title: "Long Term Growth1",
    description:
      "Flexible, scalable websites that evolve as your business grows.",
  },
];
