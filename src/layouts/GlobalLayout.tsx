import { ReactNode } from "react";

type GlobalLayoutProps = {
  children: ReactNode;
};

const GlobalLayout = ({ children }: GlobalLayoutProps) => {
  return (
    <div
      id='GlobalLayout'
      className='flex flex-col bg-black text-white min-h-dvh'>
      <div className='w-full md:w-[680px] lg:w-[1200px] mx-auto my-0'>
        {children}
      </div>
    </div>
  );
};

export default GlobalLayout;
