import type { DOMAttributes, SVGAttributes } from "react";
import { twMerge } from "tailwind-merge";

import type {
  WithChildren,
  WithClassName,
  WithViewBox,
} from "../../model/react";

const SvgWrapper: React.FC<
  WithChildren<
    WithClassName<
      WithViewBox<DOMAttributes<SVGElement> & SVGAttributes<SVGElement>>
    >
  >
> = ({ className, children, viewBox, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={twMerge("h-6 w-6", className)}
    fill="none"
    viewBox={viewBox || "0 0 24 24"}
    stroke="currentColor"
    strokeWidth="2"
    {...props}
  >
    {children}
  </svg>
);

export default SvgWrapper;
