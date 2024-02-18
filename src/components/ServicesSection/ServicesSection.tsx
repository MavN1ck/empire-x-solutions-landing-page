import Growth from "../../assets/growth.svg";
import SectionLayout from "../../layouts/SectionLayout";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  const servicesCardData = [
    {
      cardTitle: "Tailor-made Design",
      cardDescription:
        "We provide visually appealing tailored design services to help you create the perfect design for your business.",
      cardImage: Growth,
    },
    {
      cardTitle: "High End Development",
      cardDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
      cardImage: Growth,
    },
    {
      cardTitle: "Ultimate Security",
      cardDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
      cardImage: Growth,
    },
  ];

  return (
    <SectionLayout title='Featured Services'>
      <div id="services" className='scroll-mt-56 flex flex-col md:flex-row lg:flex-row items-center justify-center gap-5 my-8'>
        {servicesCardData.map((service, index) => (
          <ServiceCard service={service} key={index} />
        ))}
      </div>
    </SectionLayout>
  );
};

export default ServicesSection;
