import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
const Rating = ({ rating }) => {
  return (
    <div>
      {/* rating component */}
      <div className="inline-flex space-x-2 items-center text-primary text-xl">
        {rating <= 1 ? (
          <>
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </>
        ) : rating <= 2 ? (
          <>
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </>
        ) : rating <= 3 ? (
          <>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </>
        ) : rating <= 4 ? (
          <>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </>
        ) : (
          <>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </>
        )}
        <span className="text-sm">{rating}</span>
      </div>
    </div>
  );
};

export default Rating;
