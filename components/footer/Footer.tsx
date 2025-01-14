import React from "react";
import Image from "next/image";

// type FooterProps = {
//   dummyProp?: string;
// };

const Footer = () => {
  return (
    <footer className='flex items-center justify-around border border-gray-300 w-[100%] max-w-screen-sm'>
      <a
        href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Image
          aria-hidden
          src='/file.svg'
          alt='File icon'
          width={16}
          height={16}
        />
        Learn
      </a>
      <a
        href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Image
          aria-hidden
          src='/window.svg'
          alt='Window icon'
          width={16}
          height={16}
        />
        Examples
      </a>
      <a
        href='https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Image
          aria-hidden
          src='/globe.svg'
          alt='Globe icon'
          width={16}
          height={16}
        />
        Go to nextjs.org →
      </a>
    </footer>
  );
};

export default Footer;
