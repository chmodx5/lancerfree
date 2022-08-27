<script setup>
import Card from "./Card.vue";
import PriceFilter from "./sidebar/PriceFilter.vue";
import LocationFilter from "./sidebar/LocationFilter.vue";
import SkillsFilter from "./sidebar/SkillsFilter.vue";
</script>

<template>
    <Card>
        <div class="divide-y divide-solid space-y-4">
            <h6 className="font-semibold text-lg ">Filters</h6>
            <PriceFilter />
            <SkillsFilter />
            <LocationFilter />
        </div>
    </Card>
</template>
