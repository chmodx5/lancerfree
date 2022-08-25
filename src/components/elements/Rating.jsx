import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
const Rating = ({ rating }) => {
  return (
    <div>
      {/* rating component */}
      <div className="inline-flex space-x-2 items-center text-primary text-base">
        {rating <= 0.5 ? (
          <>
            <BsStarHalf />
            <BsStar />
            <BsStar />
            <BsStar />
            <BsStar />
          </>
        ) : rating <= 1 ? (
          <>
            <BsStarFill />
            <BsStar />
            <BsStar />
            <BsStar />
            <BsStar />
          </>
        ) : rating <= 1.5 ? (
          <>
            <BsStarFill />
            <BsStarHalf />
            <BsStar />
            <BsStar />
            <BsStar />
          </>
        ) : rating <= 2 ? (
          <>
            <BsStarFill />
            <BsStarFill />
            <BsStar />
            <BsStar />
            <BsStar />
          </>
        ) : rating <= 2.5 ? (
          <>
            <BsStarFill />
            <BsStarFill />
            <BsStarHalf />
            <BsStar />
            <BsStar />
          </>
        ) : rating <= 3 ? (
          <>
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStar />
            <BsStar />
          </>
        ) : rating <= 3.5 ? (
          <>
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarHalf />
            <BsStar />
          </>
        ) : rating <= 4 ? (
          <>
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStar />
          </>
        ) : rating <= 4.5 ? (
          <>
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarHalf />
          </>
        ) : (
          <>
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
          </>
        )}
        <span className="text-sm mt-1">{rating}</span>
      </div>
    </div>
  );
};

export default Rating;
