import { trim } from "../../../utils/functions/general";
import { ForwardedRef, forwardRef, HTMLAttributes, ReactNode } from "react";

const ArticleContainer = forwardRef(
  (
    {
      children,
      className = "",
      wraperClassName = "",
      ...attributes
    }: Readonly<{
      children: ReactNode;
      className?: string;
      wraperClassName?: string;
    }> &
      HTMLAttributes<HTMLElement>,
    ref: ForwardedRef<HTMLElement>
  ) => (
    <article
      id="section-container"
      ref={ref}
      className={trim(` 
        flex
        w-full
        flex-col
        box-border
        mb-16
        ${className}`)}
      {...attributes}
    >
      <div
        id="section-wrapper"
        className={trim(`
          flex
          flex-col
          w-full
          2xl:w-[70%]
          xl:w-[90%]
          lg:container
          containerPadding
          ${wraperClassName}`)}
      >
        {children}
      </div>
    </article>
  )
);

export default ArticleContainer;
