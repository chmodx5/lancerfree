<script setup>
import { SortSearch, AppTable, Pagination } from "..";
</script>

<template>
    <div class="space-y-4">
        <SortSearch />
        <AppTable
            :tableHeaders="['bids', 'current', 'completed', 'all', 'some']"
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
</template>
