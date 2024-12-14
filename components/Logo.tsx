import React from "react";

interface Props {}

const Logo = ({}: Props) => {
  return (
    <div className='flex flex-row items-center gap-2 '>
      <div className='flex h-[40px] w-[40px] bg-[#000] ' />
      <div className='flex flex-col h-full w-full'>
        <h1 className='text-xl font-bold'>Matthew Scarcella</h1>
        <div className='flex gap-1 font-semibold text-[gray]'>
          <p>[Front End Developer]</p>
          <p>[New York]</p>
        </div>
      </div>
    </div>
  );
};

export default Logo;
