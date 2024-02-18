import SectionIcon from "../../assets/section-icon.svg";

type AccentIconProps = {
  icon?: string;
};

const AccentIcon = ({ icon }: AccentIconProps) => {
  return (
    <span className='w-[22px] h-[22px] bg-[#ddff00] rounded-full'>
      <img src={icon || SectionIcon} alt='section icon' />
    </span>
  );
};

export default AccentIcon;
