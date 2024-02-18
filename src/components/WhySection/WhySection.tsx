import SectionLayout from "../../layouts/SectionLayout";
import WhyUsRows from "./WhyUsRows";
import Solutions from "../../assets/solutions.svg";
import Innovation from "../../assets/innovation.svg";
import Client from "../../assets/client.svg";
import Expertise from "../../assets/expertise.svg";

const WhySection = () => {
  const whyUsFirstRow = [
    {
      title: "Customized Solutions",
      description:
        "We tailor our solutions to meet your specific needs and objectives, ensuring that you get the results you need to succeed.",
      icon: Solutions,
    },
    {
      title: "Expertise",
      description:
        "With years of experience in the industry, our team of experts brings a wealth of knowledge and expertise to every project.",
      icon: Expertise,
    },
  ];

  const whyUsSecondRow = [
    {
      title: "Client-Centric Approach",
      description:
        "We're dedicated to building long-term relationships based on trust, transparency, and mutual respect. Your success is our success.",
      icon: Client,
    },
    {
      title: "Innovation",
      description:
        "We're always pushing the boundaries of what's possible. We're always looking for ways to innovate and add value to our clients' businesses.",
      icon: Innovation,
    },
  ];

  return (
    <SectionLayout title='Why Empire X Solutions'>
      <div id='WhyUs' className='scroll-mt-56 my-8 flex flex-col gap-3'>
        <WhyUsRows rowData={whyUsFirstRow} />
        <WhyUsRows rowData={whyUsSecondRow} />
      </div>
    </SectionLayout>
  );
};

export default WhySection;
