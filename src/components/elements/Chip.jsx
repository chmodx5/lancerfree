import React from "react";

const Chip = ({ item }) => {
  return (
    <div className="border border-gray-400  inline-block rounded-full text-sm px-2 capitalize  font-semibold text-gray-600">
      {item}
    </div>
  );
};

export default Chip;
