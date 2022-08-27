<template>
    <div class="pt-3">
        <h3 class="font-semibold mb-2">Skills Filter</h3>
        <Combobox v-model="selectedPeople" multiple>
            <ul v-if="selectedPeople.length > 0" class="mb-3 space-y-2">
                <Chip v-for="person in selectedPeople" :key="person.id">
                    {{ person.name }}
                </Chip>
            </ul>
            <ComboboxInput
                class="form-input"
                :displayValue="(person) => person.name"
            />
            <ComboboxOptions>
                <ComboboxOption
                    v-for="person in people"
                    :key="person"
                    :value="person"
                >
                    {{ person.name }}
                </ComboboxOption>
            </ComboboxOptions>
        </Combobox>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import {
    Combobox,
    ComboboxInput,
    ComboboxOptions,
    ComboboxOption,
} from "@headlessui/vue";
import Chip from "./../Chip.vue";

const people = [
    { id: 1, name: "Durward Reynolds" },
    { id: 2, name: "Kenton Towne" },
    { id: 3, name: "Therese Wunsch" },
    { id: 4, name: "Benedict Kessler" },
    { id: 5, name: "Katelyn Rohan" },
];
const selectedPeople = ref([people[0], people[1]]);
</script>
