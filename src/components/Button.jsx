import React from "react";

function Button({ children }) {
  return (
    <button className="bg-[#D9455F] w-[85%] h-12 fredoka block text-white rounded-xl">
      {children}
    </button>
  );
}

export default Button;
