import Magic from "../../assets/magic.svg";
import Support from "../../assets/support.svg";
import Vision from "../../assets/vision.svg";
import SectionLayout from "../../layouts/SectionLayout";
import Card from "../Card/Card";

const HowItWorks = () => {
  const howItWorksData = [
    {
      title: "Tell us your vision",
      description:
        "Choose a plan and share your design project details with us: we’re here to listen.",
      image: Vision,
    },
    {
      title: "Receive the magic",
      description:
        "Sit back and relax: our expert designers will turn your vision into reality.",
      image: Magic,
    },
    {
      title: "Get ongoing support",
      description:
        "Your subscription ensures you have continuous access to our design team.",
      image: Support,
    },
  ];

  return (
    <SectionLayout
      title='How it Works'
      subTitle='Our Approach to Every Project'>
      <div id='HowItWorks' className='scroll-mt-56 my-8 flex flex-col md:flex-row'>
        {howItWorksData.map((data, index) => (
          <Card classNames='flex-1' key={index}>
            <div className='grid place-items-center w-24 h-24 bg-black rounded-full mb-12'>
              <img src={data.image} alt='icon' className='w-16 h-16' />
            </div>
            <div>
              <h3 className='text-3xl mb-4'>{data.title}</h3>
              <p className='text-[#b3b3b3]'>{data.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </SectionLayout>
  );
};

export default HowItWorks;
