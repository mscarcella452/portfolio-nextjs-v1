"use client";

import { useState } from "react";
import IconTextBlock from "@/components/IconTextBlock";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Icon from "@/components/Icon";
import clsx from "clsx";
import "@styles/components/icons.css";
import FAQCard from "@/features/faq/FAQCard";
import FAQContainer from "@/features/faq/FAQContainer";
import ButtonLink from "@/components/ButtonLink";

function FAQSection() {
  return (
    <section className='bg-background dark:bg-background-dark'>
      <div className='section-container'>
        <div className='container-sm text-center space-y-5'>
          <h2 className='text-h-2 font-bold font-secondary'>
            Frequently Asked Questions
          </h2>
          <p
            className='text-p lg:text-p-lg font-primary text-neutral '
            data-testid='paragraph'
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt eiusmod.
          </p>
        </div>

        <div className='space-y-16 md:space-y-24'>
          <FAQContainer data={faqs} visbileLimit={5} />
          <ButtonLink
            variant='solid'
            color='primary'
            size='md'
            href='/'
            className='max-w-[200] place-self-center'
          >
            View All FAQs
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;

const faqs = [
  {
    title: "How much does a website cost?",
    description:
      "The cost of a website depends on the complexity, design, and features required. I offer transparent pricing and can provide a custom quote based on your specific needs and goals.",
  },
  {
    title: "How long will it take to complete my website?",
    description:
      "The timeline for building a website varies depending on the size and scope of the project. On average, it takes 2-4 weeks for a small business website, but I'll give you a more accurate estimate during our consultation.",
  },
  {
    title: "Will my website be mobile-friendly?",
    description:
      "Absolutely! Every website I create is designed to be fully responsive, ensuring it looks great and works seamlessly on both desktop and mobile devices.",
  },
  {
    title: "Do I need to provide content for the website?",
    description:
      "Yes, I'll need text, images, and any branding materials you’d like to include. If you don't have everything ready, I can guide you in creating and selecting content that fits your business.",
  },
  {
    title: "Can I update my website after it's live?",
    description:
      "Yes! I offer post-launch support and can show you how to update your website. If you'd like, I can also provide ongoing maintenance to keep your website up to date.",
  },
  {
    title: "Do you handle domain registration and hosting?",
    description:
      "I can help you choose a domain and set up hosting for your website. If you need recommendations, I’ll provide options for reliable and affordable services.",
  },
  {
    title: "Will my website be search engine optimized (SEO)?",
    description:
      "Yes! I ensure your website is SEO-friendly by using best practices to help improve its visibility on search engines and attract more visitors to your business.",
  },
  {
    title: "Can you redesign my current website?",
    description:
      "Of course! If you already have a website but want a fresh, modern look, I can help redesign it to better meet your business needs and attract more customers.",
  },
  {
    title: "What if I need help with digital marketing?",
    description:
      "While my main focus is web development, I can refer you to trusted partners who specialize in digital marketing and can help you grow your online presence.",
  },
  {
    title: "How do we get started?",
    description:
      "Getting started is easy! Just reach out to me through the contact form or schedule a consultation. We’ll discuss your business needs, and I’ll guide you through the process of building your new website.",
  },
];
