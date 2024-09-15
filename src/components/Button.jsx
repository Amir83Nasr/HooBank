import React from "react";

const Button = ({ className, children }) => {
  return (
    <a href="#">
      <button
        type="button"
        className={`${className} font-poppins text-primary bg-blue-gradient flex h-[56px] items-center justify-center gap-2 rounded-[12px] px-6 text-[18px] font-medium outline-none transition-transform duration-300 hover:translate-x-5`}
      >
        {children}
      </button>
    </a>
  );
};

export default Button;
