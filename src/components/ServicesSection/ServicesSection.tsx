import SectionLayout from "../../layouts/SectionLayout";
import ServiceCard from "./ServiceCard";
import security from "../../assets/security.webp"
import design from "../../assets/designservice.webp"
import development from "../../assets/development.webp"

const ServicesSection = () => {
  const servicesCardData = [
    {
      cardTitle: "Tailor-made Design",
      cardDescription:
        "We provide visually appealing tailored design services to help you create the perfect design for your business.",
      cardImage: design,
    },
    {
      cardTitle: "High End Development",
      cardDescription:
        "We develop websites that wow and apps that engage utilising cutting edge technologies to bring your ideas to life.",
      cardImage: development,
    },
    {
      cardTitle: "Ultimate Security",
      cardDescription:
        "Safeguard your digital assets with out robust security offerings comprising of VAPT, Audits and Risk Management.",
      cardImage: security,
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
