import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, BeakerIcon } from "@heroicons/react/24/solid";
import Chip from "./Chip";

const people = [
  { id: 1, name: "Wade Cooper" },
  { id: 2, name: "Arlene Mccoy" },
  { id: 3, name: "Devon Webb" },
  { id: 4, name: "Tom Cook" },
  { id: 5, name: "Tanya Fox" },
  { id: 6, name: "Hellen Schmidt" },
];

const SkillsFilters = () => {
  const [selectedPeople, setSelectedPeople] = useState([people[0], people[1]]);

  return (
    <div>
      <Combobox value={selectedPeople} onChange={setSelectedPeople} multiple>
        {selectedPeople.length > 0 && (
          <ul className="space-y-2 space-x-1 pb-3 ">
            {selectedPeople.map((person) => (
              <Chip key={person.id} item={person.name} />
            ))}
          </ul>
        )}
        <Combobox.Input className={"form-input"} />
        <Combobox.Options>
          {people.map((person) => (
            <Combobox.Option key={person.id} value={person}>
              {person.name}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Combobox>
    </div>
  );
};

export default SkillsFilters;
