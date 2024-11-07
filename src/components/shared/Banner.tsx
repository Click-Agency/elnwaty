import { ReactNode } from "react";
import SectionContainer from "./containers/SectionContainer";

const Banner = ({
  children,
  className,
}: {
  children?: ReactNode;
  className: string;
}) => {
  return (
    <SectionContainer
      className={`
        min-h-[350px]
        bg-cover
        bg-no-repeat
        bg-center
        ${className}`}
    >
      {children}
    </SectionContainer>
  );
};

export default Banner;
