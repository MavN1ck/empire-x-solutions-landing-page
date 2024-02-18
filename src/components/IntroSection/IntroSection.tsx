import SectionLayout from "../../layouts/SectionLayout";

const IntroSection = () => {
  return (
    <SectionLayout title='Introducing'>
      <h1 className='my-8 p-2 text-3xl md:text-4xl text-center md:w-[60%] mx-auto'>
        Entering into the digital world is hectic.
        <span className='text-[#b3b3b3]'>
          {" "}
          We know you need a strategic partner, delivering top-notch,
          cost-effective & efficient IT solutions.
        </span>{" "}
        <p>That's where we come in.</p>
      </h1>
    </SectionLayout>
  );
};

export default IntroSection;
