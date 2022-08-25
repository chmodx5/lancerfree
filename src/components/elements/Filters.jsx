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
          <button type="button" className="btn-primary">
            Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
