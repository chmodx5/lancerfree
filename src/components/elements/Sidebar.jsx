import React, { useState, Fragment } from "react";
import Card from "./Card";
import { Combobox } from "@headlessui/react";

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 13.5l6.785 6.785A48.1 48.1 0 0121 4.143"
    />
  </svg>
);

const countries = [
  {
    value: "KE",
    name: "Kenya",
  },
  {
    value: "DE",
    name: "Germany",
  },
  {
    value: "FR",
    name: "French",
  },
  {
    value: "IT",
    name: "Italy",
  },
];

const Sidebar = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [query, setQuery] = useState("");

  const filteredCountries =
    query === ""
      ? countries
      : countries.filter((country) => {
          return country.name.toLowerCase().includes(query.toLowerCase());
        });
  return (
    <Card>
      <div className="divide-y divide-solid ">
        <h6 className="font-semibold text-lg ">Filters</h6>
        <div className="py-2">
          <h6 className="font-semibold text-base">Price</h6>

          <div className="flex space-x-3 mt-3">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Min Price : <span>100</span>
              </label>
              <input
                type="number"
                id="company"
                className="form-input"
                placeholder="Flowbite"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Max Price : <span>200</span>
              </label>
              <input
                type="number"
                id="company"
                className="form-input"
                placeholder="Flowbite"
                required
              />
            </div>
          </div>
        </div>
        <div className="mt-2">
          <h6 className="font-semibold text-base">Skills</h6>
          <div className="py-2"></div>
        </div>
        <div className="mt-2">
          <h6 className="font-semibold text-base">Location</h6>
          <div className="py-2">
            <Combobox value={selectedCountry} onChange={setSelectedCountry}>
              <Combobox.Input
                onChange={(event) => setQuery(event.target.value)}
                displayValue={(country) => country.name}
                className="form-input"
              />
              <Combobox.Options>
                {filteredCountries.map((country) => (
                  /* Use the `active` state to conditionally style the active option. */
                  /* Use the `selected` state to conditionally style the selected option. */
                  <Combobox.Option
                    key={country.value}
                    value={country}
                    as={Fragment}
                  >
                    {({ active, selected }) => (
                      <li
                        className={`${
                          active
                            ? "bg-blue-500 text-white"
                            : "bg-white text-black"
                        }`}
                      >
                        {selected && <CheckIcon />}
                        {country.name}
                      </li>
                    )}
                  </Combobox.Option>
                ))}
              </Combobox.Options>
            </Combobox>
          </div>
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
    </Card>
  );
};

export default Sidebar;
