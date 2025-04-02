import * as React from "react";

const Loader = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <g stroke="currentColor">
    <circle cx={12} cy={12} r={9.5} fill="none" strokeLinecap="round" strokeWidth={3} strokeDasharray="42 150" strokeDashoffset={0}>
    </circle>
    </g>
    </svg>
  );
};

export default Loader;
