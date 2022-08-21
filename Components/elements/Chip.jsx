import React from "react";

const Chip = ({ text }) => {
  return (
    <div className="border inline-block bg-primary/20 rounded-full px-3 border-primary hover:cursor-pointer hover:bg-primary/40 uppercase text-sm">
      <small className="">{text}</small>
    </div>
  );
};

export default Chip;
