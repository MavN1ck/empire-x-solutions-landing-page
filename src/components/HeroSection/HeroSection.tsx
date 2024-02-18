import { ReactTyped } from "react-typed";
import asset1 from "../../assets/asset-1.webp";
import asset2 from "../../assets/asset-2.webp";
import asset3 from "../../assets/asset-3.webp";
import asset4 from "../../assets/asset-4.webp";
import asset5 from "../../assets/asset-5.webp";
import asset6 from "../../assets/asset-6.webp";
import GetInTouch from "../GetInTouch/GetInTouch";

const HeroSection = () => {
  const fields = ["Design", "Develop", "Secure"];

  return (
    <>
      <div
        id='#' className='scroll-mt-52 h-100dvh pt-36 relative z-10 overflow-hidden'>
        <div className='flex flex-col gap-3 text-4xl md:text-7xl justify-center items-center'>
          <p>Empower Your Growth</p>
          <p className='text-[#b3b3b3] text-3xl md:text-5xl'>Your Partner to</p>
          <ReactTyped
            style={{ color: "#ddff00" }}
            cursorChar='_'
            strings={fields}
            typeSpeed={100}
            backSpeed={100}
            loop
          />
        </div>
        <div className='text-sm my-12 mx-6 text-center tracking-wider'>
          <p>Innovative IT solutions for emerging businesses of all sizes.</p>
          <p>Founded with a vision to revolutionize</p>
          <p>the way businesses harness the power of IT.</p>
        </div>
        <div className='flex justify-center'>
          <GetInTouch btnText='Get In Touch!' />
        </div>
      </div>
      {/* svg design elements */}
      <img
        src={asset1}
        alt='design element'
        className='absolute top-[12%] left-[9%] z-0 w-28 h-28 blur-sm aspect-auto'
      />
      <img
        src={asset2}
        alt='design element'
        className='sm:hidden md:hidden lg:hidden xl:block absolute top-[71%] left-[31%] z-0 w-32 h-32 blur-sm aspect-auto'
      />
      <img
        src={asset3}
        alt='design element'
        className='hidden md:block absolute top-[50%] left-[12%] z-0 w-32 h-32 aspect-auto'
      />
      <img
        src={asset4}
        alt='design element'
        className='absolute top-[40%] right-0 z-0 w-24 h-24 blur-sm aspect-auto'
      />
      <img
        src={asset5}
        alt='design element'
        className='hidden lg:block absolute top-[10%] right-[10%] z-0 w-32 h-32 blur-0 aspect-auto'
      />
      <img
        src={asset6}
        alt='design element'
        className='hidden md:block lg:hidden xl:block absolute top-[72%] right-[6%] z-0 w-32 h-32 blur-sm aspect-auto'
      />
    </>
  );
};

export default HeroSection;
