import React from "react";

const Button = ({ style = "", onClick, icon = null, children }) => {
  return (
    <button className={"rounded-2xl  h-fit w-fit " + style} onClick={onClick}>
      {icon}
      {children}
    </button>
  );
};

export default Button;
