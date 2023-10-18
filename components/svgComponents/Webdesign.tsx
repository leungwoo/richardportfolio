import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M3.5 17.25V21h3.75L18.31 9.93l-3.75-3.75L3.5 17.25Zm19.61 1.11-4.25 4.25-5.2-5.2 1.77-1.77 1 1 2.47-2.48 1.42 1.42L18.86 17l1.06 1 1.42-1.4 1.77 1.76Zm-16-7.53L1.89 5.64l4.25-4.25L7.9 3.16 5.43 5.64 6.5 6.7l2.46-2.48 1.42 1.42-1.42 1.41 1 1-2.85 2.78ZM21.21 7c.39-.39.39-1 0-1.41l-2.34-2.3c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75L21.21 7Z"
    />
  </svg>
);
export default SvgComponent;
