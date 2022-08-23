import React from "react";

const Card = ({ children }) => {
  return (
    <div className="bg-white border rounded-md shadow hover:shadow-md p-3 border-gray-200">
      {children}
    </div>
  );
};

export default Card;
