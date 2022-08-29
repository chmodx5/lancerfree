<script setup>
import Card from "./Card.vue";
import { ref } from "vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";

const categories = ref({
    Recent: [
        {
            id: 1,
            title: "Does drinking coffee make you smarter?",
            date: "5h ago",
            commentCount: 5,
            shareCount: 2,
        },
        {
            id: 2,
            title: "So you've bought coffee... now what?",
            date: "2h ago",
            commentCount: 3,
            shareCount: 2,
        },
    ],
    Popular: [
        {
            id: 1,
            title: "Is tech making coffee better or worse?",
            date: "Jan 7",
            commentCount: 29,
            shareCount: 16,
        },
        {
            id: 2,
            title: "The most innovative things happening in coffee",
            date: "Mar 19",
            commentCount: 24,
            shareCount: 12,
        },
    ],
    Trending: [
        {
            id: 1,
            title: "Ask Me Anything: 10 answers to your questions about coffee",
            date: "2d ago",
            commentCount: 9,
            shareCount: 5,
        },
        {
            id: 2,
            title: "The worst advice we've ever heard about coffee",
            date: "4d ago",
            commentCount: 1,
            shareCount: 2,
        },
    ],
});

defineProps({
    tabHeaders: Array,
});
</script>

<template>
    <div class="">
        <TabGroup>
            <TabList class="flex space-x-2 rounded-xl bg-primary p-1">
                <Tab
                    v-for="(tabHeader, index) in tabHeaders"
                    as="template"
                    :key="index"
                    v-slot="{ selected }"
                >
                    <button
                        :class="[
                            'inline-block capitalize  font-semibold px-4 rounded-lg py-2.5 text-sm leading-5 text-blue-700',
                            'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                            selected
                                ? 'bg-white shadow'
                                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
                        ]"
                    >
                        {{ tabHeader }}
                    </button>
                </Tab>
            </TabList>

            <TabPanels class="mt-2">
                <slot />
            </TabPanels>
        </TabGroup>
    </div>
</template>
