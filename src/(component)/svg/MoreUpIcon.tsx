import React from "react";

type Props = {
  onClick?: () => void;
};

const MoreUpIcon = (props: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      onClick={props.onClick}
    >
      <path
        d="M22.6667 8.83366H11.1667V7.16699H24.8333V20.8337H23.1667V9.33366V8.83366H22.6667ZM16 15.5003H4.5V13.8337H18.1667V27.5003H16.5V16.0003V15.5003H16Z"
        fill="#1F2529"
        stroke="black"
      />
    </svg>
  );
};

export default MoreUpIcon;
