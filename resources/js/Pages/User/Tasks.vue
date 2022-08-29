<script setup>
import UserLayout from "./../../Layouts/UserLayout.vue";
import { AppTabs, Card, SortSearch, AppTable, Pagination } from "@/Components";
import { TabPanel } from "@headlessui/vue";
</script>
<template>
    <UserLayout>
        <AppTabs :tabHeaders="['bids', 'current ', 'completed ', 'all']">
            <TabPanel>
                <div class="space-y-4">
                    <SortSearch />
                    <AppTable
                        :tableHeaders="[
                            'bids',
                            'current',
                            'completed',
                            'all',
                            'some',
                        ]"
                        :tableData="[
                            {
                                Project: 'bids',
                                'Total Bids': 'bids',
                                'Average Bids': 'dfas',
                                'My Bids': 'dfas',
                                Outcome: 'dfas',
                            },
                            {
                                Project: 'two',
                                'Total Bids': 'bids',
                                'Average Bids': 'dfas',
                                'My Bids': 'dfas',
                                Outcome: 'dfas',
                            },
                        ]"
                    />
                    <Pagination />
                </div>
            </TabPanel>
            <TabPanel>
                <div class="space-y-4">
                    <SortSearch />
                    <AppTable
                        :tableHeaders="[
                            'bids',
                            'current',
                            'completed',
                            'all',
                            'some',
                        ]"
                        :tableData="[
                            {
                                Project: 'bids',
                                'Total Bids': 'bids',
                                'Average Bids': 'dfas',
                                'My Bids': 'dfas',
                                Outcome: 'dfas',
                            },
                            {
                                Project: 'two',
                                'Total Bids': 'bids',
                                'Average Bids': 'dfas',
                                'My Bids': 'dfas',
                                Outcome: 'dfas',
                            },
                        ]"
                    />
                    <Pagination />
                </div>
            </TabPanel>
            <TabPanel>
                <div class="space-y-4">
                    <SortSearch />
                    <AppTable
                        :tableHeaders="[
                            'bids',
                            'current',
                            'completed',
                            'all',
                            'some',
                        ]"
                        :tableData="[
                            {
                                Project: 'bids',
                                'Total Bids': 'bids',
                                'Average Bids': 'dfas',
                                'My Bids': 'dfas',
                                Outcome: 'dfas',
                            },
                            {
                                Project: 'two',
                                'Total Bids': 'bids',
                                'Average Bids': 'dfas',
                                'My Bids': 'dfas',
                                Outcome: 'dfas',
                            },
                        ]"
                    />
                    <Pagination />
                </div>
            </TabPanel>
            <TabPanel>
                <div class="space-y-4">
                    <SortSearch />
                    <AppTable
                        :tableHeaders="[
                            'bids',
                            'current',
                            'completed',
                            'all',
                            'some',
                        ]"
                        :tableData="[
                            {
                                Project: 'bids',
                                'Total Bids': 'bids',
                                'Average Bids': 'dfas',
                                'My Bids': 'dfas',
                                Outcome: 'dfas',
                            },
                            {
                                Project: 'two',
                                'Total Bids': 'bids',
                                'Average Bids': 'dfas',
                                'My Bids': 'dfas',
                                Outcome: 'dfas',
                            },
                        ]"
                    />
                    <Pagination />
                </div>
            </TabPanel>
        </AppTabs>
    </UserLayout>
</template>
