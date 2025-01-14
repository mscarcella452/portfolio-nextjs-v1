import React from "react";

// type LogoProps = {
//   dummyProp?: string;
// };

const Logo = () => {
  return (
    <div className='flex flex-row items-center gap-2 border-2  '>
      <div className='h-[30px] w-[30px] bg-[#000] ' />
      <h1 className='text-xl font-bold'>Matthewscarcella</h1>
      <div className='flex flex-col h-full '>
        <div className='flex gap-1 font-semibold text-[gray]'>
          <p>[Front End Developer]</p>
          <p>[New York]</p>
        </div>
      </div>
    </div>
  );
};

export default Logo;
