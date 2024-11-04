import React from "react";

interface ButtonProps {
  text: string;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ text, href }) => {
  const commonClasses =
    "flex justify-center items-center mx-auto shadow-xl text-lg text-white bg-transparent lg:font-semibold border-2 border-white rounded-full px-2 py-1 relative z-10 overflow-hidden transition-colors duration-300 ease-in-out hover:bg-blue-700 hover:text-white";

  return href ? (
    <a href={href} className={commonClasses}>
      {text}
    </a>
  ) : (
    <button type="submit" className={commonClasses}>
      {text}
    </button>
  );
};

export default Button;
