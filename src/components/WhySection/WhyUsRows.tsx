import AccentIcon from "../AccentIcon/AccentIcon";
import Card from "../Card/Card";

type WhyUsRowsProps = {
  rowData: {
    title: string;
    description: string;
    icon: string;
  }[];
};

const WhyUsRows = ({ rowData }: WhyUsRowsProps) => {
  return (
    <div className='flex flex-col md:flex-row'>
      {rowData.map((data, index) => (
        <div key={index} className='flex-1'>
          <Card isGradient key={index}>
            <div className='flex flex-col gap-3'>
              <div className='flex items-center gap-4'>
                <AccentIcon icon={data.icon} />
                <h3 className='text-2xl'>{data.title}</h3>
              </div>
              <p className='text-[#b3b3b3]'>{data.description}</p>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default WhyUsRows;
