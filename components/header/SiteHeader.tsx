import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteHeader } from "@/config/siteConfig";

type SiteHeaderProps = {
  onClick: () => void;
};

function SiteHeader({ onClick }: SiteHeaderProps) {
  const { title, logo, jobTitle, location } = siteHeader;
  return (
    <Link
      className='flex flex-row items-center gap-2 border-2  '
      href='/'
      aria-label='Go to Home page'
      onClick={onClick}
    >
      <Image src={logo.src} alt={logo.alt} width={30} height={30} />
      <div className='flex flex-col'>
        <h1 className='text-xl font-bold'>{title}</h1>
        <div className='flex flex-col h-full '>
          <div className='flex gap-1 font-semibold text-[gray]'>
            <p>{`[${jobTitle}]`}</p>
            <p>{`[${location}]`}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default SiteHeader;
