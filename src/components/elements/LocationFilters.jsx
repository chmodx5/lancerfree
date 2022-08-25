import React, { useState, Fragment } from "react";
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
const LocationFilters = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [query, setQuery] = useState("");

  const filteredCountries =
    query === ""
      ? countries
      : countries.filter((country) => {
          return country.name.toLowerCase().includes(query.toLowerCase());
        });
  return (
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
            <Combobox.Option key={country.value} value={country} as={Fragment}>
              {({ active, selected }) => (
                <li
                  className={`${
                    active ? "bg-blue-500 text-white" : "bg-white text-black"
                  } py-1 rounded px-2`}
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
  );
};

export default LocationFilters;
