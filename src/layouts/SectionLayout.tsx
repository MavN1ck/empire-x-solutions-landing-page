import { ReactNode } from "react";
import AccentIcon from "../components/AccentIcon/AccentIcon";

type SectionLayoutProps = {
  title: string;
  subTitle?: string;
  children: ReactNode;
  noMb?: boolean;
};

const SectionLayout = ({
  children,
  title,
  subTitle,
  noMb,
}: SectionLayoutProps) => {
  return (
    <section className='my-8'>
      {title.length > 0 && (
        <div className='flex gap-3 justify-center items-center'>
          <AccentIcon />
          <h2 className='text-[#ddff00]'>{title}</h2>
        </div>
      )}
      {subTitle && (
        <p className='text-center text-4xl my-4 mx-auto'>{subTitle}</p>
      )}
      <div className={`${noMb ? "" : "mb-28"}`}>{children}</div>
    </section>
  );
};

export default SectionLayout;
