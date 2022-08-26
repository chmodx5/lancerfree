import React from "react";
import Card from "./Card";

const FilterSearch = () => {
  return (
    <Card>
      <div className="flex justify-between items-center ">
        {/* sort component for the table */}
        <div>
          <select id="countries" className="form-input">
            <option defaultValue value="US">
              Latest
            </option>
            <option value="CA">Oldest</option>
            <option value="FR">Lowest Price</option>
            <option value="DE">Highest Price</option>
            <option value="DE">Fewest Bids</option>
            <option value="DE">Most Bids</option>
          </select>
        </div>
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="table-search"
            className="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for items"
          />
        </div>
      </div>
    </Card>
  );
};

export default FilterSearch;
