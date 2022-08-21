import React from "react";

const Card = ({ children }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow hover:shadow-lg p-4">
      {children}
    </div>
  );
};

export default Card;
