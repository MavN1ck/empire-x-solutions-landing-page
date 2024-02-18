import Card from "../Card/Card";

type ServiceCardProps = {
  service: { cardTitle: string; cardDescription: string; cardImage: string };
};

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <Card isGradient>
      <div className='flex-col flex items-center justify-center gap-5'>
        <img src={service.cardImage} alt='design service' />
        <div>
          <h2 className='text-2xl font-bold mb-3'>{service.cardTitle}</h2>
          <p className='text-[#b3b3b3]'>{service.cardDescription}</p>
        </div>
      </div>
    </Card>
  );
};

export default ServiceCard;
