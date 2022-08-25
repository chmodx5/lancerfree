import React from "react";
import PriceFilters from "./PriceFilters";
import SkillsFilters from "./SkillsFilters";
import LocationFilters from "./LocationFilters";

const Filters = () => {
  return (
    <div className="divide-y divide-solid ">
      <h6 className="font-semibold text-lg ">Filters</h6>
      <div className="py-2">
        <h6 className="font-semibold text-base">Price</h6>

        <PriceFilters />
      </div>
      <div className="mt-2">
        <h6 className="font-semibold text-base">Skills</h6>
        <SkillsFilters />
      </div>
      <div className="mt-2">
        <h6 className="font-semibold text-base">Location</h6>
        <LocationFilters />
      </div>
      <div className="mt-2">
        <div className="py-2">
          <button
            type="button"
            className="text-white w-full bg-primary hover:bg-primary/80 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
