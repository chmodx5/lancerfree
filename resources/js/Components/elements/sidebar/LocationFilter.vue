<template>
    <div class="pt-3">
        <h3 class="font-semibold mb-2">Location Filter</h3>
        <Combobox v-model="selected">
            <div class="">
                <div class="relative">
                    <ComboboxInput
                        class="form-input"
                        :displayValue="(person) => person.name"
                        @change="query = $event.target.value"
                    />
                    <ComboboxButton
                        class="absolute inset-y-0 right-0 flex items-center pr-2"
                    >
                        <MapPinIcon class="h-5 w-5 text-gray-400" />
                    </ComboboxButton>
                </div>
                <TransitionRoot
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    @after-leave="query = ''"
                >
                    <ComboboxOptions
                        class="mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                    >
                        <div
                            v-if="filteredPeople.length === 0 && query !== ''"
                            class="relative cursor-default select-none py-2 px-4 text-gray-700"
                        >
                            Nothing found.
                        </div>

                        <ComboboxOption
                            v-for="person in filteredPeople"
                            as="template"
                            :key="person.id"
                            :value="person"
                            v-slot="{ selected, active }"
                        >
                            <li
                                class="relative cursor-default select-none py-2 pl-10 pr-4"
                                :class="{
                                    'bg-primary text-white rounded': active,
                                    'text-gray-900': !active,
                                }"
                            >
                                <span
                                    class="block truncate"
                                    :class="{
                                        'font-medium': selected,
                                        'font-normal': !selected,
                                    }"
                                >
                                    {{ person.name }}
                                </span>
                                <span
                                    v-if="selected"
                                    class="absolute inset-y-0 left-0 flex items-center pl-3"
                                    :class="{
                                        'text-white': active,
                                        'text-primary': !active,
                                    }"
                                >
                                    <CheckIcon
                                        class="h-5 w-5"
                                        aria-hidden="true"
                                    />
                                </span>
                            </li>
                        </ComboboxOption>
                    </ComboboxOptions>
                </TransitionRoot>
            </div>
        </Combobox>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import {
    Combobox,
    ComboboxInput,
    ComboboxButton,
    ComboboxOptions,
    ComboboxOption,
    TransitionRoot,
} from "@headlessui/vue";
import { CheckIcon, MapPinIcon } from "@heroicons/vue/24/solid";

const people = [
    { id: 1, name: "Wade Cooper" },
    { id: 2, name: "Arlene Mccoy" },
    { id: 3, name: "Devon Webb" },
    { id: 4, name: "Tom Cook" },
    { id: 5, name: "Tanya Fox" },
    { id: 6, name: "Hellen Schmidt" },
];

let selected = ref(people[0]);
let query = ref("");

let filteredPeople = computed(() =>
    query.value === ""
        ? people
        : people.filter((person) =>
              person.name
                  .toLowerCase()
                  .replace(/\s+/g, "")
                  .includes(query.value.toLowerCase().replace(/\s+/g, ""))
          )
);
</script>
