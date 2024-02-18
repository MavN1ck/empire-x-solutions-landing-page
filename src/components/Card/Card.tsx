import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  isGradient?: boolean;
  classNames?: string;
};

const Card = ({ children, isGradient, classNames }: CardProps) => {
  return (
    <div
      className={`rounded-[30px] p-5 my-4 mx-3 ${
        isGradient
          ? "bg-gradient-to-b from-[#262626] to-[#131313]"
          : "bg-[#262626]"
      } ${classNames}`}>
      {children}
    </div>
  );
};

export default Card;
