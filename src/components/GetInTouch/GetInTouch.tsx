type GetInTouchProps = {
  btnText: string;
};

const GetInTouch = ({ btnText }: GetInTouchProps) => {
  return (
    <a href="#contact" className='bg-[#ddff00] rounded-3xl m-4 py-2 px-6 text-black block w-fit cursor-pointer'>
      {btnText}
    </a>
  );
};

export default GetInTouch;
