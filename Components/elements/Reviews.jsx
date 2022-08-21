import React from "react";
import { MdReviews } from "react-icons/md";
const Reviews = ({ reviews }) => {
  return (
    <div className="px-2 flex items-center text-sm">
      <MdReviews className="text-xl" />
      <span className="ml-1">{reviews}</span>
      <span className="ml-1"> Reviews</span>
    </div>
  );
};

export default Reviews;
