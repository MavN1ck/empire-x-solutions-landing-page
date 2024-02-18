import ShortLogo from "../../assets/short-logo.svg";

const Divider = () => {
  return (
    <div className='flex justify-center items-center gap-4 my-20'>
      <span className='bg-gradient-to-r from-transparent to-black bg-clip-text'>
        •
      </span>
      <img src={ShortLogo} alt='divider icon' className='w-4 h-4' />
      <span className='bg-gradient-to-l from-red-500 to-blue-500 bg-clip-text'>
        •
      </span>
    </div>
  );
};

export default Divider;
